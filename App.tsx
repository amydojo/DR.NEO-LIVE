import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initFadeInAnimations, initLazyImageLoading } from "@/lib/utils";
import Home from "@/pages/home";
import VIPMembership from "@/pages/vip-membership";
import TreatmentsPremium from "@/pages/treatments-premium";
import ComponentExportPage from "@/pages/component-export";
import NotFound from "@/pages/not-found";
import Fue from "@/pages/fue";
function Router() {
  const [location] = useLocation();
  
  // Initialize animations and lazy loading on route change
  useEffect(() => {
    const cleanupAnimations = initFadeInAnimations();
    const cleanupLazyLoading = initLazyImageLoading();
    
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    return () => {
      cleanupAnimations();
      cleanupLazyLoading();
    };
  }, [location]);
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/vip-membership" component={VIPMembership} />
      <Route path="/treatments" component={TreatmentsPremium} />
      <Route path="/component-export" component={ComponentExportPage} />
      <Route path="/fue" component={Fue}
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
