package com.surplus.task.service;

import org.springframework.stereotype.Service;

import com.surplus.task.domain.Negotiate;
import com.surplus.task.repository.NegotiateRepository;



@Service
public class NegotiateServiceImpl implements NegotiateService {
	
	private NegotiateRepository negotiateRepository; 
	
	NegotiateServiceImpl(NegotiateRepository negotiateRepository){
		this.negotiateRepository = negotiateRepository;		
	}

	@Override
	public Iterable<Negotiate> list() {
		return negotiateRepository.findAll();
	}

	@Override
	public boolean save(Negotiate negotiate) {
		boolean isSaved = true;
		try{
		this.negotiateRepository.save(negotiate);
		}catch(Exception ex)
		{
			isSaved = false;
			System.out.println("exception in NegotiateServiceImpl is :"+ex.getMessage());
		}
		return isSaved;
	}	
	public boolean deleteNegotiate(int negotiateId){
		Negotiate negotiate = null;
		boolean isDelete = true;
		try{
		negotiate = this.negotiateRepository.findByNegotiateId(negotiateId);		
		 this.negotiateRepository.delete(negotiate);
		}catch(Exception ex)
		{
			isDelete = false;
			System.out.println("exception in NegotiateServiceImpl is :"+ex);
		}
		return isDelete;
	}

	@Override
	public Negotiate getNegotiate(int negotiateId) {
		Negotiate	negotiate = null;
		try{
			negotiate = this.negotiateRepository.findByNegotiateId(negotiateId);
			}catch(Exception ex)
			{
				System.out.println("exception in NegotiateServiceImpl is :"+ex);
			}
		return negotiate;
	}

	@Override
	public Iterable<Negotiate> getNegotiateByUserId(int userId) {
		Iterable<Negotiate>	listNegotiate = null;
		try{
			listNegotiate = this.negotiateRepository.findByUserIdOrderByUpdatedOnAsc(userId);
			}catch(Exception ex)
			{
				System.out.println("exception in NegotiateServiceImpl is :"+ex);
			}
		return listNegotiate;
		
	}
}
