import React, { useState } from 'react';
import Login from './Login/Login';
import SingUp from './SingUp/SingUp';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const onToggleLogin = (e) => {
    setIsLogin(e);
  };
  return isLogin ? (
    <Login onToggleLogin={onToggleLogin} />
  ) : (
    <SingUp onToggleLogin={onToggleLogin} />
  );
};

export default Auth;
