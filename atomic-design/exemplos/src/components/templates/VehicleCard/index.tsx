import Box from '../../atoms/Box';
import Label from '../../atoms/Label';
import {} from '../../../styles/theme';
import Image from '../../atoms/Image';
import VehicleDetails from '../../molecules/VehicleDetails';

interface VehicleCardProps {
  carName: string;
  rentPrice: string | number;
  carImgPath: string;
  fuel_efficiency: string | number;
  seats: string | number;
  transmission: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  carName,
  rentPrice,
  carImgPath,
  fuel_efficiency,
  transmission,
  seats,
}) => {
  return (
    <Box direction="column" padding="1.5rem" borderRadius="1.5rem" bgColor="card-bg">
      <Label as="h2" size="medium" weight="bold" color="dark">
        {carName}
      </Label>
      <Box margin="1.25rem 0 0 0">
        <Label as="h2" size="large" weight="bold" color="dark">
          <Label as="span" margin="0 4px 0 0" color="dark" style={{ verticalAlign: 'super' }}>
            R$
          </Label>
          {rentPrice}
          <Label as="span" color="dark">
            /dia
          </Label>
        </Label>
      </Box>
      <Image width="100%" imgPath={carImgPath} alt={`imagem de ${carName}`} margin="0.5rem 0 0 0" />
      <VehicleDetails fuel_efficiency={fuel_efficiency} seats={seats} transmission={transmission} margin="1rem 0 0 0" />
    </Box>
  );
};

export default VehicleCard;
