import fontSizeSelector from '../../../utils/font-size-selector';
import Image from '../../atoms/Image';
import Input, { InputProps } from '../../atoms/Input';
import { Container } from './input-with-icon';

interface InputWithIconProps extends InputProps {
  imgPath: string;
  handleClick: () => void;
}

const InputWithIcon = ({
  bgColor = 'white',
  fontSize,
  margin,
  padding,
  width = '100%',
  border,
  borderRadius,
  imgPath,
  handleClick,
  ...rest
}: InputWithIconProps) => {
  const iconWidth = fontSizeSelector(fontSize);
  return (
    <Container
      padding="0 0.5rem 0 0"
      bgColor={bgColor}
      margin={margin}
      width="width"
      border={border}
      borderRadius={borderRadius}
    >
      <Input {...rest} fontSize={fontSize} padding={padding} bgColor={bgColor} />
      <button type="button" onClick={handleClick}>
        <Image imgPath={imgPath} alt="icon" width={iconWidth} />
      </button>
    </Container>
  );
};

export default InputWithIcon;
