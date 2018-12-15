package com.surplus.task.service;

import com.surplus.task.domain.Transaction;

public interface TransactionService {
	
	public Iterable<Transaction> list();
	public Transaction getTransaction(int trId);
	public boolean save (Transaction transaction);
	public boolean deleteTransaction(int transId);
	public Iterable<Transaction> getTransactionByProductId(int productId);

}
