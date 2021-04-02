import React, { useCallback, useEffect, useState } from 'react';

import { TabSelection } from './TabSelection';
import { TabOption } from './TabOption';

import leftBackgroundImage from '../../assets/left-background-image.png';
import { Container, Content, ExplainTitle, ExplainDescription } from './styles';

interface ExplainOption {
    id: number;
    title: string;
    description: string;
    image?: string;
}

export const Background: React.FC = () => {
    const [selectedExplainOption, setSelectedExplainOption] = useState<ExplainOption>();
    const [explainOptions, setExplainOptions] = useState<ExplainOption[]>()

    useEffect(() => {
        // Static values
        const options = [
            {
                id: 1,
                title: 'Marcenas mattis egestas',
                description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
                image: leftBackgroundImage
            },
            {
                id: 2,
                title: 'Marcenas mattis egestas',
                description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
                image: leftBackgroundImage
            },
            {
                id: 3,
                title: 'Marcenas mattis egestas',
                description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
                image: leftBackgroundImage
            },
            {
                id: 4,
                title: 'Marcenas mattis egestas',
                description: 'Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.',
                image: leftBackgroundImage
            },
        ]
        setExplainOptions(options);
        setSelectedExplainOption(options[0]);
    }, [])

    const handleChangeSelectedOption = useCallback((id: number) => {
        if (explainOptions)
            setSelectedExplainOption(explainOptions.find(option => option.id === id));
    }, [explainOptions])

    return (
        <Container>
            <Content>
                <img src={selectedExplainOption?.image} key={selectedExplainOption?.id} alt="Explain" />
                <ExplainTitle>{selectedExplainOption?.title}</ExplainTitle>
                <ExplainDescription>{selectedExplainOption?.description}</ExplainDescription>

                <TabSelection>
                    {explainOptions && explainOptions.map((option) => (
                        <TabOption key={option.id} isSelected={option.id === selectedExplainOption?.id} onClick={handleChangeSelectedOption} id={option.id} />
                    ))}
                </TabSelection>
            </Content>
        </Container>
    );
}