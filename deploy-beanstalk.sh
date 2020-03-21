#!/usr/bin/env bash
cd ./src/main/webapp
npm install
npm run build
cp -r ./build/ ../resources/static
cd ../../../
./gradlew bootJar
eb deploy prod
