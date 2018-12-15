package com.surplus.task.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

@Entity
public class Authorities {

	@Id
	@Column(name="authority_id",nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	protected int authorityId;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	protected Enumeration role;


//	@javax.persistence.OneToOne
//	@MapsId
//	@JoinColumn(name = "authority_Id")
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_Id")		
	protected User user;

	public Enumeration getRole() {
		return this.role;
	}

	public void setRole(Enumeration myRole) {
		this.role = myRole;
	}

	public int getAuthorityId() {
		return authorityId;
	}

	public void setAuthorityId(int authorityId) {
		this.authorityId = authorityId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
