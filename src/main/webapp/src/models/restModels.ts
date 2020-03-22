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
    languages?: string[],
    googleId: string
}


export function toRestModel(signUpFormState: SignUpFormState, googleId: string): Volunteer {
    console.log("formState: " + signUpFormState)
    const result =  {
        zipCode: signUpFormState.zipCode,
        surname: signUpFormState.lastName,
        forename: signUpFormState.firstName,
        qualification: signUpFormState.qualification?.toString(),
        lastTimeActive: "2020-03-22",
        mailAddress: signUpFormState.email,
        hasCar: signUpFormState.hasCar,
        googleId: googleId
    }
    console.log("volunteer: "+JSON.stringify(result))

    return result
}


