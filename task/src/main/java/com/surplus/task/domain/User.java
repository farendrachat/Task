package com.surplus.task.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/*
 * SQL USED:
 * create database surpluskart;
 * show databases;
 * create user 'sk_admin'@'localhost' identified by 'sk_admin@1';
 * GRANT ALL PRIVILEGES ON *.* TO 'sk_admin'@'localhost' WITH GRANT OPTION;
 */
@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "user_id", nullable = false)
	protected int userId;

	@Column(nullable = false)
	protected String name;

	@Column(nullable = false)
	protected String pwd;

	/*@OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
	protected UserDtls userDtls;

	@OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
	protected UserAdministration userAdministration;*/

//	@OneToOne(mappedBy = "user")
	
/*	@OneToMany(mappedBy = "user")
	protected Set<Authorities> authorities;*/

	// @OneToMany(mappedBy = "user")
	// protected Set<Approval> approvals;

	// WILL MANAGE IT OTHER WAY
	// @ManyToMany
	// protected Set<Transaction> transaction;

	// WILL MANAGE IT OTHER WAY
	// @OneToMany(mappedBy = "user")
	// protected Set<Product> product;

/*	@OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
	protected StatutoryInfo statutoryInfo;*/

	// WILL MANAGE IT OTHER WAY
	// @OneToMany(mappedBy = "user")
	// protected Set<Message> message;

	// WILL MANAGE IT OTHER WAY
	// @ManyToMany
	// protected Set<Negotiate> negotiate;

	public User() {
		super();
	}

/*	public void basicSetUserDtls(UserDtls myUserDtls) {
		if (this.userDtls != myUserDtls) {
			if (myUserDtls != null) {
				if (this.userDtls != myUserDtls) {
					UserDtls olduserDtls = this.userDtls;
					this.userDtls = myUserDtls;
					if (olduserDtls != null)
						olduserDtls.unsetUser();
				}
			}
		}
	}*/

/*	public void basicSetAdminUser(UserAdministration myAdminUser) {
		if (this.userAdministration != myAdminUser) {
			if (myAdminUser != null) {
				if (this.userAdministration != myAdminUser) {
					UserAdministration oldadminUser = this.userAdministration;
					this.userAdministration = myAdminUser;
					if (oldadminUser != null)
						oldadminUser.unsetUser();
				}
			}
		}
	}*/

	/*public void basicSetStatutoryInfo(StatutoryInfo myStatutoryInfo) {
		if (this.statutoryInfo != myStatutoryInfo) {
			if (myStatutoryInfo != null) {
				if (this.statutoryInfo != myStatutoryInfo) {
					StatutoryInfo oldstatutoryInfo = this.statutoryInfo;
					this.statutoryInfo = myStatutoryInfo;
					if (oldstatutoryInfo != null)
						oldstatutoryInfo.unsetUser();
				}
			}
		}
	}*/

	public int getUserId() {
		return this.userId;
	}

	public String getName() {
		return this.name;
	}

	public String getPwd() {
		return this.pwd;
	}

/*	public UserDtls getUserDtls() {
		return this.userDtls;
	}

	public UserAdministration getAdminUser() {
		return this.userAdministration;
	}

	public Set<Authorities> getAuthorities() {
		if (this.authorities == null) {
			this.authorities = new HashSet<Authorities>();
		}
		return (Set<Authorities>) this.authorities;
	}*/

/*	public Set<Approval> getApprovals() {
		if(this.approvals == null) {
				this.approvals = new HashSet<Approval>();
		}
		return (Set<Approval>) this.approvals;
	}*/

	/*	public Set<Transaction> getTransaction() {
		if(this.transaction == null) {
				this.transaction = new HashSet<Transaction>();
		}
		return (Set<Transaction>) this.transaction;
	}*/

	/*	public Set<Product> getProduct() {
		if(this.product == null) {
				this.product = new HashSet<Product>();
		}
		return (Set<Product>) this.product;
	}*/

	/*public StatutoryInfo getStatutoryInfo() {
		return this.statutoryInfo;
	}*/

	public void setUserId(int myUserId) {
		this.userId = myUserId;
	}

	public void setName(String myName) {
		this.name = myName;
	}

	public void setPwd(String myPwd) {
		this.pwd = myPwd;
	}

/*	public void setUserDtls(UserDtls myUserDtls) {
		this.basicSetUserDtls(myUserDtls);
		myUserDtls.basicSetUser(this);

	}

	public void setStatutoryInfo(StatutoryInfo myStatutoryInfo) {
		this.basicSetStatutoryInfo(myStatutoryInfo);
		myStatutoryInfo.basicSetUser(this);

	}*/

	public void unsetUserId() {
		this.userId = 0;
	}

	public void unsetName() {
		this.name = "";
	}

	public void unsetPwd() {
		this.pwd = "";
	}

	/*public void unsetUserDtls() {
		if (this.userDtls == null)
			return;
		UserDtls olduserDtls = this.userDtls;
		this.userDtls = null;
		olduserDtls.unsetUser();
	}

	public void unsetAdminUser() {
		if (this.userAdministration == null)
			return;
		UserAdministration oldadminUser = this.userAdministration;
		this.userAdministration = null;
		oldadminUser.unsetUser();
	}

	public void unsetStatutoryInfo() {
		if (this.statutoryInfo == null)
			return;
		StatutoryInfo oldstatutoryInfo = this.statutoryInfo;
		this.statutoryInfo = null;
		oldstatutoryInfo.unsetUser();
	}*/

}
