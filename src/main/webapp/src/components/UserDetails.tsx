import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import stepFormProps from "./Models";

class UserDetails extends Component<stepFormProps, {}> {

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
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}
export default UserDetails;
