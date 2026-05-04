import React from "react";
import styled from "styled-components";
import Tilt from 'react-parallax-tilt';
import { motion } from "motion/react";

const Card = styled(motion.div)`
    width: 300px;
    padding: 16px;
    border-radius: 16px;
    background-color: rgba(9, 16, 43, 0.42);
    border: 1px solid rgba(255, 255, 255, 0.125);
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 180px;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const TagList = styled.div`
    width: 100%;
    padding: 10px 0 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;

const TagItems = styled.div`
    padding: 4px 10px;
    font-size: 11px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    color: ${({ theme }) => theme.primary};
`;

const ProjectTitle = styled.div`
    font-size: 17px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.text_secondary};
    margin: 2px 0 6px;
`;

const ProjectDescription = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.5;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const ProjectLink = styled.a`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    margin-top: 12px;
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 8px;
    padding: 6px 14px;
    text-align: center;
    transition: background 0.2s;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: #fff;
    }
`;

export const ProjectCard = ({ project }) => {
    return (
        <Tilt style={{ height: "100%" }}>
            <Card
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.3, once: true }}
            >
                <ImageWrapper>
                    <Image src={project.image} alt={project.title} />
                </ImageWrapper>
                <TagList>
                    {project.tages.map((val, i) => <TagItems key={i}>{val}</TagItems>)}
                </TagList>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Date>{project.date}</Date>
                <ProjectDescription>{project.discription}</ProjectDescription>
                <ProjectLink href={project.webapp} target="_blank" rel="noopener noreferrer">
                    Visit Project
                </ProjectLink>
            </Card>
        </Tilt>
    );
};
