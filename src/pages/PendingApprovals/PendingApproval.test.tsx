import React from 'react';
import { render } from '@testing-library/react';
import PendingApprovals from './PendingApprovals';

// Mock InnerBodyHeader and PendingApprovalsContainer components
jest.mock('../../components/InnerBodyHeader/InnerBodyHeader', () => () => <div data-testid="inner-body-header" />);
jest.mock('../../components/PendingApprovalsContainer/PendingApprovalsContainer', () => () => <div data-testid="pending-approvals-container" />);

describe('PendingApprovals', () => {
  it('renders InnerBodyHeader and PendingApprovalsContainer', () => {
    const { getByTestId } = render(<PendingApprovals />);
    
    // Check if InnerBodyHeader and PendingApprovalsContainer are rendered
    expect(getByTestId('inner-body-header')).toBeInTheDocument();
    expect(getByTestId('pending-approvals-container')).toBeInTheDocument();
  });
});
