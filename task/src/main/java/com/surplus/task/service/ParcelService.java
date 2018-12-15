package com.surplus.task.service;

import com.surplus.task.domain.Parcel;

public interface ParcelService {
	
	public Iterable<Parcel> list();
	public Parcel getParcel(int parcelId);	
	public boolean save (Parcel parcel);
	public boolean deleteParcel(int parcelId);
	Iterable<Parcel> getParcelByTransId(int transId);
	Iterable<Parcel> getParcelByUserId(int userId);

}
