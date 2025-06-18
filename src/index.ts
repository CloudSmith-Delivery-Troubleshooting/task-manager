import { TaskService } from './services/taskService';

const service = new TaskService();

try {
    // Create a project
    const project = service.createProject('Website Redesign', 'Redesign the corporate website');

    // Create tasks
    const task1 = service.createTask(project.id, 'Create wireframes', 'Design wireframes for homepage', 'ToDo', 'High');
    const task2 = service.createTask(project.id, 'Develop frontend', 'Implement UI components', 'ToDo', 'Medium');

    console.log('Project:', project);
    console.log('Tasks:', service.listTasks(project.id));

    // Update a task
    service.updateTask(task1.id, { status: 'InProgress' });
    console.log('Updated Task 1:', service.getTask(task1.id));

    // Delete a task
    service.deleteTask(task2.id);
    console.log('Tasks after deletion:', service.listTasks(project.id));

} catch (error) {
    console.error('Error:', (error as Error).message);
}
