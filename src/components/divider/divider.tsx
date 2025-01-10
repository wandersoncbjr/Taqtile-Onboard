interface DividerProps {
  size?: 'small' | 'medium' | 'large';
}

export function Divider({ size = 'small' }: DividerProps) {
  const styleDivider = {
    margin: size === 'small' ? '4px' : size === 'medium' ? '8px' : '16px',
  };

  return <div style={styleDivider} />;
}
