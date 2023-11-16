import {toPersianNumber} from "assets/ts/globalFunctions";



export default defineNuxtPlugin(() => {
    return {
        provide : {
            persianNumber : toPersianNumber,
        }
    }
})
