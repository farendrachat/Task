package com.surplus.task.repository;

import org.springframework.data.repository.CrudRepository;

import com.surplus.task.domain.Task;

public interface TaskRepository extends CrudRepository<Task,Long>
{
	public Task[] findByName(String name);

}
