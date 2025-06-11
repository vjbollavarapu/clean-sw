
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import ServiceOrders from "./pages/ServiceOrders";
import NewServiceOrder from "./pages/NewServiceOrder";
import ServiceOrderDetails from "./pages/ServiceOrderDetails";
import Employees from "./pages/Employees";
import Clients from "./pages/Clients";
import Inventory from "./pages/Inventory";
import Financial from "./pages/Financial";
import Reports from "./pages/Reports";
import SystemSettings from "./pages/SystemSettings";
import Attendance from "./pages/Attendance";
import Payroll from "./pages/Payroll";
import Tasks from "./pages/Tasks";
import Timesheet from "./pages/Timesheet";
import ServiceHistory from "./pages/ServiceHistory";
import Billing from "./pages/Billing";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      {isAuthenticated && (
        <>
          <Route path="/dashboard" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Dashboard />
              </main>
            </div>
          } />
          <Route path="/orders" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <ServiceOrders />
              </main>
            </div>
          } />
          <Route path="/orders/new" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <NewServiceOrder />
              </main>
            </div>
          } />
          <Route path="/orders/:id" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <ServiceOrderDetails />
              </main>
            </div>
          } />
          <Route path="/employees" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Employees />
              </main>
            </div>
          } />
          <Route path="/clients" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Clients />
              </main>
            </div>
          } />
          <Route path="/inventory" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Inventory />
              </main>
            </div>
          } />
          <Route path="/financial" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Financial />
              </main>
            </div>
          } />
          <Route path="/reports" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Reports />
              </main>
            </div>
          } />
          <Route path="/settings" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <SystemSettings />
              </main>
            </div>
          } />
          <Route path="/attendance" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Attendance />
              </main>
            </div>
          } />
          <Route path="/payroll" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Payroll />
              </main>
            </div>
          } />
          <Route path="/tasks" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Tasks />
              </main>
            </div>
          } />
          <Route path="/timesheet" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Timesheet />
              </main>
            </div>
          } />
          <Route path="/services" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <ServiceHistory />
              </main>
            </div>
          } />
          <Route path="/billing" element={
            <div className="flex h-screen bg-background">
              <Navigation />
              <main className="flex-1 overflow-auto">
                <Billing />
              </main>
            </div>
          } />
        </>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
