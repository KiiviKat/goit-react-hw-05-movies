import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  margin-bottom: 16px;
`;

export const Review = styled.li`
  border: 1px solid #727272;
  padding: 16px;
  max-height: 300px;
  overflow-y: auto;
`;
export const Author = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  object-fit: cover;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h3`
  font-size: 18px;
`;

export const ReviewDate = styled.span`
  font-size: 12px;
  color: #727272;
`;

export const Text = styled.span`
  font-size: 14px;
`;
