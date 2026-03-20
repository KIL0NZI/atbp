'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
    Users, ShieldCheck, Zap, Star, Rocket,
    Target, Lightbulb, HeartPulse
} from 'lucide-react'
import { GraduationCap, Award } from 'lucide-react'

const coreValues = [
    { name: 'Unity', desc: 'Collaboration, respect, and shared purpose.', icon: Users },
    { name: 'Integrity', desc: 'Honesty, professionalism, and ethical leadership.', icon: ShieldCheck },
    { name: 'Transformation', desc: 'Helping teams reach their highest potential.', icon: Zap },
    { name: 'Excellence', desc: 'High-quality experiences with lasting impact.', icon: Star },
    { name: 'Empowerment', desc: 'Equipping people with the mindset to lead.', icon: Rocket },
    { name: 'Creativity & Fun', desc: 'Engaging, interactive, and enjoyable growth.', icon: Target },
]

export default function AboutPage() {
    return (
        <main className="pt-32 pb-20 bg-white">
            {/* 1. Hero Section: Motto & Vision */}
            <section className="px-4 max-w-7xl mx-auto mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge className="bg-indigo-100 text-indigo-700 mb-4 px-4 py-1">Our Identity</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-marker uppercase">
                            Adlucem Teambuilding <span className="text-indigo-600">Pros</span>
                        </h1>
                        <p className="text-2xl italic text-gray-500 mb-8 border-l-4 border-indigo-600 pl-6">
                            "Where there is light, there is life."
                        </p>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest text-sm mb-2">Our Vision</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To become a leading transformational teambuilding organization that ignites purpose, unity, and leadership in individuals and organizations across Africa.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest text-sm mb-2">Our Mission</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To inspire and empower teams through dynamic teambuilding experiences, Mental health & leadership training, and personal development programs that cultivate unity, resilience, trust, and purpose.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <img src="/logo.jpeg" alt="Team Building Transformation" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                            <p className="text-4xl font-bold text-indigo-600">100%</p>
                            <p className="text-sm font-medium text-gray-500 uppercase">Commitment to Growth</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Core Values Grid */}
            <section className="bg-gray-50 py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core <span className="text-indigo-600">Values</span></h2>
                        <p className="text-gray-600">The pillars that support every Adlucem experience.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value) => {
                            const Icon = value.icon
                            return (
                                <Card key={value.name} className="p-8 hover:shadow-xl transition-all border-none shadow-sm">
                                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{value.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 3. Objectives & Facilitator Section (Placeholder) */}
            <section className="py-24 px-4 max-w-7xl mx-auto border-t border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Grid with the provided photo */}
                    <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <img
                                src="/joe-1.jpeg"
                                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                                alt="Joseph Macharia Karuga - Lead Facilitator"
                            />
                            <div className="bg-indigo-600 p-6 rounded-2xl text-white">
                                <p className="text-sm font-medium opacity-80 uppercase tracking-widest mb-2">Registration</p>
                                <p className="font-bold text-lg leading-tight">KCPA REG.NO: 06890/22</p>
                            </div>
                        </div>
                        <div className="pt-12 space-y-4">
                            <img
                                src="/joe-2.jpeg"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover"
                                alt="Adlucem Session"
                            />
                            <div className="bg-gray-900 p-6 rounded-2xl text-white">
                                <HeartPulse className="text-indigo-400 mb-3" size={32} />
                                <p className="font-bold text-lg">Wellness & Mental Health Expert</p>
                            </div>
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div className="order-1 lg:order-2">
                        <Badge className="bg-indigo-100 text-indigo-700 mb-4 px-4 py-1">Meet Our Key Facilitator</Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Joseph Macharia <span className="text-indigo-600">Karuga</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Joseph is a dedicated, enthusiastic, and visionary team building expert and the Founder of
                                <span className="font-bold text-gray-900"> Adlucem Teambuilding Pros</span>. As a registered Counseling Psychologist,
                                he brings a unique blend of psychological insight and dynamic energy to every session.
                            </p>
                            <p>
                                He currently leads the health department at Jayden Services Ltd, where he oversees wellness
                                related services, seminars, and facilitations for both formal and informal groups across Kenya.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <GraduationCap className="text-indigo-600 shrink-0" size={28} />
                                <div>
                                    <p className="font-bold text-gray-900">B.A. Counseling Psychology</p>
                                    <p className="text-sm text-gray-500">Catholic University of Eastern Africa</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Award className="text-indigo-600 shrink-0" size={28} />
                                <div>
                                    <p className="font-bold text-gray-900">Security & Correctional Science</p>
                                    <p className="text-sm text-gray-500">Kenyatta University</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <ShieldCheck className="text-indigo-600 shrink-0" size={28} />
                                <div>
                                    <p className="font-bold text-gray-900">Environmental Health</p>
                                    <p className="text-sm text-gray-500">KMTC</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Zap className="text-indigo-600 shrink-0" size={28} />
                                <div>
                                    <p className="font-bold text-gray-900">Masters Candidate</p>
                                    <p className="text-sm text-gray-500">Child & Adolescent Psychology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    </main>
    )
}