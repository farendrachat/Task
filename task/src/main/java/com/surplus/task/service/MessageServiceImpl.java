package com.surplus.task.service;

import org.springframework.stereotype.Service;

import com.surplus.task.domain.Message;
import com.surplus.task.repository.MessageRepository;



@Service
public class MessageServiceImpl implements MessageService {
	
	private MessageRepository messageRepository; 
	
	MessageServiceImpl(MessageRepository messageRepository){
		this.messageRepository = messageRepository;		
	}

	@Override
	public Iterable<Message> list() {
		return messageRepository.findAll();
	}

	@Override
	public Message save(Message message) {
		Message message1 = null;
		try{
		message1 = this.messageRepository.save(message);
		}catch(Exception ex)
		{
			System.out.println("exception in serviceIMpl is :"+ex.getMessage());
		}
		return message1;
	}	
	public Iterable<Message> deleteMessage(int msgId){
		Message message = null;
		Iterable<Message> itrMessage=null;
		try{
		message = this.messageRepository.findByMsgId(msgId);
		//for(int i =0;i<messageArr.length;i++){
		 this.messageRepository.delete(message);
		 itrMessage = messageRepository.findAll();		
		}catch(Exception ex)
		{
			System.out.println("exception is :"+ex);
			//messageArr[0]=null;
		}
		return itrMessage;
	}

	@Override
	public Message getMessage(int msgId) {
		Message	message = null;
		try{
			message = this.messageRepository.findByMsgId(msgId);
			}catch(Exception ex)
			{
				System.out.println("exception is :"+ex);
				//messageArr[0]=null;
			}
		return message;
	}

	@Override
	public Iterable<Message> getMessageByUserId(int userId) {
		Iterable<Message> list = messageRepository.findBySenderId(userId);
		return list;
	}
}
