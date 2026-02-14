import React from 'react';
import { cn } from '../../lib/utils';
import Container from '../layout/Container';

const Section = ({
    children,
    className,
    id,
    containerClassName
}) => {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 relative overflow-hidden", className)}
        >
            <Container className={containerClassName}>
                {children}
            </Container>
        </section>
    );
};

export default Section;
