import { ReactNode } from 'react';
import './button.css';
import { theme } from '../../theme/theme';

interface ButtonProps {
  children: ReactNode;
  expand?: boolean;
}

export function Button({ children, expand }: ButtonProps) {
  const buttonStyle = {
    width: expand ? '100%' : '200px',
    backgroundColor: theme.colors.NeutralLight,
  };
  return (
    <button style={buttonStyle} className='button-element'>
      {children}
    </button>
  );
}
