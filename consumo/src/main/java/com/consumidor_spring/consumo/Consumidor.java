package com.consumidor_spring.consumo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class Consumidor {

	@Autowired
    private UsuarioRepo usuarioRepo;
    
    private final List<Usuario> usuarios = new ArrayList<>();

    
    @KafkaListener(topics = "usuarios", groupId = "group_id")
    public void consume(String mensaje) {
        String[] datos = mensaje.split(",");
        Usuario usuario = new Usuario();
        usuario.setId(Integer.parseInt(datos[0]));
        usuario.setNombre(datos[1]);
        usuarios.add(usuario);
        usuarioRepo.save(usuario);
    }

    public List<Usuario> cogerUsuariosCola() {
        return usuarios;
    }
}
