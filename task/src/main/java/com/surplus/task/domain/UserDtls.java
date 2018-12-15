package com.surplus.task.domain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@javax.persistence.Entity
public class UserDtls {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	//@Column(name = "user_Dtl_Id")
	protected int userDtlId;
	
	//foreign key
	protected int userId;

	protected String fName;

	protected String mName;

	protected String lName;

	protected String designation;

	protected String phone;

	protected String eMail;

	protected String company;

	protected String faxNo;

	protected String address1;

	protected String address2;

	protected String city;

	protected String state;

	protected int pinCode;

	// @MapsId, which defines thatSecundus identifier will be determined by
	// Primus identifier,
	// and @JoinColumn, specifying which column in SECUNDUS table will be used
	// for joining.COMMENTING FOR THE TIME BEING
	/*@javax.persistence.OneToOne
	@MapsId
	@JoinColumn(name = "user_Id")
	protected User user;*/
	
	
	public UserDtls() {
		super();
	}

/*	public void basicSetUser(User myUser) {
		if (this.user != myUser) {
			if (myUser != null) {
				if (this.user != myUser) {
					User olduser = this.user;
					this.user = myUser;
					if (olduser != null)
						olduser.unsetUserDtls();
				}
			}
		}
	}*/

	public int getUserDtlId() {
		return userDtlId;
	}

	public void setUserDtlId(int userDtlId) {
		this.userDtlId = userDtlId;
	}
	
	public String getFName() {
		return this.fName;
	}

	public String getMName() {
		return this.mName;
	}

	public String getLName() {
		return this.lName;
	}

	public String getDesignation() {
		return this.designation;
	}

	public String getPhone() {
		return this.phone;
	}

	public String getEMail() {
		return this.eMail;
	}

	public String getCompany() {
		return this.company;
	}

	public String getFaxNo() {
		return this.faxNo;
	}

	public String getAddress1() {
		return this.address1;
	}

	public String getAddress2() {
		return this.address2;
	}

	public String getCity() {
		return this.city;
	}

	public String getState() {
		return this.state;
	}

	public int getPinCode() {
		return this.pinCode;
	}

	public void setFName(String myFName) {
		this.fName = myFName;
	}

	public void setMName(String myMName) {
		this.mName = myMName;
	}

	public void setLName(String myLName) {
		this.lName = myLName;
	}

	public void setDesignation(String myDesignation) {
		this.designation = myDesignation;
	}

	public void setPhone(String myPhone) {
		this.phone = myPhone;
	}

	public void setEMail(String myEMail) {
		this.eMail = myEMail;
	}

	public void setCompany(String myCompany) {
		this.company = myCompany;
	}

	public void setFaxNo(String myFaxNo) {
		this.faxNo = myFaxNo;
	}

	public void setAddress1(String myAddress1) {
		this.address1 = myAddress1;
	}

	public void setAddress2(String myAddress2) {
		this.address2 = myAddress2;
	}

	public void setCity(String myCity) {
		this.city = myCity;
	}

	public void setState(String myState) {
		this.state = myState;
	}

	public void setPinCode(int myPinCode) {
		this.pinCode = myPinCode;
	}	
	public void unsetFName() {
		this.fName = "";
	}

	public void unsetMName() {
		this.mName = "";
	}

	public void unsetLName() {
		this.lName = "";
	}

	public void unsetDesignation() {
		this.designation = "";
	}

	public void unsetPhone() {
		this.phone = "";
	}

	public void unsetEMail() {
		this.eMail = "";
	}

	public void unsetCompany() {
		this.company = "";
	}

	public void unsetFaxNo() {
		this.faxNo = "";
	}

	public void unsetAddress1() {
		this.address1 = "";
	}

	public void unsetAddress2() {
		this.address2 = "";
	}

	public void unsetCity() {
		this.city = "";
	}

	public void unsetState() {
		this.state = "";
	}

	public void unsetPinCode() {
		this.pinCode = 0;
	}

/*	public void unsetUser() {
		if (this.user == null)
			return;
		User olduser = this.user;
		this.user = null;
		olduser.unsetUserDtls();
	}*/

}
