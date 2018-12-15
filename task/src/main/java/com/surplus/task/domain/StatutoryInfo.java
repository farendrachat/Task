package com.surplus.task.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class StatutoryInfo {

	@Id
	@Column
	protected int statutoryInfoId;

	@Column(nullable = false)
	protected String name;

	@Column(nullable = false)
	protected String pan;

	@Column(nullable = false)
	protected String tinGst;

	@Column(nullable = false)
	protected String cin;

	@Column(nullable = false)
	protected String range;

	@Column(nullable = false)
	protected String division;

	@Column(nullable = false)
	protected String drugLicNo;

	@Column(nullable = false)
	protected String fssaiNo;

	@Column(nullable = false)
	protected String premises;

	@Column(nullable = false)
	protected int employeeNos;

	@Column(nullable = false)
	protected String prodManufactured;

	// @MapsId, which defines thatSecundus identifier will be determined by
	// Primus identifier,
	// and @JoinColumn, specifying which column in SECUNDUS table will be used
	// for joining.
	/*@OneToOne
	@MapsId
	@JoinColumn(name = "statutory_Info_Id")
	protected User user;*/
	
	//foreign key
	protected int userId;

	
	public StatutoryInfo() {
		super();
	}

/*	public void basicSetUser(User myUser) {
		if (this.user != myUser) {
			if (myUser != null) {
				if (this.user != myUser) {
					User olduser = this.user;
					this.user = myUser;
					if (olduser != null)
						olduser.unsetStatutoryInfo();
				}
			}
		}
	}*/

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getStatutoryInfoId() {
		return statutoryInfoId;
	}

	public void setStatutoryInfoId(int statutoryInfoId) {
		this.statutoryInfoId = statutoryInfoId;
	}

	public String getName() {
		return this.name;
	}

	public String getPan() {
		return this.pan;
	}

	public String getTinGst() {
		return this.tinGst;
	}

	public String getCin() {
		return this.cin;
	}

	public String getRange() {
		return this.range;
	}

	public String getDivision() {
		return this.division;
	}

	public String getDrugLicNo() {
		return this.drugLicNo;
	}

	public String getFssaiNo() {
		return this.fssaiNo;
	}

	public String getPremises() {
		return this.premises;
	}

	public int getEmployeeNos() {
		return this.employeeNos;
	}

	public String getProdManufactured() {
		return this.prodManufactured;
	}

	/*public User getUser() {
		return this.user;
	}*/
	
	public void setName(String myName) {
		this.name = myName;
	}

	public void setPan(String myPan) {
		this.pan = myPan;
	}

	public void setTinGst(String myTinGst) {
		this.tinGst = myTinGst;
	}

	public void setCin(String myCin) {
		this.cin = myCin;
	}

	public void setRange(String myRange) {
		this.range = myRange;
	}

	public void setDivision(String myDivision) {
		this.division = myDivision;
	}

	public void setDrugLicNo(String myDrugLicNo) {
		this.drugLicNo = myDrugLicNo;
	}

	public void setFssaiNo(String myFssaiNo) {
		this.fssaiNo = myFssaiNo;
	}

	public void setPremises(String myPremises) {
		this.premises = myPremises;
	}

	public void setEmployeeNos(int myEmployeeNos) {
		this.employeeNos = myEmployeeNos;
	}

	public void setProdManufactured(String myProdManufactured) {
		this.prodManufactured = myProdManufactured;
	}

	/*public void setUser(User myUser) {
		this.basicSetUser(myUser);
		myUser.basicSetStatutoryInfo(this);

	}*/

	public void unsetName() {
		this.name = "";
	}

	public void unsetPan() {
		this.pan = "";
	}

	public void unsetTinGst() {
		this.tinGst = "";
	}

	public void unsetCin() {
		this.cin = "";
	}

	public void unsetRange() {
		this.range = "";
	}

	public void unsetDivision() {
		this.division = "";
	}

	public void unsetDrugLicNo() {
		this.drugLicNo = "";
	}

	public void unsetFssaiNo() {
		this.fssaiNo = "";
	}

	public void unsetPremises() {
		this.premises = "";
	}

	public void unsetEmployeeNos() {
		this.employeeNos = 0;
	}

	public void unsetProdManufactured() {
		this.prodManufactured = "";
	}

	/*public void unsetUser() {
		if (this.user == null)
			return;
		User olduser = this.user;
		this.user = null;
		olduser.unsetStatutoryInfo();
	}*/

}
