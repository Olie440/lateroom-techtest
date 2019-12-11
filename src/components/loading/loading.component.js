import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading({ message = "" }) {
  return (
    <LoadingContainer>
      <LoadingIcon>
        <FontAwesomeIcon icon={faSpinner} size="2x" spin />
      </LoadingIcon>
      <p>{message}</p>
    </LoadingContainer>
  );
}

export const LoadingContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const LoadingIcon = styled.p`
  margin-bottom: 0.5rem;
`;
