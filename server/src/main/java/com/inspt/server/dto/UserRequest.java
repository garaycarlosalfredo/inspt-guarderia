package com.inspt.server.dto;

import com.inspt.server.model.Role;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserRequest {
    private String userName;
    private String password;
    private int dni;
    private String email;
    private String phone;
    private String name;
    private String lastName;
    private Role role;
}
