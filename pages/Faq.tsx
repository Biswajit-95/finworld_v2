import React, { useState } from 'react';
import Section from '../components/Section';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "What is the hardware cost?",
    answer: "The FinWorld Secured Device costs approximately $1,999.99 for Retail Clients. This is the market price for the high-end hardware we utilize. For Broker Dealers, 100% of the computer cost is typically paid by the Dealer."
  },
  {
    question: "Is there an ongoing cost?",
    answer: "Yes, there is an annual cost of $200 per computer. This fee covers critical security updates, military-grade encryption maintenance, EDR (Endpoint Detection and Response) monitoring, administration, and ongoing access to assist clients."
  },
  {
    question: "What are the setup fees?",
    answer: "For Broker Dealers, there is a one-time setup charge of $300 if they wish to customize laptops with their logo. This includes up to 2 hours of tech support. Additional support beyond this is billed at $150/hr."
  },
  {
    question: "Why do I need a separate device?",
    answer: "Using the same device for financial management and daily activities (like social media, email, and casual browsing) creates a critical vulnerability. Attackers often target personal devices through these channels. By physically isolating your financial life on a FinWorld device, you remove this risk entirely."
  },
  {
    question: "What happens if the device is stolen?",
    answer: "Our devices are equipped with remote wipe capability. In the event of theft or loss, we can instantly scrub the device to ensure your data never falls into the wrong hands. A replacement can then be issued."
  },
  {
    question: "Can my family access it?",
    answer: "Yes, via our 'Transfer of Access' protocol. At the time of need (incapacitation or death), passwords and login information will be shared with your designated beneficiaries (Spouse, Trustee, Executor, Children) so they can access documents and accounts."
  },
  {
    question: "What if I have multiple users?",
    answer: "Additional computers can be purchased for multiple users. The cost structure involves the market cost of the computer + $100 programming fee + market shipping price. The ongoing service fee remains $200 per year per device."
  }
];

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border border-zinc-200 rounded-2xl bg-white mb-4 overflow-hidden transition-all duration-300 hover:border-zinc-400">
      <button 
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-bold text-lg text-zinc-900">{item.question}</span>
        {isOpen ? (
            <ChevronUp className="w-5 h-5 text-indigo-600" />
        ) : (
            <ChevronDown className="w-5 h-5 text-zinc-400" />
        )}
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-zinc-600 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-24 md:pt-32 bg-zinc-50 min-h-screen">
      <div className="bg-zinc-900 text-white py-24 px-4 text-center border-b border-zinc-800">
         <div className="inline-flex items-center justify-center p-3 bg-zinc-800 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-indigo-400" />
         </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
           Everything you need to know about the FinWorld ecosystem, costs, and protocols.
        </p>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
                <AccordionItem 
                    key={index} 
                    item={item} 
                    isOpen={openIndex === index} 
                    onClick={() => handleToggle(index)} 
                />
            ))}
        </div>
      </Section>
    </div>
  );
};

export default Faq;