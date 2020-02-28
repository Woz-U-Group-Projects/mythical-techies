package com.mtdiscussionboard.controllers;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.Connection;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mtdiscussionboard.models.Post;

@Controller
@RequestMapping({ "/", "/index" })
public class HomeController {
	
	@Value("${spring.datasource.url}")
	private String url;

	@Value("${spring.datasource.username}")
	private String username;

	@Value("${spring.datasource.password}")
	private String password;
	
	@GetMapping()
	public String getAllPost(Model model) {
		List<Post> post = new ArrayList<Post>();
		//code to query db and add post will go here
		
		Connection con;
		try {
			con = DriverManager.getConnection(url, username, password);
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery("SELECT * FROM post");
			while (rs.next()) {
				Post newPost = new Post();
				//get values from each column
				newPost.setPostID(rs.getInt("postID"));
				newPost.setPostTitle(rs.getString("postTitle"));
				newPost.setPostDetails(rs.getString("postDetails"));
				newPost.setPostTimeStamp(rs.getTimestamp("postTimeStamp"));
				
				//add new post to post table
				post.add(newPost);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
			
		
		model.addAttribute("post", post);
		return "index";
	}

	//@PostMapping("/post")
	//public String postSubmit(@ModelAttribute Post post) {
	//	return "result";
	//}

}
 