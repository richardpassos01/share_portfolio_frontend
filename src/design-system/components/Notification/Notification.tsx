import React, { useEffect, useState } from 'react';
import { ToastContainer, Toast } from './Notification.style';

type Toast = {
  message: string;
  type: 'sucess' | 'error';
};

type Props = {
  toast: Toast;
};

const Notification = ({ toast }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(toast.message ? true : false);
  }, [toast]);

  return (
    <ToastContainer $visible={isVisible}>
      <Toast $type={toast.type}>{toast.message}</Toast>
    </ToastContainer>
  );
};

export default Notification;
