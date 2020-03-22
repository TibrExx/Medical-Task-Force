# Medical-Task-Force

## Techstack
* Java 8
* Spring Boot
* React JS
* Typescrypt
* PostgreSQL

## Links / Resource
* Devpost: https://devpost.com/software/0834-medizinischespersonalverwaltung-spaceboys
* Concept: https://docs.google.com/document/d/1JrAlGroRg-9DPVxBYAVujtADHT-ZkzVZr2Epb-70xac/edit#
* Slack: #spaceboys
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
