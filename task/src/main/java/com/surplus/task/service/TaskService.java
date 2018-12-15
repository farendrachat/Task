package com.surplus.task.service;

import com.surplus.task.domain.Task;

public interface TaskService {
	
	public Iterable<Task> list();
	public Task save (Task task);
	public Iterable<Task> deleteTask(String tName);

}
