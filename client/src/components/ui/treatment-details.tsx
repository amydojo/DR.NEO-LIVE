import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { 
  Check, Clock, Calendar, ChevronRight, Plus, Minus, 
  Info, MessageSquare, PencilRuler, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BenefitCard from './benefit-card';
import { LazyImage } from './lazy-image';
import { smoothScrollTo } from '@/lib/utils';

// Define the Treatment interface
interface Treatment {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  heroImage: string;
  features: string[];
  benefits: string[];
  faq: { question: string; answer: string; }[];
  pricing: string;
  timeEstimate: string;
  recoveryTime: string;
  featured?: boolean;
}

// Map benefit strings to icon types
const benefitIconMap: Record<string, any> = {
  // FUE Hair Transplant
  'Permanently restore your hairline': 'restore',
  'Natural results that grow for life': 'natural',
  'No visible scarring': 'noScar',
  'Minimal downtime (return to work in 3-7 days)': 'minimal',
  'Custom hairline design tailored to your facial features': 'custom',
  'Boost your confidence and appearance': 'confidence',
  
  // Microneedling
  'Enhance thickness of existing hair': 'thickness',
  'Stimulate dormant hair follicles': 'dormant',
  'Improve absorption of hair growth products': 'absorption',
  'Non-surgical option with no downtime': 'nonsurgical',
  'Reduce inflammation in the scalp': 'inflammation',
  'Complement and enhance results of other treatments': 'complement',
  
  // Injectable Growth Factors
  'Strengthen and thicken existing hair': 'strengthen',
  'Extend the growth phase of hair follicles': 'extend',
  'Improve results of hair transplantation': 'improve',
  'Reduce inflammation that contributes to hair loss': 'reduce',
  'Minimize shedding of existing hair': 'minimize',
  'No downtime required': 'nondowntime',
  
  // Follicular Hypersomes
  'Wake up dormant hair follicles': 'wakeup',
  'Improve scalp environment for optimal hair growth': 'environment',
  'Extend the growth phase of your hair cycle': 'growth',
  'Enhance results from other treatments': 'enhance',
  'Non-invasive gentle treatment': 'noninvasive',
  'Address multiple factors of hair thinning simultaneously': 'multiple',
  
  // Vigor VIP
  'Consistent, ongoing care for optimal results': 'consistent',
  'Cost savings compared to individual treatments': 'savings',
  'Preventative approach to hair loss': 'preventative',
  'Regular adjustments to your regimen as needs change': 'adjustments',
  'Access to the complete Dr. Neo treatment ecosystem': 'access',
  'Peace of mind knowing your hair health is professionally managed': 'peace',
};

// Default map to use for benefits without a specific icon
const defaultIconMap = [
  'restore', 'natural', 'noScar', 'minimal', 'custom', 'confidence',
  'thickness', 'dormant', 'absorption', 'nonsurgical', 'inflammation', 'complement',
  'strengthen', 'extend', 'improve', 'reduce', 'minimize', 'nondowntime'
];

interface TreatmentDetailsProps {
  treatment: Treatment;
  isMobile: boolean;
}

const TreatmentDetails: React.FC<TreatmentDetailsProps> = ({ 
  treatment, 
  isMobile 
}) => {
  // State management
  const [activeTab, setActiveTab] = useState<'overview' | 'benefits' | 'faq'>('overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  
  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Toggle FAQ expansion
  const toggleFaq = (index: number) => {
    setExpandedFaq(prev => prev === index ? null : index);
  };
  
  // Handle tab selection with micro-animations
  const handleTabChange = (tab: 'overview' | 'benefits' | 'faq') => {
    setActiveTab(tab);
  };
  
  // Tab icons with active state
  const tabIcons = {
    overview: <Info className={`w-4 h-4 mr-2 ${activeTab === 'overview' ? 'text-[#A87B23]' : 'text-[#625046]/70'}`} />,
    benefits: <Shield className={`w-4 h-4 mr-2 ${activeTab === 'benefits' ? 'text-[#A87B23]' : 'text-[#625046]/70'}`} />,
    faq: <MessageSquare className={`w-4 h-4 mr-2 ${activeTab === 'faq' ? 'text-[#A87B23]' : 'text-[#625046]/70'}`} />
  };
  
  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top } = containerRef.current.getBoundingClientRect();
      setIsScrolledDown(top < 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="mt-10" ref={containerRef}>
        {/* Desktop Navigation Tabs - Premium Styled */}
        {!isMobile && (
          <div className="flex mb-8 bg-[#fcfbf9] backdrop-blur-sm rounded-xl shadow-sm overflow-hidden">
            <motion.button
              className={`relative px-8 py-4 text-base font-medium transition-all duration-300 flex items-center ${
                activeTab === 'overview' 
                  ? 'text-[#A87B23] bg-gradient-to-r from-[#A87B23]/5 to-transparent' 
                  : 'text-[#625046]/70 hover:text-[#625046] hover:bg-[#A87B23]/5'
              }`}
              onClick={() => handleTabChange('overview')}
              onHoverStart={() => setHoveredSection('overview')}
              onHoverEnd={() => setHoveredSection(null)}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              {tabIcons.overview}
              <span>Overview</span>
              {hoveredSection === 'overview' && activeTab !== 'overview' && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A87B23]/30"
                  layoutId="hoverIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {activeTab === 'overview' && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A87B23]"
                  layoutId="activeTreatmentTab"
                  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
            
            <motion.button
              className={`relative px-8 py-4 text-base font-medium transition-all duration-300 flex items-center ${
                activeTab === 'benefits' 
                  ? 'text-[#A87B23] bg-gradient-to-r from-[#A87B23]/5 to-transparent' 
                  : 'text-[#625046]/70 hover:text-[#625046] hover:bg-[#A87B23]/5'
              }`}
              onClick={() => handleTabChange('benefits')}
              onHoverStart={() => setHoveredSection('benefits')}
              onHoverEnd={() => setHoveredSection(null)}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              {tabIcons.benefits}
              <span>Key Benefits</span>
              {hoveredSection === 'benefits' && activeTab !== 'benefits' && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A87B23]/30"
                  layoutId="hoverIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {activeTab === 'benefits' && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A87B23]"
                  layoutId="activeTreatmentTab"
                  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
            
            <motion.button
              className={`relative px-8 py-4 text-base font-medium transition-all duration-300 flex items-center ${
                activeTab === 'faq' 
                  ? 'text-[#A87B23] bg-gradient-to-r from-[#A87B23]/5 to-transparent' 
                  : 'text-[#625046]/70 hover:text-[#625046] hover:bg-[#A87B23]/5'
              }`}
              onClick={() => handleTabChange('faq')}
              onHoverStart={() => setHoveredSection('faq')}
              onHoverEnd={() => setHoveredSection(null)}
              whileHover={{ y: -1 }}
              whileTap={{ y: 0 }}
            >
              {tabIcons.faq}
              <span>FAQ</span>
              {hoveredSection === 'faq' && activeTab !== 'faq' && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A87B23]/30"
                  layoutId="hoverIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {activeTab === 'faq' && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A87B23]"
                  layoutId="activeTreatmentTab"
                  transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          </div>
        )}
        
        {/* Mobile Section Headers - Premium Designed */}
        {isMobile && (
          <div className="mb-8">
            <motion.h3 
              className="text-2xl font-normal text-[#625046] flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="bg-gradient-to-br from-[#A87B23]/20 to-[#A87B23]/5 rounded-full p-2 mr-3 shadow-sm">
                <Info className="w-5 h-5 text-[#A87B23]" />
              </span>
              Treatment Overview
            </motion.h3>
          </div>
        )}
        
        {/* Tab Content with enhanced animations */}
        <div className="pt-2">
          <AnimatePresence mode="sync">
            {/* Overview Tab - Enhanced with sections */}
            {(activeTab === 'overview' || isMobile) && (
              <motion.div
                key="overview-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <div className="prose prose-lg max-w-none prose-headings:text-[#625046] prose-p:text-[#625046]/90">
                  <motion.p 
                    className="text-xl leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {treatment.longDescription}
                  </motion.p>
                  
                  {/* Treatment highlight boxes - better organization */}
                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start">
                        <div className="bg-[#A87B23]/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <PencilRuler className="w-5 h-5 text-[#A87B23]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-[#625046] mb-2">Personalized Approach</h4>
                          <p className="text-[#625046]/80 text-base">
                            Each treatment is tailored to your specific needs and goals, ensuring optimal results for your unique situation.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-start">
                        <div className="bg-[#A87B23]/10 rounded-full p-2 mr-4 flex-shrink-0">
                          <Shield className="w-5 h-5 text-[#A87B23]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-[#625046] mb-2">Expert Care</h4>
                          <p className="text-[#625046]/80 text-base">
                            Our experienced specialists use advanced techniques and state-of-the-art equipment to deliver exceptional results.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Treatment specs - premium display */}
                  <motion.div 
                    className="mt-10 bg-gradient-to-br from-[#fdfcfa] to-[#f7f4ed] p-8 rounded-xl shadow-sm border border-[#f0ece4] relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br from-[#A87B23]/10 to-[#A87B23]/0 blur-xl"></div>
                    <div className="absolute -bottom-20 -left-12 w-40 h-40 rounded-full bg-gradient-to-tr from-[#A87B23]/5 to-[#A87B23]/0 blur-xl"></div>
                    
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-medium text-[#A87B23] mb-3 flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-[#A87B23]" />
                          Procedure Time
                        </h4>
                        <p className="text-[#625046] text-2xl">{treatment.timeEstimate}</p>
                        <p className="text-[#625046]/70 text-sm mt-2">
                          The duration may vary based on the complexity and scope of your treatment.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-[#A87B23] mb-3 flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-[#A87B23]" />
                          Recovery Period
                        </h4>
                        <p className="text-[#625046] text-2xl">{treatment.recoveryTime}</p>
                        <p className="text-[#625046]/70 text-sm mt-2">
                          We provide detailed post-treatment care instructions to ensure a smooth recovery.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            
            {/* Mobile separator - Enhanced design */}
            {isMobile && (
              <motion.div 
                className="my-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-normal text-[#625046] flex items-center">
                  <span className="bg-gradient-to-br from-[#A87B23]/20 to-[#A87B23]/5 rounded-full p-2 mr-3 shadow-sm">
                    <Shield className="w-5 h-5 text-[#A87B23]" />
                  </span>
                  Key Benefits
                </h3>
              </motion.div>
            )}
            
            {/* Benefits Tab - Enhanced with premium benefits cards */}
            {(activeTab === 'benefits' || isMobile) && (
              <motion.div
                key="benefits-tab"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-16"
              >
                {/* Grid layout with alternating card styles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {treatment.benefits.map((benefit, index) => (
                    <BenefitCard
                      key={`benefit-${index}`}
                      title={benefit}
                      iconType={benefitIconMap[benefit] || defaultIconMap[index % defaultIconMap.length]}
                      variant={index % 3 === 0 ? 'premium' : index % 3 === 1 ? 'default' : 'accent'}
                      delay={0.05 * (index + 1)}
                    />
                  ))}
                </div>
                
                {/* Benefits summary section */}
                <motion.div 
                  className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <h4 className="text-xl font-medium text-[#625046] mb-4 flex items-center">
                    <span className="text-[#A87B23] mr-2">→</span> Why Choose This Treatment
                  </h4>
                  <p className="text-[#625046]/80 text-lg mb-6">
                    This treatment offers a comprehensive approach to hair restoration, addressing multiple factors that contribute to hair loss while providing both immediate and long-term benefits.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-[#A87B23] mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-[#625046]">Scientifically proven effectiveness</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-[#A87B23] mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-[#625046]">Personalized to your specific needs</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-[#A87B23] mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-[#625046]">Comprehensive approach to hair restoration</p>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-[#A87B23] mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-[#625046]">Ongoing support throughout your journey</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
            
            {/* Mobile separator */}
            {isMobile && (
              <motion.div 
                className="my-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-normal text-[#625046] flex items-center">
                  <span className="bg-gradient-to-br from-[#A87B23]/20 to-[#A87B23]/5 rounded-full p-2 mr-3 shadow-sm">
                    <MessageSquare className="w-5 h-5 text-[#A87B23]" />
                  </span>
                  Frequently Asked Questions
                </h3>
              </motion.div>
            )}
            
            {/* FAQ Tab - Enhanced with premium animations */}
            {(activeTab === 'faq' || isMobile) && (
              <motion.div
                key="faq-tab"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="mb-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {treatment.faq.slice(0, 2).map((item, index) => (
                    <motion.div 
                      key={`faq-highlight-${index}`}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <h4 className="text-lg font-medium text-[#A87B23] mb-3">{item.question}</h4>
                      <p className="text-[#625046]/80 text-base">{item.answer}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="space-y-4 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                  {treatment.faq.slice(2).map((item, index) => (
                    <motion.div 
                      key={`faq-accordion-${index}`}
                      className={`transition-all duration-300 overflow-hidden border-b border-gray-100 last:border-b-0`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * (index + 2) }}
                    >
                      <motion.button
                        className="flex justify-between items-center w-full p-6 text-left transition-colors hover:bg-[#faf9f7]"
                        onClick={() => toggleFaq(index)}
                        whileHover={{ backgroundColor: "#faf9f7" }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <span className="font-medium text-[#625046] text-lg">{item.question}</span>
                        <motion.div 
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                            expandedFaq === index ? 'bg-[#A87B23]' : 'bg-[#f5f5f7]'
                          }`}
                          initial={false}
                          animate={{ 
                            rotate: expandedFaq === index ? 180 : 0,
                            backgroundColor: expandedFaq === index ? "#A87B23" : "#f5f5f7"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {expandedFaq === index ? (
                            <Minus className="w-5 h-5 text-white" />
                          ) : (
                            <Plus className="w-5 h-5 text-[#625046]" />
                          )}
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {expandedFaq === index && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-6 bg-[#faf9f7]"
                          >
                            <motion.p 
                              className="text-[#625046]/90 text-base leading-relaxed"
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              {item.answer}
                            </motion.p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Bottom CTA - Prettier, more premium */}
        <motion.div 
          className="mt-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-[#fdfcfa] to-[#f7f4ed] p-8 md:p-10 rounded-xl shadow-md border border-[#f0ece4] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-[#A87B23]/10 to-[#A87B23]/0 blur-xl"></div>
            <div className="absolute -bottom-24 -left-12 w-40 h-40 rounded-full bg-gradient-to-tr from-[#A87B23]/5 to-[#A87B23]/0 blur-xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-medium text-[#625046] mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Ready to transform your hair?
                </motion.h3>
                <motion.p 
                  className="text-[#625046]/80 text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  Schedule a consultation to discuss this treatment with our experts.
                </motion.p>
              </div>
              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    className="bg-[#141414] hover:bg-[#2a2a2a] text-white font-medium px-8 py-4 h-auto rounded-full transition-all hover:shadow-lg"
                    onClick={() => smoothScrollTo("consultation")}
                  >
                    Book Consultation
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="outline"
                    className="border-[#a87b23] text-[#a87b23] hover:bg-[#a87b23] hover:text-white font-medium px-8 py-4 h-auto rounded-full transition-all"
                    onClick={() => window.location.href = `tel:${encodeURIComponent("(949) 570-0500")}`}
                  >
                    Call Us
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default TreatmentDetails;