package com.inspt.server.service;

import com.inspt.server.dto.UserResponse;
import com.inspt.server.dto.VehicleResponse;
import com.inspt.server.model.Vehicle;
import com.inspt.server.repository.VehicleRepository;
import com.inspt.server.service.iservice.IVehicleService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VehicleService implements IVehicleService {
    @Autowired
    VehicleRepository vehicleRepository;
    @Autowired
    UserService userService;

    public List<VehicleResponse> getVehicleList(){
        List<Vehicle> vehiclesList =  vehicleRepository.findAll();
        List<VehicleResponse> vehicleResponsesList = new ArrayList<>();
        vehicleResponsesList = vehiclesList.stream().map(new Function<Vehicle, VehicleResponse>() {
            @Override
            public VehicleResponse apply(Vehicle veh){

                return new VehicleResponse(
                        veh.getId(),
                        veh.getMatricula(),
                        veh.getName(),
                        veh.getType(),
                        veh.getWidth(),
                        veh.getHigh(),
                        userService.mapUserToUserResponse(veh.getOwnerId())
                );
            }
        }).collect(Collectors.toList());
        return vehicleResponsesList;
    }

}
