package com.surplus.task.repository;

import org.springframework.data.repository.CrudRepository;

import com.surplus.task.domain.Task;
import com.surplus.task.domain.User;
import com.surplus.task.domain.UserDtls;

public interface UserRepository extends CrudRepository<User,Integer>
{
	public User findByUserId(int userId);

}
