import '../../Components/Styles/sidebar.css';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCompass,
  faUsers,
  faCogs,
  faServer,
  faCloud,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import cx from 'classnames';

const menuItems = [
  { title: 'Profile', icon: faUsers, path: '/profile' },
  { title: 'Dashboard', icon: faCompass, path: '/dashboard' },
  { title: 'Cloud services', icon: faCloud, path: '/cloud-services' },
  { title: 'Usage data', icon: faCogs, path: '/usage-data' },
  { title: 'Server list', icon: faServer, path: '/server-list' },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={cx('sidebar', { 'sidebar-closed': !isOpen })}>
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
