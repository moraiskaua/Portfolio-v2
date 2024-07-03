'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import Contact from './Contact';
import { useTranslations } from 'next-intl';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full pt-20" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] mb-2 lg:m-0">
          {t('Header.Pre')}{' '}
          <span className="text-purple">{t('Header.Highlighted')}</span>{' '}
          {t('Header.Pos')}
        </h1>

        <Contact />
      </div>

      <div className="flex my-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base my-5 md:my-0 text-sm md:font-normal font-light">
          Copyright &copy; 2024 | Kauã Morais
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <button
            className="size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/kauamorais03/',
                '_blank',
                'noopener,noreferrer',
              )
            }
          >
            <FaLinkedin />
          </button>
          <button
            className="size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            onClick={() =>
              window.open(
                'https://github.com/moraiskaua',
                '_blank',
                'noopener,noreferrer',
              )
            }
          >
            <FaGithub />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
