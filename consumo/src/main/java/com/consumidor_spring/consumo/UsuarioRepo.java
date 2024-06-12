package com.consumidor_spring.consumo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepo extends JpaRepository<Usuario, Integer> {
}

