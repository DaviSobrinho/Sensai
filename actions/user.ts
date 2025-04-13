"use server"

import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { generateAIInsights } from "./dashboard"

export async function updateUser(data: any) {
    const { userId } = await auth()
    if (!userId) throw new Error("Unauthorized")

    const user: any= await db.user.findUnique({
        where: {
            clerkUserId: userId
        },
    })
    if (!user) {
        throw new Error("User not found")
    }
    try {
        const result = await db.$transaction(
            async (tx: any) => {
                console.log("tx", db.industry)
                let industryInsight = await tx.industryInsight.findUnique({
                    where: {
                        industry: data.industry
                    }
                })
                console.log("user.industry",user.industry)
                console.log("data.industry",data.industry)
                if (!industryInsight) {
                    const insights = await generateAIInsights(data.industry)
                    industryInsight = await db.industryInsight.create({
                        data: {
                            industry: data.industry,
                            ...insights,
                            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                        }
                    })
                }
                const updatedUser = await tx.user.update({
                    where: {
                        id: user.id,
                    }, data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills
                    }
                })
                return { updatedUser, industryInsight }
            }, { timeout: 10000 }
        )
        return { success: true, ...result }
    } catch (error) {
        console.log((error as Error).message, "sadasd")
    }
}

export async function getUserOnboardingStatus() {
    const { userId } = await auth()

    if (!userId) {
        throw new Error("Unauthorized")
    }

    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId
        }
    })

    if (!user) {
        throw new Error("User not found")
    }

    try {
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId
            },
            select: {
                industry: true
            }
        })
        return { isOnboarded: !!user?.industry }
    } catch (error) {
        console.log((error as Error).message)
        throw new Error("Failed to check onboarding status" + (error as Error).message)
    }

}