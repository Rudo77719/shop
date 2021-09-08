import {rxlGetAllTaskDone, rxGetAllTaskPanding} from "../../stateManagment/actions/tasksActions";

class TasksController {
    constructor (taskOperations) {
        this.taskOperations = taskOperations;
    }
    addTask = async (state, action) => {
        const response = this.taskOperations.addTask(action.payload);
        return response;
    }

    getAllTasks = async (state, action) => {
        state.dispatch(rxGetAllTaskPanding())
        const response = await this.taskOperations.getAllTasks(action.payload);
        state.dispatch(rxlGetAllTaskDone(response));
    }

    getTaskId = async (state, action) => {
        const response = this.taskOperations.getTaskId(action.payload);
        return response;
    }
}

export default TasksController;