package com.inspt.server.controller;

import com.inspt.server.dto.UserRequest;
import com.inspt.server.dto.AuthenticationRequest;
import com.inspt.server.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping(path = "/auth")
@AllArgsConstructor
public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping(path = "/sign-up")
    public ResponseEntity<?> userSignUp ( @RequestBody UserRequest userRequest){
        return authService.SignUp(userRequest);
    }

    @PostMapping(path = "/sign-in")
    public  ResponseEntity<?> userSignIn (@RequestBody AuthenticationRequest authenticationRequest){
        return authService.SignIn(authenticationRequest);
    }

    @GetMapping(value = "/me")
    public ResponseEntity<?> getMyUser(Authentication authentication, Principal principal) {
            return authService.findMyUser(authentication.getName());
    }

    //TEST ==========================

    @PostMapping(path = "/admin")
    public ResponseEntity<?> testAdmin(){
        return ResponseEntity.ok().body("Esto solo ADMIN");
    }

    @PostMapping(path = "/partner")
    public ResponseEntity<?> testPartner(){
        return ResponseEntity.ok().body("Esto solo Partner");
    }

    @PostMapping(path = "/employee")
    public ResponseEntity<?> testEmpoyee(){
        return ResponseEntity.ok().body("Esto solo Employee");
    }

}
