package com.mill.goodMessage.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


import org.hibernate.annotations.CreationTimestamp;

import lombok.Data;

@Data
@Entity
public class Message {
    public @Id @GeneratedValue Long id;
    public Integer destination_number;
    public String message;

    public @CreationTimestamp LocalDateTime timestamp;
    public String status;

    public Message() {}

    public Message(Integer destination_number,String message,String status){
        this.destination_number = destination_number;
        this.message = message;
        this.status = status;
    }
}
