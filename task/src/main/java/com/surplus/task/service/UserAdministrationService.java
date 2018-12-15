package com.surplus.task.service;

import com.surplus.task.domain.UserAdministration;

public interface UserAdministrationService {
	
	public Iterable<UserAdministration> list();
	public UserAdministration getUserAdministration(int userAdministrationId);
	public boolean save (UserAdministration task);
	public boolean deleteUserAdministration(int userAdministrationId);

}
