import { createRoot } from "react-dom/client";
import App from "./App";
import Home from "./pages/home";
import "./index.css";
import "./styles/animations.css";
import "./styles/premium-animations.css";
import { Switch, Route, useLocation } from "wouter";
import Fue from "./pages/fue";
import VIPMembership from "./pages/vip-membership";
import TreatmentsPremium from "./pages/treatments-premium";
import ComponentExportPage from "./pages/component-export";
import NotFound from "./pages/not-found";

console.log("THIS IS RUNNING");

createRoot(document.getElementById("root")!).render(
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/vip-membership" component={VIPMembership} />
    <Route path="/treatments" component={TreatmentsPremium} />
    <Route path="/fue" component={Fue} />
    <Route path="/component-export" component={ComponentExportPage} />
    {/* Fallback to 404 */}
    <Route component={NotFound} />
  </Switch>,
);
