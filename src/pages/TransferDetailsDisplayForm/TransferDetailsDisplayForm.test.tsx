import React from 'react';
import { render } from '@testing-library/react';
import TransferDetailsDisplayForm from './TransferDetailsDisplayForm';

// Mock InnerBodyHeader and TransferDetailsDisplayContainer components
jest.mock('../../components/InnerBodyHeader/InnerBodyHeader', () => () => <div data-testid="inner-body-header" />);
jest.mock('../../components/TransferDetailsDisplayContainer/TransferDetailsDisplayContainer', () => () => <div data-testid="transfer-details-display-container" />);

describe('TransferDetailsDisplayForm', () => {
  it('renders InnerBodyHeader and TransferDetailsDisplayContainer', () => {
    const { getByTestId } = render(<TransferDetailsDisplayForm />);
    
    // Check if InnerBodyHeader and TransferDetailsDisplayContainer are rendered
    expect(getByTestId('inner-body-header')).toBeInTheDocument();
    expect(getByTestId('transfer-details-display-container')).toBeInTheDocument();
  });
});
