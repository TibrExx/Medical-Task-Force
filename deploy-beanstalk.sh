#!/usr/bin/env bash
./gradlew bootJar

eb deploy prod
