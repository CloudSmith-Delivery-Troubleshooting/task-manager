"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskService_1 = require("../services/taskService");
describe('TaskService', () => {
    let service;
    beforeEach(() => {
        service = new taskService_1.TaskService();
    });
    test('should create a project', () => {
        const project = service.createProject('Test Project', 'Description');
        expect(project.name).toBe('Test Project');
        expect(project.tasks).toHaveLength(0);
    });
    test('should not create a project with empty name', () => {
        expect(() => service.createProject('')).toThrow('Project name is required');
    });
    test('should create a task in a project', () => {
        const project = service.createProject('Project');
        const task = service.createTask(project.id, 'Task 1');
        expect(task.title).toBe('Task 1');
        expect(task.status).toBe('ToDo');
        expect(service.listTasks(project.id)).toHaveLength(1);
    });
    test('should not create a task with empty title', () => {
        const project = service.createProject('Project');
        expect(() => service.createTask(project.id, '')).toThrow('Task title is required');
    });
    test('should update a task', () => {
        const project = service.createProject('Project');
        const task = service.createTask(project.id, 'Task 1');
        const updated = service.updateTask(task.id, { status: 'Done', priority: 'High' });
        expect(updated.status).toBe('Done');
        expect(updated.priority).toBe('High');
    });
    test('should not update task with invalid status', () => {
        const project = service.createProject('Project');
        const task = service.createTask(project.id, 'Task 1');
        expect(() => service.updateTask(task.id, { status: 'InvalidStatus' })).toThrow('Invalid task status');
    });
    test('should delete a task', () => {
        const project = service.createProject('Project');
        const task = service.createTask(project.id, 'Task 1');
        service.deleteTask(task.id);
        expect(service.listTasks(project.id)).toHaveLength(0);
    });
    test('should delete project and its tasks', () => {
        const project = service.createProject('Project');
        service.createTask(project.id, 'Task 1');
        service.createTask(project.id, 'Task 2');
        service.deleteProject(project.id);
        expect(() => service.getProject(project.id)).toThrow('Project not found');
    });
});
