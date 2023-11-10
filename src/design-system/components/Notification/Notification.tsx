import React, { useEffect, useState } from 'react';
import { ToastContainer, Toast } from './Notification.style';

export type Toast = {
  message: string;
  type: 'success' | 'error';
};

type Props = {
  toast: Toast;
};

const Notification = ({ toast }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
  }, [toast]);

  return (
    <ToastContainer $visible={isVisible}>
      <Toast $type={toast.type}>{toast.message}</Toast>
    </ToastContainer>
  );
};

export default Notification;
