package com.surplus.task.service;

import org.springframework.stereotype.Service;

import com.surplus.task.domain.Parcel;
import com.surplus.task.repository.ParcelRepository;



@Service
public class ParcelServiceImpl implements ParcelService {
	
	private ParcelRepository parcelRepository; 
	
	ParcelServiceImpl(ParcelRepository parcelRepository){
		this.parcelRepository = parcelRepository;		
	}


	public Iterable<Parcel> list() {
		return parcelRepository.findAll();
	}
	
	public Parcel getParcel(int parcelId) {
		Parcel parcel = this.parcelRepository.findByParcelId(parcelId);
		return parcel;
	}
	
	/*
	 * If prId is passed then its an update else its a save with new Id
	 */
	public boolean save(Parcel parcel) {
		boolean isSaved = true;
		try{
		this.parcelRepository.save(parcel);
		}catch(Exception ex)
		{
			isSaved = false;
			System.out.println("exception in ParcelServiceImpl is :"+ex.getMessage());
		}
		return isSaved;
	}	
	public boolean deleteParcel(int parcelId){
		Parcel parcel = null;
		boolean isDeleted = true;
		try{
		parcel = this.parcelRepository.findByParcelId(parcelId);
		 this.parcelRepository.delete(parcel);
		}catch(Exception ex)
		{
			isDeleted = false;
			System.out.println("exception in ParcelServiceImpl is :"+ex);
		}
		return isDeleted;
	}

	@Override
	public Iterable<Parcel> getParcelByTransId(int transId) {
		Iterable<Parcel> listParcel = parcelRepository.findParcelByTransId(transId);
		return listParcel;
	}

	@Override
	public Iterable<Parcel> getParcelByUserId(int userId) {
		Iterable<Parcel> listParcel = parcelRepository.findParcelByUserId(userId);
		return listParcel;
	}


}