import Box from '../../atoms/Box';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

interface AvatarProps {
  name: string;
  avatarPath?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, avatarPath = '' }) => {
  return (
    <Box alignItems="center">
      <Label margin="0 0.5rem 0 0">{name}</Label>
      <Image imgPath={avatarPath} alt="user avatar" borderRadius="50%" width="2.5rem" height="2.5rem" />
    </Box>
  );
};

export default Avatar;
