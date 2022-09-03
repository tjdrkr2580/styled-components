import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const FullSize = css`
  margin-top: 1rem;
  width: 100%;
  justify-content: center;
`;

const SizeStyles = css`
  ${(props) =>
    props.size === "large" &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}

    ${(props) =>
    props.size === "small" &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `}
`;

const StyledButton = styled.button`
  /*공통스타일 */
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1rem;

  height: 2.25rem;
  font-size: 1rem;

  ${SizeStyles}

  ${(props) =>
    props.fullSize &&
    css`
      ${FullSize}
    `}

  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      &:not(:first-child) {
        margin-left: 1rem;
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const Button = ({ children, size, color, outline, fullSize, ...rest }) => {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullSize={fullSize}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: "blue",
};

export default Button;
