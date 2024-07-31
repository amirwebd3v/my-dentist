// composables/useFormValidation.ts

import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'


export function useFormValidation(requiredFields: string[]) {
    const schema = yup.object({
        mobile: yup.string()
            .nullable()
            .transform((value, originalValue) => originalValue === "" ? null : value)
            .test('mobile-format', 'شماره موبایل نامعتبر است', val => {
                if (val === null || val === undefined) return true;
                return /^09\d{9}$/.test(val);
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
                val === null || val === undefined || val.length >= 10)
            .optional(),
        /**************************************/
        full_name: yup.string()
            .required('نام و نام خانوادگی الزامی است')
            .min(6, 'نام و نام خانوادگی باید حداقل ۶ حرف باشد')
            .trim(),
        email: yup.string()
            .matches(
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'ایمیل نامعتبر است')
            .required('ایمیل الزامی است')
            .email('ایمیل نامعتبر است'),
        message: yup.string()
            .required('متن پیام الزامی است')
            .matches(/^.{10,}$/, 'متن پیام نباید کمتر از ۱۰ حرف باشد'),
        first_name: yup.string()
            .required('نام الزامی است')
            .min(3, 'نام باید حداقل ۳ حرف باشد')
            .trim(),
        last_name: yup.string()
            .required('نام خانوادگی الزامی است')
            .min(3, 'نام خانوادگی باید حداقل ۳ حرف باشد')
            .trim(),
        reserveMobile: yup.string()
            .required('شماره تلفن همراه الزامی است')
            .matches(/^09\d{9}$/, 'شماره تلفن همراه نامعتبر است'),
        age: yup.string()
            .required('سن الزامی است')
            .matches(/^([1-9][0-9]|10[0-9]|110)$/, 'عدد سن نامعتبر است'),
        service: yup.array()
            .of(yup.string())
            .required('انتخاب حداقل یک سرویس الزامی است')
            .min(1, 'حداقل یک سرویس باید انتخاب شود')
            .max(2, 'حداکثر دو سرویس باید انتخاب شود'),
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