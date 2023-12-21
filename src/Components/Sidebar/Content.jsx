import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Content = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={'content'}>
      <div className="mx-auto justify-center flex">
        <img className="rounded-full" src={user?.photoURL} alt="" />
      </div>
      <div>
        <div className="diff lg:aspect-[16/3] md:aspect-[8/3] aspect-[5/3] mt-5">
          <div className="diff-item-1">
            <div className="  text-secondary  lg:text-8xl md:text-6xl text-2xl font-black grid place-content-center">
              {user?.displayName}
            </div>
          </div>
          <div className="diff-item-2">
            <div
              className=" lg:text-8xl md:text-6xl text-2xl text-black
             font-black grid place-content-center"
            >
              <h1>{user?.displayName}</h1>
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>

      <div className="divider divider-secondary">|</div>
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
