"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_1 = require("../models/task");
var TaskDisplayComponent = /** @class */ (function () {
    function TaskDisplayComponent(taskService) {
        this.taskService = taskService;
        this.newTask = new task_1.Task();
        this.tasks = [];
    }
    TaskDisplayComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) { return (_this.tasks = tasks); });
    };
    TaskDisplayComponent.prototype.addTask = function () {
        var _this = this;
        this.taskService.addTask(this.newTask).subscribe(function (result) {
            _this.getTasks();
            _this.newTask = new task_1.Task();
        });
    };
    TaskDisplayComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    TaskDisplayComponent = __decorate([
        core_1.Component({
            selector: "app-task-display",
            templateUrl: "./task-display.component.html",
            styleUrls: ["./task-display.component.css"]
        })
    ], TaskDisplayComponent);
    return TaskDisplayComponent;
}());
exports.TaskDisplayComponent = TaskDisplayComponent;
