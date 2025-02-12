"use client"

import type React from "react"
import { Users, Dumbbell, Clock, TrendingUp } from "lucide-react"

const BasicFitPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Basic Fit</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <Users className="text-blue-500 mr-4" size={40} />
          <div>
            <h2 className="text-xl font-semibold">Membres Actifs</h2>
            <p className="text-3xl font-bold">2,5M</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <Dumbbell className="text-green-500 mr-4" size={40} />
          <div>
            <h2 className="text-xl font-semibold">Clubs</h2>
            <p className="text-3xl font-bold">1200+</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <Clock className="text-yellow-500 mr-4" size={40} />
          <div>
            <h2 className="text-xl font-semibold">Heures d'ouverture</h2>
            <p className="text-3xl font-bold">24/7</p>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg flex items-center">
          <TrendingUp className="text-purple-500 mr-4" size={40} />
          <div>
            <h2 className="text-xl font-semibold">Croissance Annuelle</h2>
            <p className="text-3xl font-bold">15%</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">À propos de Basic Fit</h2>
        <p className="text-gray-300 mb-4">
          Basic Fit est l'une des plus grandes chaînes de fitness en Europe, offrant des installations de haute qualité
          à des prix abordables. Avec plus de 1200 clubs répartis dans plusieurs pays, Basic Fit s'engage à rendre le
          fitness accessible à tous.
        </p>
        <p className="text-gray-300">
          Nos clubs sont ouverts 24h/24 et 7j/7, offrant une flexibilité maximale à nos membres. Nous proposons une
          large gamme d'équipements modernes, des cours collectifs virtuels, et une application mobile pour suivre vos
          progrès.
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Offres Populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Abonnement Comfort</h3>
            <p className="text-gray-300 mb-2">Accès illimité à tous les clubs</p>
            <p className="text-2xl font-bold text-green-500">19,99€ / mois</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Abonnement Premium</h3>
            <p className="text-gray-300 mb-2">Accès illimité + cours collectifs live</p>
            <p className="text-2xl font-bold text-green-500">29,99€ / mois</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Abonnement All-in</h3>
            <p className="text-gray-300 mb-2">Tout inclus + coach personnel</p>
            <p className="text-2xl font-bold text-green-500">39,99€ / mois</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicFitPage

