package com.inspt.server.service;

import com.inspt.server.dto.MessageResponse;
import com.inspt.server.dto.UserRequest;
import com.inspt.server.dto.AuthenticationRequest;
import com.inspt.server.dto.AuthenticationResponse;
import com.inspt.server.service.iservice.IAuthService;
import com.inspt.server.util.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
@AllArgsConstructor
public class AuthService implements IAuthService {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private MessageSource messageSource;

    public ResponseEntity<?> SignUp(UserRequest userRequest){
        return userService.signUp(userRequest);
    }

    public ResponseEntity<?> SignIn(AuthenticationRequest authenticationRequest){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUserName(), authenticationRequest.getPassword()));
            return ResponseEntity.ok().body(new AuthenticationResponse(jwtUtil.generateToken(userService.loadUserByUsername(authenticationRequest.getUserName()))));
        }catch (Exception e){
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(
                 new MessageResponse(messageSource.getMessage("auth.entity.not-found", new Object[] { "User"}, Locale.US))
            );
        }
    }
}
