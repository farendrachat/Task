package com.surplus.task;

import java.time.LocalDate;
import java.time.Period;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import com.surplus.task.domain.Message;
import com.surplus.task.service.MessageService;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class TaskApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx =  SpringApplication.run(TaskApplication.class, args);
		/*MessageService messageService = ctx.getBean("messageService",MessageService.class);
		
		try{
			messageService.save(new Message());
			messageService.save(new Message(1,"Need some sweets from 1",LocalDate.now().minus(Period.ofDays(5)),true));
			messageService.save(new Message(2,"Need some fruits from 2",LocalDate.now().minus(Period.ofDays(10)),false));
			}catch(Exception ex)
			{
				System.out.println("exception thrown is :"+ex.getMessage());
			}	*/
		
	}
	
/*	@Bean
	CommandLineRunner runner(TaskService taskService )
	{
		
		return args -> {
			try{
			taskService.save(new Task("My Task 1",LocalDate.now(),true));
			taskService.save(new Task("My Task 2",LocalDate.now().minus(Period.ofDays(5)),true));
			taskService.save(new Task("My Task 3",LocalDate.now().minus(Period.ofDays(10)),false));
			}catch(Exception ex)
			{
				System.out.println("exception thrown is :"+ex.getMessage());
			}			
		};
	}*/
	@Bean
	CommandLineRunner runner(MessageService messageService )
	{
		
		return args -> {
			try{
				messageService.save(new Message());
				messageService.save(new Message(1,"Need some sweets from 1",LocalDate.now().minus(Period.ofDays(5)),true));
				messageService.save(new Message(2,"Need some fruits from 2",LocalDate.now().minus(Period.ofDays(10)),false));
			}catch(Exception ex)
			{
				System.out.println("exception thrown is :"+ex.getMessage());
			}			
		};
}
}
