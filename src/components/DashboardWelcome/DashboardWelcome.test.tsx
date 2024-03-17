import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import UserContext from '../Contexts/UserContextProvider';
import DashboardWelcome, { capitalizeFirstLetter } from './DashboardWelcome';

const mockUser = {
  employee_name: 'John Doe',
};

interface MockUserContextProviderProps {
    children: ReactNode;
    value: any;
  }

const MockUserContextProvider: React.FC<MockUserContextProviderProps> = ({ children, value }) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

describe('DashboardWelcome component', () => {
  it('renders welcome message with capitalized name when user is provided', () => {
    const { getByText } = render(
      <MockUserContextProvider value={{ user: mockUser }}>
        <DashboardWelcome />
      </MockUserContextProvider>
    );

    expect(getByText('Welcome John Doe')).toBeInTheDocument();
  });

  it('renders welcome message without user when user is not provided', () => {
    const { getByText } = render(
      <MockUserContextProvider value={{ user: null }}>
        <DashboardWelcome />
      </MockUserContextProvider>
    );

    expect(getByText('Welcome')).toBeInTheDocument();
  });
});

describe('capitalizeFirstLetter function', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
  });

  it('returns empty string for empty input', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });

  it('returns the same string if it is already capitalized', () => {
    expect(capitalizeFirstLetter('Hello')).toBe('Hello');
    expect(capitalizeFirstLetter('World')).toBe('World');
  });
});
