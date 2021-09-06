package com.inspt.server.controller;

import com.inspt.server.dto.UserRequest;
import com.inspt.server.dto.UserResponse;
import com.inspt.server.model.User;
import com.inspt.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping
    public List<UserResponse> getListUser(){
        return userService.getListUser();
    }

}
