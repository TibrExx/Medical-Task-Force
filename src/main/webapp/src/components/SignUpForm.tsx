import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import stepFormProps from "./Models";

const qualifications = [
      { key: 'geriaticNurse', text: 'Altenpfleger/in', value: 'geriaticNurse' },
      { key: 'geriaticNurseHelper', text: 'Altenpflegehelfer/in', value: 'geriaticNurseHelper' },
      { key: 'doctor', text: 'Arzt', value: 'doctor' },
      { key: 'healthGeriaticNurse', text: 'Gesundheits- und Krankenpfleger/in', value: 'healthGeriaticNurse' },
      { key: 'healtGeriaticNurseHelper', text: 'Gesundheits- und Krankenpflegehelfer/in', value: 'healtGeriaticNurseHelper' },
      { key: 'midwife', text: 'Hebamme', value: 'midwife' },
      { key: 'healthNurse', text: 'Heilerziehungspfleger/in', value: 'healthNurse' },
      { key: 'medicalWorker', text: 'Medizinische Fachangestellte', value: 'medicalWorker' },
      { key: 'emergencyParamedic', text: 'Notfallsanitäter/in', value: 'emergencyParamedic' },
      { key: 'technicalAssistant', text: 'Operationstechnischer Assistent/in', value: 'technicalAssistant' },
      { key: 'paramedicAssistant', text: 'Rettungsassistent', value: 'paramedicAssistant' },
      { key: 'paramedic', text: 'Rettungssanitäter/in', value: 'paramedic' },
      { key: 'emergencyHelper', text: 'Rettungshelfer', value: 'emergencyHelper' },
      ];

export interface SignUpFormState  {
  step: number,
  firstName: string,
  lastName: string,
  email: string,
  age: string,
  city: string,
  country: string,
  phoneNumber: number,
  qualification: {qualifications},
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
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = (input: any) => event => {
      const newState = this.state
      newState[input] = event.target.value
      this.setState(newState);
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, age, city, country, phoneNumber, qualification, lastTimeActive, description, hasCar } = this.state;
    const values = { firstName, lastName, email, age, city, country, phoneNumber, qualification, lastTimeActive, description, hasCar };
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
        return <Success />;
    }
  }
}
export default SignUpForm;
