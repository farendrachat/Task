package com.surplus.task.service;

import org.springframework.stereotype.Service;

import com.surplus.task.domain.Task;
import com.surplus.task.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {
	
	private TaskRepository taskRepository; 
	
	TaskServiceImpl(TaskRepository taskRepository){
		this.taskRepository = taskRepository;		
	}

	@Override
	public Iterable<Task> list() {
		return taskRepository.findAll();
	}

	@Override
	public Task save(Task task) {
		Task task1 = null;
		try{
		task1 = this.taskRepository.save(task);
		}catch(Exception ex)
		{
			System.out.println("exception in serviceIMpl is :"+ex.getMessage());
		}
		return task1;
	}	
	public Iterable<Task> deleteTask(String tName){
		Task[] taskArr = null;
		Iterable<Task> itrTask=null;
		try{
		taskArr = this.taskRepository.findByName(tName);
		for(int i =0;i<taskArr.length;i++){
		 this.taskRepository.delete(taskArr[i]);
		 itrTask = taskRepository.findAll();
		}
		}catch(Exception ex)
		{
			System.out.println("exception is :"+ex);
			taskArr[0]=null;
		}
		return itrTask;
	}
}
