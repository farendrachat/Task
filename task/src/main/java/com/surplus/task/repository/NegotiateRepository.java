package com.surplus.task.repository;

import org.springframework.data.repository.CrudRepository;

import com.surplus.task.domain.Negotiate;

public interface NegotiateRepository extends CrudRepository<Negotiate,Integer>
{
	public Negotiate findByNegotiateId(int negotiateId);
	public Iterable<Negotiate> findByUserIdOrderByUpdatedOnAsc(int userId);

}
