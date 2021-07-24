import { styled } from "@stitches/react";

const Wrapper = styled("div", {
  height: "60px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "24px",
});

const Logo = () => <div>Library of Shaders</div>;

export default function Header() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}
