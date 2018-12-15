package com.surplus.task.service;

import org.springframework.stereotype.Service;

import com.surplus.task.domain.UserDtls;
import com.surplus.task.repository.UserDtlsRepository;



@Service
public class UserDtlsServiceImpl implements UserDtlsService {
	
	private UserDtlsRepository userDtlsRepository; 
	
	UserDtlsServiceImpl(UserDtlsRepository userDtlsRepository){
		this.userDtlsRepository = userDtlsRepository;		
	}

	@Override
	public Iterable<UserDtls> list() {
		return userDtlsRepository.findAll();
	}

	@Override
	public boolean save(UserDtls userDtls) {
		boolean isSaved = true;
		try{
			this.userDtlsRepository.save(userDtls);
		}catch(Exception ex)
		{
			isSaved = false;
			System.out.println("exception in UserDtlsServiceImpl is :"+ex.getMessage());
		}
		return isSaved;
	}	
	public boolean deleteUserDtls(int userDtlId){
		UserDtls userDtls = null;
		boolean isDelete = true;
		try{
		userDtls = userDtlsRepository.findByUserDtlId(userDtlId);
		 this.userDtlsRepository.delete(userDtls);
		}catch(Exception ex)
		{
			isDelete = false;
			System.out.println("exception in UserDtlsServiceImpl is :"+ex);
		}
		return isDelete;
	}

	@Override
	public UserDtls getUserDtls(int userDtlsId) {
		UserDtls userDtls =  userDtlsRepository.findByUserDtlId(userDtlsId);
		return userDtls ;
	}
}
