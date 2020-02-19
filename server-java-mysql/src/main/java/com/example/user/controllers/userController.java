package com.example.user.controllers;

public class userController {
	
	@Autowired
	UserRepository userRepository;
	
	
	@GetMapping("/chat")
	public List<user> getUser(){	
		return userRepository.findAll();
}
	@GetMapping("/chat/{id}")
	public User getUser(@PathVariable Integer id) {
		User foundUser = userRepository.findById(id).orElse(null);
		return foundUser;
	}
	
	@PostMapping("/chat")
	public User makeUser(@RequestBody User user) {
		userRepository.save(user);
		return user;
	}
	
	@DeleteMapping("/chat/{id}")
	public User deleteUser(@PathVariable Integer id) {
		user foundUser = userRepository.findById(id).orElse(null); 
		userRepository.delete(foundUser);
		return foundUser;
	}
	
	@PutMapping("/chat/{id}")
	public User updateUser(@PathVariable Integer id, @RequestBody User user) {
		User foundUser = userRepository.findById(id).orElse(null);
		foundUser.setName(user.getName());
		foundUser.setContent(user.getContent());
		userRepository.save(founduser);
		return foundUser;
	}
}

}
