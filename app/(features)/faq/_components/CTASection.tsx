import { ScrollReveal } from '@/components/custom/ScrollReveal'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Start your free trial today and experience the future of
              AI-powered recruiting
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg">
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
  )
}

export default CTASection