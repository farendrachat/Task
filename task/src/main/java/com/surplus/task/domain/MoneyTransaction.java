package com.surplus.task.domain;

import java.math.BigDecimal;

import javax.persistence.Id;

public class MoneyTransaction {
	
	@Id
	protected int mTransId;	
	protected int transId;	
	protected BigDecimal buyerPrice;	
	protected BigDecimal sellerCost;	
	protected BigDecimal companyCommission;
	protected BigDecimal agentCommission;
	
	public int getmTransId() {
		return mTransId;
	}
	public void setmTransId(int mTransId) {
		this.mTransId = mTransId;
	}
	public int getTransId() {
		return transId;
	}
	public void setTransId(int transId) {
		this.transId = transId;
	}
	public BigDecimal getBuyerPrice() {
		return buyerPrice;
	}
	public void setBuyerPrice(BigDecimal buyerPrice) {
		this.buyerPrice = buyerPrice;
	}
	public BigDecimal getSellerCost() {
		return sellerCost;
	}
	public void setSellerCost(BigDecimal sellerCost) {
		this.sellerCost = sellerCost;
	}
	public BigDecimal getCompanyCommission() {
		return companyCommission;
	}
	public void setCompanyCommission(BigDecimal companyCommission) {
		this.companyCommission = companyCommission;
	}
	public BigDecimal getAgentCommission() {
		return agentCommission;
	}
	public void setAgentCommission(BigDecimal agentCommission) {
		this.agentCommission = agentCommission;
	}
	
	

}
