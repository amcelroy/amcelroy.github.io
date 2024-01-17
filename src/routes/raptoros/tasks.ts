import { v4 as uuidv4 } from 'uuid';

export class Task {
    name: string; /// The name of the task.
    instance: number; /// The instance number of the task.
    uuid: string; /// The UUID of the task.

    constructor(name: string, instance: number, uuid: string) {
        this.name = name;
        this.instance = instance;
        this.uuid = uuid;
    }

    updateInstance(instance: number) {
        this.instance = instance;
    }
}

export class TaskManager {
    tasks: Map<string, Task> = new Map();

    constructor() {

    }

    /// Removes the task from the task manager.
    closeTask(uuid: string) {
        this.tasks.delete(uuid);
    }

    /// Finds all tasks with a given name.
    /// 
    /// Returns all tasks with that name, or an empty array if no tasks are found.
    findTasks(name: string): Task[] {
        let tasks: Task[] = [];
        this.tasks.forEach((task: Task) => {
            if (task.name == name) {
                tasks.push(task);
            }
        });
        return tasks;
    }

    /// Attempts to find a task by the UUID. 
    /// 
    /// Returns undefined if no task is found.
    findTask(uuid: string): Task | undefined {
        return this.tasks.get(uuid);
    }

    /// Spawns a new task with a given name. Automatically searches existing 
    /// tasks and determines the next instance number for duplicate task names.
    /// 
    /// Returns the auto-generated UUID of the new task.
    spawn(name: string): string {
        let tasks = this.findTasks(name);
        let task_instance: number[] = [];
        tasks.forEach((task: Task) => {
            task_instance.push(task.instance);
        });

        let max = 0;
        if (task_instance.length > 0) {
            max = Math.max(...task_instance);
        }

        let uuid = uuidv4();
        let new_task = new Task(name, max + 1, uuid);
        this.tasks.set(uuid, new_task);
        return uuid;
    }

    getTasks(): Task[] {
        let tasks: Task[] = [];
        this.tasks.forEach((task: Task) => {
            tasks.push(task);
        });
        return tasks;
    }

}