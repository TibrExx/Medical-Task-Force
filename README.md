# Medical-Task-Force

## Techstack
* Java 8
* Spring Boot
* React JS
* Typescrypt
* PostgreSQL

## Links / Resource
* https://devpost.com/software/0834-medizinischespersonalverwaltung-spaceboys
* https://docs.google.com/document/d/1JrAlGroRg-9DPVxBYAVujtADHT-ZkzVZr2Epb-70xac/edit#
* Slack: #spaceboys
* Twitter: #spaceboys #medicalreserve

## Testinstance
* http://prod.eba-pipszcdb.eu-central-1.elasticbeanstalk.com/

## Start app
* create `postgres via docker docker run --name postgres -e POSTGRES_PASSWORD=pass -e POSTGRES_USER=postgres -e POSTGRES_DB=volunteers -p 5432:5432 postgres`
* run `./gradlew bootRun`
