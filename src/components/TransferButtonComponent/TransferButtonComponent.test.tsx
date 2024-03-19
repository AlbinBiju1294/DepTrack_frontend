import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TransferButtonComponent from '../../components/TransferButtonComponent/TransferButtonComponent';
import {TransferButtonComponentPropsType} from '../../components/TransferButtonComponent/types/index'
describe('TransferButtonComponent', () => {
    const mockProps:TransferButtonComponentPropsType = {
      contextHolder: <div data-testid="context-holder"></div>,
      showModal: jest.fn(),
      open: false,
      handleOk: jest.fn(),
      loading: false,
      handleCloseApproval: jest.fn(),
      handleDateChange: jest.fn(),
      pmOptions: ['PM 1', 'PM 2'],
      handleSelectPm: jest.fn(),
      transferDate: '2024-03-21',
      currentDuNumber: 123,
      handleOpenReject: jest.fn(),
      openReject: false,
      handleCloseReject: jest.fn(),
      isReasonEntered: true,
      handleRejectConfirm: jest.fn(),
      success: jest.fn(),
      reason: 'Reject reason',
      handleReasonChange: jest.fn(),
      user: {id:3,username:'adc',employee_name:'testuser', role: 1, employee_id:2, du_id: 456,email:'ad@gmail.com' }, // Mocked user object
    };
 
 
    it('renders approve button', () => {
 
    render(<TransferButtonComponent {...mockProps} />);
 
    // Assert that approve button is rendered
    const approveButton = screen.getByText('Approve');
    expect(approveButton).toBeInTheDocument();
    });
 
    // Assert that reject button is rendered
    it ("renders reject button",()=>{
    render(<TransferButtonComponent {...mockProps} />);
 
 
    const rejectButton = screen.getByText('Reject');
    expect(rejectButton).toBeInTheDocument();
    });
 
    it ("renders Rejection popup",()=>{
        render(<TransferButtonComponent {...mockProps} />);
   
        const rejectButton = screen.getByText('Reject');
        fireEvent.click(rejectButton);
    });
 
 
})