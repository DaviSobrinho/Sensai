import { getAssessments } from "@/actions/interview"
import StatsCard from "./_components/stats-cards"
import PerformanceChart from "./_components/performance-chart"
import QuizList from "./_components/quiz-list"

const InterviewPage = async () => {
    const assessments = await getAssessments()
    return (
        <div>
            <h1 className="text-6xl font-bold gradient-title mb-5">
                Interview preparation
            </h1>
            <div className="flex flex-col col-span-1 space-y-4">
                <StatsCard assessments={assessments}/>
                <PerformanceChart assessments={assessments}/>
                <QuizList assessments={assessments}/>
            </div>
        </div>
    )
}
export default InterviewPage