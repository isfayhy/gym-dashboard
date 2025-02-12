"use client"

import type { FC } from "react"
import { useEffect, useState } from "react"
import { Bell, Menu, Search, ChevronDown } from "lucide-react"
import StatisticsPage from "./statistics-page"
import BasicFitPage from "./basic-fit-page"
import TestSurveyPage from "./test-survey-page"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, DollarSign, BarChart2, Activity } from "lucide-react"
import SurveyResultsPage from "./components/SurveyResultsPage"
import { Page, SubPage } from "./types/types"

// Structure des pages mise à jour
const pages = [
  { id: 1, title: "Accueil", component: null },
  { id: 2, title: "Analyse du marché", component: StatisticsPage },
  { id: 3, title: "Basic Fit", component: BasicFitPage },
  {
    id: 4,
    title: "Sondage",
    subPages: [
      { id: "survey1", title: "Résultats du sondage", component: SurveyResultsPage },
      { id: "survey2", title: "Sondage 2", component: null },
      { id: "survey3", title: "Test", component: TestSurveyPage },
    ],
  },
]

const CryptoDashboard: FC = () => {
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState<Page>(pages[0])
  const [currentSubPage, setCurrentSubPage] = useState<SubPage | null>(null)

  useEffect(() => {
    // Charger le script Flourish
    const script = document.createElement("script")
    script.src = "https://public.flourish.studio/resources/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const toggleSubMenu = (pageId: number) => {
    setOpenSubMenu(openSubMenu === pageId ? null : pageId)
  }

  const handlePageClick = (page: Page) => {
    setCurrentPage(page)
    setCurrentSubPage(null)
  }

  const handleSubPageClick = (subPage: SubPage) => {
    setCurrentSubPage(subPage)
  }

  const renderPageContent = () => {
    if (currentSubPage && currentSubPage.component) {
      const SubPageComponent = currentSubPage.component
      return SubPageComponent ? <SubPageComponent /> : null
    }
    
    if (currentPage.component) {
      const PageComponent = currentPage.component
      return PageComponent ? <PageComponent /> : null
    }
    

    // Contenu de la page d'accueil (votre contenu existant)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Flourish Visualization */}
        <div className="bg-gray-800 p-6 rounded-lg col-span-full">
          <h2 className="text-xl font-bold mb-4">Carte des Gymnases</h2>
          <p className="mb-4">Source: Data Gouv</p>
          <div className="flourish-embed flourish-map" data-src="visualisation/21558145">
            <noscript>
              <img
                src="https://public.flourish.studio/visualisation/21558145/thumbnail"
                alt="Carte des Gymnases"
                className="w-full"
              />
            </noscript>
          </div>
        </div>

        {/* Price Chart */}
        <div className="bg-gray-800 p-6 rounded-lg col-span-2">
          <h2 className="text-xl font-bold mb-4">Évolution des Installations</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Market Overview */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Aperçu du Marché</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <TrendingUp className="mr-2 text-green-500" />
                <span>Gymnases</span>
              </div>
              <span className="font-bold">1,234</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <TrendingUp className="mr-2 text-green-500" />
                <span>Piscines</span>
              </div>
              <span className="font-bold">567</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <TrendingUp className="mr-2 text-red-500" />
                <span>Terrains de sport</span>
              </div>
              <span className="font-bold">890</span>
            </div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Mises à jour récentes</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <DollarSign className="mr-2 text-green-500" />
                <span>Nouveau gymnase</span>
              </div>
              <span>Paris 15e</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <DollarSign className="mr-2 text-red-500" />
                <span>Fermeture piscine</span>
              </div>
              <span>Lyon 3e</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <DollarSign className="mr-2 text-green-500" />
                <span>Rénovation terrain</span>
              </div>
              <span>Marseille 8e</span>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Statistiques</h2>
          <div className="flex items-center justify-center">
            <BarChart2 size={80} className="text-blue-500" />
          </div>
          <div className="text-center mt-4">
            <div className="text-2xl font-bold">2,691</div>
            <div className="text-gray-400">Installations totales</div>
          </div>
        </div>

        {/* Trend Analysis */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Analyse des tendances</h2>
          <div className="flex items-center justify-center">
            <Activity size={80} className="text-yellow-500" />
          </div>
          <div className="text-center mt-4">
            <div className="text-2xl font-bold">En hausse</div>
            <div className="text-gray-400">Croissance des installations sportives</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <h2 className="text-2xl font-bold mb-8">Gym Market Data</h2>
        <nav>
          {pages.map((page) => (
            <div key={page.id}>
              {page.subPages ? (
                <div>
                  <button
                    onClick={() => toggleSubMenu(page.id)}
                    className="flex items-center justify-between w-full py-2 px-4 rounded hover:bg-gray-700 mb-2"
                  >
                    {page.title}
                    <ChevronDown
                      className={`transform transition-transform ${openSubMenu === page.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openSubMenu === page.id && (
                    <div className="ml-4">
                      {page.subPages.map((subPage) => (
                        <button
                          key={subPage.id}
                          onClick={() => handleSubPageClick(subPage)}
                          className={`block w-full text-left py-2 px-4 rounded hover:bg-gray-700 mb-2 ${currentSubPage && currentSubPage.id === subPage.id ? "bg-gray-700" : ""}`}
                        >
                          {subPage.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handlePageClick(page)}
                  className={`block w-full text-left py-2 px-4 rounded hover:bg-gray-700 mb-2 ${currentPage.id === page.id ? "bg-gray-700" : ""}`}
                >
                  {page.title}
                </button>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Menu className="mr-4" />
            <h1 className="text-2xl font-bold">{currentSubPage ? currentSubPage.title : currentPage.title}</h1>
          </div>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <Bell className="mr-4" />
            <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
          </div>
        </header>

        {/* Page Content */}
        {renderPageContent()}
      </main>
    </div>
  )
}

export default CryptoDashboard

const data = [
  { name: "Jan", price: 4000 },
  { name: "Feb", price: 3000 },
  { name: "Mar", price: 5000 },
  { name: "Apr", price: 2780 },
  { name: "May", price: 1890 },
  { name: "Jun", price: 2390 },
  { name: "Jul", price: 3490 },
]

