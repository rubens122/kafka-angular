package com.app_crud.crudKafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuarios")
public class UsuarioControlador {

    @Autowired
    private UsuarioRepo usuarioRepo;
    
    @CrossOrigin(origins = "*")
    @GetMapping(path="/listar")
    public List<Usuario> getUsuarios() {
        return usuarioRepo.findAll();
    }
    
    
    @CrossOrigin(origins = "*")
    @PostMapping(path="/insertar")
    public String crearUsuario(@RequestBody Usuario usuario) {
        usuarioRepo.save(usuario);
        return "Usuario insertado correctamente";
    }
    
    @CrossOrigin(origins = "*")
    @PutMapping(path="/actualizar/{id}")
    public @ResponseBody String updateUser(@PathVariable int id, @RequestBody Usuario usuario) {
        Usuario usuarioExiste = usuarioRepo.findById(id).orElseThrow();
        usuarioExiste.setNombre(usuario.getNombre());
        usuarioRepo.save(usuarioExiste);
        return "Usuario actualizado";
    }
    
    @CrossOrigin(origins = "*")
    @DeleteMapping(path="/borrar/{id}")
    public @ResponseBody String deleteUser(@PathVariable int id) {
        usuarioRepo.deleteById(id);
        return "Usuario eliminado";
    }
}

