package com.inspt.server.controller;

import com.inspt.server.model.Role;
import com.inspt.server.repository.RoleRepository;
import com.inspt.server.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/role")
public class RoleController {
    @Autowired
    RoleService roleService;

    @GetMapping
    public List<Role> getRoleList(){
        return roleService.getRoleList();
    }
}
