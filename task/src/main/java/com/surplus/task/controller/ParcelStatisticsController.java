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

import com.surplus.task.domain.Parcel;
import com.surplus.task.service.ParcelService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;


@RestController
@CrossOrigin(origins = "http://localhost:9000/")
@RequestMapping("/api/parcel")
@Api(value="Surplus Kart", description="Operations pertaining to transfer of sample/product between buyer,seller and Admin") 
public class ParcelStatisticsController {
	
	private ParcelService parcelService;
	
	ParcelStatisticsController(ParcelService parcelService)
	{
		this.parcelService = parcelService;
	}
	
	@ApiOperation(value = "View a list of available parcels", response = Iterable.class)
	@ApiResponses(value = {
	        @ApiResponse(code = 200, message = "Successfully retrieved list"),
	        @ApiResponse(code = 401, message = "You are not authorized to view the resource"),
	        @ApiResponse(code = 403, message = "Accessing the resource you were trying to reach is forbidden"),
	        @ApiResponse(code = 404, message = "The resource you were trying to reach is not found")
	})
	@GetMapping(value={"","/"})
	public Iterable<Parcel> listParcel()
	{
		Iterable<Parcel> listParcel = parcelService.list();
		return listParcel;
	}
	
	@ApiOperation(value = "Get parcel from parcel id", response = Parcel.class)
	@GetMapping("/getParcel/{parcelId}")
	public Parcel getParcel(@PathVariable int parcelId)
	{
		Parcel parcel = parcelService.getParcel(parcelId) ;
		return parcel;
	}
	
	@ApiOperation(value = "Save/Update parcel.", response = Boolean.class)
	@CrossOrigin
	@PostMapping("/save")
	public boolean saveParcel(@RequestBody Parcel parcel)
	{		
		return parcelService.save(parcel);
	}
	
	@ApiOperation(value = "Delete parcel from parcel id", response = Boolean.class)
	@CrossOrigin
	@DeleteMapping("/delete")
	public boolean deleteParcel(@RequestParam(value="parcelId",required=true) int parcelId)
	{		
		return parcelService.deleteParcel(parcelId);
	}

}
