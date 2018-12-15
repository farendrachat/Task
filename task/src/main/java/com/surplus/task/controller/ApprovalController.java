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

import com.surplus.task.domain.Task;
import com.surplus.task.service.TaskService;

@RestController
@CrossOrigin(origins = "http://localhost:9000/")
@RequestMapping("/api/approval")
public class ApprovalController {
	
	private TaskService taskService;
	
	ApprovalController(TaskService taskService)
	{
		this.taskService = taskService;
	}
	
	@GetMapping(value={"","/"})
	public Iterable<Task> listTask()
	{
		Iterable<Task> listTask = taskService.list();
		return listTask;
	}
	
	@CrossOrigin
	@PostMapping("/save")
	public Task saveTask(@RequestBody Task task)
	{		
		return taskService.save(task);
	}
	
//	@CrossOrigin
//	@DeleteMapping("/delete/{name}")
//	public boolean deleteTask(@PathVariable(value="name") String taskName)
//	{		
//		return taskService.deleteTask(taskName);
//	}
	
	@CrossOrigin
	@DeleteMapping("/delete")
	public Iterable<Task> deleteTask(@RequestParam(value="name",required=true) String taskName)
	{		
		return taskService.deleteTask(taskName);
	}

}
