package com.inspt.server.model;

import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "garages")
public class Garage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private boolean Maintenance;

    @JoinColumn(name = "zones", referencedColumnName = "id")
    @ManyToOne
    private Zone zone;//Zona

    @JoinColumn(name = "vehicles", referencedColumnName = "id")
    @OneToOne
    private Vehicle vehiclAssignedId;//Id vehiculo

    @UpdateTimestamp
    private LocalDateTime assignedVehicleDate;

    @JoinColumn(name = "users", referencedColumnName = "id")
    @ManyToOne
    private User ownerId; //Id del dueño
}
