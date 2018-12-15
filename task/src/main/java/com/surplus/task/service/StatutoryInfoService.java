package com.surplus.task.service;

import com.surplus.task.domain.StatutoryInfo;

public interface StatutoryInfoService {
	
	public Iterable<StatutoryInfo> list();
	public StatutoryInfo getStatutoryInfo(int statutoryInfoId);
	public boolean save (StatutoryInfo statutoryInfo);
	public boolean deleteStatutoryInfo(int infoId);

}
