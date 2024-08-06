import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'


export function useFormValidation(requiredFields: string[] = []) {
    const schema = yup.object({
        mobile: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('reserve-mobile', 'شماره تلفن همراه نامعتبر است', val => {
                if (val === null || val === undefined) {
                    return true;
                }
                const cleanedVal = val.replace(/-/g, '');
                return /^۰۹[۰-۹]{9}$/.test(cleanedVal);
            })
            .optional(),
        reserveEmail: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('email-format', 'ایمیل نامعتبر است', val => {
                if (val === null || val === undefined) return true;
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return emailRegex.test(val);
            })
            .optional(),
        description: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('len', 'متن توضیحات نباید کمتر از ۱۰ حرف باشد', val =>
                val === null || val === undefined || val.length >= 10 || val.length <= 500)
            .optional(),
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
            .test('email-format', 'ایمیل نامعتبر است', val => {
                if (val === null || val === undefined) return true;
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return emailRegex.test(val);
            }),

        message: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('message-length', 'متن پیام نباید کمتر از ۱۰ حرف باشد', val =>
                val === null || val === undefined || val.length >= 10
            ),

        first_name: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('first-name', 'نام باید حداقل ۳ حرف باشد', val =>
                val === null || val === undefined || (val.trim().length >= 3)
            ),

        last_name: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('last-name', 'نام خانوادگی باید حداقل ۳ حرف باشد', val =>
                val === null || val === undefined || (val.trim().length >= 3)
            ),

        reserveMobile: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('reserve-mobile', 'شماره تلفن همراه نامعتبر است', val => {
                if (val === null || val === undefined) {
                    return true;
                }
                const cleanedVal = val.replace(/-/g, '');
                return /^۰۹[۰-۹]{9}$/.test(cleanedVal);
            }),

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
        message: useField<string>('message'),
        first_name: useField<string>('first_name'),
        last_name: useField<string>('last_name'),
        reserveMobile: useField<string>('reserveMobile'),
        reserveEmail: useField<string>('reserveEmail'),
        age: useField<string>('age'),
        service: useField<string[]>('service'),
        description: useField<string>('description')
    }


    const onSubmit = handleSubmit((values: object) => {
        // Handle form submission
        console.log(values)
    })

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
        clearErrors,
        errors,
        ...Object.fromEntries(Object.entries(fields).map(([key, field]) => [key, field.value]))
    }
}