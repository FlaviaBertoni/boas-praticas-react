import { useEffect, useState } from 'react';
import Label from '../../components/atoms/Label';
import CatalogTemplate from '../../components/templates/CatalogTemplate';
import VehicleCard from '../../components/templates/VehicleCard';
import api from '../../services/api';

interface VehiclesProps {
  id: string | number;
  model: string;
  price: string | number;
  image: string;
  fuel_efficiency: string | number;
  seats: string | number;
  transmission: string;
}

const VehicleCatalog = () => {
  const [vehicles, setVehicles] = useState<VehiclesProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getVehicles = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get<VehiclesProps[]>('vehicles');
        setVehicles(data);
      } catch (error) {
        // Do some awesome stuff.
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getVehicles();
  }, []);

  return (
    <CatalogTemplate title="Catálogo" subtitle="Alugue o carro dos seus sonhos">
      {isLoading ? (
        <Label>Carregando...</Label>
      ) : (
        vehicles.map(vehicle => (
          <VehicleCard
            key={vehicle.id}
            carName={vehicle.model}
            rentPrice={vehicle.price}
            carImgPath={vehicle.image}
            fuel_efficiency={vehicle.fuel_efficiency}
            seats={vehicle.seats}
            transmission={vehicle.transmission}
          />
        ))
      )}
    </CatalogTemplate>
  );
};

export default VehicleCatalog;
