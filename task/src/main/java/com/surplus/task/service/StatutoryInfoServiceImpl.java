package com.surplus.task.service;

import org.springframework.stereotype.Service;

import com.surplus.task.domain.StatutoryInfo;
import com.surplus.task.repository.StatutoryInfoRepository;

@Service
public class StatutoryInfoServiceImpl implements StatutoryInfoService {
	
	private StatutoryInfoRepository statutoryInfoRepository; 
	
	StatutoryInfoServiceImpl(StatutoryInfoRepository statutoryInfoRepository){
		this.statutoryInfoRepository = statutoryInfoRepository;		
	}

	@Override
	public Iterable<StatutoryInfo> list() {
		return statutoryInfoRepository.findAll();
	}

	@Override
	public boolean save(StatutoryInfo statutoryInfo) {
		//StatutoryInfo statutoryInfo1 = null;
		boolean isSaved=true;
		try{
		this.statutoryInfoRepository.save(statutoryInfo);
		}catch(Exception ex)
		{
			isSaved = false;
			System.out.println("exception in StatutoryInfoServiceImpl is :"+ex.getMessage());
		}
		return isSaved;
	}	
	public boolean deleteStatutoryInfo(int infoId){
		StatutoryInfo sInfo = null;
		boolean isDelete = true;
		try{
		sInfo = this.statutoryInfoRepository.findByStatutoryInfoId(infoId);
		 this.statutoryInfoRepository.delete(sInfo);
		}catch(Exception ex)
		{
			isDelete = false;
			System.out.println("exception in StatutoryInfoServiceImpl is :"+ex);
		}
		return isDelete;
	}

	@Override
	public StatutoryInfo getStatutoryInfo(int statutoryInfoId) {
		StatutoryInfo statutoryInfo = this.statutoryInfoRepository.findByStatutoryInfoId(statutoryInfoId);
		return statutoryInfo;
	}
}
