import { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';
import { theme } from '../../theme/theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  expand?: boolean;
}

export function Button({ children, expand, ...rest }: ButtonProps) {
  const buttonStyle = {
    width: expand ? '100%' : '200px',
    backgroundColor: theme.colors.NeutralLight,
  };
  return (
    <button {...rest} style={buttonStyle} className='button-element'>
      {children}
    </button>
  );
}
