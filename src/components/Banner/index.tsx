import Button from 'components/Button';
import * as S from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title aria-label="title-Image">{title}</S.Title>
    </S.Caption>
    <S.Subtitle
      aria-label="subtitle-Image"
      dangerouslySetInnerHTML={{ __html: subtitle }}
    />
    <Button as="a" href={buttonLink} size="large">
      {buttonLabel}
    </Button>
  </S.Wrapper>
);

export default Banner;
