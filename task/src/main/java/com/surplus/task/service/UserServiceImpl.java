package com.surplus.task.service;

import org.springframework.stereotype.Service;

import com.surplus.task.domain.User;
import com.surplus.task.repository.UserRepository;


@Service
public class UserServiceImpl implements UserService {
	
	private UserRepository userRepository; 
	
	UserServiceImpl(UserRepository userRepository){
		this.userRepository = userRepository;		
	}

	@Override
	public Iterable<User> list() {
		return userRepository.findAll();
	}

	@Override
	public boolean save(User user) {
		boolean isSaved = true;
		try{
		 this.userRepository.save(user);
		}catch(Exception ex)
		{
			isSaved = false;
			System.out.println("exception in UserServiceImpl is :"+ex.getMessage());
		}
		return isSaved;
	}	
	public boolean deleteUser(int userId){
		User user = null;
		boolean isDelete = true;
		try{
		user = this.userRepository.findByUserId(userId);
		 this.userRepository.delete(user);
		}catch(Exception ex)
		{
			isDelete  = false;
			System.out.println("exception in UserServiceImpl is  :"+ex);
		}
		return isDelete;
	}

	@Override
	public User getUser(int userId) {
		User user = userRepository.findByUserId(userId);
		return user;
	}
}
