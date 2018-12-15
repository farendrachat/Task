package com.surplus.task.domain;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@javax.persistence.Entity
@Table(name="Message")
public class Message {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@javax.persistence.Column(nullable = false)
	protected int msgId;

	@javax.persistence.Column(nullable = false)
	protected int senderId;

	protected String message;

	//@javax.persistence.Temporal(javax.persistence.TemporalType.DATE)
	protected LocalDate sentOn;

	@javax.persistence.Column(nullable = false)
	protected boolean isReceived;

	public Message() {
		super();
	}

	public Message(int i, String msg, LocalDate sentDate, boolean isRec) {
		senderId = i;
		message = msg;
		sentOn = sentDate;
		isReceived = isRec;
	}

	public int getMsgId() {
		return this.msgId;
	}

	public int getSenderId() {
		return this.senderId;
	}

	public String getMessage() {
		return this.message;
	}

	public LocalDate getSentOn() {
		return this.sentOn;
	}

	public boolean isIsReceived() {
		return this.isReceived;
	}

	public void setMsgId(int myMsgId) {
		this.msgId = myMsgId;
	}

	public void setSenderId(int mySenderId) {
		this.senderId = mySenderId;
	}

	public void setMessage(String myMessage) {
		this.message = myMessage;
	}

	public void setSentOn(LocalDate mySentOn) {
		this.sentOn = mySentOn;
	}

	public void setIsReceived(boolean myIsReceived) {
		this.isReceived = myIsReceived;
	}

	public void unsetMsgId() {
		this.msgId = 0;
	}

	public void unsetSenderId() {
		this.senderId = 0;
	}

	public void unsetMessage() {
		this.message = new String();
	}

	public void unsetSentOn() {
		this.sentOn = LocalDate.now();
	}

	public void unsetIsReceived() {
		this.isReceived = false;
	}

}
