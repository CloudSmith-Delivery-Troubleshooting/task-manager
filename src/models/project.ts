export interface Project {
    id: string;
    name: string;
    description?: string;
    tasks: string[]; // array of task IDs
}
