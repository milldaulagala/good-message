package com.mill.goodMessage.model;

import java.net.URISyntaxException;
import java.util.Collection;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {

    private MillMessageRepository messageRepository;

    public MessageController(MillMessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping("/messages")
    Collection<Message> messages() {
        return (Collection<Message>) messageRepository.findAll();
    }

    @PostMapping("/messages")
    ResponseEntity<Message> createContact( @RequestBody Message message) throws URISyntaxException {
        Message result = messageRepository.save(message);
        return ResponseEntity.ok().body(result);
    }



    
}
