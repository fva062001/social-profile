import Image from 'next/image';
import myselfImage from '../../public/myself.jpeg';
import UserImage from '@/components/UserImage';
import UserMainInfo from '@/components/UserMainInfo';
import UserLinks from '@/components/UserLinks';

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center ">
      <main
        className="bg-[#1F1F1F] mx-4 md:mx-0 md:p-10 p-6 rounded-xl h-fit w-96 my-auto  space-y-6 text-center"
        style={{ fontFamily: 'Inter Variable, sans-serif' }}>
        <UserImage image={myselfImage} />
        <UserMainInfo
          name="Fernando Valerio"
          location="Santo Domingo, Republica Dominicana"
          description="Front-end developer and avid reader."
        />
        <UserLinks
          usersLinks={[
            { name: 'GitHub', url: 'https://github.com/fva062001' },
            {
              name: 'Frontend Mentor',
              url: 'https://www.frontendmentor.io/profile/fva062001',
            },
            {
              name: 'LinkedIn',
              url: 'https://www.linkedin.com/in/fernando-arturo-valerio-del-valle-2a1614230/',
            },
            { name: 'Twitter', url: '#' },
            {
              name: 'Instagram',
              url: 'https://www.instagram.com/f_va06/',
            },
          ]}
        />
      </main>
    </div>
  );
}
