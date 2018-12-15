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

import com.surplus.task.domain.Product;
import com.surplus.task.domain.StatutoryInfo;
import com.surplus.task.service.StatutoryInfoService;

import io.swagger.annotations.Api;

@RestController
@CrossOrigin(origins = "http://localhost:9000/")
@RequestMapping("/api/statutoryInfo")
@Api(value="Surplus Kart", description="Operations pertaining to statutory information of users in the Application") 
public class StatutoryInfoController {
	
	private StatutoryInfoService statutoryInfoService;
	
	StatutoryInfoController(StatutoryInfoService statutoryInfoService)
	{
		this.statutoryInfoService = statutoryInfoService;
	}
	
	@GetMapping(value={"","/"})
	public Iterable<StatutoryInfo> listStatutoryInfo()
	{
		Iterable<StatutoryInfo> listStatutoryInfo = statutoryInfoService.list();
		return listStatutoryInfo;
	}
	
	@CrossOrigin
	@PostMapping("/save")
	public boolean saveStatutoryInfo(@RequestBody StatutoryInfo statutoryInfo)
	{		
		return statutoryInfoService.save(statutoryInfo);
	}
	
	@GetMapping("/getProduct/{productId}")
	public StatutoryInfo getProduct(@PathVariable int statutoryInfoId)
	{
		StatutoryInfo statutoryInfo = statutoryInfoService.getStatutoryInfo(statutoryInfoId) ;
		return statutoryInfo;
	}
	
	@CrossOrigin
	@DeleteMapping("/delete")
	public boolean deleteStatutoryInfo(@RequestParam(value="statutoryInfoId",required=true) int statutoryInfoId)
	{		
		return statutoryInfoService.deleteStatutoryInfo(statutoryInfoId);
	}

}
