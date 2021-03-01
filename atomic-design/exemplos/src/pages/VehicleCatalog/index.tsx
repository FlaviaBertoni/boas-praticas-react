import CatalogTemplate from '../../components/templates/CatalogTemplate';
import VehicleCard from '../../components/templates/VehicleCard';

const vehicles = [
  {
    id: '1',
    model: 'K.I.T.T',
    price: 42,
    transmisstion: 'Manual',
    seats: 4,
    fuel_efficiency: 14.8,
    efficiency_unit: 'km',
    image: '/images/cars/KITT.png',
  },
  {
    id: '2',
    model: 'Ecto-1',
    price: 52,
    transmisstion: 'Manual',
    seats: 4,
    fuel_efficiency: 7,
    efficiency_unit: 'km',
    image: '/images/cars/ecto-1.png',
  },
  {
    id: '3',
    model: 'DeLorean',
    price: 52,
    transmisstion: 'Manual',
    seats: 4,
    fuel_efficiency: 12.8,
    efficiency_unit: 'km',
    image: '/images/cars/delorean.png',
  },
];

const VehicleCatalog = () => {
  return (
    <CatalogTemplate title="Catálogo" subtitle="Alugue o carro dos seus sonhos">
      {vehicles.map(vehicle => (
        <VehicleCard
          carName={vehicle.model}
          rentPrice={vehicle.price}
          carImgPath={vehicle.image}
          fuel_efficiency={vehicle.fuel_efficiency}
          seats={vehicle.seats}
          transmission={vehicle.transmisstion}
        />
      ))}
    </CatalogTemplate>
  );
};

export default VehicleCatalog;
