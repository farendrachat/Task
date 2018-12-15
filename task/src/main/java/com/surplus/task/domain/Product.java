package com.surplus.task.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Temporal;

@Entity
public class Product {

	@Column(nullable = false)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	protected int offerId;
	
	@Column(nullable = false)
	protected String product;
	
	@Column(nullable = false)
	protected String name;	
	
	@Column(nullable = false)
	protected String category;

	@Column(nullable = false)
	protected int sellerId;

	protected String availableQty;

	@Column(nullable = false)
	protected String qtyExpressed;

	protected String unitPrice;

	/*
	 *  inserting and fetching BLOB data such as images requires two steps: 
	 *  a>define database column type as “BLOB” and 
	 *  b>have a field in entity of type “byte array”.
	 *  Strings are mapped to database type CLOB and byte[] to BLOB
	 */
	@Lob
   // @Column(name = "IMAGE")	
	protected  byte[] pic1;

	protected byte[] pic2;

	protected byte[] pic3;
	
	protected byte[] pic4;

	protected byte[] coa;	

	protected byte[] specificationSheet;
	
	protected byte[] msds;	

//	@Temporal(javax.persistence.TemporalType.DATE)
	protected String updateOn;
	
//	@Temporal(javax.persistence.TemporalType.DATE)
	protected String dateManufacture;
	
//	@Temporal(javax.persistence.TemporalType.DATE)
	protected String dateExpire;
	
	protected String loadedBy;

	@Column(nullable = false)
	protected String approved;

	
	protected String approvedBy;	
	
	@Column(nullable = false)
	protected String state;	

	@Column(nullable = false)
	protected String city;		
	
	protected String brand;		
	
	

	public int getOfferId() {
		return offerId;
	}

	public void setOfferId(int offerId) {
		this.offerId = offerId;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public int getSellerId() {
		return sellerId;
	}

	public void setSellerId(int sellerId) {
		this.sellerId = sellerId;
	}

	public String getAvailableQty() {
		return availableQty;
	}

	public void setAvailableQty(String availableQty) {
		this.availableQty = availableQty;
	}

	public String getQtyExpressed() {
		return qtyExpressed;
	}

	public void setQtyExpressed(String qtyExpressed) {
		this.qtyExpressed = qtyExpressed;
	}

	public String getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(String unitPrice) {
		this.unitPrice = unitPrice;
	}

	public byte[] getPic1() {
		return pic1;
	}

	public void setPic1(byte[] pic1) {
		this.pic1 = pic1;
	}

	public byte[] getPic2() {
		return pic2;
	}

	public void setPic2(byte[] pic2) {
		this.pic2 = pic2;
	}

	public byte[] getPic3() {
		return pic3;
	}

	public void setPic3(byte[] pic3) {
		this.pic3 = pic3;
	}

	public byte[] getPic4() {
		return pic4;
	}

	public void setPic4(byte[] pic4) {
		this.pic4 = pic4;
	}

	public byte[] getCoa() {
		return coa;
	}

	public void setCoa(byte[] coa) {
		this.coa = coa;
	}

	public byte[] getSpecificationSheet() {
		return specificationSheet;
	}

	public void setSpecificationSheet(byte[] specificationSheet) {
		this.specificationSheet = specificationSheet;
	}

	public byte[] getMsds() {
		return msds;
	}

	public void setMsds(byte[] msds) {
		this.msds = msds;
	}

	public String getUpdateOn() {
		return updateOn;
	}

	public void setUpdateOn(String updateOn) {
		this.updateOn = updateOn;
	}

	public String getDateManufacture() {
		return dateManufacture;
	}

	public void setDateManufacture(String dateManufacture) {
		this.dateManufacture = dateManufacture;
	}

	public String getDateExpire() {
		return dateExpire;
	}

	public void setDateExpire(String dateExpire) {
		this.dateExpire = dateExpire;
	}

	public String getLoadedBy() {
		return loadedBy;
	}

	public void setLoadedBy(String loadedBy) {
		this.loadedBy = loadedBy;
	}

	public String getApproved() {
		return approved;
	}

	public void setApproved(String approved) {
		this.approved = approved;
	}

	public String getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

}
