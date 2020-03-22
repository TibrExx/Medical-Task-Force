import {SignUpFormState} from "../components/SignUpForm";

export interface Volunteer {
    zipCode: number,
    streetName?: number
    number?: number
    surname: string,
    forename: string,
    qualification: string,
    lastTimeActive: string,
    description?: string,
    mailAddress: string,
    phoneNumer?: string
    hasCar: boolean,
    licenseClasses?: any,
    languages?: string[]
}


export function toRestModel(signUpFormState: SignUpFormState): Volunteer {
    console.log("formState: " + signUpFormState)

    return {
        zipCode: 0,
        surname: signUpFormState.lastName,
        forename: signUpFormState.firstName,
        qualification: signUpFormState.qualification?.toString(),
        lastTimeActive: signUpFormState.lastTimeActive?.toString(),
        mailAddress: signUpFormState.email,
        hasCar: signUpFormState.hasCar
    }
}
