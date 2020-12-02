import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const Hooks: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default Hooks;
