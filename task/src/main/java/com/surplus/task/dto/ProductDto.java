package com.surplus.task.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@Getter @Setter @NoArgsConstructor
@NoArgsConstructor
public class ProductDto {
	protected int offerId;
	protected String product;
	protected String name;

	protected String category;

	protected int sellerId;

	protected String availableQty;

	protected String qtyExpressed;

	protected String unitPrice;

	/*
	 * inserting and fetching BLOB data such as images requires two steps: a>define
	 * database column type as “BLOB” and b>have a field in entity of type “byte
	 * array”. Strings are mapped to database type CLOB and MultipartFile to BLOB
	 */
	
	// @Column(name = "IMAGE")
	protected MultipartFile pic1;

	protected MultipartFile pic2;

	protected MultipartFile pic3;

	protected MultipartFile pic4;

	protected MultipartFile coa;

	protected MultipartFile specificationSheet;

	protected MultipartFile msds;

	// @Temporal(javax.persistence.TemporalType.DATE)
	protected String updateOn;

	// @Temporal(javax.persistence.TemporalType.DATE)
	protected String dateManufacture;

	// @Temporal(javax.persistence.TemporalType.DATE)
	protected String dateExpire;

	protected String loadedBy;

	protected String approved;

	protected String approvedBy;

	protected String state;

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

	public MultipartFile getPic1() {
		return pic1;
	}

	public void setPic1(MultipartFile pic1) {
		this.pic1 = pic1;
	}

	public MultipartFile getPic2() {
		return pic2;
	}

	public void setPic2(MultipartFile pic2) {
		this.pic2 = pic2;
	}

	public MultipartFile getPic3() {
		return pic3;
	}

	public void setPic3(MultipartFile pic3) {
		this.pic3 = pic3;
	}

	public MultipartFile getPic4() {
		return pic4;
	}

	public void setPic4(MultipartFile pic4) {
		this.pic4 = pic4;
	}

	public MultipartFile getCoa() {
		return coa;
	}

	public void setCoa(MultipartFile coa) {
		this.coa = coa;
	}

	public MultipartFile getSpecificationSheet() {
		return specificationSheet;
	}

	public void setSpecificationSheet(MultipartFile specificationSheet) {
		this.specificationSheet = specificationSheet;
	}

	public MultipartFile getMsds() {
		return msds;
	}

	public void setMsds(MultipartFile msds) {
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
