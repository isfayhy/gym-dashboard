"use client"

import type React from "react"
import { useState } from "react"

const TestSurveyPage: React.FC = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setAnswers((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Réponses soumises:", answers)
    // Ici, vous pouvez ajouter la logique pour envoyer les réponses à un serveur
    alert("Merci pour votre participation au sondage !")
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Sondage Test</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="question1" className="block text-lg font-medium mb-2">
            1. Quelle est votre fréquence d'utilisation des installations sportives ?
          </label>
          <input
            type="text"
            id="question1"
            name="question1"
            value={answers.question1}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="question2" className="block text-lg font-medium mb-2">
            2. Quel type d'installation sportive utilisez-vous le plus souvent ?
          </label>
          <input
            type="text"
            id="question2"
            name="question2"
            value={answers.question2}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="question3" className="block text-lg font-medium mb-2">
            3. Avez-vous des suggestions pour améliorer les installations sportives dans votre région ?
          </label>
          <textarea
            id="question3"
            name="question3"
            value={answers.question3}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Soumettre le sondage
        </button>
      </form>
    </div>
  )
}

export default TestSurveyPage

