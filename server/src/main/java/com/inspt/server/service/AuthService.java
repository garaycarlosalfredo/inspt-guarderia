package com.inspt.server.service;

import com.inspt.server.dto.UserRequest;
import com.inspt.server.security.AuthenticationRequest;
import com.inspt.server.security.AuthenticationResponse;
import com.inspt.server.service.iservice.IAuthService;
import com.inspt.server.util.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService implements IAuthService {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    public ResponseEntity<?> SignUp(UserRequest userRequest){
        return userService.signUp(userRequest);
    }

    public ResponseEntity<?> SignIn(AuthenticationRequest authenticationRequest){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUserName(), authenticationRequest.getPassword()));
            return ResponseEntity.ok().body(new AuthenticationResponse(jwtUtil.generateToken(userService.loadUserByUsername(authenticationRequest.getUserName()))));
        }catch (Exception e){
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("PROBLEMA");
        }
    }
}
