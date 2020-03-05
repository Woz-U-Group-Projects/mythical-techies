import { Component, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { Post } from "../models/post";

@Component({
  selector: "app-post-display",
  templateUrl: "./post-display.component.html",
  styleUrls: ["./post-display.component.css"]
})
export class PostDisplayComponent implements OnInit {
  constructor(private postService: PostService) {}
  newPost: Post = new Post();
  posts: Post[] = [];

  getPosts() {
    this.postService.getPosts().subscribe(posts => (this.posts = posts));
  }

  addPost() {
    this.postService.addPost(this.newPost).subscribe(result => {
      this.getPosts();
      this.newPost = new Post();
    });
  }

  ngOnInit() {
    this.getPosts();
  }
}
