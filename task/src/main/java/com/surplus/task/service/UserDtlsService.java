package com.surplus.task.service;

import com.surplus.task.domain.UserDtls;

public interface UserDtlsService {
	
	public Iterable<UserDtls> list();
	public UserDtls getUserDtls(int userDtlsId);
	public boolean save (UserDtls task);
	public boolean deleteUserDtls(int userId);

}
