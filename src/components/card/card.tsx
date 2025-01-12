import React from 'react';
import './card.css';
import { theme } from '../../theme/theme';

interface CardProps {
  children: React.ReactNode;
}

const cardStyle = {
  background: theme.colors.Neutral,
  boxShadow: theme.colors.boxShadow,
};
export function Card({ children }: CardProps) {
  return (
    <div style={cardStyle} className='container-card'>
      {children}
    </div>
  );
}
