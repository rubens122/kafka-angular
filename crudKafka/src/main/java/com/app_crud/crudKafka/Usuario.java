package com.app_crud.crudKafka;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Usuario {

    @Id
    private int id;
    private String nombre;
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
    	Objects.requireNonNull(id, "El id no puede ser nulo");
    	if (id <= 0) {
    		throw new IllegalArgumentException("ID de usuario invalido");
    	}else {
    		this.id = id;
    	}
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
