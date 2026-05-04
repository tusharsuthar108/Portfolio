import react, { useState } from 'react';
import styled from 'styled-components';
import { ProjectCard } from './cards/ProjectCard';
import { projectData } from '../data/profile';
import { motion } from 'motion/react';

const Wrapper = styled.div`
    width: 100%;
    background: linear-gradient(to right, #5a1a929c, #962383ab, #5c103a96);
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 50px 80px;
    clip-path: polygon(30% 0.1%, 100% 12%, 100% 100%, 0% 100%, 0% 10%);
    background-color: ${({ theme }) => theme.bg};
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 752px) {
        padding-top: 50px;
        clip-path: polygon(28% 0.1%, 100% 8%, 100% 100%, 0% 100%, 0% 6%);
    }
    @media (max-width: 476px) {
        padding: 40px 24px 80px;
        clip-path: polygon(26% 0.1%, 100% 6%, 100% 100%, 0% 100%, 0% 4%);
    }
`;

const ProjectHeader = styled(motion.div)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 30px 0;
`;

const Title = styled.div`
    width: 100%;
    text-align: center;
    font-size: 52px;
    font-weight: 600;
    padding: 30px 30px 10px 30px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 478px) {
        font-size: 36px;
    }
`;

const Discription = styled.div`
    width: 80%;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 478px) {
        font-size: 18px;
    }
`;

const ProjectGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    align-items: stretch;
    justify-items: center;
`;

const ToggleButton = styled.button`
    margin-top: 36px;
    padding: 10px 32px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 24px;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    background: transparent;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: #fff;
    }
`;

const INITIAL_COUNT = 3;

export const Project = () => {
    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? projectData.project : projectData.project.slice(0, INITIAL_COUNT);

    return (
        <Wrapper id="Projects">
            <Container>
                <ProjectHeader
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ amount: 0.5, once: true }}
                >
                    <Title>My Projects</Title>
                    <Discription>{projectData.discription}</Discription>
                </ProjectHeader>

                <ProjectGrid>
                    {visible.map((pro) => (
                        <ProjectCard key={pro.id} project={pro} />
                    ))}
                </ProjectGrid>

                {projectData.project.length > INITIAL_COUNT && (
                    <ToggleButton onClick={() => setShowAll(!showAll)}>
                        {showAll ? "Show Less" : `View More (${projectData.project.length - INITIAL_COUNT} more)`}
                    </ToggleButton>
                )}
            </Container>
        </Wrapper>
    );
};
