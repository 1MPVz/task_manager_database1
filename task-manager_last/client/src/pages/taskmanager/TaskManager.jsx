import React from 'react'
import './TaskManager.scss'
import Sidebar from '../../components/sidebar/sidebar'
import TaskList from '../../components/taskmanager/TaskList'
import AddTask from '../../components/taskmanager/AddTask'

const TaskManager = () => {
  return (
    <div className = 'taskmanager'>
        <div className="taskmanager__left">
            <Sidebar />
        </div>
        <div className="taskmanager__right">
            <div className="taskmanager__addtask">
                <AddTask />
            </div>
            <div className="taskmanager__tasklist">
                <TaskList />
            </div>
        </div>
    </div>
  )
}

export default TaskManager
