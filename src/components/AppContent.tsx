
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Login from './Login';
import Dashboard from './Dashboard';
import Layout from './Layout';
import LandingPage from '../pages/LandingPage';
import NotFound from '../pages/NotFound';
import ServiceOrders from '../pages/ServiceOrders';
import NewServiceOrder from '../pages/NewServiceOrder';
import ServiceOrderDetails from '../pages/ServiceOrderDetails';
import Employees from '../pages/Employees';
import Clients from '../pages/Clients';
import Inventory from '../pages/Inventory';
import Financial from '../pages/Financial';
import Reports from '../pages/Reports';
import SystemSettings from '../pages/SystemSettings';
import Attendance from '../pages/Attendance';
import Payroll from '../pages/Payroll';
import Tasks from '../pages/Tasks';
import Timesheet from '../pages/Timesheet';
import ServiceHistory from '../pages/ServiceHistory';
import Billing from '../pages/Billing';
import PurchaseOrders from '../pages/PurchaseOrders';
import Suppliers from '../pages/Suppliers';
import Invoices from '../pages/Invoices';
import UserManagement from '../pages/UserManagement';

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      {isAuthenticated && (
        <>
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/users" element={<Layout><UserManagement /></Layout>} />
          <Route path="/orders" element={<Layout><ServiceOrders /></Layout>} />
          <Route path="/orders/new" element={<Layout><NewServiceOrder /></Layout>} />
          <Route path="/orders/:id" element={<Layout><ServiceOrderDetails /></Layout>} />
          <Route path="/employees" element={<Layout><Employees /></Layout>} />
          <Route path="/clients" element={<Layout><Clients /></Layout>} />
          <Route path="/inventory" element={<Layout><Inventory /></Layout>} />
          <Route path="/financial" element={<Layout><Financial /></Layout>} />
          <Route path="/reports" element={<Layout><Reports /></Layout>} />
          <Route path="/settings" element={<Layout><SystemSettings /></Layout>} />
          <Route path="/attendance" element={<Layout><Attendance /></Layout>} />
          <Route path="/payroll" element={<Layout><Payroll /></Layout>} />
          <Route path="/tasks" element={<Layout><Tasks /></Layout>} />
          <Route path="/timesheet" element={<Layout><Timesheet /></Layout>} />
          <Route path="/services" element={<Layout><ServiceHistory /></Layout>} />
          <Route path="/billing" element={<Layout><Billing /></Layout>} />
          <Route path="/purchase-orders" element={<Layout><PurchaseOrders /></Layout>} />
          <Route path="/suppliers" element={<Layout><Suppliers /></Layout>} />
          <Route path="/invoices" element={<Layout><Invoices /></Layout>} />
        </>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppContent;
