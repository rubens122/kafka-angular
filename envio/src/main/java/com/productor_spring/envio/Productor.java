package com.productor_spring.envio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/producir")
public class Productor {

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    private static final String TOPIC = "usuarios";

    @PostMapping
    public String subirUsuario(@RequestParam("id") int id, @RequestParam("nombre") String nombre) {
        String mensaje =  id + "," + nombre;
        kafkaTemplate.send(TOPIC, mensaje);
        return "Publicado correctamente";
    }
}

