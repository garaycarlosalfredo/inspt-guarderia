package com.inspt.server.model;

import lombok.*;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
@Table(name = "zones")
public class Zone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    private String name;

    @NonNull
    private String vehicleType;

    @NonNull
    private int vehicleQuantity;


    private float width;
    private float high;

    @JoinColumn(name = "sonegroups",referencedColumnName = "id")
    @ManyToOne
    private ZoneGroup zoneGroupId;//ZoneGroup "Guardería" a la que pertenece

    @JoinColumn(name = "users",referencedColumnName = "id")
    @ManyToOne
    private User employeeAssigned;//Empleado asignado
}
