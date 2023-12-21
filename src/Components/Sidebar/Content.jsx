import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Content = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={'content'}>
      <img src={user?.photoURL} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt
        inventore ipsam laboriosam nemo totam voluptates? Accusantium aliquid
        amet asperiores consequuntur deleniti error laborum minima molestias
        nemo non, odit officiis praesentium quas ratione sit soluta velit veniam
        voluptas voluptate voluptatum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum incidunt
        inventore ipsam laboriosam nemo totam voluptates? Accusantium aliquid
        amet asperiores consequuntur deleniti error laborum minima molestias
        nemo non, odit officiis praesentium quas ratione sit soluta velit veniam
        voluptas voluptate voluptatum.
      </p>
    </div>
  );
};

export default Content;
