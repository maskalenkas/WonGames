import * as S from './styles';

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import SlickSlider from 'react-slick';

import { Close } from '@styled-icons/material-outlined/Close';

import Slider, { SliderSettings } from 'components/Slider';

import { useEffect, useRef, useState } from 'react';

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
};

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
};

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
};

export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

// Vai ser identificada como button para abrir um modal quando clciada
const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Vai escutar a tecla esc
  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false);
    };

    window.addEventListener('keyup', handleKeyUp);

    // Desmontando
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Coloacndo uma referencia logo no inicio
  const slider = useRef<SlickSlider>(null);

  return (
    <S.Wrapper>
      {/* -- NO MODAL -- */}
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            // Abrindo o modal
            onClick={() => {
              setIsOpen(true);
              slider.current!.slickGoTo(index, true);
            }}
          />
        ))}
      </Slider>
      {/* --/ NO MODAL /-- */}

      {/* -- MODAL -- */}
      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          // Fechando o modal
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img
                key={`gallery-${index}`}
                src={item.src}
                alt={`${item.label}`}
              />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
      {/* --/MODAL /-- */}
    </S.Wrapper>
  );
};

export default Gallery;
