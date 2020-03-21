import React, {Component} from "react";
import {Button, List} from "semantic-ui-react";
import stepFormProps from "./Models";
import axios from 'axios';
import {apiUrl, basePath} from "../config";


class Confirmation extends Component<stepFormProps, {}> {

    saveAndContinue = async e => {
        e.preventDefault();

        const postBody = this.props.values
        console.log(postBody)
        // api call
        // const result = await axios.post(
        //     `${apiUrl}${basePath}/volunteers`, postBody
        // );

        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: {firstName, lastName, email, age, city, country}
        } = this.props;
        return (
            <div>
                <h1 className="ui centered">Confirm your Details</h1>
                <p>
                    Click Confirm if the following details have been correctly entered
                </p>
                <List>
                    <List.Item>
                        <List.Icon name="users"/>
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="users"/>
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="mail"/>
                        <List.Content>
                            <a href="mailto:jack@semantic-ui.com">{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="calendar"/>
                        <List.Content>{age} Years</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="marker"/>
                        <List.Content>
                            {city}, {country}
                        </List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
        );
    }
}

export default Confirmation;
