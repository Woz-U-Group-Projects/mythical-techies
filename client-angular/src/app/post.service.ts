import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./models/post";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  // Java Spring Boot uses port 8080
  apiUrl: string = "http://localhost:8080/posts";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/posts";

  // Express will use port 3000
  //apiUrl: string = "http://localhost:3000/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  addPost(post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }
}
