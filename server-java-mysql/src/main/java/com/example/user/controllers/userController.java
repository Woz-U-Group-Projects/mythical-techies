package com.example.user.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.user.models.User;
import com.example.user.models.UserRepository;

@RestController
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	
	@GetMapping("/user")
	public List<User> getUsers(){	
		return userRepository.findAll();
}
	@GetMapping("/user/{id}")
	public User getUser(@PathVariable Integer id) {
		User foundUser = userRepository.findById(id).orElse(null);
		return foundUser;
	}
	
	@PostMapping("/user")
	public User makeUser(@RequestBody User user) {
		userRepository.save(user);
		return user;
	}
	
	@DeleteMapping("/user/{id}")
	public User deleteUser(@PathVariable Integer id) {
		User foundUser = userRepository.findById(id).orElse(null); 
		userRepository.delete(foundUser);
		return foundUser;
	}
	
	@PutMapping("/user/{id}")
	public User updateUser(@PathVariable Integer id, @RequestBody User user) {
		User foundUser = userRepository.findById(id).orElse(null);
		foundUser.setName(user.getName());
		userRepository.save(foundUser);
		return foundUser;
	}
}
