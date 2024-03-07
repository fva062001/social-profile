import React from 'react';

type UserLinks = {
  name: string;
  url: string;
};

type UserLinksProps = {
  usersLinks: UserLinks[];
};

function UserLinks({ usersLinks }: UserLinksProps) {
  return (
    <div className="flex justify-center space-y-4 flex-col">
      {usersLinks.map((link: UserLinks, index: number) => (
        <a
          key={index}
          className="w-full p-3 bg-[#333333] text-white text-sm font-bold rounded-lg"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer">
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default UserLinks;
