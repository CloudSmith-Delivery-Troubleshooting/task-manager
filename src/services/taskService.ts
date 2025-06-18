import { Project } from '../models/project';
import { Task, TaskPriority, TaskStatus } from '../models/task';
import { v4 as uuidv4 } from 'uuid';

export class TaskService {
    private projects: Map<string, Project> = new Map();
    private tasks: Map<string, Task> = new Map();

    // Project methods
    createProject(name: string, description?: string): Project {
        if (!name || name.trim() === '') {
            throw new Error('Project name is required');
        }
        const id = uuidv4();
        const project: Project = { id, name, description, tasks: [] };
        this.projects.set(id, project);
        return project;
    }

    getProject(id: string): Project {
        const project = this.projects.get(id);
        if (!project) throw new Error('Project not found');
        return project;
    }

    listProjects(): Project[] {
        return Array.from(this.projects.values());
    }

    deleteProject(id: string): void {
        const project = this.getProject(id);
        // Delete all tasks associated with this project
        project.tasks.forEach(taskId => this.tasks.delete(taskId));
        this.projects.delete(id);
    }

    // Task methods
    createTask(
        projectId: string,
        title: string,
        description?: string,
        status: TaskStatus = 'ToDo',
        priority: TaskPriority = 'Medium'
    ): Task {
        if (!title || title.trim() === '') {
            throw new Error('Task title is required');
        }
        if (!this.projects.has(projectId)) {
            throw new Error('Project does not exist');
        }
        const id = uuidv4();
        const task: Task = { id, projectId, title, description, status, priority };
        this.tasks.set(id, task);

        // Add task to project
        const project = this.projects.get(projectId)!;
        project.tasks.push(id);

        return task;
    }

    getTask(id: string): Task {
        const task = this.tasks.get(id);
        if (!task) throw new Error('Task not found');
        return task;
    }

    updateTask(
        id: string,
        updates: Partial<Omit<Task, 'id' | 'projectId'>>
    ): Task {
        const task = this.getTask(id);
        if (updates.title !== undefined) {
            if (updates.title.trim() === '') {
                throw new Error('Task title cannot be empty');
            }
            task.title = updates.title;
        }
        if (updates.description !== undefined) {
            task.description = updates.description;
        }
        if (updates.status !== undefined) {
            if (!['ToDo', 'InProgress', 'Done'].includes(updates.status)) {
                throw new Error('Invalid task status');
            }
            task.status = updates.status;
        }
        if (updates.priority !== undefined) {
            if (!['Low', 'Medium', 'High'].includes(updates.priority)) {
                throw new Error('Invalid task priority');
            }
            task.priority = updates.priority;
        }
        this.tasks.set(id, task);
        return task;
    }

    deleteTask(id: string): void {
        const task = this.getTask(id);
        const project = this.projects.get(task.projectId);
        if (project) {
            project.tasks = project.tasks.filter(tid => tid !== id);
        }
        this.tasks.delete(id);
    }

    listTasks(projectId: string): Task[] {
        const project = this.getProject(projectId);
        return project.tasks.map(taskId => this.tasks.get(taskId)!);
    }
}
