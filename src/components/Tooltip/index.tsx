import React from 'react';

import { Container } from './styles';

interface TooltipProps{
    title: string;
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({title, className, children}) => {
    //para o tooltip receber um stilo de um componente superior, deve se passar o classname
    return (
        <Container className={className}>
            {children}
            <span>{title}</span>
        </Container>
    )
}

export default Tooltip;