export const specs = {
  // Información básica
  model: 'Fiat Enaire',
  year: 2022,
  seats: 4,
  beds: 4,
  isofix: 2,
  
  // Dimensiones y peso
  length: '5.6 m',
  width: '2.1 m',
  height: '3.0 m',
  weight: '3000 kg PMA',
  
  // Motor y combustible
  fuel: 'Diesel',
  gearbox: 'Manual',
  consumption: '6-8 L/100km',
  fuelTank: '90 L',
  adBlue: true,
  
  // Depósitos
  waterTank: '100 L',
  wasteTank: '100 L',
  
  // Equipamientos de conducción
  driving: [
    'Dirección asistida',
    'Regulador de velocidad',
    'Cierre centralizado',
    'Radar de marcha atrás',
    'Cámara de marcha atrás',
    'Radio con Bluetooth',
    'Aire acondicionado',
    'Calefacción',
    'Airbags'
  ],
  
  // Equipamientos de vida a bordo
  living: [
    'Calefacción habitáculo',
    'TV con antena parabólica',
    'Ropa de cama incluida',
    'Kit de limpieza',
    'Extintor'
  ],
  
  // Cocina y comedor
  kitchen: [
    'Cafetera',
    'Placas de cocina a gas',
    'Nevera con congelador',
    'Batería de cocina',
    'Mesa interior (3 plazas)',
    'Fregadero',
    'Kit de vajilla (4 sets)'
  ],
  
  // Baño
  bathroom: [
    'Ducha interior',
    'WC',
    'Lavabo'
  ],
  
  // Exterior
  exterior: [
    'Mesa de exterior',
    '3 sillas de exterior'
  ],
  
  // Autonomía y energía
  autonomy: {
    heating: 'Combustible + Gas',
    outlets: 'USB',
    cooking: 'Gas',
    solar: '10W',
    cable: 'Cable de electricidad',
    days: '10 días de autonomía'
  },
  
  // Camas
  beds: [
    { name: 'Cama convertible salón', size: '190 cm' },
    { name: 'Cama alcoba', size: '135x190 cm' }
  ]
};