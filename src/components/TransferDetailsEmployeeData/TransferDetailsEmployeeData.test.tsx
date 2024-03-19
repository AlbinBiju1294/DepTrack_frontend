import React from 'react';
import { render, screen } from '@testing-library/react';
import TransferDetailsEmployeeData from '../../components/TransferDetailsEmployeeData/TransferDetailsEmployeeData';
import { TransferDetailsEmployeePropsType } from '../../components/TransferDetailsEmployeeData/types/index';
 
describe('TransferDetailsEmployeeData component', () => {
  const mockUserData: TransferDetailsEmployeePropsType = {
    userData: {
      id: 1,
      details: {
        id: 1,
        employee_band: 'Band A',
        total_experience: 5,
        experion_experience: 3,
        employee_skills: 'React, JavaScript',
        upskilling_suggestions: 'TypeScript, Redux',
        strengths: 'Problem-solving, Communication',
        areas_of_improvement: 'Time management, Leadership',
        additional_training_needs: 'Agile methodologies',
        releaseReason: null,
        transfer_id: 123,
      },
      employee: {
        id: 1,
        employee_number: 'EMP001',
        name: 'John Doe',
        mail_id: 'john.doe@example.com',
        designation: 'Software Engineer',
        profile_pic_path: null,
        created_at: '2024-03-18',
        updated_at: '2024-03-18',
        du_id: 123,
      },
      currentdu: {
        du_name: 'Current DU',
      },
      targetdu: {
        du_name: 'Target DU',
      },
      initiated_by: {
        id: 1,
        employee_number: 'EMP001',
        name: 'Manager',
      },
      status: 1,
      rejection_reason: '',
      transfer_date: '2024-03-18',
      employee_id: 1,
      currentdu_id: 123,
      targetdu_id: 456,
      newpm_id: 789,
    },
  };
 
  it('renders employee details correctly', () => {
    render(<TransferDetailsEmployeeData {...mockUserData} />);
   
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });
 
  it('renders current and target DU correctly', () => {
    render(<TransferDetailsEmployeeData {...mockUserData} />);
   
    expect(screen.getByText('Current DU')).toBeInTheDocument();
    expect(screen.getByText('Target DU')).toBeInTheDocument();
  });
 
 
});