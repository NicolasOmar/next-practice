import { verifyAuthSession } from '@/lib/auth'
import { getTrainings } from '@/lib/training'
import { redirect } from 'next/navigation'
import React from 'react'

interface Training {
  id: number
  title: string
  image: string
  description: string
}

const TrainingPage: React.FC = async () => {
  // For authentication reasons, you first ask the cookie checking function to be executed
  // And in case it does not exists (because on those cases the user and session
  // properties are null), you redirect the user to the home page
  const authResult = await verifyAuthSession()

  if (authResult.user === null) {
    return redirect('/')
  }

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
