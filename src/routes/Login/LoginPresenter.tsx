import React from 'react';
import Helmet from 'react-helmet';
import { Link, RouteComponentProps } from "react-router-dom";
import styled from 'styled-components';
import bgImage from '../../images/bg.png';

const Container = styled.div`
  height: 100vh;
`;

const Header = styled.header`
  height: 70%;
  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)),
    url(${bgImage});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 110px;
  height: 110px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
`;

const Title = styled.h1``;

const Footer = styled.div``;

const Subtitle = styled.h2`
  font-size: 30px;
`;

const FakeInput = styled.div`
  margin: 50px 0;
  font-size: 22px;
  font-weight: 300;
`;

const PhoneLogin = styled.div`
  padding: 20px;
`;

const Grey = styled.span`
  color: ${props => props.theme.grey};
  margin-left: 10px;
`;

const SocialLogin = styled.div`
  border-top: 1px solid ${props => props.theme.grey};
  padding: 30px 20px;
`;

const SocialLink = styled.span`
  color: ${props => props.theme.blue};
  font-size: 20px;
`;

interface IProps extends RouteComponentProps<any> {}

const LoginPresenter:React.FunctionComponent<IProps> = () => (
  <Container>
    <Helmet>
      <title>Login | Nuber</title>
    </Helmet>
    <Header>
      <Logo>
        <Title>Nuber</Title>
      </Logo>
    </Header>
    <Footer>
      <Link to={"/phone-login"}>
        <PhoneLogin>
          <Subtitle>Get moving with Nuber</Subtitle>
          <FakeInput>
            <span role="img" aria-label="korea emoji">🇰🇷</span> +82 <Grey>Enter your mobile number</Grey>
          </FakeInput>
        </PhoneLogin>
      </Link>
      <Link to={"/social-login"}>
        <SocialLogin>
          <SocialLink>Or connect with social</SocialLink>
        </SocialLogin>
      </Link>
    </Footer>
  </Container>
);

export default LoginPresenter;
