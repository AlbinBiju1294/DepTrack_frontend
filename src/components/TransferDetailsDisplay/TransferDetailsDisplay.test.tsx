import { render, screen } from '@testing-library/react';
import TransferDetailsDisplay from '../../components/TransferDetailsDisplay/TransferDetailsDispaly';
import {TransferDataDisplayPropsType} from '../../components/TransferDetailsDisplay/types/index'
 
describe('TransferDetailsDisplay component', () => {
  const mockFormData :TransferDataDisplayPropsType= {
    formData:{
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
      releaseReason: "test",
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
    initiated_by: {
      id: 1,
      employee_number: 'EMP001',
      name: 'Manager',
    },
    status: 1,
    rejection_reason: '',
    transfer_date: '2024-03-18',
    transfer_raised_on:'2024-03-12',
    employee_id: 1,
    currentdu_id: 123,
    targetdu_id: 456,
    newpm_id: 789,
  }};
 
  it('renders transfer details correctly', () => {
    render(<TransferDetailsDisplay {...mockFormData} />);
   
    expect(screen.getByText('1. Employee id:')).toBeInTheDocument();
    expect(screen.getByText('2. Current Department:')).toBeInTheDocument();
    expect(screen.getByText('3. Band:')).toBeInTheDocument();
    expect(screen.getByText('4. Total Experience:')).toBeInTheDocument();
    expect(screen.getByText('5. Experience in Experion:')).toBeInTheDocument();
    expect(screen.getByText('6. Reason for Release:')).toBeInTheDocument();
    expect(screen.getByText('7. Skills:')).toBeInTheDocument();
    expect(screen.getByText('8. Upskilling Suggestions:')).toBeInTheDocument();
    expect(screen.getByText('9. Strength:')).toBeInTheDocument();
 
  });
});