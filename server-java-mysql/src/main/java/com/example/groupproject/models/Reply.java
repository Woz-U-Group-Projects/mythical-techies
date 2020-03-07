package com.example.groupproject.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "reply")
public class Reply {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer replyId;
	private String replyDetails;
	
	//Getters and Setters
	public Integer getReplyId() {
		return replyId;
	}
	public void setReplyId(Integer replyId) {
		this.replyId = replyId;
	}
	
	public String getReplyDetails() {
		return replyDetails;
	}
	public void setReplyDetails(String replyDetails) {
		this.replyDetails = replyDetails;
	}
	
}
