'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 768px;
  padding: 24px 16px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
`;

const Header = styled.div``;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  line-height: 28px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const ButtonLink = styled(Link)`
  font-size: 20px;
  line-height: 24px;
  text-decoration: underline;
`;

export default function Index() {
  return (
    <Container>
      <Header>
        <Title>Hello there 👋</Title>
      </Header>
      <Navigation>
        <ButtonLink href="/donate">Donate</ButtonLink>
      </Navigation>
    </Container>
  );
}
