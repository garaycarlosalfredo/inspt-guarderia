package com.inspt.server.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@Table(name = "vehicles")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    private String matricula;

    @NonNull
    private String name;

    @NonNull
    private String type;

    @NonNull
    private float width;

    @NotNull
    private float high;

    @NotNull
    @JoinColumn(name = "users", referencedColumnName = "id")
    @ManyToOne
    private User ownerId;//Dueño del auto
}
