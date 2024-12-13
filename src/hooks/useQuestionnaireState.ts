import { useState } from 'react'
import { useUserDataContext } from '@/providers/UserDataProvider'
import { UserUpdateOptions } from '@/API'

export function useQuestionnaireState() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [direction, setDirection] = useState(1)
  const { setUserData } = useUserDataContext()

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }))
    console.log('questionaire', answers)
    setUserData((prev: any) => {
      // const updates = getUpdatesForQuestion(questionId, answerId)
      // if (!hasChanges(prev, updates)) return prev
      
      return {
        ...prev,
        home_has_foundation: answers?.foundation ? answers?.foundation : null,
        roof_condition: answers?.["roof-condition"] ? answers?.["roof-condition"] : null,
        roof_material: answers?.["roof-type"] ? answers?.["roof-type"] : null,
        updated_by: UserUpdateOptions.DYNAMO
      }
    })
  }

  const nextQuestion = () => {
    setDirection(1)
    setCurrentQuestionIndex(prev => prev + 1)
    window.scrollTo(0, 0)
  }

  const previousQuestion = () => {
    setDirection(-1)
    setCurrentQuestionIndex(prev => prev - 1)
    window.scrollTo(0, 0)
  }

  return {
    currentQuestionIndex,
    answers,
    direction,
    handleAnswer,
    nextQuestion,
    previousQuestion
  }
}