package com.surplus.task.repository;

import org.springframework.data.repository.CrudRepository;

import com.surplus.task.domain.Parcel;



public interface ParcelRepository extends CrudRepository<Parcel,Integer>
{
	public Parcel findByParcelId(int parcelId);
	public Iterable<Parcel> findParcelByTransId(int transId);
	public Iterable<Parcel> findParcelByUserId(int userId);
}
