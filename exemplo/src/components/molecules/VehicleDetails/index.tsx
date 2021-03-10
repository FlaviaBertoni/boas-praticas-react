import Box from '../../atoms/Box';
import LabeldedIcon from '../LabeledIcon';

interface VehicleDetailsProps {
  margin?: string;
  transmission: string;
  seats: string | number;
  fuel_efficiency: string | number;
}

export default function VehicleDetails({ transmission, seats, fuel_efficiency, margin = '0' }: VehicleDetailsProps) {
  const convertedFuelEfficiency =
    typeof fuel_efficiency === 'number' ? new Intl.NumberFormat('pt-BR').format(fuel_efficiency) : fuel_efficiency;
  return (
    <Box margin={margin} justifyContent="space-between">
      <LabeldedIcon imgPath="/icons/steering-wheel.svg" text={transmission} />
      <LabeldedIcon imgPath="/icons/car-seat.svg" text={`${seats} Lugares`} />
      <LabeldedIcon imgPath="/icons/gas-station.svg" text={`${convertedFuelEfficiency} km/l`} />
    </Box>
  );
}
