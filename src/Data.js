import car1 from './assets/cars/car1.webp'
import car2 from './assets/cars/car2.webp'
import car3 from './assets/cars/car3.webp'
import car5 from './assets/cars/car5.webp'
import car6 from './assets/cars/car6.webp'
import car7 from './assets/cars/car7.webp'
import car8 from './assets/cars/car8.webp'

const data = [
  {
    id: '01',
    name: 'Huracán EVO',
    maker: 'Lamborghini',
    year: 2024,
    drivetrain: 'AWD',
    power: '631 hp',
    zeroSixty: '2.9s',
    daily: '480',
    category: 'sport',
    image: car1,
  },
  {
    id: '02',
    name: '911 Carrera S',
    maker: 'Porsche',
    year: 2024,
    drivetrain: 'RWD',
    power: '443 hp',
    zeroSixty: '3.5s',
    daily: '320',
    category: 'sport',
    image: car2,
  },
  {
    id: '03',
    name: 'Model S Plaid',
    maker: 'Tesla',
    year: 2024,
    drivetrain: 'AWD',
    power: '1,020 hp',
    zeroSixty: '1.99s',
    daily: '210',
    category: 'electric',
    image: car3,
  },
  {
    id: '04',
    name: 'AMG GT 63 S',
    maker: 'Mercedes-Benz',
    year: 2023,
    drivetrain: 'AWD',
    power: '630 hp',
    zeroSixty: '3.1s',
    daily: '295',
    category: 'sedan',
    image: car5,
  },
  {
    id: '05',
    name: 'M4 Competition',
    maker: 'BMW',
    year: 2024,
    drivetrain: 'RWD',
    power: '503 hp',
    zeroSixty: '3.4s',
    daily: '240',
    category: 'sedan',
    image: car6,
  },
  {
    id: '06',
    name: 'Velar R-Dynamic',
    maker: 'Range Rover',
    year: 2024,
    drivetrain: 'AWD',
    power: '395 hp',
    zeroSixty: '4.5s',
    daily: '260',
    category: 'suv',
    image: car7,
  },
  {
    id: '07',
    name: '720S Spider',
    maker: 'McLaren',
    year: 2023,
    drivetrain: 'RWD',
    power: '710 hp',
    zeroSixty: '2.8s',
    daily: '540',
    category: 'exclusive',
    image: car8,
  },
  {
    id: '08',
    name: 'RS e-tron GT',
    maker: 'Audi',
    year: 2024,
    drivetrain: 'AWD',
    power: '637 hp',
    zeroSixty: '3.1s',
    daily: '280',
    category: 'electric',
    image: car1,
  },
]

export const categories = [
  { key: 'all', label: 'All Fleet' },
  { key: 'sport', label: 'Sport' },
  { key: 'sedan', label: 'Sedan' },
  { key: 'suv', label: 'SUV' },
  { key: 'electric', label: 'Electric' },
  { key: 'exclusive', label: 'Exclusive' },
]

export default data
