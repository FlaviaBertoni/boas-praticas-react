import { Container } from './Image.style';

export interface ImageProps {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'unset';
  imgPath: string;
  alt: string;
}

const Image = ({
  imgPath,
  alt,
  width = '100%',
  height = '100%',
  objectFit = 'contain',
  margin = '0',
  padding = '0',
}: ImageProps): JSX.Element => (
  <Container width={width} height={height} objectFit={objectFit} margin={margin} padding={padding}>
    <img src={imgPath} alt={alt} />
  </Container>
);

export default Image;
