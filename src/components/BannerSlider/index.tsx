import Banner, { BannerProps } from 'components/Banner';
import Slider from 'components/Slider';
import { Settings } from 'react-slick';
import * as S from './styles';

// Vai receber um array de BannerProps. Cada item vai ser um banner
export type BannerSliderProps = {
  items: BannerProps[];
};

// O BREAK foi tirado do large do media-query
const settings: Settings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item}></Banner>
      ))}
    </Slider>
  </S.Wrapper>
);

export default BannerSlider;
