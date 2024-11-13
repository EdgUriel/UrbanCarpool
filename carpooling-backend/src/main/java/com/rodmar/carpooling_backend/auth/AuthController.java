package com.rodmar.carpooling_backend.auth;

import com.rodmar.carpooling_backend.entities.User;
import com.rodmar.carpooling_backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;  
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        // Verifica si el correo ya está registrado
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El correo ya está registrado.");
        }

        LocalDateTime now = LocalDateTime.now();
        user.setCreatedAt(now);

        if (user.getRole() == null) {
            user.setRole("passenger");
        }

        userRepository.save(user);
        return ResponseEntity.ok("Usuario registrado exitosamente.");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> optionalUser = userRepository.findByEmail(loginRequest.getEmail());

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (!user.getPassword().equals(loginRequest.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas.");
            }
            return ResponseEntity.ok("Login exitoso.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas.");
        }
    }
}
