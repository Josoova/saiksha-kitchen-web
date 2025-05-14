
// Product types
export type ProductCategory = 'gas-stoves' | 'kettles';

export interface GasStoveSpec {
  id: string;
  name: string;
  size: string;
  features: string[];
  image: string;
  rating: number;
  isBestseller?: boolean;
  isNewArrival?: boolean;
}

export interface KettleSpec {
  id: string;
  name: string;
  features: string[];
  image: string;
  rating: number;
  isBestseller?: boolean;
  isNewArrival?: boolean;
}

// Gas stove specifications
export const gasStoveSpecs: {
  twoBurner: GasStoveSpec[];
  threeBurner: GasStoveSpec[];
  fourBurner: GasStoveSpec[];
} = {
  twoBurner: [
    { 
      id: "2b1", 
      name: "2 Burner PC Diamond Cut Frame", 
      size: "575 x 275 x 6 mm", 
      features: ["PC Diamond Cut Frame", "Straight Gas Pipe"],
      image: "public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png",
      rating: 4.7,
      isBestseller: true
    },
    { 
      id: "2b2", 
      name: "2 Burner PC Straight Frame", 
      size: "575 x 275 x 6 mm", 
      features: ["PC Straight Frame", "T Gas Pipe"],
      image: "public/lovable-uploads/9234820b-7143-420b-8fee-f1729c5d6646.png",
      rating: 4.5
    },
    { 
      id: "2b3", 
      name: "2 Burner SS Diamond Cut Frame", 
      size: "600 x 320 x 6 mm", 
      features: ["SS Diamond Cut Frame", "T Gas Pipe"],
      image: "public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png",
      rating: 4.6
    },
    { 
      id: "2b4", 
      name: "2 Burner SS Straight Frame", 
      size: "600 x 350 x 6 mm", 
      features: ["SS Straight Frame", "T Gas Pipe"],
      image: "public/lovable-uploads/896a11a8-b55e-4ef6-a80e-07ceda3ed41c.png",
      rating: 4.4
    },
    { 
      id: "2b5", 
      name: "2 Burner SS Straight Frame Jumbo", 
      size: "700 x 360 x 6 mm", 
      features: ["SS Straight Frame", "T Gas Pipe", "Jumbo Size"],
      image: "public/lovable-uploads/365208f2-ccbc-4d31-9233-da5887f389b8.png",
      rating: 4.8,
      isNewArrival: true
    }
  ],
  threeBurner: [
    { 
      id: "3b1", 
      name: "3 Burner PC Diamond Cut Frame", 
      size: "690 x 360 x 6 mm", 
      features: ["PC Diamond Cut Frame", "Straight Gas Pipe"],
      image: "public/lovable-uploads/2e31a859-9ba3-46b9-8eae-8b9580dfe7bb.png",
      rating: 4.9,
      isBestseller: true
    },
    { 
      id: "3b2", 
      name: "3 Burner Straight Frame", 
      size: "720 x 375 x 6 mm", 
      features: ["Straight Frame", "T Gas Pipe"],
      image: "public/lovable-uploads/5f227410-172c-4090-be93-e8ba8cf0ed52.png",
      rating: 4.7,
      isNewArrival: true
    }
  ],
  fourBurner: [
    { 
      id: "4b1", 
      name: "4 Burner SS Diamond Cut Frame", 
      size: "635 x 500 x 6 mm", 
      features: ["SS Diamond Cut Frame", "T Gas Pipe"],
      image: "public/lovable-uploads/896a11a8-b55e-4ef6-a80e-07ceda3ed41c.png",
      rating: 4.8
    },
    { 
      id: "4b2", 
      name: "4 Burner Straight Tapered Frame", 
      size: "860 x 400 x 8 mm", 
      features: ["Straight Tapered Frame", "Straight Gas Pipe"],
      image: "public/lovable-uploads/9234820b-7143-420b-8fee-f1729c5d6646.png",
      rating: 4.9,
      isNewArrival: true
    }
  ]
};

// Kettle specifications with Mirror and Matt Finish feature added to all kettles
export const kettleSpecs: KettleSpec[] = [
  { 
    id: "k1", 
    name: "Electric Kettle 1.5L", 
    features: [
      "1.5L Capacity", 
      "Auto Shutoff", 
      "Boil-Dry Protection", 
      "Mirror and Matt Finish"
    ],
    image: "public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png",
    rating: 4.8,
    isBestseller: true
  },
  { 
    id: "k2", 
    name: "Electric Kettle 1.8L", 
    features: [
      "1.8L Capacity", 
      "LED Indicator", 
      "Cordless Design", 
      "Mirror and Matt Finish"
    ],
    image: "public/lovable-uploads/dbe6c0bd-6680-4113-afd3-3f9bdf865d44.png",
    rating: 4.6
  },
  { 
    id: "k3", 
    name: "Multi Kettle", 
    features: [
      "Variable Temperature Control", 
      "Keep Warm Function", 
      "Digital Display", 
      "Premium Mirror and Matt Finish"
    ],
    image: "public/lovable-uploads/c621b6ac-0c4d-45d4-9f0a-11a9e8ca11d6.png",
    rating: 4.9,
    isNewArrival: true
  }
];
