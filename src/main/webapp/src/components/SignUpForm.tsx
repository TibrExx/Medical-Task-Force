import React from 'react'
import {Survey} from 'survey-react';
import Typography from "@material-ui/core/Typography";

function sendDataToServer(survey: any) {
  //send Ajax request to your web server.
  alert("The results are:" + JSON.stringify(survey.data));
}

const surveyJson = {
  "pages": [
    {
      "name": "page1",
      "elements": [
        {
          "type": "dropdown",
          "name": "Berufung",
          "hasOther": true,
          "choices": [
            {
              "value": "item1",
              "text": "Altenpfleger/in"
            },
            {
              "value": "item2",
              "text": "Altenpflegehelfer/in"
            },
            {
              "value": "item3",
              "text": "Arzt"
            },
            {
              "value": "item4",
              "text": "Gesundheits- und Krankenpflegehelfer/in"
            },
            {
              "value": "item5",
              "text": "Gesundheits- und Kinderkrankenpfleger/in"
            },
            {
              "value": "item6",
              "text": "Gesundheits- und Krankenpfleger/in"
            },
            {
              "value": "item7",
              "text": "Hebamme"
            },
            {
              "value": "item8",
              "text": "Heilerziehungspfleger/in"
            },
            {
              "value": "item10",
              "text": "Notfallsanitäter/in"
            },
            {
              "value": "item11",
              "text": "Operationstechnischer Assistent/in "
            },
            {
              "value": "item12",
              "text": "Rettungsassistent/in"
            },
            {
              "value": "item13",
              "text": "Rettungssanitäter/in"
            },
            {
              "value": "item14",
              "text": "Rettungshelfer"
            }
          ],
          "otherText": "Andere"
        },
        {
          "type": "text",
          "name": "Andere Berufung",
          "visible": false,
          "visibleIf": "{Berufung} = 'other'"
        },
        {
          "type": "text",
          "name": "Zuletzt ausgeübt am",
          "inputType": "date"
        },
        {
          "type": "matrix",
          "name": "Verfügbarkeit",
          "columns": [
            {
              "value": "available",
              "text": "Verfügbar"
            },
            {
              "value": "notAvailable",
              "text": "Nicht verfügbar"
            }
          ],
          "rows": [
            "1-2 Dienste/Woche",
            "2-5 Dienste/Woche",
            "Wochenendienst",
            "Fahrzeug"
          ]
        }
      ],
      "title": "Qualifikation und Verfügbarkeit"
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "text",
          "name": "Vorname",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "Nachname",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "question3",
          "title": "Email",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "Telefonnummer",
          "isRequired": true,
          "inputType": "tel"
        },
        {
          "type": "text",
          "name": "Postleitzahl",
          "isRequired": true,
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "Adresse"
        }
      ],
      "title": "Kontaktdaten"
    }
  ]
};

const SignUpForm = () => {
  return(
    <div>
      <Typography variant="h5" component="h1" paragraph={true} gutterBottom>
        Registrier dich jetzt und helfe:
      </Typography>
      <div id="survey" />
      <Survey json={surveyJson} onComplete={sendDataToServer}  />
    </div>
  )
};

export default SignUpForm;
