import styled from "styled-components";

export const StyledTitle = styled.div`
  font-size: ${props => props.theme.fontSizeMedium};

  @media (min-width: 768px) {
    align-self: flex-start;
  }
`;

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledContainer = styled.div`
  background-color: #e0e2e4;
  flex: 1;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 20px;
  margin: 100px 0;
  
  @media (min-width: 768px) {
    padding: 100px;
  }

`;