
export interface EVModel {
  id: string;
  make: string;
  model: string;
  batteryCapacity: number; // in kWh
  efficiency: number; // in mi/kWh
}

export interface EVMake {
  id: string;
  name: string;
  models: EVModel[];
}

export const evMakes: EVMake[] = [
  {
    id: "tesla",
    name: "Tesla",
    models: [
      {
        id: "model3",
        make: "Tesla",
        model: "Model 3",
        batteryCapacity: 60,
        efficiency: 4.1
      },
      {
        id: "modely",
        make: "Tesla",
        model: "Model Y",
        batteryCapacity: 75,
        efficiency: 3.8
      },
      {
        id: "models",
        make: "Tesla",
        model: "Model S",
        batteryCapacity: 100,
        efficiency: 3.5
      },
      {
        id: "modelx",
        make: "Tesla",
        model: "Model X",
        batteryCapacity: 100,
        efficiency: 3.1
      }
    ]
  },
  {
    id: "chevrolet",
    name: "Chevrolet",
    models: [
      {
        id: "bolt",
        make: "Chevrolet",
        model: "Bolt",
        batteryCapacity: 65,
        efficiency: 3.9
      },
      {
        id: "blazerev",
        make: "Chevrolet",
        model: "Blazer EV",
        batteryCapacity: 85,
        efficiency: 3.5
      }
    ]
  },
  {
    id: "ford",
    name: "Ford",
    models: [
      {
        id: "mache",
        make: "Ford",
        model: "Mustang Mach-E",
        batteryCapacity: 75,
        efficiency: 3.6
      },
      {
        id: "f150lightning",
        make: "Ford",
        model: "F-150 Lightning",
        batteryCapacity: 98,
        efficiency: 2.3
      }
    ]
  },
  {
    id: "hyundai",
    name: "Hyundai",
    models: [
      {
        id: "ioniq5",
        make: "Hyundai",
        model: "IONIQ 5",
        batteryCapacity: 72,
        efficiency: 3.7
      },
      {
        id: "kona",
        make: "Hyundai",
        model: "Kona Electric",
        batteryCapacity: 64,
        efficiency: 3.9
      }
    ]
  },
  {
    id: "kia",
    name: "Kia",
    models: [
      {
        id: "ev6",
        make: "Kia",
        model: "EV6",
        batteryCapacity: 77,
        efficiency: 3.8
      },
      {
        id: "niro",
        make: "Kia",
        model: "Niro EV",
        batteryCapacity: 64,
        efficiency: 3.9
      }
    ]
  },
  {
    id: "nissan",
    name: "Nissan",
    models: [
      {
        id: "leaf",
        make: "Nissan",
        model: "Leaf",
        batteryCapacity: 62,
        efficiency: 3.7
      },
      {
        id: "ariya",
        make: "Nissan",
        model: "Ariya",
        batteryCapacity: 87,
        efficiency: 3.5
      }
    ]
  },
  {
    id: "volkswagen",
    name: "Volkswagen",
    models: [
      {
        id: "id4",
        make: "Volkswagen",
        model: "ID.4",
        batteryCapacity: 82,
        efficiency: 3.3
      }
    ]
  },
  {
    id: "audi",
    name: "Audi",
    models: [
      {
        id: "etron",
        make: "Audi",
        model: "e-tron",
        batteryCapacity: 95,
        efficiency: 2.9
      },
      {
        id: "etrongt",
        make: "Audi",
        model: "e-tron GT",
        batteryCapacity: 93,
        efficiency: 3.0
      }
    ]
  },
  {
    id: "bmw",
    name: "BMW",
    models: [
      {
        id: "i4",
        make: "BMW",
        model: "i4",
        batteryCapacity: 83,
        efficiency: 3.5
      },
      {
        id: "ix",
        make: "BMW",
        model: "iX",
        batteryCapacity: 111,
        efficiency: 3.0
      }
    ]
  }
];

export const chargingHabits = [
  { id: "100", label: "Always at home (100%)", percentage: 1.0 },
  { id: "80", label: "Mostly at home (80%)", percentage: 0.8 },
  { id: "60", label: "Regularly at home (60%)", percentage: 0.6 },
  { id: "40", label: "Occasionally at home (40%)", percentage: 0.4 },
  { id: "20", label: "Rarely at home (20%)", percentage: 0.2 },
];
