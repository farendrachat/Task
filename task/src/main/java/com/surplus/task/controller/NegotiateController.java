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

import com.surplus.task.domain.Negotiate;
import com.surplus.task.service.NegotiateService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController
@CrossOrigin(origins = "http://localhost:9000/")
@RequestMapping("/api/negotiate")
@Api(value="Surplus Kart", description="Operations pertaining to negotiations done in the Application") 
public class NegotiateController {
	
	private NegotiateService negotiateService;
	
	NegotiateController(NegotiateService negotiateService)
	{
		this.negotiateService = negotiateService;
	}
	
	@ApiOperation(value = "Get negotiation from negotiateId", response = Negotiate.class)
	@GetMapping("/getNegotiate/{negotiateId}")
	public Negotiate getNegotiate(@PathVariable int negotiateId)
	{
		Negotiate negotiate = negotiateService.getNegotiate(negotiateId) ;
		return negotiate;
	}
	
	@ApiOperation(value = "Get list of negotiations from user id listed datewise asc", response = Negotiate.class)
	@GetMapping("/getNegotiate/{userId}")
	public Iterable<Negotiate> getNegotiateByUserId(@PathVariable int userId)
	{
		Iterable<Negotiate> listNegotiate = negotiateService.getNegotiateByUserId(userId);
		return listNegotiate;
	}
	
	@ApiOperation(value = "View a list of available negotiations", response = Iterable.class)
	@ApiResponses(value = {
	        @ApiResponse(code = 200, message = "Successfully retrieved list"),
	        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
	        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
	        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
	})
	@GetMapping(value={"","/"})
	public Iterable<Negotiate> listNegotiate()
	{
		Iterable<Negotiate> listNegotiate = negotiateService.list();
		return listNegotiate;
	}
	
	@ApiOperation(value = "Save/Update negotiation.If id is passed its update, else its save with new id.", response = Boolean.class)
	@CrossOrigin
	@PostMapping("/save")
	public boolean saveNegotiate(@RequestBody Negotiate task)
	{		
		return negotiateService.save(task);
	}
	
	@ApiOperation(value = "Delete Negotiation by negotiate id", response = Boolean.class)
	@CrossOrigin
	@DeleteMapping("/delete")
	public boolean deleteNegotiate(@RequestParam(value="negotiateId",required=true) int negotiateId)
	{		
		return negotiateService.deleteNegotiate(negotiateId);
	}

}
