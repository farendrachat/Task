package com.surplus.task.repository;

import org.springframework.data.repository.CrudRepository;

import com.surplus.task.domain.Task;
import com.surplus.task.domain.UserDtls;

public interface UserDtlsRepository extends CrudRepository<UserDtls,Integer>
{
	public UserDtls findByUserDtlId(int userId);

}
