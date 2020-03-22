import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import stepFormProps from "./Models";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {qualifications} from "./SignUpForm";



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
        <h1 className="ui centered">Kontaktdaten</h1>
        <Form.Field>
          <label>Vorname</label>
          <input type="text"
            placeholder="First Name"
            onChange={this.props.handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Nachname</label>
          <input type="text"
            placeholder="Last Name"
            onChange={this.props.handleChange("lastName")}
            defaultValue={values.lastName}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
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
              label="Beruf"
              type="dropdown"
              options = {qualifications}
              placeholder = 'Beruf'
              onChange={this.props.handleChange("qualification")}
             >
          </Form.Select>
          <Form.TextArea
                label='Beschreibung'
                placeholder='Füg etwas zu deinem Beruf hinzu falls du möchtest...'
                onChange={this.props.handleChange("description")}
                />

             <Form.Field>
                      <label>Zuletzt ausgeübt am</label>
                       <DatePicker
                            onChange={this.handleDateChange}
                            dateFormat='dd/MM/yyyy'
                            selected={this.state.startDate}
                            />
                    </Form.Field>

          <Form.Checkbox label='Auto vorhanden' onChange = {this.props.handleChange("hasCar")} />
        <Button onClick={this.saveAndContinue}>Speichern und weiter </Button>
      </Form>
    );
  }
}
export default UserDetails;
