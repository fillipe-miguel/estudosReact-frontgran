import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  min-width: 500px;
  border: 1px solid #d5d5d5;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const ImagesContainer = styled.div`
  background-color: #8d5c5c;
  aspect-ratio: 1/1;
`;

export const Bottom = styled.div`
  padding: 16px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  margin-bottom: 20px;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export const LikesDescription = styled.p``;

export const PostDescription = styled.p``;

export const PostData = styled.p``;
