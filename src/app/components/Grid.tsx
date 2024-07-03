import { useTranslations } from 'next-intl';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

interface GridProps {}

const Grid: React.FC<GridProps> = ({}) => {
  const t = useTranslations('Grid');

  const gridItems = [
    {
      id: 1,
      title: t('Collaboration'),
      description: '',
      className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
      imgClassName: 'w-full h-full',
      titleClassName: 'justify-end',
      img: '/b1.svg',
      spareImg: '',
    },
    {
      id: 2,
      title: t('Flexible'),
      description: '',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
      imgClassName: '',
      titleClassName: 'justify-start',
      img: '',
      spareImg: '',
    },
    {
      id: 3,
      title: t('Stack.Title'),
      description: t('Stack.Description'),
      className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
      imgClassName: '',
      titleClassName: 'justify-center',
      img: '',
      spareImg: '',
    },
    {
      id: 4,
      title: t('Enthusiast'),
      description: '',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
      imgClassName: '',
      titleClassName: 'justify-start',
      img: '/grid.svg',
      spareImg: '/b4.svg',
    },
    {
      id: 5,
      title: t('News.Title'),
      description: t('News.Description'),
      className: 'md:col-span-3 md:row-span-2',
      imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
      titleClassName: 'justify-center md:justify-start lg:justify-center',
      img: '/b5.svg',
      spareImg: '/grid.svg',
    },
    {
      id: 6,
      title: t('Contact.Title'),
      description: '',
      className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
      imgClassName: '',
      titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
      img: '',
      spareImg: '',
    },
  ];

  return (
    <section id="grid">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            spareImg,
            titleClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
              titleClassName={titleClassName}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
