import React from 'react'
import FilterBar from './FilterBar';
import TaskCard from './TaskCard';

const AllTasks = () => {
  const taskList = [
    { title: "Fix login bug", assignee: "Ravi", status: "inprogress" },
    { title: "Design dashboard", assignee: "Anu", status: "completed" },
  ];
  return (
    <div>
       <FilterBar />
      {taskList.map((task, index) => (
  <TaskCard
    key={index}
    title={task.title}
    assignee={task.assignee}
    status={task.status}
  />
))}
    </div>
  )
}

export default AllTasks
