import react from "react"
import styled from "styled-components"
import { education } from "../data/profile";
import { EducationCard } from "./cards/EducationCard";
import { motion } from "motion/react";

const Wrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.bg};
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 50px 80px;
    background-color: ${({ theme }) => theme.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    background: linear-gradient(to right, #5a1a9217, #96238317, #5c103a1e);
    clip-path: polygon(35% 3%, 100% 7%, 100% 97%, 64% 100%, 0 95%, 0 4%);
    @media (max-width: 530px) {
        padding: 40px 24px 80px;
        clip-path: polygon(10 3%, 100% 2%, 100% 98%, 55% 100%, 0 99%, 0 2%);
    }
`;

const EducationHeader = styled(motion.div)`
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

const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    position: relative;
`;

const TimelineLine = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, rgba(133, 76, 230, 0.8), rgba(133, 76, 230, 0.1));
    transform: translateX(-50%);
    @media (max-width: 568px) {
        left: 16px;
    }
`;

const TimelineRow = styled(motion.div)`
    display: flex;
    width: 100%;
    justify-content: ${({ $right }) => ($right ? "flex-end" : "flex-start")};
    padding: 20px 0;
    position: relative;
    @media (max-width: 568px) {
        justify-content: flex-start;
        padding-left: 44px;
    }
`;

const Dot = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.primary};
    border: 3px solid ${({ theme }) => theme.bg};
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(133, 76, 230, 0.6);
    z-index: 1;
    @media (max-width: 568px) {
        left: 16px;
    }
`;

const CardWrapper = styled.div`
    width: 45%;
    @media (max-width: 568px) {
        width: 100%;
    }
`;

export const Education = () => {
    return (
        <Wrapper>
            <Container>
                <EducationHeader
                    id="Education"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ amount: 0.5, once: true }}
                >
                    <Title>My Education</Title>
                    <Discription>
                        Fueled by curiosity and ambition, my education empowered me to think bigger and aim higher. Here is a brief overview of my academic journey,
                    </Discription>
                </EducationHeader>

                <Timeline>
                    <TimelineLine />
                    {education.map((edu, index) => (
                        <TimelineRow
                            key={edu.id}
                            $right={index % 2 !== 0}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ amount: 0.3, once: true }}
                        >
                            <Dot />
                            <CardWrapper>
                                <EducationCard education={edu} />
                            </CardWrapper>
                        </TimelineRow>
                    ))}
                </Timeline>
            </Container>
        </Wrapper>
    );
};
