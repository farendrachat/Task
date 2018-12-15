package com.surplus.task.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class sellerDoc {

	@Id
	protected int documentId;
	
	protected int transId;

	@Temporal(TemporalType.DATE)
	protected Date updatedOn;
	
	@Lob
	protected  byte[] invoice;
	@Lob
	protected byte[] lrReceipt;
	@Lob
	protected byte[] performaInvoice;
	@Lob
	protected byte[] doc1;	
	@Lob
	protected byte[] doc2;
	
	public int getDocumentId() {
		return documentId;
	}

	public void setDocumentId(int documentId) {
		this.documentId = documentId;
	}

	public int getTransId() {
		return transId;
	}

	public void setTransId(int transId) {
		this.transId = transId;
	}

	public Date getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}

	public byte[] getInvoice() {
		return invoice;
	}

	public void setInvoice(byte[] invoice) {
		this.invoice = invoice;
	}

	public byte[] getLrReceipt() {
		return lrReceipt;
	}

	public void setLrReceipt(byte[] lrReceipt) {
		this.lrReceipt = lrReceipt;
	}

	public byte[] getPerformaInvoice() {
		return performaInvoice;
	}

	public void setPerformaInvoice(byte[] performaInvoice) {
		this.performaInvoice = performaInvoice;
	}

	public byte[] getDoc1() {
		return doc1;
	}

	public void setDoc1(byte[] doc1) {
		this.doc1 = doc1;
	}

	public byte[] getDoc2() {
		return doc2;
	}

	public void setDoc2(byte[] doc2) {
		this.doc2 = doc2;
	}

	public sellerDoc() {
		super();
	}
	
	

}
