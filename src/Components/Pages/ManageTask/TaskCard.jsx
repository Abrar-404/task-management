import { async } from '@firebase/util';
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const TaskCard = ({ task, refetch }) => {
  // let updatedStatus;
  // if (task.status === 'pending') {
  //   updatedStatus = 'running';
  // } else if (task.status === 'running') {
  //   updatedStatus = 'done';
  // } else {
  //   updatedStatus = 'archive';
  // }
  console.log(refetch);

  let textColor;
  if (task.priority === 'high') {
    textColor = 'text-red-500';
  } else if (task.priority === 'medium') {
    textColor = 'text-blue-500';
  } else if (task.priority === 'low') {
    textColor = 'text-green-500';
  } else {
    textColor = 'text-black';
  }

  const axiosSecure = useAxiosSecure();
  const handleStatus = async e => {
    e.preventDefault();
    const status = {
      status: e.target.value,
    };
    console.log(status);
    const res = await axiosSecure.patch(`/status?id=${task?._id}`, status);
    console.log(res);
    refetch();
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      color: 'white',
      background: '#121041',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete?id=${task._id}`).then(res => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  
        ${textColor}
        `}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>

      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={handleDelete} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button title="Update Status">
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
      <div className="flex justify-center pt-1 ">
        <select
          onChange={handleStatus}
          className="rounded-lg outline-orange-500"
          name="status"
          id=""
          defaultValue={task?.status}
        >
          <option disabled>Set Status</option>
          <option value="todo">Todo</option>
          <option value="progress">progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;
