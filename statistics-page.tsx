"use client"

import type React from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Users, Building, PocketIcon as Pool, Dumbbell } from "lucide-react"

const data = [
  { name: "Paris", gymnases: 120, piscines: 45, terrainsSport: 200 },
  { name: "Lyon", gymnases: 80, piscines: 30, terrainsSport: 150 },
  { name: "Marseille", gymnases: 90, piscines: 35, terrainsSport: 180 },
  { name: "Toulouse", gymnases: 70, piscines: 25, terrainsSport: 130 },
  { name: "Nice", gymnases: 60, piscines: 20, terrainsSport: 100 },
]

const StatisticsPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Statistiques Détaillées</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <Building className="text-blue-500 mr-4" size={40} />
          <div>
            <h2 className="text-xl font-semibold">Total Gymnases</h2>
            <p className="text-3xl font-bold">420</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <Pool className="text-green-500 mr-4" size={40} />
          <div>
            <h2 className="text-xl font-semibold">Total Piscines</h2>
            <p className="text-3xl font-bold">155</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <Dumbbell className="text-yellow-500 mr-4" size={40} />
          <div>
            <h2 className="text-xl font-semibold">Terrains de Sport</h2>
            <p className="text-3xl font-bold">760</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <Users className="text-purple-500 mr-4" size={40} />
          <div>
            <h2 className="text-xl font-semibold">Utilisateurs Actifs</h2>
            <p className="text-3xl font-bold">15,420</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Répartition des Installations par Ville</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gymnases" fill="#3B82F6" />
            <Bar dataKey="piscines" fill="#10B981" />
            <Bar dataKey="terrainsSport" fill="#FBBF24" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default StatisticsPage

