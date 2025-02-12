import type React from "react"
import CustomBarChart from "./BarChart"
import CustomPieChart from "./PieChart"

// Ces données devraient être remplacées par les vraies données de l'analyse CSV
const surveyData = {
  ageGroups: {
    "19 - 25 ans": 50,
    "26 - 35 ans": 30,
    "36 - 45 ans": 15,
    "46 ans et plus": 5,
  },
  genderDistribution: {
    Homme: 60,
    Femme: 40,
  },
  sportPractice: {
    OUI: 80,
    NON: 20,
  },
  sportLevel: {
    Loisir: 50,
    Compétition: 30,
    Professionnel: 20,
  },
  dopingAwareness: {
    OUI: 85,
    NON: 15,
  },
  dopingSubstances: {
    "Stéroïdes anabolisants": 80,
    EPO: 70,
    Stimulants: 60,
    "Hormones de croissance": 50,
    Diurétiques: 30,
  },
  dopingConsequences: {
    "Problèmes de santé graves": 90,
    "Amélioration temporaire des performances": 70,
    "Disqualification en compétition": 80,
    Dépendance: 60,
  },
  dopingPrevalenceYouth: {
    OUI: 40,
    NON: 30,
    "Je ne sais pas": 30,
  },
  dopingReasons: {
    "Pression pour réussir": 70,
    "Désir d'améliorer les performances": 80,
    "Influence des pairs": 50,
    "Manque d'information sur les risques": 40,
  },
  knowDopingAthletes: {
    OUI: 20,
    NON: 80,
  },
  temptedByDoping: {
    OUI: 10,
    NON: 90,
  },
  sufficientSanctions: {
    OUI: 30,
    NON: 70,
  },
  awarenessStrategies: {
    "Interventions dans les écoles/clubs sportifs": 80,
    "Campagnes médiatiques": 60,
    "Témoignages d'athlètes": 70,
    "Contrôles antidopage plus fréquents": 50,
  },
}

const SurveyResultsPage: React.FC = () => {
  const formatData = (data: Record<string, number>) => {
    return Object.entries(data).map(([name, value]) => ({ name, value }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CustomPieChart data={formatData(surveyData.ageGroups)} title="Distribution par âge" />
      <CustomPieChart data={formatData(surveyData.genderDistribution)} title="Distribution par sexe" />
      <CustomPieChart data={formatData(surveyData.sportPractice)} title="Pratique régulière du sport" />
      <CustomPieChart data={formatData(surveyData.sportLevel)} title="Niveau de pratique sportive" />
      <CustomPieChart data={formatData(surveyData.dopingAwareness)} title="Connaissance du dopage" />
      <CustomBarChart data={formatData(surveyData.dopingSubstances)} title="Principales substances dopantes" />
      <CustomBarChart data={formatData(surveyData.dopingConsequences)} title="Conséquences du dopage" />
      <CustomPieChart
        data={formatData(surveyData.dopingPrevalenceYouth)}
        title="Prévalence du dopage chez les jeunes"
      />
      <CustomBarChart data={formatData(surveyData.dopingReasons)} title="Raisons du dopage" />
      <CustomPieChart data={formatData(surveyData.knowDopingAthletes)} title="Connaissance d'athlètes dopés" />
      <CustomPieChart data={formatData(surveyData.temptedByDoping)} title="Tentation du dopage" />
      <CustomPieChart data={formatData(surveyData.sufficientSanctions)} title="Suffisance des sanctions" />
      <CustomBarChart data={formatData(surveyData.awarenessStrategies)} title="Stratégies de sensibilisation" />
    </div>
  )
}

export default SurveyResultsPage

