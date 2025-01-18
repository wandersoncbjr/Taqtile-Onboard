import React from 'react';
import './card.css';
import { theme } from '../../theme/theme';

interface CardProps {
  children: React.ReactNode;
  expand?: boolean;
}

export function Card({ children, expand }: CardProps) {
  const cardStyle = {
    background: theme.colors.Neutral,
    boxShadow: theme.colors.boxShadow,
    width: expand ? '100%' : '400px',
  };
  return (
    <div style={cardStyle} className='container-card'>
      {children}
    </div>
  );
}
