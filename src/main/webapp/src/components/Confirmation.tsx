import React, {Component} from "react";
import {Button, List} from "semantic-ui-react";
import stepFormProps from "./Models";
import axios from 'axios';
import {apiUrl, apiUrlLocal, basePath} from "../config";
import {SignUpFormState} from "./SignUpForm";
import {toRestModel} from "../models/restModels";

class Confirmation extends Component<stepFormProps, {}> {

    saveAndContinue = async e => {
        e.preventDefault();

        const signUpFormState: SignUpFormState = this.props.values
        console.log(signUpFormState)
        console.log("pasting to: " + `${apiUrl}${basePath}/volunteers`)
        // api call
        const result = await axios.post(
            `${apiUrl}${basePath}/volunteers`, toRestModel(signUpFormState)
        );
        console.log(JSON.stringify(result))

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
                <h1 className="ui centered">Eingaben bestätigen</h1>
                <p>
                    Klick auf "Bestätigen" wenn deine Daten richtig sind
                </p>
                <List>
                    <List.Item>
                        <List.Icon name="users"/>
                        <List.Content>Vorname: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="users"/>
                        <List.Content>Nachname: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="mail"/>
                        <List.Content>
                            <a href="mailto:jack@semantic-ui.com">{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="calendar"/>
                        <List.Content>{age} Jahre</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="marker"/>
                        <List.Content>
                            {city}, {country}
                        </List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Zurück</Button>
                <Button onClick={this.saveAndContinue}>Bestätigen</Button>
            </div>
        );
    }
}

export default Confirmation;
