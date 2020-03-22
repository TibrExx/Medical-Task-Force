import {SignUpFormState} from "../components/SignUpForm";

export interface Volunteer {
    zipCode: number,
    surname: string,
    forename: string,
    qualification: string,
    lastTimeActive: string,
    mailAddress: string,
    hasCar: boolean
}


export function toRestModel(signUpFormState: SignUpFormState): Volunteer {
    return {
        zipCode: 0,
        surname: signUpFormState.lastName,
        forename: signUpFormState.firstName,
        qualification: signUpFormState.qualification,
        lastTimeActive: signUpFormState.lastTimeActive.toString(),
        mailAddress: signUpFormState.email,
        hasCar: signUpFormState.hasCar
    }
}
