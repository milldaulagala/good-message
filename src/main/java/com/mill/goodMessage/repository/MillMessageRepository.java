package com.mill.goodMessage.repository;

import com.mill.goodMessage.model.Message;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "messages", path = "messages")
public interface MillMessageRepository extends CrudRepository<Message, Long> {
    
}
