export default function usePersianNumber () {



    const digits = (number: string | number) => {
       return  new Intl.NumberFormat('fa-IR', { useGrouping: false }).format(Number(number))
    }

    const formattedNumber = (number: string | number) => {
        if (Number(number).toString()?.startsWith('0') && Number(number).toString() !== '0') {
            return  '۰' + digits(number)
        }
        return digits(number)
    }

    const formattedPhoneNumber =  (number: string | number) => {
        return  '۰' + `${digits(number).slice(0, 2)}-${digits(number).slice(3, 7)}-${digits(number).slice(6)}`
    }


    return {
        formattedNumber,
        formattedPhoneNumber
    }
}


