package com.surplus.task.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Transaction {

	@Id
	@Column(nullable = false)
	protected int transId;


	@Column(nullable = false)
	protected int productId;

	@Column(nullable = false)
	protected int sellerId;

	@Column(nullable = false)
	protected int buyerId;

	protected double quantity;

	protected double totalPrice;
	
	@Temporal(TemporalType.DATE)
	protected Date updatedOn;

	@Column(nullable = false)
	protected boolean buyerMoneyReceived;
	
	//@Temporal(TemporalType.DATE)
	protected String dtBuyerMoneyReceived;

	@Column(nullable = false)
	protected boolean buyerProdReceived;
	
	//@Temporal(TemporalType.DATE)
	protected String dtBuyerProdReceived;

	@Column(nullable = false)
	protected boolean sellerMoneyReached;
	
	//@Temporal(TemporalType.DATE)
	protected String dtSellerMoneyReached;

	@Column(nullable = false)
	protected boolean completeStatus;
	
	//@Temporal(TemporalType.DATE)
	protected String dtCompleteStatus;

	@Column(nullable = false)
	protected boolean completedBy;

	@Column(nullable = false)
	protected String milestone;	

	public int getTransId() {
		return transId;
	}

	public void setTransId(int transId) {
		this.transId = transId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}

	public int getBuyerId() {
		return buyerId;
	}

	public void setBuyerId(int buyerId) {
		this.buyerId = buyerId;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	public boolean isBuyerMoneyReceived() {
		return buyerMoneyReceived;
	}

	public void setBuyerMoneyReceived(boolean buyerMoneyReceived) {
		this.buyerMoneyReceived = buyerMoneyReceived;
	}

	public String getDtBuyerMoneyReceived() {
		return dtBuyerMoneyReceived;
	}

	public void setDtBuyerMoneyReceived(String dtBuyerMoneyReceived) {
		this.dtBuyerMoneyReceived = dtBuyerMoneyReceived;
	}

	public boolean isBuyerProdReceived() {
		return buyerProdReceived;
	}

	public void setBuyerProdReceived(boolean buyerProdReceived) {
		this.buyerProdReceived = buyerProdReceived;
	}

	public String getDtBuyerProdReceived() {
		return dtBuyerProdReceived;
	}

	public void setDtBuyerProdReceived(String dtBuyerProdReceived) {
		this.dtBuyerProdReceived = dtBuyerProdReceived;
	}

	public boolean isSellerMoneyReached() {
		return sellerMoneyReached;
	}

	public void setSellerMoneyReached(boolean sellerMoneyReached) {
		this.sellerMoneyReached = sellerMoneyReached;
	}

	public String getDtSellerMoneyReached() {
		return dtSellerMoneyReached;
	}

	public void setDtSellerMoneyReached(String dtSellerMoneyReached) {
		this.dtSellerMoneyReached = dtSellerMoneyReached;
	}

	public boolean isCompleteStatus() {
		return completeStatus;
	}

	public void setCompleteStatus(boolean completeStatus) {
		this.completeStatus = completeStatus;
	}

	public String getDtCompleteStatus() {
		return dtCompleteStatus;
	}

	public void setDtCompleteStatus(String dtCompleteStatus) {
		this.dtCompleteStatus = dtCompleteStatus;
	}

	public boolean isCompletedBy() {
		return completedBy;
	}

	public void setCompletedBy(boolean completedBy) {
		this.completedBy = completedBy;
	}

	public String getMilestone() {
		return milestone;
	}

	public void setMilestone(String milestone) {
		this.milestone = milestone;
	}

	public Transaction() {
		super();
	}
	
	

}
