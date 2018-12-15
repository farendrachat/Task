package com.surplus.task.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Negotiate {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false)
	protected int negotiateId;
	
	@Column(nullable = false)
	protected int productId;	

	@Column(nullable = false)
	protected int userId;	

	@Column(nullable = false)
	protected String buyerOrSeller;

	protected double price;

	protected double quantity;

	protected String message;
	
	protected String status;

	@Temporal(TemporalType.DATE)
	protected Date updatedOn;	

	public Negotiate() {
		super();
	}
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getBuyerOrSeller() {
		return buyerOrSeller;
	}

	public void setBuyerOrSeller(String buyerOrSeller) {
		this.buyerOrSeller = buyerOrSeller;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getNegotiateId() {
		return this.negotiateId;
	}
	
	public Date getUpdatedOn() {
		return this.updatedOn;
	}

	public int getProductId() {
		return this.productId;
	}

	public void setNegotiateId(int myNegotiateId) {
		this.negotiateId = myNegotiateId;
	}

	public void setUpdatedOn(Date myUpdatedOn) {
		this.updatedOn = myUpdatedOn;
	}

	public void setProductId(int myProductId) {
		this.productId = myProductId;
	}

	public void unsetNegotiateId() {
		this.negotiateId = 0;
	}	

	public void unsetUpdatedOn() {
		this.updatedOn = new Date();
	}

	public void unsetProductId() {
		this.productId = 0;
	}

}
