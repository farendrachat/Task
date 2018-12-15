package com.surplus.task.repository;

import org.springframework.data.repository.CrudRepository;

import com.surplus.task.domain.Message;

public interface MessageRepository extends CrudRepository<Message,Long>
{
	public Message findByMsgId(int msgId);
	public Iterable<Message> findBySenderId(int senderId);

}
