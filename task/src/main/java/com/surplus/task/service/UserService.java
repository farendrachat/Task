package com.surplus.task.service;

import com.surplus.task.domain.User;

public interface UserService {
	
	public Iterable<User> list();
	public boolean save (User user);
	public User getUser(int userId);
	public boolean deleteUser(int userId);

}
