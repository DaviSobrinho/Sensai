import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BrainIcon, Trophy } from 'lucide-react'
import React from 'react'

const StatsCard: React.FC<any> = ({ assessments }: any) => {
    const getAverageScore = () => {
        if (!assessments?.length) {
            return 0
        }
        const total = assessments.reduce(
            (sum: any, assessments: any) => sum + assessments.quizScore, 0
        )
        return (total / assessments.length).toFixed(1)
    }

    const getLatestAssessment = () => {
        if (!assessments?.length) {
            return null
        }
        return assessments[0]
    }

    const getTotalQuestions = () => {
        if (!assessments?.length) {
            return 0
        }
        return assessments.reduce(
            (sum: any, assessments: any) => sum + assessments.questions.length, 0
        )
    }
    return (
        <div className='grid gap-4 md:grid-cols-3'>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                        Average Score
                    </CardTitle>
                    <Trophy className={`h-4 w-4 text-muted-foreground`} />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>
                        {getAverageScore()}%
                        <p className='text-xs text-muted-foreground'>
                            Across all assessments
                        </p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                        Questions Practiced
                    </CardTitle>
                    <BrainIcon className={`h-4 w-4 text-muted-foreground`} />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>
                        {getTotalQuestions()}
                        <p className='text-xs text-muted-foreground'>
                            Total questions
                        </p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                    <CardTitle className='text-sm font-medium'>
                        Latest Score
                    </CardTitle>
                    <Trophy className={`h-4 w-4 text-muted-foreground`} />
                </CardHeader>
                <CardContent>
                    <div className='text-2xl font-bold'>
                        {(getLatestAssessment() && getLatestAssessment().quizScore !== null ? getLatestAssessment().quizScore.toFixed(1) : 0)}%
                        <p className='text-xs text-muted-foreground'>
                            Most recent quiz
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default StatsCard