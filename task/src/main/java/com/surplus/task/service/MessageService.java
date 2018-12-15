package com.surplus.task.service;

import com.surplus.task.domain.Message;
import com.surplus.task.domain.Product;

public interface MessageService {
	
	public Iterable<Message> list();
	public Message getMessage(int msgId);
	public Iterable<Message> getMessageByUserId(int userId);
	public Message save (Message Message);
	public Iterable<Message> deleteMessage(int msgId);

}
