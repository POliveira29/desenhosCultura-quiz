import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  width: 100%;
  height: 38px;
  padding: 0.6rem 0.8rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
export default function InputBase({ type, onChange, placeholder, ...props }) {
  return (
    <div>
      <Input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: "",
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
