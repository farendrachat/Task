package com.surplus.task.service;

import org.springframework.stereotype.Service;

import com.surplus.task.domain.UserAdministration;
import com.surplus.task.repository.UserAdministrationRepository;



@Service
public class UserAdministrationServiceImpl implements UserAdministrationService {
	
	private UserAdministrationRepository userAdministrationRepository; 
	
	UserAdministrationServiceImpl(UserAdministrationRepository userAdministrationRepository){
		this.userAdministrationRepository = userAdministrationRepository;		
	}

	@Override
	public Iterable<UserAdministration> list() {
		return userAdministrationRepository.findAll();
	}

	@Override
	public boolean save(UserAdministration userAdministration) {
		boolean isSaved = true;
		try{
			this.userAdministrationRepository.save(userAdministration);
		}catch(Exception ex)
		{
			isSaved = false;
			System.out.println("exception in UserAdministrationServiceImpl is :"+ex.getMessage());
		}
		return isSaved;
	}	
	public boolean deleteUserAdministration(int userAdministrationId){
		UserAdministration userAdministration = null;
		boolean isDelete = true;
		try{
		userAdministration = userAdministrationRepository.findByUserAdministrationId(userAdministrationId);
		 this.userAdministrationRepository.delete(userAdministration);
		}catch(Exception ex)
		{
			isDelete = false;
			System.out.println("exception in UserAdministrationServiceImpl is :"+ex);
		}
		return isDelete;
	}

	@Override
	public UserAdministration getUserAdministration(int userAdministrationId) {
		UserAdministration userAdministration =  userAdministrationRepository.findByUserAdministrationId(userAdministrationId);
		return userAdministration ;
	}
}
