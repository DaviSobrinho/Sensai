"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const PerformanceChart = ({ assessments }: any) => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        if (assessments) {
            const formattedData = assessments.map((assessment: any) => ({
                date: format(new Date(assessment.createdAt), "MMM dd"),
                score: assessment.quizScore
            }))
            setChartData(formattedData)
        }
    }, [assessments])
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="gradient-title text-3xl md:text-4xl">
                        Performance Trend
                    </CardTitle>
                    <CardDescription>
                        Your quiz scores over time
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='h-[300px]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis domain={[0, 100]} />
                                <Tooltip content={({ active, payload }) => {
                                    if (active && payload?.length) {
                                        return (
                                            <div className='bg-background border rounded-lg p-2 shaodw-md'>
                                                <p className='text-sm font-medium'>
                                                    Score: {payload[0].value}%
                                                </p>
                                                <p className='text-xs text-muted-foreground'>
                                                    {payload[0].payload.date}
                                                </p>
                                            </div>
                                        )
                                    }
                                }} />
                                <Line
                                    type="monotone"
                                    dataKey="score"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default PerformanceChart