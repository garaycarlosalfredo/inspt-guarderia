package com.inspt.server.dto;

import com.inspt.server.model.User;
import lombok.*;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class VehicleResponse {
    private Integer id;
    private String matricula;
    private String name;
    private String type;
    private float width;
    private float high;
    private UserResponse ownerId;
}
