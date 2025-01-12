import { forwardRef } from 'react';
import { InputHTMLAttributes } from 'react';
import './input.css';
import { Divider } from '../divider/divider';
import { theme } from '../../theme/theme';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  expand?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, expand, error, ...rest }, ref) => {
  const inputStyles = {
    borderColor: error ? theme.colors.FeedbackError : theme.colors.PrimaryXDark,
    width: expand ? '100%' : '200px',
  };

  const labelStyles = {
    color: error ? theme.colors.FeedbackError : theme.colors.PrimaryXDark,
  };

  return (
    <div>
      {label && <label style={labelStyles}>{label}</label>}
      <Divider />
      <input className='input-element' style={inputStyles} {...rest} ref={ref} />
      {error && <p style={{ color: theme.colors.FeedbackError }}>{error}</p>}
    </div>
  );
});
Input.displayName = 'Input';
