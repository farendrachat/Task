package com.surplus.task.service;

import com.surplus.task.domain.Negotiate;

public interface NegotiateService {
	
	public Negotiate getNegotiate(int negotiateId);
	public Iterable<Negotiate> list();
	public boolean save (Negotiate negotiate);
	public boolean deleteNegotiate(int negotiateId);
	public Iterable<Negotiate> getNegotiateByUserId(int userId);

}
