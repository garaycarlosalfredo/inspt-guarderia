package com.inspt.server.dto;

import com.inspt.server.model.User;
import lombok.Getter;

import javax.persistence.criteria.CriteriaBuilder;

@Getter
public class AuthenticationResponse {
    private final String jwt;
    private final String role;
    private final String userName;
    private final Integer dni;
    private final String email;
    private final String phone;
    private final String name;
    private final String lastName;

    public AuthenticationResponse(String jwt, User user) {
        this.jwt = jwt;
        this.role = user.getRoleId().getName();
        this.userName = user.getUsername() ;
        this.dni = user.getDni() ;
        this.email = user.getEmail() ;
        this.phone = user.getPhone() ;
        this.name = user.getName();
        this.lastName = user.getLastName();
    }
}

