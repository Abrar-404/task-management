import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import TaskCard from './TaskCard';

const ManageTask = () => {
  const [tasks, setTasks] = useState([]);
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const axiosSecure = useAxiosSecure();

  const { data, refetch } = useQuery({
    queryKey: ['all-task'],
    queryFn: async () => {
      const res = await axiosSecure('/addtask');
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      const filteredTodo = data.filter(item => item.status === 'todo');
      const filteredProgress = data.filter(item => item.status === 'progress');
      const filteredCompleted = data.filter(
        item => item.status === 'completed'
      );
      setTodo([...filteredTodo]);
      setProgress([...filteredProgress]);
      setCompleted([...filteredCompleted]);
    }
  }, [data]);

  const addTask = payload => {
    if (tasks.length === 0) {
      setTasks([{ id: 1, status: 'todo', ...payload }]);
    } else {
      const lastElement = tasks[tasks.length - 1];
      setTasks([
        ...tasks,
        { id: lastElement.id + 1, status: 'todo', ...payload },
      ]);
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/addtask')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div>
      <div className="justify-center mx-auto flex">
        <div className="px-10 pt-4">
          <div className="flex  gap-10 mt-10">
            <div className="relative h-[800px]  w-[400px] overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>To-do</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {todo?.length}
                </p>
              </div>
              <div className="space-y-3">
                {todo?.map(item => (
                  <TaskCard key={item.id} task={item} refetch={refetch} />
                ))}
              </div>
            </div>
            <div className="relative h-[800px]  w-[400px]   overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Progress</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {progress?.length}
                </p>
              </div>
              <div className="space-y-3">
                {progress?.map(item => (
                  <TaskCard key={item.id} task={item} refetch={refetch} />
                ))}
              </div>
            </div>
            <div className="relative h-[800px]  w-[400px]  overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Completed</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {completed?.length}
                </p>
              </div>
              <div className="space-y-3">
                {completed?.map(item => (
                  <TaskCard key={item.id} task={item} refetch={refetch} />
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
