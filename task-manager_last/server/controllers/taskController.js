const User = require('../../database/model/user_model');
const Task = require('../../database/model/task_model');

const addTask = async(req, res) => {
    //console.log(req.body);

    const {task, id} = req.body;

    try {
        if(!task) return res.status(400).send("Please enter the task");
        if(task.length < 5) return res.status(400).send("add minimum 10 characters");

        const taskDetails = await new Task({
            task,
            createBy: id,
        })

        await taskDetails.save();
        return res.status(200).send(taskDetails);
    } catch (error) {
        return res.status(400).send("task addition failed");
    }
}

module.exports = {
    addTask,
}