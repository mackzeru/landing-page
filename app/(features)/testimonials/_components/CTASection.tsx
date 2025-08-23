import { ScrollReveal } from '@/components/custom/ScrollReveal'
import { Button } from '@/components/ui/button'
import { Link, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const CTASection = () => {
  const router = useRouter();
  return (
    <section className="py-24 bg-gradient-to-l from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Start your transformation today and see why thousands of
            recruiting teams choose Leelu.ai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="text-gradient hover-text-gradient bg-white border-2 border-transparent bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-lg transition-all duration-300"
              onClick={() => router.push("/#pricing")}
            >
              Start Free Trial
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTASection