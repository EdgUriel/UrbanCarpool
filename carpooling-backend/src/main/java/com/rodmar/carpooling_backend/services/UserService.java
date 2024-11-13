package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.entities.User;
import com.rodmar.carpooling_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        if (user.getFirstName() == null || user.getLastName() == null || user.getEmail() == null || user.getPassword() == null) {
            throw new IllegalArgumentException("Todos los campos obligatorios deben ser proporcionados");
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("El email ya existe");
        }

        user.setCreatedAt(LocalDateTime.now());

        if (user.getRole() == null) {
            user.setRole("passenger");
        }
        // Asignar valores por defecto si faltan
        if (user.getPhone() == null) {
            user.setPhone("No especificado");  // O puedes lanzar una excepción si es obligatorio
        }
        if (user.getGender() == null) {
            user.setGender("No especificado");  // O asignar un valor por defecto
        }
        if (user.getRating() == null) {
            user.setRating(0.0);  // O el valor que prefieras
        }

        return userRepository.save(user);
    }

    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public Optional<User> findById(Long id) {
    return userRepository.findById(id);
    }
}