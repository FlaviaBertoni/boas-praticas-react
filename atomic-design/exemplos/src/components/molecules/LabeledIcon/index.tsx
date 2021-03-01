import Box from '../../atoms/Box';
import Label from '../../atoms/Label';

interface LabeledIconProps {
  text: string;
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
    <Box direction="column" bgColor="disable">
      <img width={width} height={height} src={imgPath} alt={text} />
      <Label style={{ margin: textMargin }} size="small" weight="bold">
        {text}
      </Label>
    </Box>
  );
};

export default LabeldedIcon;
