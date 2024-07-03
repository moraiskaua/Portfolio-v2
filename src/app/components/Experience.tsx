import { Button } from './ui/MovingBorder';

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = ({}) => {
  const experiences = [
    {
      id: 1,
      title: 'Front-end Developer',
      description: 'Using ReactJS.',
      thumbnail: '/experiences/exp1.svg',
      className: 'md:col-span-2',
    },
    {
      id: 2,
      title: 'Back-end Developer',
      description: 'Using NodeJS.',
      thumbnail: '/experiences/exp4.svg',
      className: 'md:col-span-2',
    },
    {
      id: 3,
      title: 'Mobile Developer',
      description: 'Using React Native.',
      thumbnail: '/experiences/exp3.svg',
      className: 'md:col-span-2',
    },

    {
      id: 4,
      title: 'Full-stack Developer',
      description: 'Using all these technologies with typescript.',
      thumbnail: '/experiences/exp2.svg',
      className: 'md:col-span-2',
    },
  ];

  return (
    <section className="py-20" id="experience">
      <h1 className="heading">
        My <span className="text-purple">Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {experiences.map(({ id, title, description, thumbnail }) => (
          <Button
            key={id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 cursor-default"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={thumbnail}
                alt={thumbnail}
                className="lg:w-32 md:w-20 w-16"
                draggable={false}
              />

              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {title}
                </h1>

                <p className="text-start text-white-100 mt-3 font-semibold">
                  {description}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
