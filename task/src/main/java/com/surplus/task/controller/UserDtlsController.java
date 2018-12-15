package com.surplus.task.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.surplus.task.domain.UserDtls;
import com.surplus.task.service.UserDtlsService;

import io.swagger.annotations.Api;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/userdtls")
@Api(value="Surplus Kart", description="Operations pertaining to User Details in Application") 
public class UserDtlsController {
	
	private UserDtlsService userDtlsService;
	
	UserDtlsController(UserDtlsService userDtlsService)
	{
		this.userDtlsService = userDtlsService;
	}
	
	@GetMapping(value={"","/"})
	public Iterable<UserDtls> listUserDtls()
	{
		Iterable<UserDtls> listUserDtls = userDtlsService.list();
		return listUserDtls;
	}
	
	
	@PostMapping("/save")
	public boolean saveUserDtls(HttpServletRequest req,@RequestBody UserDtls userDtls)
	{		
		return userDtlsService.save(userDtls);
	}
	

	@CrossOrigin
	@DeleteMapping("/delete/{userDtlsId}")
	public boolean deleteUserDtls(@PathVariable(value="userDtlsId",required=true) int userDtlsId)
	{		
		return userDtlsService.deleteUserDtls(userDtlsId);
	}

}
