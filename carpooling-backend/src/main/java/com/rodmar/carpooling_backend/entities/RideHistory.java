package com.rodmar.carpooling_backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "RIDE_HISTORY")
public class RideHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ride_history_seq")
    @SequenceGenerator(name = "ride_history_seq", sequenceName = "RIDE_HISTORY_SEQ", allocationSize = 1)
    @Column(name = "ID")
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "ride_ID", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Ride ride;

    @ManyToOne
    @JoinColumn(name = "user_ID", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private User user;

    @Column(name = "role", nullable = false)
    private String role;

    @Column(name = "joined_at", nullable = false)
    private LocalDateTime joinedAt;

    public RideHistory() {}

    public RideHistory(Ride ride, User user, String role, LocalDateTime joinedAt) {
        this.ride = ride;
        this.user = user;
        this.role = role;
        this.joinedAt = joinedAt;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Ride getRide() {
        return ride;
    }

    public void setRide(Ride ride) {
        this.ride = ride;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public LocalDateTime getJoinedAt() {
        return joinedAt;
    }

    public void setJoinedAt(LocalDateTime joinedAt) {
        this.joinedAt = joinedAt;
    }
}
