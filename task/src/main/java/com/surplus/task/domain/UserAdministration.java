
package com.surplus.task.domain;

import javax.persistence.Id;

@javax.persistence.Entity
public class UserAdministration {

	@Id
	@javax.persistence.Column(nullable = false)
	protected int userAdministrationId;

	@javax.persistence.Column(nullable = false)
	protected int infoId;

	@javax.persistence.Column(nullable = false)
	protected String introducedBy;

	@javax.persistence.Column(nullable = false)
	protected String reference;

	@javax.persistence.Column(nullable = false)
	protected String approvedBy;

	@javax.persistence.Column(nullable = false)
	protected String entered_By;

	@javax.persistence.Column(nullable = false)
	protected String payTerms;

	@javax.persistence.Column(nullable = false)
	protected String turnOverLimit;

	// @javax.persistence.OneToOne(mappedBy = "adminUser")
	/*@OneToOne(fetch = FetchType.LAZY)
	// @JoinColumn(name = "user_Id") // use this if any problem
	// This maps the UserAdministration id value with that of User id value.This
	// way, the id column serves as both Primary Key and FK.
	@MapsId
	protected User user;*/

	public UserAdministration() {
		super();
	}
	
	//foreign key
	protected int userId;

/*	public void basicSetUser(User myUser) {
		if (this.user != myUser) {
			if (myUser != null) {
				if (this.user != myUser) {
					User olduser = this.user;
					this.user = myUser;
					if (olduser != null)
						olduser.unsetAdminUser();
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

	public int getUserAdministrationId() {
		return userAdministrationId;
	}

	public void setUserAdministrationId(int userAdministrationId) {
		this.userAdministrationId = userAdministrationId;
	}

	public int getInfoId() {
		return this.infoId;
	}

	public String getIntroducedBy() {
		return this.introducedBy;
	}

	public String getReference() {
		return this.reference;
	}

	public String getApprovedBy() {
		return this.approvedBy;
	}

	public String getEntered_By() {
		return this.entered_By;
	}

	public String getPayTerms() {
		return this.payTerms;
	}

	public String getTurnOverLimit() {
		return this.turnOverLimit;
	}

	/*public User getUser() {
		return this.user;
	}*/

	public void setInfoId(int myInfoId) {
		this.infoId = myInfoId;
	}

	public void setIntroducedBy(String myIntroducedBy) {
		this.introducedBy = myIntroducedBy;
	}

	public void setReference(String myReference) {
		this.reference = myReference;
	}

	public void setApprovedBy(String myApprovedBy) {
		this.approvedBy = myApprovedBy;
	}

	public void setEntered_By(String myEntered_By) {
		this.entered_By = myEntered_By;
	}

	public void setPayTerms(String myPayTerms) {
		this.payTerms = myPayTerms;
	}

	public void setTurnOverLimit(String myTurnOverLimit) {
		this.turnOverLimit = myTurnOverLimit;
	}

	/*public void setUser(User myUser) {
		this.basicSetUser(myUser);
		myUser.basicSetAdminUser(this);

	}*/

	public void unsetInfoId() {
		this.infoId = 0;
	}

	public void unsetIntroducedBy() {
		this.introducedBy = "";
	}

	public void unsetReference() {
		this.reference = "";
	}

	public void unsetApprovedBy() {
		this.approvedBy = "";
	}

	public void unsetEntered_By() {
		this.entered_By = "";
	}

	public void unsetPayTerms() {
		this.payTerms = "";
	}

	public void unsetTurnOverLimit() {
		this.turnOverLimit = "";
	}

/*	public void unsetUser() {
		if (this.user == null)
			return;
		User olduser = this.user;
		this.user = null;
		olduser.unsetAdminUser();
	}*/

}
