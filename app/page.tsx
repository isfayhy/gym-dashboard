"use client"

import AgeDistributionChart from "../components/AgeDistributionChart"

// Données factices pour le graphique
const mockData = [
  { age: '18-24', value: 400 },
  { age: '25-34', value: 300 },
  { age: '35-44', value: 300 },
  { age: '45-54', value: 200 },
  { age: '55+', value: 100 },
]

export default function SyntheticV0PageForDeployment() {
  return <AgeDistributionChart data={mockData} />
}