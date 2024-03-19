import React from 'react';
import { render } from '@testing-library/react';
import TrackInitiatedRequests from './TrackInitiatedRequests';

// Mock InnerBodyHeader and TrackRequestsContainerHandler components
jest.mock('../../components/InnerBodyHeader/InnerBodyHeader', () => () => <div data-testid="inner-body-header" />);
jest.mock('../../components/TrackRequestsContainer/TrackRequestsContainerHandler', () => () => <div data-testid="track-requests-container" />);

describe('TrackInitiatedRequests', () => {
  it('renders InnerBodyHeader and TrackRequestsContainerHandler', () => {
    const { getByTestId } = render(<TrackInitiatedRequests />);
    
    // Check if InnerBodyHeader and TrackRequestsContainerHandler are rendered
    expect(getByTestId('inner-body-header')).toBeInTheDocument();
    expect(getByTestId('track-requests-container')).toBeInTheDocument();
  });
});
