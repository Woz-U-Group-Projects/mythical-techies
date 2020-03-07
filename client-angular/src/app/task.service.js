"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskService = /** @class */ (function () {
    // C# dotnetcore uses port 5000
    //apiUrl: string = "http://localhost:5000/api/tasks";
    // Express will use port 3000
    //apiUrl: string = "http://localhost:3000/tasks";
    function TaskService(http) {
        this.http = http;
        // Java Spring Boot uses port 8080
        this.apiUrl = "http://localhost:8080/tasks";
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.apiUrl);
    };
    TaskService.prototype.addTask = function (task) {
        return this.http.post(this.apiUrl, task);
    };
    TaskService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
