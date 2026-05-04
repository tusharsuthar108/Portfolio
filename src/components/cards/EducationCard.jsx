import { motion } from "motion/react";
import React from "react";
import styled from "styled-components";

const Card = styled(motion.div)`
  width: 100%;
  max-width: 500px;
  padding: 22px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(133, 76, 230, 0.12),
    rgba(9, 9, 23, 0.85)
  );
  border: 1px solid rgba(133, 76, 230, 0.35);
  box-shadow: 0 4px 24px rgba(133, 76, 230, 0.15);
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  &:hover {
    box-shadow: 0 6px 32px rgba(133, 76, 230, 0.35);
    border-color: rgba(133, 76, 230, 0.7);
  }
`;

const EducationHeader = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 14px;
  object-fit: contain;
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 3px;
  flex-shrink: 0;
  @media (max-width: 478px) {
    width: 50px;
    height: 50px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  @media (max-width: 478px) {
    font-size: 17px;
  }
`;

const Degree = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 478px) {
    font-size: 12px;
  }
`;

const DateBadge = styled.span`
  display: inline-block;
  font-size: 11px;
  padding: 2px 10px;
  border-radius: 20px;
  background: rgba(133, 76, 230, 0.18);
  color: ${({ theme }) => theme.primary};
  border: 1px solid rgba(133, 76, 230, 0.4);
  margin-top: 2px;
  width: fit-content;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(to right, rgba(133, 76, 230, 0.5), transparent);
  margin: 4px 0;
`;

const GradeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: rgba(133, 76, 230, 0.12);
  border: 1px solid rgba(133, 76, 230, 0.3);
  border-radius: 8px;
  padding: 4px 12px;
  width: fit-content;
`;

const Description = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  margin: 0;
`;

export const EducationCard = ({ education }) => {
  return (
    <Card
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      viewport={{ amount: 0.5, once: true }}
    >
      <EducationHeader>
        <Image src={education.img} alt={education.institute} />
        <HeaderContainer>
          <Title>{education.institute}</Title>
          {education.degree && <Degree>{education.degree}</Degree>}
          <DateBadge>{education.date}</DateBadge>
        </HeaderContainer>
      </EducationHeader>
      <Divider />
      <GradeBadge>🎓 Grade: {education.grade}</GradeBadge>
      <Description>{education.description}</Description>
    </Card>
  );
};
