import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Image = styled.img`
  display: block;
  margin-top: 5px;
`;

export const Button = styled.button`
  font-size: 13px;
  display: flex;
  align-items: center;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
`;

export const AddInfoWrapper = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-top: 0px;
  padding-bottom: 25px;

  a {
    padding-left: 10px;
    text-decoration: none;
    margin-right: 10px;
  }
  p {
    padding-left: 10px;
  }
`;
