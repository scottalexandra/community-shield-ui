import React, { PropTypes } from 'react';
import Card from 'react-md/lib/Cards/Card';

import { validateEmail } from '../../utils/inputValidations';

const LoginForm = ({ email, onChange, onSubmit, password }) => {
  const formValid = () => {
    return email.length && validateEmail(email) && password.length;
  }

  return (
    <Card className="user-cred__form">
      <div className="user-cred__form-header">
        <h2 className="user-cred__form-title">Hello</h2>
      </div>
    </Card>
  );
};

export default LoginForm;
