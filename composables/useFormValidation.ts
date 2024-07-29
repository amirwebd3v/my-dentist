// composables/useFormValidation.ts

import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import type { InferType } from 'yup'
import type {ContactUsStoreRequest} from '~/utils/types'


export function useFormValidation() {
    const schema = yup.object({
        full_name: yup.string()
            .required('نام و نام خانوادگی الزامی است'),
        mobile: yup.string()
            .matches(/^09\d{9}$/, 'شماره موبایل نامعتبر است')
            .optional(),
        email: yup.string()
            .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'ایمیل نامعتبر است')
            .required('ایمیل الزامی است')
            .email('ایمیل نامعتبر است'),
        message: yup.string()
            .required('متن پیام الزامی است')
            .matches(/^.{0,10}$/, 'متن پیام نباید کمتر از 10 حرف باشد'),
        first_name: yup.string()
            .required('نام الزامی است'),
        last_name: yup.string()
            .required('نام خانوادگی الزامی است'),
        reserveMobile: yup.string()
            .required('شماره تلفن همراه الزامی است')
            .matches(/^09\d{9}$/, 'شماره تلفن همراه نامعتبر است'),
        reserveEmail: yup.string()
            .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'ایمیل نامعتبر است')
            .email('ایمیل نامعتبر است')
            .optional(),
        age: yup.string()
            .required('سن الزامی است')
            .matches(/^([1-9][0-9]|10[0-9]|110)$/, 'عدد سن نامعتبر است'),
        service: yup.array()
            .of(yup.string())
            .required('انتخاب حداقل یک سرویس الزامی است')
            .min(1, 'حداقل یک سرویس باید انتخاب شود')
            .max(2,'حداکثر دو سرویس باید انتخاب شود'),
        description: yup.string()
            .matches(/^.{10,}$/, 'متن توضیحات نباید کمتر از 10 حرف باشد')
            .optional(),
    })

    type FormSchema = InferType<typeof schema>

    const { handleSubmit, errors,resetForm } = useForm<FormSchema>({
        validationSchema: schema,
    })

    const { value: full_name } = useField<string>('full_name')
    const { value: mobile } = useField<string>('mobile')
    const { value: email } = useField<string>('email')
    const { value: message } = useField<string>('message')
    const { value: first_name } = useField<string>('first_name')
    const { value: last_name } = useField<string>('last_name')
    const { value: reserveMobile } = useField<string>('reserveMobile')
    const { value: reserveEmail } = useField<string>('reserveEmail')
    const { value: age } = useField<string>('age')
    const { value: service } = useField<string[]>('service')
    const { value: description } = useField<string>('description')

    const onSubmit = handleSubmit((values: ContactUsStoreRequest) => {
        // Handle form submission
        console.log(values)
    })

    const clearErrors = () => {
        resetForm({ errors: {},values: {} })
    }

    return {
        onSubmit,
        clearErrors,
        full_name,
        mobile,
        email,
        message,
        errors,
        first_name,
        last_name,
        reserveMobile,
        reserveEmail,
        age,
        service,
        description,
    }
}