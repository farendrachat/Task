package com.surplus.task.repository;

import org.springframework.data.repository.CrudRepository;

import com.surplus.task.domain.Transaction;

public interface TransactionRepository extends CrudRepository<Transaction,Long>
{
	public Transaction findByTransId(int transId);

	public Iterable<Transaction> findByProductId(int productId);

}
