import { useState, useEffect } from "react";
import { Menu, Search, Phone, ChevronRight } from "lucide-react";
import { cn, NEO_LOGO_WHITE } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";
import { Link, useLocation } from "wouter";
import { usePathname } from "wouter/use-browser-location";
import FueNavBar from "./fue/fue-nav-bar";

// Navigation links with proper organization for better user flow
const navLinks = [
  // { name: "Home", href: "/", type: "link" },
  {
    name: "Treatments",
    href: "/fue",
    type: "dropdown",
    dropdownItems: [
      {
        name: "FUE Hair Transplant",
        href: "/fue",
        type: "link",
      },
      {
        name: "Follicular Hypersomes™",
        href: "/hypersomes",
        type: "link",
      },
      {
        name: "Growth Factors",
        href: "/growth-factors",
        type: "link",
      },
      {
        name: "Microneedling",
        href: "/microneedling",
        type: "link",
      },
    ],
  },
  // { name: "About", href: "/#about", type: "anchor" },
  { name: "Gallery", href: "/#testimonials", type: "anchor" },
  { name: "Pricing", href: "/vip-membership", type: "link" },
  { name: "Locations", href: "/#contact", type: "anchor" },
];

export default function SiteHeader() {
  const [typeDropdownOpen, setTypeDropdownOpen] = useState<string | null>(null);
  const generateLinks = (linksArray: any) => {
    return linksArray.map((link: any) => {
      let linkType = null;
      switch (link.type) {
        case "anchor":
          linkType = (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-[#FAE151] font-medium transition-colors py-2 text-sm sm:text-base tracking-wide"
              style={{ textShadow: "0px 1px 1px rgba(0,0,0,0.2)" }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          );
          break;
        case "link":
          linkType = (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-[#FAE151] font-medium transition-colors py-2 text-sm sm:text-base tracking-wide"
              style={{ textShadow: "0px 1px 1px rgba(0,0,0,0.2)" }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          );
          break;
        case "dropdown":
          linkType = (
            <div>
              <div
                className="text-white hover:text-[#FAE151] font-medium transition-colors py-2 text-sm sm:text-base tracking-wide flex flex-row items-center "
                onClick={() => {
                  if (typeDropdownOpen === link.name) {
                    setTypeDropdownOpen(null);
                  } else setTypeDropdownOpen(link.name);
                }}
              >
                {link.name}{" "}
                <ChevronRight
                  className={`
                              ${typeDropdownOpen === link.name ? "rotate-90" : "rotate-0"}
                              animate duration-300 h-4 w-4`}
                />
              </div>
              <div
                className={`${typeDropdownOpen === link.name ? "block" : "hidden"} text-white hover:text-[#FAE151] font-medium transition-colors py-2 text-sm sm:text-base tracking-wide pl-4`}
              >
                <div className="flex flex-col gap-2">
                  {generateLinks(link.dropdownItems)}
                </div>
              </div>
            </div>
          );
          break;
        default:
          break;
      }

      return linkType;
    });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const pathName = usePathname();

  // Handle scroll event to change header style with debounce for performance
  useEffect(() => {
    const header = document.getElementById("site-header");

    const handleFocusIn = (e: FocusEvent) => {
      if (header && header.contains(e.target as Node)) {
        const headerRect = header.getBoundingClientRect();

        if (headerRect.top < 0 || headerRect.bottom < 0) {
          header.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    let scrollTimer: number | null = null;

    const handleScroll = () => {
      if (pathName === "/fue" && window.innerWidth < 768) {
        setIsScrolled(true);
        return;
      }
      if (scrollTimer === null) {
        scrollTimer = window.setTimeout(() => {
          setIsScrolled(window.scrollY > 10);
          scrollTimer = null;
        }, 10);
      }
      window.addEventListener("focusin", handleFocusIn);
      return () => window.removeEventListener("focusin", handleFocusIn);
    };

    // Initial check
    if (pathName === "/fue" && window.innerWidth < 768) {
      setIsScrolled(true);
    } else setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      if (scrollTimer) window.clearTimeout(scrollTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle navigation click more intelligently with updated href format
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    // Extract the section ID from the href (e.g., "/#about" -> "about")
    const sectionId = href.split("#")[1];

    // If we're already on the home page and have a section ID, smoothly scroll to it
    if (location === "/" && sectionId) {
      smoothScrollTo(sectionId);
    } else if (href.startsWith("/#") && location !== "/") {
      // If we're on another page and trying to access a home page section
      window.location.href = href;
    } else {
      // For other cases just navigate normally
      window.location.href = href;
    }
  };
  if (location === "/fue") {
    return <FueNavBar />;
  }

  return (
    <header
      id="site-header"
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out",
        isScrolled
          ? "bg-gradient-to-r from-[#EDB930] to-[#C8B68F] shadow-lg lg:bg-white/95 lg:backdrop-blur-xl md:shadow-sm"
          : "bg-transparent backdrop-blur-sm lg:bg-white",
      )}
    >
      {/* Mobile header */}
      <div className="md:hidden container mx-auto px-4 flex justify-between items-center h-16">
        {/* Left Side Icons */}
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "p-0 hover:bg-white/20 focus-visible:ring-offset-0 transition-all duration-500 ",
              isScrolled ? "text-white" : "text-white drop-shadow-lg",
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu
              className="h-5 w-5 transition-all duration-500 ease-in-out"
              style={{
                filter: isScrolled
                  ? "none"
                  : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                transform: "translateZ(0)",
              }}
            />
            <span className="sr-only">Toggle menu</span>
          </Button>
          {/* <Button
            variant="ghost"
            size="icon"
            className="text-white p-0 hover:bg-white/10 focus-visible:ring-offset-0 focus-visible:ring-white"
          >
            <Search
              className="h-4 w-4 sm:h-5 sm:w-5"
              style={{
                filter: "none",
                transform: "translateZ(0)",
              }}
            />
            <span className="sr-only">Search</span>
          </Button> */}
        </div>

        {/* Center Logo - Made clickable for better UX */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center h-full">
          <Link href="/">
            <img
              src="/assets/NEO LOGO WHITE.png"
              alt="Dr. NEO"
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Right Side Phone Icon - Made clickable to call office */}
        <div>
          <a href="tel:(949) 570-0500">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "p-0  hover:bg-white/20 focus-visible:ring-offset-0 transition-all duration-500",
                isScrolled ? "text-white" : "text-white drop-shadow-lg",
              )}
            >
              <Phone
                className="h-6 w-6 transition-all duration-500 ease-in-out"
                style={{
                  filter: isScrolled
                    ? "none"
                    : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                  transform: "translateZ(0)",
                }}
              />
              <span className="sr-only">Call us at (949) 570-0500</span>
            </Button>
          </a>
        </div>
      </div>

      {/* Desktop header - Hims inspired */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center xl:w-64">
              <Link href="/">
                <img
                  src="/assets/NEO LOGO WHITE.png"
                  alt="Dr. NEO"
                  className="h-6 w-auto invert"
                />
              </Link>
            </div>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {generateLinks(navLinks)}
            </nav>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="tel:(949) 570-0500"
                className="text-[#] text-sm font-medium hidden lg:block"
              >
                (949) 570-0500
              </a>
              <button
                onClick={() => smoothScrollTo("contact")}
                className="hidden lg:inline-flex items-center justify-center h-10 px-6 text-sm font-medium transition-colors bg-[#141414] text-white rounded-full hover:bg-[#2a2a2a] focus:outline-none focus:ring-4 focus:ring-blue"
              >
                Book Consult
              </button>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#EDB930] lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced with clear CTA */}
      {isMenuOpen && (
        <nav className="lg:hidden p-4 sm:p-5 bg-[#625046] border-t border-[#C8B68F]/20 shadow-md">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) =>
              link.type === "anchor" ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#FAE151] font-medium transition-colors py-2 text-sm sm:text-base tracking-wide"
                  style={{ textShadow: "0px 1px 1px rgba(0,0,0,0.2)" }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#FAE151] font-medium transition-colors py-2 text-sm sm:text-base tracking-wide"
                  style={{ textShadow: "0px 1px 1px rgba(0,0,0,0.2)" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ),
            )}

            {/* Clear Call-to-Action button */}
            <div className="pt-3 mt-3 border-t border-[#C8B68F]/20">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:(949) 570-0500"
                  className="flex items-center justify-center bg-white/10 text-white rounded-lg py-3 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
                <a
                  href="/#contact"
                  className="flex items-center justify-center bg-[#FAE151] text-[#625046] rounded-lg py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    handleNavClick("/#contact");
                  }}
                >
                  Book Consult
                </a>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
