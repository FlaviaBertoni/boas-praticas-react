import Box from '../../atoms/Box';
import Label from '../../atoms/Label';
import Image from '../../atoms/Image';
import VehicleDetails from '../../molecules/VehicleDetails';
import { Button, Container } from './VehicleCard.styles';
import { useEffect, useRef, useState } from 'react';

interface VehicleCardProps {
  carName: string;
  rentPrice: string | number;
  carImgPath: string;
  fuel_efficiency: string | number;
  seats: string | number;
  transmission: string;
}

let timerId: NodeJS.Timeout;

const VehicleCard: React.FC<VehicleCardProps> = ({
  carName,
  rentPrice,
  carImgPath,
  fuel_efficiency,
  transmission,
  seats,
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onMouseOver() {
      console.log('executei');
      setIsMouseOver(true);
    }

    function onMouseOut() {
      setIsMouseOver(false);
    }

    const $container = containerRef.current;

    $container?.addEventListener('mouseover', onMouseOver);
    $container?.addEventListener('mouseout', onMouseOut);

    return () => {
      $container?.removeEventListener('mouseover', onMouseOver);
      $container?.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <Container
      border="2px solid transparent"
      direction="column"
      justifyContent="space-between"
      padding="1.5rem"
      borderRadius="1.5rem"
      bgColor="card-bg"
      height="346px"
      ref={containerRef}
    >
      <section>
        <Label as="h2" size="medium" color="dark">
          {carName}
        </Label>
        <Box margin="1.25rem 0 0 0">
          <Label as="h2" size="large" color="dark">
            <Label as="span" margin="0 4px 0 0" color="dark" style={{ verticalAlign: 'super' }}>
              R$
            </Label>
            {rentPrice}
            <Label as="span" color="dark">
              /dia
            </Label>
          </Label>
        </Box>
      </section>
      <Image width="100%" height="auto" imgPath={carImgPath} alt={`imagem de ${carName}`} margin="0.5rem 0 0 0" />

      <Box as="span" height="60px" width="100%" direction="column">
        {isMouseOver ? (
          <Button size="large" variant="contained">
            Alugar
          </Button>
        ) : (
          <VehicleDetails fuel_efficiency={fuel_efficiency} seats={seats} transmission={transmission} />
        )}
      </Box>
    </Container>
  );
};

export default VehicleCard;
