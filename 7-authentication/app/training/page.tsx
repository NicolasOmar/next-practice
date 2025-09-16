import { getTrainings } from '@/lib/training'
import React from 'react'

interface Training {
  id: number
  title: string
  image: string
  description: string
}

const TrainingPage: React.FC = () => {
  const trainingSessions: Training[] = getTrainings()

  return (
    <main>
      <h1>Find your favorite activity</h1>
      <ul id='training-sessions'>
        {trainingSessions.map(training => (
          <li key={training.id}>
            <img
              src={`/trainings/${training.image}`}
              alt={training.title}
            />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default TrainingPage
