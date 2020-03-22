#!/usr/bin/env bash
cd ./src/main/webapp
npm install
npm run build
cp -r ./build/ ../resources/static
cd ../../../
./gradlew bootJar
./gradlew bootRun --args='--spring.profiles.active=local-secret'
