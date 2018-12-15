package com.surplus.task.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.surplus.task.domain.Message;
import com.surplus.task.service.MessageService;

import io.swagger.annotations.Api;

@RestController
@CrossOrigin(origins = "http://localhost:9000/")
@RequestMapping("/api/message")
@Api(value="Surplus Kart", description="Operations pertaining to messages between users and super admin in the Application") 
public class MessageController {
	
	private MessageService messageService;
	
	MessageController(MessageService messageService)
	{
		this.messageService = messageService;
	}
	
	@GetMapping("/getMessage/{msgId}")
	public Message getMessage(@PathVariable String msgId)
	{
		Message message = messageService.getMessage(Integer.parseInt(msgId)) ;
		return message;
	}
	
	@GetMapping(value={"","/"})
	public Iterable<Message> listMessage()
	{
		Iterable<Message> listMessage = messageService.list();
		return listMessage;
	}
	
	@CrossOrigin
	@PostMapping("/save")
	public Message saveMessage(@RequestBody Message message)
	{		
		return messageService.save(message);
	}
	
//	@CrossOrigin
//	@DeleteMapping("/delete/{name}")
//	public boolean deleteTask(@PathVariable(value="name") String taskName)
//	{		
//		return messageService.deleteTask(taskName);
//	}
	
	@CrossOrigin
	@DeleteMapping("/delete")
	public Iterable<Message> deleteMessage(@RequestParam(value="msgId",required=true) int msgId)
	{		
		return messageService.deleteMessage(msgId);
	}

}
