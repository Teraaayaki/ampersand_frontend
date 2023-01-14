import React, { ReactElement, ReactNode } from "react";

import tw from "tailwind-styled-components";

const StyledButton = tw.button`bg-primary text-white px-4 h-10 rounded-lg hover:bg-primary-light disabled:opacity-20 disabled:text-gray`;

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props): ReactElement => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
