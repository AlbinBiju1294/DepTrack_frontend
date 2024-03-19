import React from 'react';
import { render } from '@testing-library/react';
import DuDetails from './DuDetails';

describe('DuDetails Component', () => {
  // Test Case 1
  it('Renders with valid data', () => {
    const duData = {
      du_name: 'Sample DU',
      no_of_employees: 10
    };
    const { getByText } = render(<DuDetails duData={duData} />);
    expect(getByText(/Delivery Unit Name/)).toBeInTheDocument();
    expect(getByText(/Sample DU/)).toBeInTheDocument();
    expect(getByText(/Number Of Employees/)).toBeInTheDocument();
  });

});
