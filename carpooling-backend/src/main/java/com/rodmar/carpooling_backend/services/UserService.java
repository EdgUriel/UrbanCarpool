package com.rodmar.carpooling_backend.services;

import com.rodmar.carpooling_backend.entities.User;
import com.rodmar.carpooling_backend.dto.UserDTO;
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

    public UserDTO registerUser(User user) {
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
        if (user.getPhone() == null) {
            user.setPhone("No especificado");
        }
        if (user.getGender() == null) {
            user.setGender("No especificado");
        }
        if (user.getRating() == null) {
            user.setRating(0.0);
        }

        User savedUser = userRepository.save(user);

        // Convertir User a UserDTO
        return new UserDTO(
            savedUser.getId(),
            savedUser.getFirstName(),
            savedUser.getLastName(),
            savedUser.getEmail(),
            savedUser.getPhone(),
            savedUser.getRole(),
            savedUser.getRating(),
            savedUser.getGender(),
            savedUser.getCreatedAt()
        );
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

    public User saveUser(User user) {
        return userRepository.save(user); // Guardar el usuario usando JPA
    }
}