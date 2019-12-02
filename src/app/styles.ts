import styled from 'theme';

const AppLink = styled.a`
  color: #09d3ac;
`;

const Header = styled.header`
background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 40vmin;
`;

const Wrapper = styled.div`
  text-align: center;
`;

export {
  AppLink,
  Header,
  Logo,
  Wrapper,
};
