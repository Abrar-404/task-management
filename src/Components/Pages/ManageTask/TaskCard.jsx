import { FaRegClock } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import EditModal from '../Modal/EditModal';
import Swal from 'sweetalert2';

const TaskCard = ({ item, refetch, provided }) => {
  const axiosSecure = useAxiosSecure();
  const handleStatus = async e => {
    e.preventDefault();
    const status = {
      status: e.target.value,
    };
    const res = await axiosSecure.patch(`/status?id=${item._id}`, status);
    if (res.data.modifiedCount > 0) {
      toast.success('Updated successfully');
    }
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
        axiosSecure.delete(`/delete?id=${item?._id}`).then(res => {
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

  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="mb-1 mt-5  rounded-sm p-3 outline-2 bg-secondary/10"
    >
      <h3 className="text-bold">{item.title}</h3>
      <p className="text-sm">{item.description}</p>
      <div className="flex justify-between pt-2">
        <span
          className={`px-1 rounded-md text-white ${
            item.priority === 'low' && 'bg-green-500'
          } ${item.priority === 'medium' && 'bg-blue-500'} ${
            item.priority === 'high' && 'bg-red-500'
          }`}
        >
          {item.priority}
        </span>
        <span className="flex items-center gap-1">
          <FaRegClock />
          {item.deadline}
        </span>
      </div>
      <div className="flex justify-between pt-1 ">
        <button
          onClick={() => openModal()}
          className="text-xl"
          title="Delete Task"
        >
          <FaEdit />
        </button>
        <select
          onChange={handleStatus}
          className="rounded-lg outline-orange-500"
          name="status"
          id=""
          defaultValue={item.status}
        >
          <option disabled>Set Status</option>
          <option value="todo">Todo</option>
          <option value="progress">progress</option>
          <option value="completed">Completed</option>
        </select>

        <button onClick={handleDelete} className="text-xl" title="Delete Task">
          <MdDelete />
        </button>
      </div>
      <EditModal
        refetch={refetch}
        item={item}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default TaskCard;
