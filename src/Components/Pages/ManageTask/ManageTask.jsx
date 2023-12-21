import { useEffect, useState } from 'react';
import TaskCard from './TaskCard';

const ManageTask = () => {
  const [tasks, allTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addtask')
      .then(res => res.json())
      .then(data => allTasks(data));
  }, []);

  console.log(tasks);
  return (
    <div>
      <div className="justify-center mx-auto flex">
        <div className="px-10 pt-4">
          <div className="flex  gap-10 mt-10">
            <div className="relative h-[800px]  w-[400px] overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>To-do</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {tasks.length}
                </p>
              </div>
              <div className="space-y-3">
                {tasks.map(item => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
            <div className="relative h-[800px]  w-[400px]   overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Progress</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {tasks.length}
                </p>
              </div>
              <div className="space-y-3">
                {tasks.map(item => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
            <div className="relative h-[800px]  w-[400px]  overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Completed</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {tasks.length}
                </p>
              </div>
              <div className="space-y-3">
                {tasks.map(item => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
