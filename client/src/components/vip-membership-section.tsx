import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

// VIP benefits list
const vipBenefits = [
  {
    title: "Priority Scheduling",
    description: "Skip the waitlist with guaranteed appointments within 72 hours."
  },
  {
    title: "Exclusive Pricing",
    description: "Save up to 25% on maintenance treatments and products."
  },
  {
    title: "Early Access",
    description: "Be the first to try new innovative treatments and technologies."
  }
];

export default function VIPMembershipSection() {
  return (
    <section className="py-16 md:py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-6 section-fade">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
              Exclusive Program
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              VIGOR VIP Membership
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Join our exclusive membership program and receive priority scheduling, special pricing on maintenance treatments, and access to new technologies before they're available to the public.
            </p>
            
            <div className="space-y-4 mb-8">
              {vipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-white/60">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              className="bg-primary hover:bg-primary/90 text-neutral-900 px-8 py-6 text-base font-medium"
              onClick={() => smoothScrollTo('contact')}
            >
              Become a VIP Member
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-96">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/20 rounded-lg"></div>
              <div className="absolute top-4 left-4 w-full h-full bg-primary/10 rounded-lg"></div>
              <div className="relative w-full h-full flex items-center justify-center bg-neutral-800 rounded-lg p-8">
                {/* VIP Card - Using a placeholder card design */}
                <div className="w-full h-auto shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg p-6">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-primary">VIGOR VIP</h3>
                    <p className="text-white/60 text-sm">MEMBERSHIP</p>
                  </div>
                  <div className="mb-4 border-t border-neutral-700 pt-4">
                    <h4 className="text-white/80 text-sm">MEMBER NAME</h4>
                    <p className="text-white font-medium">JOHN SMITH</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-white/80 text-sm">MEMBER SINCE</h4>
                    <p className="text-white font-medium">JANUARY 2023</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-white/60 text-xs">DR. NEO HAIR RESTORATION</p>
                    <img 
                      src="/attached_assets/NEO LOGO WHITE.png" 
                      alt="Dr. NEO Logo" 
                      className="h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
