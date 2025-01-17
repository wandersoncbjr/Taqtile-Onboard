import { useNavigate } from 'react-router-dom';
import './floating-action-button.css';
import { theme } from 'theme/theme';

interface FloatingActionButtonProps {
  redirect: string;
}

const floatingActionButtonStyle = {
  backgroundColor: theme.colors.NeutralLight,
  color: theme.colors.Neutral,
};
export function FloatingActionButton({ redirect }: FloatingActionButtonProps) {
  const navigate = useNavigate();
  return (
    <button style={floatingActionButtonStyle} className='floating-action-button' onClick={() => navigate(redirect)}>
      +
    </button>
  );
}
