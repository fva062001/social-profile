import React from 'react';
import Image from 'next/image';

type UserImageProps = {
  image: {
    src: string;
  };
};

function UserImage({ image }: UserImageProps) {
  return (
    <Image
      className="rounded-[50%] mx-auto"
      src={image.src}
      width={88}
      height={88}
      alt="Myself"
    />
  );
}

export default UserImage;
