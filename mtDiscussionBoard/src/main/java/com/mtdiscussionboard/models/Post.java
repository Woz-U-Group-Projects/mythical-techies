package com.mtdiscussionboard.models;

import java.sql.Timestamp;

public class Post {
	
	private int postID;
	private String postTitle;
	private String postDetails;
	private Timestamp postTimeStamp; 
	
	//Getters and Setters
	
	public int getPostID() {
		return postID;
	}
	public void setPostID(int postID) {
		this.postID = postID;
	}
	public String getPostTitle() {
		return postTitle;
	}
	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}
	public String getPostDetails() {
		return postDetails;
	}
	public void setPostDetails(String postDetails) {
		this.postDetails = postDetails;
	}
	public Timestamp getPostTimeStamp() {
		return postTimeStamp;
	}
	public void setPostTimeStamp(Timestamp postTimeStamp) {
		this.postTimeStamp = postTimeStamp;
	}
	
}
