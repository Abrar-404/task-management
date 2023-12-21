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
      <div className="">
        <div className="px-10 pt-4">
          <div className="flex  gap-5 mt-10">
            <div className="bg-[#D3DDF9] ">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-blue-500 rounded-l-full"></div>
                  <h1>To-do</h1>
                </div>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {tasks?.length}
                </p>
              </div>
              <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
                {tasks.map(item => (
                  <TaskCard task={item} />
                ))}
              </div>
            </div>
            <div className="bg-[#D3DDF9]">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-green-500 rounded-l-full"></div>
                  <h1>Progress</h1>
                </div>
                <p className="  bg-primary w-6 h-6 grid place-content-center rounded-md">
                  {tasks?.length}
                </p>
              </div>
              <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
                {tasks.map(item => (
                  <TaskCard task={item} />
                ))}
              </div>
            </div>
            <div className=" bg-[#D3DDF9]">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-4 rounded-md ">
                <div className="flex gap-1">
                  <div className="w-6 h-6 bg-green-500 rounded-l-full"></div>
                  <h1>Completed</h1>
                </div>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {tasks?.length}
                </p>
              </div>
              <div className="space-y-3 relative h-[800px] overflow-auto w-[21rem]">
                {tasks.map(item => (
                  <TaskCard task={item} />
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
