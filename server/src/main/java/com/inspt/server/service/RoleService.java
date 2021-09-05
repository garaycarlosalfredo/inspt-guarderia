package com.inspt.server.service;

import com.inspt.server.model.Role;
import com.inspt.server.repository.RoleRepository;
import com.inspt.server.util.ERole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public List<Role> getRoleList(){
        List<Role> roleList = roleRepository.findAll();
        if(roleList.isEmpty()){
            setRolesInit();
            roleList = roleRepository.findAll();
        }
        return roleList;
    }

    private void setRolesInit (){
        Role roleAdmin = new Role();
        roleAdmin.setName(ERole.ROLE_ADMIN.name());
        roleAdmin.setDescription(ERole.ROLE_ADMIN.name());
        roleRepository.save(roleAdmin);
        Role rolePartner = new Role();
        rolePartner.setName(ERole.ROLE_PARTNER.name());
        rolePartner.setDescription(ERole.ROLE_PARTNER.name());
        roleRepository.save(rolePartner);
        Role roleEmployee = new Role();
        roleEmployee.setName(ERole.ROLE_EMPLOYEE.name());
        roleEmployee.setDescription(ERole.ROLE_EMPLOYEE.name());
        roleRepository.save(roleEmployee);
    }

}
