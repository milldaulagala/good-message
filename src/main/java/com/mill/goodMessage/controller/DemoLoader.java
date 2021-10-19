package com.mill.goodMessage.controller;

import com.mill.goodMessage.repository.MillMessageRepository;
import com.mill.goodMessage.model.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DemoLoader implements CommandLineRunner {

    private final MillMessageRepository repository;

    @Autowired
    public DemoLoader(MillMessageRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Message("10","meeting at 3pm","Success"));
    }
}
