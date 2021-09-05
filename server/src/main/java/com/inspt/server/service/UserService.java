package com.inspt.server.service;

import com.inspt.server.dto.UserRequest;
import com.inspt.server.dto.UserResponse;
import com.inspt.server.model.Role;
import com.inspt.server.model.User;
import com.inspt.server.repository.RoleRepository;
import com.inspt.server.repository.UserRepository;
import com.inspt.server.service.iservice.IUserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService, IUserService {


    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    public ResponseEntity<?> signUp(UserRequest userRequest) {
        try {
            userRepository.save(mapUserRequestToUser(userRequest));
            return ResponseEntity.ok(mapUserRequestToUserResponse(userRequest));
        }catch (Exception e){
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("MENSAJE");
        }
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByUserName(userName);
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority(user.get().getRoleId().getName()));
        try {
            return new org.springframework.security.core.userdetails.User(user.get().getUsername(), user.get().getPassword(), authorities);
        } catch (Exception e) {
            throw new UsernameNotFoundException("userNotFoundMsg");
        }
    }

    public User mapUserRequestToUser (UserRequest userRequest){

        User user = new User(
                userRequest.getUserName(),
                bCryptPasswordEncoder.encode(userRequest.getPassword()),
                userRequest.getDni(),
                userRequest.getEmail(),
                userRequest.getPhone(),
                userRequest.getName(),
                userRequest.getLastName(),
                userRequest.getRole()
                );
        return user;
    }

    public UserResponse mapUserToUserResponse (User user){
        UserResponse userResponse = new UserResponse();
        userResponse.setUserName(user.getUsername());
        userResponse.setDni(user.getDni());
        userResponse.setEmail(user.getEmail());
        userResponse.setPhone(user.getPhone());
        userResponse.setName(user.getName());
        userResponse.setLastName(user.getLastName());
        return userResponse;
    }

    public UserResponse mapUserRequestToUserResponse (UserRequest userRequest){
        UserResponse userResponse = new UserResponse();
        userResponse.setUserName(userRequest.getUserName());
        userResponse.setDni(userRequest.getDni());
        userResponse.setEmail(userRequest.getEmail());
        userResponse.setPhone(userRequest.getPhone());
        userResponse.setName(userRequest.getName());
        userResponse.setLastName(userRequest.getLastName());
        return userResponse;
    }
}
