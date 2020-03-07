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

import com.example.groupproject.models.User;
import com.example.groupproject.models.UserRepository;

@RestController
@RequestMapping("/user")

public class UserController {

	@Autowired
	  UserRepository dao;

	  @GetMapping()
	  public List<User> getUsers() {
		  List<User> foundUsers = dao.findAll();
		  return foundUsers;
	  }
	  
	  @GetMapping("/{userId}")
		public ResponseEntity<User> getUser(@PathVariable("userId") Integer userId) {
			User foundUser = dao.findById(userId).orElse(null);

			if (foundUser == null) {
				return ResponseEntity.notFound().header("Message", "Nothing found with that User Id").build();
			}
			return ResponseEntity.ok(foundUser);
		}
	  
	  @PostMapping()
		public ResponseEntity<User> addUser(@RequestBody User user) {
			User createdUser = dao.save(user);
			return ResponseEntity.ok(createdUser);
		}
	
	  @DeleteMapping("/{userId}")
		public ResponseEntity<User> deleteUser(@PathVariable(value="userId") Integer userId) {
			User foundUser = dao.findById(userId).orElse(null);
			
			if (foundUser == null) {
				return ResponseEntity.notFound().header("Message", "Nothing found with that User Id").build();
			}else {
				dao.delete(foundUser);
			}
			return ResponseEntity.ok().build();
		}

	  @PutMapping("/{userId}")
		public ResponseEntity<User> updateUser(@PathVariable(value="userId") Integer userId, @RequestBody User user) {
			User foundUser = dao.findById(userId).orElse(null);
			
			if(foundUser == null) {
				return ResponseEntity.notFound().header("Message", "Nothing found with that User ID").build();
			} else {
				dao.save(user);
			}
			return ResponseEntity.ok(user);
		}
}
