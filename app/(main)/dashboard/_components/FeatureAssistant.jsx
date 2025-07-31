"use client"

import { BlurFade } from '@/components/magicui/blur-fade'
import { Button } from '@/components/ui/button'
import { CoachingOptions } from '@/services/Options'
import { useUser } from '@stackframe/stack'
import Image from 'next/image'
import React from 'react'
import UserInputDialog from './UserInputDialog'
import ProfileDialog from './ProfileDialog'

function FeatureAssistant() {
    const user = useUser()

    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                    <h2 className="text-sm text-muted-foreground">My Workspace</h2>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
                        Welcome back, {user?.displayName?.split(' ')[0] ?? 'there'} 👋
                    </h1>
                </div>

                <ProfileDialog>
                    <Button variant="outline" className="rounded-full px-6 py-2">
                        Profile
                    </Button>
                </ProfileDialog>
            </div>

            {/* Coaching Options */}
            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"> */}
            <div className="gap-6">
                {CoachingOptions.map((option, index) => (
                    <BlurFade key={option.icon} delay={0.25 + index * 0.05} inView>
                        <div className="relative group cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl bg-white/60 dark:bg-zinc-800/60 backdrop-blur-lg border border-gray-200 dark:border-zinc-700 rounded-xl p-5 h-[180px] flex flex-col items-center justify-center">
                            <UserInputDialog coachingOption={option}>
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="w-16 h-16 rounded-full bg-white/80 dark:bg-zinc-700/50 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                                        <Image
                                            src={option.icon}
                                            alt={option.name}
                                            width={40}
                                            height={40}
                                            className="transition-transform duration-300 group-hover:rotate-12"
                                        />
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                                        {option.name}
                                    </h3>
                                </div>
                            </UserInputDialog>
                        </div>
                    </BlurFade>
                ))}
            </div>
        </div>
    )
}

export default FeatureAssistant
