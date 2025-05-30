import HeroSection from "@/components/ui/hero";
import { features } from "@/app/data/features"
import { howItWorks } from "@/app/data/howItWorks"
import { faqs } from "@/app/data/faqs"
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
    return (
        <div>
            <div className="grid-background">

            </div>
            <HeroSection />
            <section className="w-full py-12 md:py-24 lg-py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
                        Powerfull features for your career growth
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">{features.map((feature, index) => {
                        return (
                            <Card key={index} className="border-2 hover:border-primary transition-colors duration-300">
                                <CardContent className="pt-6 text-center flex flex-col items-center">
                                    <div className="flex flex-col items-center justify-center">{feature.icon}
                                        <h3 className="text-xl font-bold mb-2">
                                            {feature.title}
                                            <p className="text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </h3>
                                    </div>
                                </CardContent>
                            </Card>

                        )
                    })}</div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 bg-muted/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <h3 className="text-4xl font-bold">
                                1000+
                            </h3>
                            <p className="text-muted-foreground">
                                Interview Questions
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <h3 className="text-4xl font-bold">
                                50+
                            </h3>
                            <p className="text-muted-foreground">
                                Industries Covered
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg-py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
                            How it works
                        </h2>
                        <p className="text-muted-foreground">
                            Four simple steps to accelerate your career growth
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {howItWorks.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-xl">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>

                            )
                        })}</div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg-py-32 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Frequently ask questions
                        </h2>
                        <p className="text-muted-foreground">
                            Find answers to common questions about our platform
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <Accordion type="single" collapsible>
                            {faqs.map((item, index) => {
                                return (
                                    <AccordionItem value={`item-${index}`} key={index}>
                                        <AccordionTrigger>
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="mx-auto py-24 gradient rounded-lg">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
                            Ready to accelerate your career?
                        </h2>
                        <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                            Advance your career with AI-powered guidance
                        </p>
                        <Link href="/dashboard">
                            <Button size="lg" variant="secondary" className="h-11 mt-5 animate-bounce">
                                Start your journey today
                                <ArrowRight className="ml-2 h-4 w-4"/>
                            </Button>
                        </Link>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        
                    </div>
                </div>
            </section>
        </div>
    );
}
