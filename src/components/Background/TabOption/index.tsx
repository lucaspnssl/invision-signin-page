import React from 'react';

import { Container } from './styles';

type TabOptionProps = {
    isSelected?: boolean;
    id: number;
    onClick: (id: number) => void;
}

export const TabOption: React.FC<TabOptionProps> = ({ isSelected = false, onClick, id }: TabOptionProps) => {
    return <Container isSelected={isSelected} onClick={() => onClick(id)} />;
}