import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

test('renders learn react link', () => {
  const { getByText } = render(<LoginForm />);
  const header = getByText(/Hello/i);
  expect(header).toBeInTheDocument();
});

it('renders without crashing', () => {
  shallow(<LoginForm />);
});
