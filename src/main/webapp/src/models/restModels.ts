import {SignUpFormState} from "../components/SignUpForm";

export interface Volunteer {
    forename: string
    surname: string
}


export function toRestModel(signUpFormState: SignUpFormState): Volunteer {
    return {
        forename: "",
        surname: ""
    }
}
