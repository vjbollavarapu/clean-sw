
import React from 'react';
import AutoPaySettings from './settings/AutoPaySettings';
import PaymentMethodsSettings from './settings/PaymentMethodsSettings';
import NotificationSettings from './settings/NotificationSettings';
import BillingContactsSettings from './settings/BillingContactsSettings';
import BillingAddressSettings from './settings/BillingAddressSettings';

const BillingSettings = () => {
  return (
    <div className="space-y-6">
      <AutoPaySettings />
      <PaymentMethodsSettings />
      <NotificationSettings />
      <BillingContactsSettings />
      <BillingAddressSettings />
    </div>
  );
};

export default BillingSettings;
