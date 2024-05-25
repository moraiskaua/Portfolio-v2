'use client';

import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { FaGithub, FaLocationArrow } from 'react-icons/fa6';

interface RecentProjectsProps {}

const RecentProjects: React.FC<RecentProjectsProps> = ({}) => {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{' '}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center jusitfy-center p-4 gap-x-24 gap-y-8 mt-10">
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

                  <div className="flex w-full justify-between items-center">
                    <button
                      onClick={() =>
                        window.open(
                          source_code_link,
                          '_blank',
                          'noopener,noreferrer',
                        )
                      }
                      className="flex items-center text-purple"
                    >
                      <p className="lg:text-xl md:text-xs text-sm text-purple">
                        View Code
                      </p>
                      <FaGithub className="ms-2" size={20} color="#CBACF9" />
                    </button>
                    <div className="flex items-center ml-4">
                      <p className="lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Project
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
