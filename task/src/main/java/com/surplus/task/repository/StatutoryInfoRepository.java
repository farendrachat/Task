package com.surplus.task.repository;

import org.springframework.data.repository.CrudRepository;

import com.surplus.task.domain.StatutoryInfo;

public interface StatutoryInfoRepository extends CrudRepository<StatutoryInfo,Integer>
{
	public StatutoryInfo findByStatutoryInfoId(int infoId);

}
