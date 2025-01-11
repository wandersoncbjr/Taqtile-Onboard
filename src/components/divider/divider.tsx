interface DividerProps {
  size?: 'small' | 'medium' | 'large';
}

const marginSizes = {
  small: '4px',
  medium: '8px',
  large: '16px',
};

export function Divider({ size = 'small' }: DividerProps) {
  const styleDivider = {
    margin: marginSizes[size],
  };

  return <div style={styleDivider} />;
}
