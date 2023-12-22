import '../../Components/Styles/sidebar.css';
import React, { useContext, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCompass,
  faUsers,
  faCogs,
  faServer,
  faCloud,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { AuthContext } from '../AuthProvider/AuthProvider';

const menuItems = [
  { title: 'Home', icon: faHome, path: '/' },
  { title: 'Profile', icon: faUsers, path: '/dashboard' },
  { title: 'Manage Task', icon: faCompass, path: '/tasks' },
  { title: 'Create Task ', icon: faCogs, path: '/createtask' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useContext(AuthContext);

  return (
    <div className={cx('sidebar', { 'sidebar-closed': !isOpen })}>
      <div className="">
        <img
          className="rounded-full border-2 w-[40px] h-[40px] mb-2"
          src={user?.photoURL}
          alt=""
        />
        <h1 className="text-xs mb-10">{user?.displayName}</h1>
      </div>
      <button className={'sidebar__button'} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        {menuItems.map(item => (
          <li key={item.title}>
            <Link to={item.path} className={'sidebar__listItem'}>
              <div>
                <FontAwesomeIcon className={'sidebar__icon'} icon={item.icon} />
                <CSSTransition
                  in={isOpen}
                  timeout={200}
                  classNames={'fade'}
                  unmountOnExit
                >
                  <span>{item.title}</span>
                </CSSTransition>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
