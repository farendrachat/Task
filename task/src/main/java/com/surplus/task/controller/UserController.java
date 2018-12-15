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

import com.surplus.task.domain.User;
import com.surplus.task.service.UserService;

import io.swagger.annotations.Api;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/api/user")
@Api(value="Surplus Kart", description="Operations pertaining to users in the Application") 
public class UserController {
	
	private UserService userService;
	
	UserController(UserService userService)
	{
		this.userService = userService;
	}
	
	@GetMapping(value={"","/"})
	public Iterable<User> listUser()
	{
		Iterable<User> listUser = userService.list();
		return listUser;
	}
	
	@CrossOrigin
	@PostMapping("/save")
	public boolean saveUser(@RequestBody User user)
	{	
		System.out.println("uesr is :"+user);
		//return userService.save(user);
		boolean isSaved = userService.save(user);
		return isSaved;
	}
	
	@CrossOrigin
	@DeleteMapping("/delete")
	public boolean deleteUser(@RequestParam(value="userId",required=true) int userId)
	{		
		return userService.deleteUser(userId);
	}

}
