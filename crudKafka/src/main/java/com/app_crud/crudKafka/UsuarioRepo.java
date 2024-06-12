package com.app_crud.crudKafka;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepo extends JpaRepository<Usuario, Integer> {
}
