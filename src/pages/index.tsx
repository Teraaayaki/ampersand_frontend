import type { NextPage } from "next";

import styled from "styled-components";
import tw from "twin.macro";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <StyledButton>Button</StyledButton>
      <TailwindButton>Tailwind</TailwindButton>
    </div>
  );
};

export default Home;

const TailwindButton = tw.button`bg-red-50`;
const StyledButton = styled.button`
  background: red;
  color: white;
`;
