import { FaRegClock } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import EditModal from '../Modal/EditModal';
import Swal from 'sweetalert2';
import '../../Styles/delete.css';

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
              color: 'white',
              background: '#121041',
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
      className="mb-1 mt-5  rounded-xl p-3 outline-2 bg-slate-200"
    >
      <h3 className="text-bold text-center mb-2 text-blue-950 font-bold">
        {item.title}
      </h3>
      <p className="text-sm font-bold text-[#FF2C9C]">{item.description}</p>
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
        <span className="flex font-bold items-center gap-1 text-blue-700">
          <FaRegClock />
          {item.deadline}
        </span>
      </div>
      <div className="flex justify-between pt-1 ">
        <button
          onClick={() => openModal()}
          className="text-xl text-blue-700"
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

        <button title="Delete Task" onClick={handleDelete} class="buttu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 69 14"
            class="svgIcon bin-top"
          >
            <g clip-path="url(#clip0_35_24)">
              <path
                fill="black"
                d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_35_24">
                <rect fill="white" height="14" width="69"></rect>
              </clipPath>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 69 57"
            class="svgIcon bin-bottom"
          >
            <g clip-path="url(#clip0_35_22)">
              <path
                fill="black"
                d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_35_22">
                <rect fill="white" height="57" width="69"></rect>
              </clipPath>
            </defs>
          </svg>
        </button>

        {/* <button
          onClick={handleDelete}
          className="text-2xl text-red-500 font-bold"
          title="Delete Task"
        >
          <MdDelete />
        </button> */}
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
