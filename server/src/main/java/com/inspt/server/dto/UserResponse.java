package com.inspt.server.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class UserResponse {
    private String userName;
    private int dni;
    private String email;
    private String phone;
    private String name;
    private String lastName;
}
