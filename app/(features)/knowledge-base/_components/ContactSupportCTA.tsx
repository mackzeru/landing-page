import { Button } from '@/components/ui/button'
import { ExternalLink, MessageSquare } from 'lucide-react'
import React from 'react'

const ContactSupportCTA = () => {
  return (
    <section className="py-20 px-8 bg-gradient-to-r from-purple-600 to-blue-600">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Still Need Help?
      </h2>
      <p className="text-xl text-purple-100 mb-8 leading-relaxed">
        Our support team is available 24/7 to help you resolve any issues
        with Leelu.ai
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          Contact Support
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-xl bg-transparent"
        >
          <ExternalLink className="h-5 w-5 mr-2" />
          Visit Help Center
        </Button>
      </div>
    </div>
  </section>
  )
}

export default ContactSupportCTA