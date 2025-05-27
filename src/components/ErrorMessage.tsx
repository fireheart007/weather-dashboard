import { ErrorMessage as StyledErrorMessage } from './styles';
import { BiErrorCircle } from 'react-icons/bi';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <StyledErrorMessage>
      <BiErrorCircle size={24} style={{ marginRight: '0.5rem' }} />
      {message}
    </StyledErrorMessage>
  );
}; 