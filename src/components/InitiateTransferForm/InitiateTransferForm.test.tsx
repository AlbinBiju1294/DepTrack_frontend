import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InitiateTransferForm from './InitiateTransferForm';

// Mock props for testing
const mockProps = {
  employeeData: [
    { id: 1, name: 'John Doe', employee_number: '123456', mail_id: 'john@example.com', designation: 'Developer' },
    { id: 2, name: 'Jane Smith', employee_number: '654321', mail_id: 'jane@example.com', designation: 'Manager' }
  ],
  selectedEmployee: null,
  bands: [{ value: 'Band1', label: 'Band 1' }, { value: 'Band2', label: 'Band 2' }],
  isChecked: true,
  contextHolder: <div>Context Holder</div>,
  options: [{ value: { id: 1, du_name: 'DU1' }, label: 'DU 1' }, { value: { id: 2, du_name: 'DU2' }, label: 'DU 2' }],
  changeKeyword: jest.fn(),
  handleSubmit: jest.fn(),
  handleInputChange: jest.fn(),
  handleAutocompleteChange: jest.fn(),
  handleBandDropdownChange: jest.fn(),
  handleDuDropdownChange: jest.fn(),
  handleCheckboxChange: jest.fn(),
  loading:false
};

describe('InitiateTransferForm', () => {
    it('renders correctly', () => {
        const { getByText, getByPlaceholderText, debug } = render(<InitiateTransferForm {...mockProps} />);
        // Debugging output
        debug();
        
        // Check if form elements are rendered
        expect(getByText('Employee Name:*')).toBeInTheDocument();
        expect(getByPlaceholderText('search employee')).toBeInTheDocument();
      });
      

  it('calls handleAutocompleteChange when selecting an employee', () => {
    const { getByPlaceholderText, getByText } = render(<InitiateTransferForm {...mockProps} />);
    const searchInput = getByPlaceholderText('search employee');
    fireEvent.change(searchInput, { target: { value: 'John Doe' } });
    fireEvent.click(getByText('John Doe'));
    expect(mockProps.handleAutocompleteChange).toHaveBeenCalledWith({ id: 1, name: 'John Doe', employee_number: '123456', mail_id: 'john@example.com', designation: 'Developer' });
  });

  it('renders submit button correctly', () => {

    render(<InitiateTransferForm {...mockProps} />);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toHaveTextContent('Submit');
  });

  // Add more tests for other interactions and edge cases
});
