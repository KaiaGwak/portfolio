'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center py-20"
    >
      <div className="text-center">
        <h1 className="mb-6 text-5xl font-bold">
          Frontend Developer
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          クリエイティブなソリューションを提供する
        </p>
        <button className="rounded-full bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
          プロジェクトを見る
        </button>
      </div>
    </motion.section>
  )
}
