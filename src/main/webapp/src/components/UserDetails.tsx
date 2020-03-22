import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import stepFormProps from "./Models";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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


class UserDetails extends Component<stepFormProps, {}> {

state = {
    startDate: new Date()
  };

      handleDateChange = date => {
        this.setState({
          startDate: date
        });
      };

  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {

    const { values } = this.props;
    return (
      <Form>
        <h1 className="ui centered">Enter User Details</h1>
        <Form.Field>
          <label>First Name</label>
          <input type="text"
            placeholder="First Name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input type="text"
            placeholder="Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </Form.Field>
        <Form.Field>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email Address"
            onChange={this.props.handleChange("email")}
            defaultValue={values.email}
          />
        </Form.Field>
        <Form.Field>
            <label>Telefonnummer</label>
            <input
            //todo: lookup type for phonenumber
              type="text"
              placeholder="Phone Number"
              onChange={this.props.handleChange("phoneNumber")}
              defaultValue={values.phoneNumber}
          />
         </Form.Field>
         <Form.Select
              label="Berfufung"
              type="dropdown"
              options = {qualifications}
              placeholder = 'Berufung'
              onChange={this.props.handleChange("qualification")}
             >
          </Form.Select>
          <Form.TextArea
                label='Beschreibung'
                placeholder='Füg etwas zu deiner Berufung hinzu falls du möchtest...'
                onChange={this.props.handleChange("description")}
                />

             <Form.Field>
                      <label>Zuletzt ausgeübt am</label>
                       <DatePicker
                            onChange={this.handleDateChange}
                            selected={this.state.startDate}
                            />
                    </Form.Field>

          <Form.Checkbox label='Auto vorhanden' onChange = {this.props.handleChange("hasCar")} />


        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}
export default UserDetails;
