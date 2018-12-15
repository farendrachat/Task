package com.surplus.task.repository;

import org.springframework.data.repository.CrudRepository;

import com.surplus.task.domain.UserAdministration;

public interface UserAdministrationRepository extends CrudRepository<UserAdministration,Integer>
{
	public UserAdministration findByUserAdministrationId(int userAdministrationId);

}
