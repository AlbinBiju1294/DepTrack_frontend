import React from 'react';
import { render } from '@testing-library/react';
import TransferCounts from './TransferCounts';

describe('TransferCounts component', () => {
  const transferCountMock = {
    'Transfer Initiated': 10,
    'Transfer Completed': 20,
  };

  it('renders the transfer status and count correctly for "Initiated"', () => {
    const transferStatus = 'Initiated';
    const { getByText } = render(
      <TransferCounts transferStatus={transferStatus} transferCount={transferCountMock} />
    );

    expect(getByText(`Transfers ${transferStatus} : ${transferCountMock[`Transfer ${transferStatus}`]}`)).toBeInTheDocument();
  });

  it('renders the transfer status and count correctly for "Completed"', () => {
    const transferStatus = 'Completed';
    const { getByText } = render(
      <TransferCounts transferStatus={transferStatus} transferCount={transferCountMock} />
    );

    expect(getByText(`Transfers ${transferStatus} : ${transferCountMock[`Transfer ${transferStatus}`]}`)).toBeInTheDocument();
  });

  it('renders the transfer status and count correctly for a custom transfer status', () => {
    const transferStatus = 'Custom Status';
    const customTransferCount = {
      'Transfer Custom Status': 5,
    };
    const { getByText } = render(
      <TransferCounts transferStatus={transferStatus} transferCount={customTransferCount} />
    );

    expect(getByText(`Transfers ${transferStatus} : ${customTransferCount['Transfer Custom Status']}`)).toBeInTheDocument();
  });

});
