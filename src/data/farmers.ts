
// Dummy data for farmers
export interface Farmer {
  id: number;
  name: string;
  village: string;
  landSize: number; // in acres
  contact: string;
  schemeEligibility: string[];
  lastHarvestDate: string;
  mentalHealth: {
    date: string;
    stressLevel: number;
    reminders: string[];
  }[];
  crops: {
    name: string;
    landAllocation: number; // percentage of total land
    color: string;
  }[];
  loanDetails: {
    totalLandOwned: number; // in acres
    landUnderLoan: number; // in acres
    loanAmount: number; // in rupees
    interestRate: number; // in percentage
    balance: number; // in rupees
  };
}

export const farmers: Farmer[] = [
  {
    id: 1,
    name: "Ramesh Kumar",
    village: "Nashik",
    landSize: 5.5,
    contact: "+91 9876543210",
    schemeEligibility: ["PM Kisan", "Soil Health Card"],
    lastHarvestDate: "2023-10-15",
    mentalHealth: [
      { date: "2023-01", stressLevel: 4, reminders: ["Health checkup", "Meditation"] },
      { date: "2023-02", stressLevel: 6, reminders: ["Mental wellness workshop"] },
      { date: "2023-03", stressLevel: 7, reminders: ["Family time", "Rest day"] },
      { date: "2023-04", stressLevel: 5, reminders: ["Health checkup"] },
      { date: "2023-05", stressLevel: 3, reminders: ["Meditation"] },
      { date: "2023-06", stressLevel: 8, reminders: ["Mental wellness alert", "Counseling"] },
      { date: "2023-07", stressLevel: 6, reminders: ["Rest day"] },
      { date: "2023-08", stressLevel: 4, reminders: ["Family time"] },
      { date: "2023-09", stressLevel: 2, reminders: ["Meditation"] },
      { date: "2023-10", stressLevel: 5, reminders: ["Health checkup"] },
      { date: "2023-11", stressLevel: 7, reminders: ["Mental wellness workshop"] },
      { date: "2023-12", stressLevel: 4, reminders: ["Family time", "Rest day"] }
    ],
    crops: [
      { name: "Rice", landAllocation: 40, color: "#4CAF50" },
      { name: "Wheat", landAllocation: 30, color: "#FFC107" },
      { name: "Vegetables", landAllocation: 20, color: "#2196F3" },
      { name: "Fruits", landAllocation: 10, color: "#F44336" }
    ],
    loanDetails: {
      totalLandOwned: 5.5,
      landUnderLoan: 3.2,
      loanAmount: 250000,
      interestRate: 7.5,
      balance: 180000
    }
  },
  {
    id: 2,
    name: "Sunita Patil",
    village: "Nagpur",
    landSize: 3.2,
    contact: "+91 9876543211",
    schemeEligibility: ["Crop Insurance", "Micro Irrigation"],
    lastHarvestDate: "2023-11-05",
    mentalHealth: [
      { date: "2023-01", stressLevel: 3, reminders: ["Meditation"] },
      { date: "2023-02", stressLevel: 2, reminders: ["Family time"] },
      { date: "2023-03", stressLevel: 4, reminders: ["Health checkup"] },
      { date: "2023-04", stressLevel: 6, reminders: ["Mental wellness workshop"] },
      { date: "2023-05", stressLevel: 8, reminders: ["Mental wellness alert", "Counseling"] },
      { date: "2023-06", stressLevel: 7, reminders: ["Rest day"] },
      { date: "2023-07", stressLevel: 5, reminders: ["Meditation"] },
      { date: "2023-08", stressLevel: 3, reminders: ["Family time"] },
      { date: "2023-09", stressLevel: 2, reminders: ["Health checkup"] },
      { date: "2023-10", stressLevel: 4, reminders: ["Mental wellness workshop"] },
      { date: "2023-11", stressLevel: 5, reminders: ["Rest day"] },
      { date: "2023-12", stressLevel: 3, reminders: ["Meditation", "Family time"] }
    ],
    crops: [
      { name: "Soybean", landAllocation: 45, color: "#8BC34A" },
      { name: "Cotton", landAllocation: 35, color: "#E91E63" },
      { name: "Pulses", landAllocation: 20, color: "#9C27B0" }
    ],
    loanDetails: {
      totalLandOwned: 3.2,
      landUnderLoan: 2.0,
      loanAmount: 150000,
      interestRate: 8.0,
      balance: 95000
    }
  },
  {
    id: 3,
    name: "Vijay Singh",
    village: "Pune",
    landSize: 7.8,
    contact: "+91 9876543212",
    schemeEligibility: ["PM Kisan", "Solar Pump", "Organic Farming"],
    lastHarvestDate: "2023-09-22",
    mentalHealth: [
      { date: "2023-01", stressLevel: 5, reminders: ["Health checkup"] },
      { date: "2023-02", stressLevel: 4, reminders: ["Meditation"] },
      { date: "2023-03", stressLevel: 3, reminders: ["Family time"] },
      { date: "2023-04", stressLevel: 2, reminders: ["Rest day"] },
      { date: "2023-05", stressLevel: 4, reminders: ["Health checkup"] },
      { date: "2023-06", stressLevel: 6, reminders: ["Mental wellness workshop"] },
      { date: "2023-07", stressLevel: 8, reminders: ["Mental wellness alert", "Counseling"] },
      { date: "2023-08", stressLevel: 7, reminders: ["Rest day"] },
      { date: "2023-09", stressLevel: 5, reminders: ["Meditation"] },
      { date: "2023-10", stressLevel: 4, reminders: ["Family time"] },
      { date: "2023-11", stressLevel: 3, reminders: ["Health checkup"] },
      { date: "2023-12", stressLevel: 2, reminders: ["Mental wellness workshop"] }
    ],
    crops: [
      { name: "Sugarcane", landAllocation: 50, color: "#CDDC39" },
      { name: "Maize", landAllocation: 20, color: "#FF9800" },
      { name: "Onion", landAllocation: 20, color: "#795548" },
      { name: "Tomato", landAllocation: 10, color: "#F44336" }
    ],
    loanDetails: {
      totalLandOwned: 7.8,
      landUnderLoan: 4.5,
      loanAmount: 350000,
      interestRate: 6.5,
      balance: 220000
    }
  },
  {
    id: 4,
    name: "Anita Sharma",
    village: "Kolhapur",
    landSize: 4.3,
    contact: "+91 9876543213",
    schemeEligibility: ["Crop Insurance", "Drip Irrigation"],
    lastHarvestDate: "2023-10-30",
    mentalHealth: [
      { date: "2023-01", stressLevel: 6, reminders: ["Mental wellness workshop"] },
      { date: "2023-02", stressLevel: 7, reminders: ["Mental wellness alert", "Counseling"] },
      { date: "2023-03", stressLevel: 5, reminders: ["Rest day"] },
      { date: "2023-04", stressLevel: 4, reminders: ["Meditation"] },
      { date: "2023-05", stressLevel: 3, reminders: ["Family time"] },
      { date: "2023-06", stressLevel: 2, reminders: ["Health checkup"] },
      { date: "2023-07", stressLevel: 3, reminders: ["Mental wellness workshop"] },
      { date: "2023-08", stressLevel: 5, reminders: ["Rest day"] },
      { date: "2023-09", stressLevel: 6, reminders: ["Meditation", "Family time"] },
      { date: "2023-10", stressLevel: 4, reminders: ["Health checkup"] },
      { date: "2023-11", stressLevel: 3, reminders: ["Mental wellness workshop"] },
      { date: "2023-12", stressLevel: 5, reminders: ["Rest day"] }
    ],
    crops: [
      { name: "Grapes", landAllocation: 60, color: "#9C27B0" },
      { name: "Vegetables", landAllocation: 25, color: "#2196F3" },
      { name: "Flowers", landAllocation: 15, color: "#E91E63" }
    ],
    loanDetails: {
      totalLandOwned: 4.3,
      landUnderLoan: 2.8,
      loanAmount: 200000,
      interestRate: 7.0,
      balance: 135000
    }
  },
  {
    id: 5,
    name: "Prakash Rao",
    village: "Amravati",
    landSize: 6.1,
    contact: "+91 9876543214",
    schemeEligibility: ["PM Kisan", "Soil Health Card", "Warehouse Scheme"],
    lastHarvestDate: "2023-11-15",
    mentalHealth: [
      { date: "2023-01", stressLevel: 3, reminders: ["Family time"] },
      { date: "2023-02", stressLevel: 5, reminders: ["Health checkup"] },
      { date: "2023-03", stressLevel: 6, reminders: ["Mental wellness workshop"] },
      { date: "2023-04", stressLevel: 8, reminders: ["Mental wellness alert", "Counseling"] },
      { date: "2023-05", stressLevel: 7, reminders: ["Rest day"] },
      { date: "2023-06", stressLevel: 5, reminders: ["Meditation"] },
      { date: "2023-07", stressLevel: 4, reminders: ["Family time"] },
      { date: "2023-08", stressLevel: 3, reminders: ["Health checkup"] },
      { date: "2023-09", stressLevel: 4, reminders: ["Mental wellness workshop"] },
      { date: "2023-10", stressLevel: 6, reminders: ["Rest day"] },
      { date: "2023-11", stressLevel: 5, reminders: ["Meditation", "Family time"] },
      { date: "2023-12", stressLevel: 4, reminders: ["Health checkup"] }
    ],
    crops: [
      { name: "Cotton", landAllocation: 40, color: "#E91E63" },
      { name: "Sorghum", landAllocation: 30, color: "#FF9800" },
      { name: "Pulses", landAllocation: 20, color: "#9C27B0" },
      { name: "Oilseeds", landAllocation: 10, color: "#607D8B" }
    ],
    loanDetails: {
      totalLandOwned: 6.1,
      landUnderLoan: 3.5,
      loanAmount: 280000,
      interestRate: 7.2,
      balance: 195000
    }
  }
];
