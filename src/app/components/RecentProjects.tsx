'use client';

import { useTranslations } from 'next-intl';
import { PinContainer } from './ui/3d-pin';
import { FaGithub, FaLocationArrow } from 'react-icons/fa6';

interface RecentProjectsProps {}

const RecentProjects: React.FC<RecentProjectsProps> = ({}) => {
  const t = useTranslations('Projects');

  const projects = [
    {
      id: 1,
      name: 'Chord.io',
      description: t('Chordio'),
      iconList: [
        '/techs/next.svg',
        '/techs/nodejs.svg',
        '/techs/tailwind.svg',
        '/techs/mongodb.svg',
        '/techs/typescript.svg',
      ],
      img: '/projects/chord-io.jpg',
      link: 'https://chord-io.netlify.app',
      source_code_link: 'https://github.com/moraiskaua/Chord.io',
    },
    {
      id: 2,
      name: 'Saving Pets',
      description: t('SavingPets'),
      iconList: [
        '/techs/next.svg',
        '/techs/nestjs.svg',
        '/techs/tailwind.svg',
        '/techs/postgresql.svg',
        '/techs/typescript.svg',
      ],
      img: '/projects/savingpets.jpeg',
      link: 'https://saving-pets.vercel.app',
      source_code_link: 'https://github.com/moraiskaua/front-end-saving-pets',
    },
    {
      id: 3,
      name: 'Biofit',
      description: t('Biofit'),
      iconList: [
        '/techs/next.svg',
        '/techs/tailwind.svg',
        '/techs/typescript.svg',
      ],
      img: '/projects/biofit.png',
      link: 'https://biofit-theta.vercel.app',
      source_code_link: 'https://github.com/moraiskaua/Biofit',
    },
    {
      id: 4,
      name: 'DevEconomy',
      description: t('DevEconomy'),
      iconList: [
        '/techs/react.svg',
        '/techs/nestjs.svg',
        '/techs/tailwind.svg',
        '/techs/postgresql.svg',
        '/techs/typescript.svg',
      ],
      img: '/projects/deveconomy.jpg',
      link: 'https://dev-economy.vercel.app',
      source_code_link: 'https://github.com/moraiskaua/front-end-DevEconomy',
    },
    {
      id: 5,
      name: 'SnackByte',
      description: t('SnackByte'),
      iconList: [
        '/techs/react.svg',
        '/techs/nodejs.svg',
        '/techs/tailwind.svg',
        '/techs/mongodb.svg',
        '/techs/typescript.svg',
      ],
      img: '/projects/snackbyte.jpg',
      link: 'https://snackbyte.vercel.app',
      source_code_link: 'https://github.com/moraiskaua/front-end-SnackByte',
    },
    {
      id: 6,
      name: 'DevMessage',
      description: t('DevMessage'),
      iconList: [
        '/techs/next.svg',
        '/techs/nodejs.svg',
        '/techs/tailwind.svg',
        '/techs/mongodb.svg',
        '/techs/typescript.svg',
      ],
      img: '/projects/dev-message.png',
      link: 'https://dev-message.vercel.app',
      source_code_link: 'https://github.com/moraiskaua/DevMessage',
    },
  ];

  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        {t('Header.Text')}
        <span className="text-purple"> {t('Header.Highlighted')}</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(
          ({
            id,
            name,
            description,
            img,
            iconList,
            link,
            source_code_link,
          }) => (
            <div
              key={id}
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
              onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div className="relative w-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="background image" />
                  </div>

                  <img
                    src={img}
                    alt={name}
                    className="z-10 absolute bottom-0 rotate-3 p-5 pb-3.5 rounded-3xl"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {name}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: '#BEC1DD',
                    margin: '1vh 0',
                  }}
                >
                  {description}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconList.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:size-10 size-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex w-full justify-evenly items-center">
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        window.open(
                          source_code_link,
                          '_blank',
                          'noopener,noreferrer',
                        );
                      }}
                      className="flex items-center text-purple"
                    >
                      <p className="lg:text-xl md:text-xs text-sm text-purple">
                        {t('Code')}
                      </p>
                      <FaGithub className="ms-2" size={20} color="#CBACF9" />
                    </button>
                    <div className="flex items-center ml-4">
                      <p className="lg:text-xl md:text-xs text-sm text-purple">
                        {t('Preview')}
                      </p>
                      <FaLocationArrow className="ms-2" color="#CBACF9" />
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
