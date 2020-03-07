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

import com.example.groupproject.models.Reply;
import com.example.groupproject.models.ReplyRepository;

@RestController
@RequestMapping("/reply")
public class ReplyController {

	@Autowired
	ReplyRepository dao;

	@GetMapping()
	public List<Reply> getReply() {
		List<Reply> foundReply = dao.findAll();
		return foundReply;
	}

	@GetMapping("/{replyId}")
	public ResponseEntity<Reply> getAreply(@PathVariable("replyId") Integer replyId) {
		Reply foundReply = dao.findById(replyId).orElse(null);

		if (foundReply == null) {
			return ResponseEntity.notFound().header("Message", "Nothing found with that Reply Id").build();
		}
		return ResponseEntity.ok(foundReply);
	}

	@PostMapping()
	public ResponseEntity<Reply> addReply(@RequestBody Reply reply) {
		Reply createdReply = dao.save(reply);
		return ResponseEntity.ok(createdReply);
	}

	@DeleteMapping("/{replyId}")
	public ResponseEntity<Reply> deleteReply(@PathVariable(value="replyId") Integer replyId) {
		Reply foundReply = dao.findById(replyId).orElse(null);
		
		if (foundReply == null) {
			return ResponseEntity.notFound().header("Message", "Nothing found with that Reply Id").build();
		}else {
			dao.delete(foundReply);
		}
		return ResponseEntity.ok().build();
	}

	@PutMapping("/{replyId}")
	public ResponseEntity<Reply> updateReply(@PathVariable(value="replyId") Integer replyId, @RequestBody Reply reply) {
		Reply foundReply = dao.findById(replyId).orElse(null);
		
		if(foundReply == null) {
			return ResponseEntity.notFound().header("Message", "Nothing found with that Reply ID").build();
		} else {
			dao.save(reply);
		}
		return ResponseEntity.ok(reply);

	}
}
