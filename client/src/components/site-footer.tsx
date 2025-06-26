import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { smoothScrollTo, NEO_LOGO_WHITE } from "@/lib/utils";

// Footer data with real, working links for better navigation
const treatments = [
  { name: "FUE Hair Transplant", href: "/treatments#fue" },
  { name: "Growth Factors", href: "/treatments#prp" },
  { name: "Hypersomes", href: "/treatments#lllt" },
  { name: "Scalp Micropigmentation", href: "/treatments#smp" },
  { name: "Hair Loss Medications", href: "/treatments#medications" },
];

const resources = [
  { name: "Before & After Gallery", href: "/#treatments" },
  { name: "Hair Loss Education", href: "/#science" },
  { name: "VIP Membership", href: "/vip-membership" },
  { name: "FAQs", href: "/#faq" },
  { name: "Testimonials", href: "/#testimonials" },
];

const contactInfo = [
  {
    icon: (
      <MapPin
        className="h-5 w-5 text-neutral-400 mr-2 mt-0.5 flex-shrink-0"
        aria-label="Map Pin Icon"
      />
    ),
    text: "Irvine · El Segundo · Encinitas · Palm Desert  · Temecula",
  },
  {
    icon: (
      <Phone
        className="h-5 w-5 text-neutral-400 mr-2 mt-0.5 flex-shrink-0"
        aria-label="Phone Icon"
      />
    ),
    text: "(949) 570-0500",
  },
  {
    icon: (
      <Mail
        className="h-5 w-5 text-neutral-400 mr-2 mt-0.5 flex-shrink-0"
        aria-label="Emai Icon"
      />
    ),
    text: "team@drvigor.com",
  },
  {
    icon: (
      <Clock
        className="h-5 w-5 text-neutral-400 mr-2 mt-0.5 flex-shrink-0"
        aria-label="Clock Icon for Operational Hours"
      />
    ),
    text: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Desktop Footer Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          <div>
            <img src={NEO_LOGO_WHITE} alt="Dr. NEO Logo" className="h-8 mb-4" />
            <p className="text-neutral-400 mb-4">
              SoCal's premier hair restoration clinic dedicated to advanced,
              natural solutions for hair loss.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a> */}
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Instagram
                  role="button"
                  aria-hidden={true}
                  className="h-5 w-5"
                  target="_blank"
                />
                <span className="sr-only">Instagram</span>
              </a>
              {/* <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Treatments</h3>
            <ul className="space-y-2">
              {treatments.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.href.startsWith("/treatments")) {
                        window.location.href = item.href;
                      } else {
                        smoothScrollTo("treatments");
                      }
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <div>
                    <p className="text-neutral-400">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Footer Layout - Simplified */}
        <div className="md:hidden">
          <div className="flex justify-between items-start mb-8">
            <img src={NEO_LOGO_WHITE} alt="Dr. NEO Logo" className="h-8" />
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-bold text-base mb-3">Treatments</h3>
              <ul className="space-y-1.5">
                {treatments.slice(0, 3).map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                      onClick={(e) => {
                        e.preventDefault();
                        smoothScrollTo("treatments");
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-3">Resources</h3>
              <ul className="space-y-1.5">
                {resources.slice(0, 3).map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-base mb-3">Contact</h3>
            <ul className="space-y-1.5">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <div>
                    <p className="text-neutral-400 text-sm">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="section-inner-1200 my-12">
          <p className="text-3xl">Disclaimers and Legal Notices</p>
          <p className="footer-disclaimer-text text-sm text-base text-neutral-400">
            Call 911 if you are experiencing a life-threatening emergency.
            <br />
            <br />
            <span>
              <strong>
                The same results featured here may NOT occur for all patients.
                Furthermore, individual results and patient experience may vary
                SIGNIFICANTLY.
              </strong>
            </span>
            <strong>
              <br />
            </strong>
            <br />
            INDICATIONS FOR USE:
            <br />
            NeoGraft is cleared by the FDA with indication for use in
            suction-assisted follicular extraction and re-implantation. It is an
            auto-graft system and can be used on both male and female patients.
            <br />
            <br />
            Treatment diagrams are for illustrative purposes and do NOT
            precisely reflect actual procedure(s).
            <br />
            <br />
            This content features actors or models in addition to actual
            patients or healthcare providers. Some photos may have been provided
            by third parties to represent potential results.
            <br />
            <br />
            Reliance on any information provided here is solely at your own
            risk.
            <br />
            <br />
            “Dr. Neo” and “NeoGraft” are trademarks or registered trademarks of
            their respective owners.
            <br />
            <br />
          </p>
        </div>
        <div className="border-t border-neutral-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DR. NEO Hair Restoration. All
            rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-xs"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-xs"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors text-xs"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
