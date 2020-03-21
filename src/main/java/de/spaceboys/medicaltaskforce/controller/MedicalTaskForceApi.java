package de.spaceboys.medicaltaskforce.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MedicalTaskForceApi {

    @GetMapping("/")
    public String hello() {
        return "hello";
    }
}
