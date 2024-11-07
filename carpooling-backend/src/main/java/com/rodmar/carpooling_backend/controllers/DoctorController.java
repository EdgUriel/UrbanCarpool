package com.rodmar.carpooling_backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.rodmar.carpooling_backend.repositories.DoctorRepository;
import com.rodmar.carpooling_backend.entities.doctor;

import java.util.List;

@RestController
public class DoctorController {

    @Autowired
    private DoctorRepository doctoRepository;

    @GetMapping("/doctor")
    public List<doctor> getAllDoctos() {
        return doctoRepository.findAll();
    }
}
