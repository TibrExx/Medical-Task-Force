import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { throws } from "assert";
import stepFormProps from "./Models";

class PersonalDetails extends Component<stepFormProps, {}> {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    return (
      <Form color="blue">
        <h1 className="ui centered">Weitere Kontaktdaten</h1>
        <Form.Field>
          <label>Alter</label>
          <input
            placeholder="Alter"
            onChange={this.props.handleChange("age")}
            defaultValue={values.age}
          />
        </Form.Field>
        <Form.Field>
          <label>Stadt</label>
          <input
            placeholder="Stadt"
            onChange={this.props.handleChange("city")}
            defaultValue={values.city}
          />
        </Form.Field>
        <Form.Field>
          <label>Land</label>
          <input
            placeholder="Land"
            onChange={this.props.handleChange("country")}
            defaultValue={values.country}
          />
        </Form.Field>
        <Button onClick={this.back}>Zurück</Button>
        <Button onClick={this.saveAndContinue}>Speichern und weiter</Button>
      </Form>
    );
  }
}
export default PersonalDetails;
