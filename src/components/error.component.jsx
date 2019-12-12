import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export default function Error({ message = "" }) {
  return (
    <ErrorContainer>
      <ErrorIcon>
        <FontAwesomeIcon icon={faExclamationTriangle} size="2x" />
      </ErrorIcon>
      <p>{message}</p>
    </ErrorContainer>
  );
}

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const ErrorIcon = styled.p`
  margin-bottom: 0.5rem;
`;
