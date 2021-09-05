package com.inspt.server.model;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.lang.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Collection;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Data
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    @NonNull
    private String userName;

    @NonNull
    private String password;

    @NotNull
    @Column(unique = true)
    private int dni;

    @Email
    private String email;

    @Nullable
    private String phone;

    @NonNull
    private String name;

    @NonNull
    private String lastName;

    @CreationTimestamp
    private LocalDateTime createAt;

    @JoinColumn(name = "roles", referencedColumnName = "id")
    @ManyToOne
    private Role roleId;

    public User(@NonNull String userName, @NonNull String password, int dni, String email, @Nullable String phone, @NonNull String name, @NonNull String lastName, Role roleId) {
        this.userName = userName;
        this.password = password;
        this.dni = dni;
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastName = lastName;
        this.roleId = roleId;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        return this.userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
