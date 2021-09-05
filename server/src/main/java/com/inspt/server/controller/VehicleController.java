package com.inspt.server.controller;

import com.inspt.server.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.imageio.spi.ServiceRegistry;

@RestController
@RequestMapping(path = "/vehicle")
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @GetMapping
    public ResponseEntity<?> getVehicleList(){
        return ResponseEntity.ok().body(vehicleService.getVehicleList());
    }

}
