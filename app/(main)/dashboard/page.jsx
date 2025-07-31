import React from 'react'
import FeatureAssistant from './_components/FeatureAssistant'
import History from './_components/History'
import Feedback from './_components/Feedback'

function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] dark:from-[#0f0f0f] dark:to-[#1a1a1a] px-6 md:px-12 py-12 space-y-16">

      {/* Header + Coaching Options */}
      <section className="max-w-7xl mx-auto">
          <FeatureAssistant />
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 dark:border-zinc-700" />

      {/* History + Feedback Section */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl transition-all hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
            📘 Your Previous Lectures
          </h3>
          <History />
        </div>

        <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl transition-all hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
            💬 Feedback
          </h3>
          <Feedback />
        </div>
      </section>
    </div>
  )
}

export default Dashboard
