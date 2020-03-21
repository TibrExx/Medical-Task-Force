import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import stepFormProps from "./Models";


type SignUpFormState = {
  step: number,
  firstName: string,
  lastName: string,
  email: string,
  age: string,
  city: string,
  country: string
};

class SignUpForm extends Component<stepFormProps, SignUpFormState> {
  state = {
    step: 1
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    city: "",
    country: ""
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

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, age, city, country } = this.state;
    const values = { firstName, lastName, email, age, city, country };
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
