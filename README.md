# Medical-Task-Force

## The idea
We want to provide a country level ready solution to collect volunteers with medical education who want to help out during the current medical crisis.

## The approach
In order to have low barriers, creating a webpage with social media login seems to be the best approach.
Using standard frameworks and toolsets allows further development with rapid progress.
The API approach allows also to completely exchange the frontend layer or provide support for native appls (iOs/Android)

## Status
The current status to the end of the official hackathon is a webpage with google oauth to register volunteers and save them to a database.
Also there is a search form that allows filtering of the results to allow hospitals to get in touch with volunteers.

## Outlook
There are many potential features that can be added like map view, distance matching, native apps and more.
It is important not to have too many feature but bring the solution online as soon as possible.

Of course, in order to bring this solution to a production ready state, some adaptions are needed like externalize state (session),
use a caching layer in front of the database and similar.

## Techstack
* Java 8
* Spring Boot
* React JS
* Typescrypt
* PostgreSQL

## Links / Resource
* Devpost: https://devpost.com/software/0834-medizinischespersonalverwaltung-spaceboys
* Concept: https://docs.google.com/document/d/1JrAlGroRg-9DPVxBYAVujtADHT-ZkzVZr2Epb-70xac/edit#
* Slack: #spaceboys (closed)
* Twitter: #spaceboys #medicalreserve
* Github: https://github.com/TibrExx/Medical-Task-Force

## Testinstance
* http://prod.eba-pipszcdb.eu-central-1.elasticbeanstalk.com/
* AWS account
* * ID: 198891906952
* * Name: wirvsvirus-spaceboys
* * credential -> @Andreas Voit

## Start app
* create postgres via docker`docker run --name postgres -e POSTGRES_PASSWORD=pass -e POSTGRES_USER=postgres -e POSTGRES_DB=volunteers -p 5432:5432 postgres`

* run `./gradlew bootRun --args='--spring.profiles.active=local'`

## Use api
* Either get json definition via `${app-host}/v3/api-docs`
* Or use the integrated swagger-ui `${app-host}/swagger-ui.html`

## Beanstalk deplyoment
* set aws profile `eb-cli` and post aws access key and secret for
* run `deploy-beanstalk.sh` script
