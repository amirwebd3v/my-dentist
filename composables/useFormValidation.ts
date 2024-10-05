import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import type {Ref} from "vue";
import type {StoreDefinition} from "pinia";


export function useFormValidation(requiredFields: string[] = [], store: StoreDefinition) {

    const schema = yup.object({
        mobile: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('mobile', 'شماره تلفن همراه نامعتبر است', val => {
                if (val === null || val === undefined) {
                    return true;
                }
                const cleanedVal = val.replace(/-/g, '');
                return /^۰۹[۰-۹]{9}$/.test(cleanedVal);
            }),
        description: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('description', 'متن توضیحات نباید کمتر از ۱۰ حرف باشد', val =>
                val === null || val === undefined || val.length >= 10),
        /**************************************/
        full_name: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('full-name', 'نام و نام خانوادگی باید حداقل ۶ حرف باشد', val =>
                val === null || val === undefined || (val.trim().length >= 6)
            ),

        email: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('email', 'ایمیل نامعتبر است', val => {
                if (val === null || val === undefined) return true;
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return emailRegex.test(val);
            }),

        content: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('content', 'متن پیام نباید کمتر از ۱۰ حرف باشد', val =>
                val === null || val === undefined || val.length >= 10
            ),

        first_name: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('first_name', 'نام باید حداقل ۳ حرف باشد', val =>
                val === null || val === undefined || (val.trim().length >= 3)
            ),

        last_name: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('lastـname', 'نام خانوادگی باید حداقل ۳ حرف باشد', val =>
                val === null || val === undefined || (val.trim().length >= 3)
            ),

        age: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('age', 'عدد سن حداقل ۱۰ و حداکثر ۱۱۰ میتواند باشد', val =>
                val === null || val === undefined || /^([۱-۹][۰-۹]|۱۰[۰-۹]|۱۱۰)$/.test(val)
            ),

        service: yup.array()
            .nullable()
            .transform((value, originalValue) => originalValue && originalValue.length === 0 ? null : value)
            .test('service', 'انتخاب حداقل یک و حداکثر دو سرویس الزامی است', val =>
                val === null || val === undefined || (val.length >= 1 && val.length <= 2)
            ),

    })

    type FormSchema = yup.InferType<typeof schema>

    const {handleSubmit, errors, resetForm, values} = useForm<FormSchema>({
        validationSchema: schema,
    })


    const fields = {
        full_name: useField<string>('full_name'),
        mobile: useField<string>('mobile'),
        email: useField<string>('email'),
        content: useField<string>('content'),
        first_name: useField<string>('first_name'),
        last_name: useField<string>('last_name'),
        age: useField<string>('age'),
        service: useField<string[]>('service'),
        description: useField<string>('description')
    }

    const loading: Ref<Boolean> = ref(false)
    const isSucceeded: Ref<Boolean> = ref(false)

    const onSubmit = handleSubmit(async (values) => {
        isSucceeded.value = false;
        loading.value = true;


        try {
            const nonEmptyValues = Object.fromEntries(
                Object.entries(values).filter(([_, value]) => {
                    if (value === null || value === undefined) return false;
                    if (typeof value === 'string' && value.trim() === '') return false;
                    if (Array.isArray(value) && value.length === 0) return false;
                    return !(typeof value === 'object' && Object.keys(value).length === 0);
                })
            );


            // Debugging: Log types and values
            console.log('Filtered nonEmptyValues:');
            Object.entries(nonEmptyValues).forEach(([key, value]) => {
                console.log(`${key}:`, value, `(type: ${typeof value})`);

                // Additional type checking for specific fields if needed
                if (key === 'age') {
                    console.log(`Is age a number?`, Number.isInteger(value));
                }
                // Add more specific checks for other fields as needed
            });


            const storeInstance = store();
            if (typeof storeInstance.store === 'function') {
                const response = await storeInstance.store(nonEmptyValues);
                console.log('API Response:', response);
            } else {
                throw new Error(`'post' action not found in the store`);
            }

            clearErrors();
            isSucceeded.value = true;
        } catch (error) {
            console.error('An error occurred during form submission:', error);
            // Handle error (e.g., set error messages)
        } finally {
            loading.value = false;
        }
    });

    const clearErrors = () => {
        resetForm({errors: {}, values: {}})
    }

    const hasErrors = computed(() => Object.keys(errors.value).length > 0)
    const hasValues = computed(() => {
        return requiredFields.every(field => {
            const value = values[field as keyof typeof values];
            return Array.isArray(value)
                ? value.length > 0
                : value !== undefined && value !== '';
        });
    });


    return {
        hasErrors,
        hasValues,
        onSubmit,
        loading,
        isSucceeded,
        clearErrors,
        errors,
        ...Object.fromEntries(Object.entries(fields).map(([key, field]) => [key, field.value]))
    }
}