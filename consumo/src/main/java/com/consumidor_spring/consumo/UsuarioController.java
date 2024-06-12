package com.consumidor_spring.consumo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsuarioController {

	@Autowired
    private Consumidor consumidor;

	@CrossOrigin(origins = "*")
    @GetMapping("/usuarios")
	public List<Usuario> getUsuarios() {
        return consumidor.cogerUsuariosCola();
    }
}
