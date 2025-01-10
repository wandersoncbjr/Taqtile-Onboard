import React from 'react';
import './container-card.css';
import { theme } from '../../theme/theme';

interface ContainerCardProps {
  children: React.ReactNode;
}

const containerCardStyle = {
  background: theme.colors.Neutral,
  boxShadow: theme.colors.boxShadow,
};
export function ContainerCard({ children }: ContainerCardProps) {
  return (
    <div style={containerCardStyle} className='container-card'>
      {children}
    </div>
  );
}
