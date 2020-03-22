import React, {Component} from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import stepFormProps from "./Models";

interface Qualifiaction {
    key: string,
    text: string,
    value: string
}

export const qualifications: Qualifiaction[] = [
    {key: 'geriaticNurse', text: 'Altenpfleger/in', value: 'NURSE'},
    {key: 'geriaticNurseHelper', text: 'Altenpflegehelfer/in', value: 'NURSING_ASSISTANT'},
    {key: 'doctor', text: 'Arzt', value: 'OTHER'},
    {key: 'healthGeriaticNurse', text: 'Gesundheits- und Krankenpfleger/in', value: 'NURSE'},
    {
        key: 'healtGeriaticNurseHelper',
        text: 'Gesundheits- und Krankenpflegehelfer/in',
        value: 'NURSING_ASSISTANT'
    },
    {key: 'midwife', text: 'Hebamme', value: 'OTHER'},
    {key: 'healthNurse', text: 'Heilerziehungspfleger/in', value: 'OTHER'},
    {key: 'medicalWorker', text: 'Medizinische Fachangestellte', value: 'MEDICAL_ASSISTANT'},
    {key: 'emergencyParamedic', text: 'Notfallsanitäter/in', value: 'PARAMEDIC'},
    {key: 'technicalAssistant', text: 'Operationstechnischer Assistent/in', value: 'OTHER'},
    {key: 'paramedicAssistant', text: 'Rettungsassistent', value: 'PARAMEDIC'},
    {key: 'paramedic', text: 'Rettungssanitäter/in', value: 'EMT'},
    {key: 'emergencyHelper', text: 'Rettungshelfer', value: 'EMT'},




];

export interface SignUpFormState {
    step: number,
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    city: string,
    country: string,
    phoneNumber: number,
    qualification: Qualifiaction,
    lastTimeActive: Date,
    description: string,
    hasCar: boolean,

};

class SignUpForm extends Component<stepFormProps, SignUpFormState> {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        city: "",
        country: "",
        phoneNumber: 1,
        qualification: undefined,
        lastTimeActive: new Date(),
        description: "",
        hasCar: true
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = (input: any) => (event, dropDown) => {
        const newState = this.state
        if (dropDown) {
            newState[input] = dropDown.value
        } else {
            newState[input] = event.target.value
        }
        console.log(`setting ${input} to ${newState[input]}`)
        this.setState(newState);
    };

    render() {
        const {step} = this.state;
        const {firstName, lastName, email, age, city, country, phoneNumber, qualification, lastTimeActive, description, hasCar} = this.state;
        const values = {
            firstName,
            lastName,
            email,
            age,
            city,
            country,
            phoneNumber,
            qualification,
            lastTimeActive,
            description,
            hasCar
        };
        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <PersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <Confirmation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4:
                return <Success/>;
        }
    }
}

export default SignUpForm;
