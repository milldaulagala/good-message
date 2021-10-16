package com.mill.goodMessage.model;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource
public interface MillMessageRepository extends CrudRepository<Message, Long> {
    
}
