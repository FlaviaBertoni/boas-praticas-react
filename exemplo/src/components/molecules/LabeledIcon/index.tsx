import Box from '../../atoms/Box';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

interface LabeledIconProps {
  text: string | number;
  imgPath: string;
  width?: string;
  height?: string;
  textMargin?: string;
}

const LabeldedIcon: React.FC<LabeledIconProps> = ({
  text,
  imgPath,
  width = '1.5rem',
  height = '1.5rem',
  textMargin = '0.5rem 0 0 0',
}) => {
  return (
    <Box direction="column" alignItems="center">
      <Image width={width} height={height} imgPath={imgPath} alt={String(text)} />
      <Label margin={textMargin} size="small" weight="bold" color="disable">
        {text}
      </Label>
    </Box>
  );
};

export default LabeldedIcon;
