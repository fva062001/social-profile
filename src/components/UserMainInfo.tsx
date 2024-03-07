import React from 'react';

type UserMainInfoProps = {
  name: string;
  location: string;
  description: string;
};

function UserMainInfo({ name, location, description }: UserMainInfoProps) {
  return (
    <>
      <div className="text-center  space-y-1">
        <h1 className="text-white font-semibold text-2xl">{name}</h1>
        <p className="font-bold text-[#C4F82A]">{location} </p>
      </div>
      <p className="text-white text-sm font-normal">{description}</p>
    </>
  );
}

export default UserMainInfo;
