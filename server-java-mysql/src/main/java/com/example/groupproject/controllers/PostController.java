package com.example.groupproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.groupproject.models.Post;
import com.example.groupproject.models.PostRepository;

@RestController
@RequestMapping("/post")
public class PostController {

	@Autowired
	PostRepository dao;

	@GetMapping()
	public List<Post> getPost() {
		List<Post> foundPost = dao.findAll();
		return foundPost;
	}

	@GetMapping("/{postId}")
	public ResponseEntity<Post> getApost(@PathVariable("postId") Integer postId) {
		Post foundPost = dao.findById(postId).orElse(null);

		if (foundPost == null) {
			return ResponseEntity.notFound().header("Message", "Nothing found with that Post Id").build();
		}
		return ResponseEntity.ok(foundPost);
	}

	@PostMapping()
	public ResponseEntity<Post> addPost(@RequestBody Post post) {
		Post createdPost = dao.save(post);
		return ResponseEntity.ok(createdPost);
	}

	@DeleteMapping("/{postId}")
	public ResponseEntity<Post> deletePost(@PathVariable(value="postId") Integer postId) {
		Post foundPost = dao.findById(postId).orElse(null);
		
		if (foundPost == null) {
			return ResponseEntity.notFound().header("Message", "Nothing found with that Post Id").build();
		}else {
			dao.delete(foundPost);
		}
		return ResponseEntity.ok().build();
	}

	
	@PutMapping("/{postId}")
	public ResponseEntity<Post> updatePost(@PathVariable(value="postId") Integer postId, @RequestBody Post post) {
		Post foundPost = dao.findById(postId).orElse(null);
		
		if(foundPost == null) {
			return ResponseEntity.notFound().header("Message", "Nothing found with that Post ID").build();
		} else {
			dao.save(post);
		}
		return ResponseEntity.ok(post);
	}
}
