import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Home } from "./models/home";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  // Java Spring Boot uses port 8080
  apiUrl: string = "http://localhost:8080/homes";

  // C# dotnetcore uses port 5000
  //apiUrl: string = "http://localhost:5000/api/homes";

  // Express will use port 3000
  //apiUrl: string = "http://localhost:3000/homes";

  constructor(private http: HttpClient) {}

  getHomes(): Observable<Home[]> {
    return this.http.get<Home[]>(this.apiUrl);
  }

  addHome(home): Observable<Home> {
    return this.http.post<Home>(this.apiUrl, home);
  }
}
