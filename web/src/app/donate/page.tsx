'use client';

import { useCallback } from 'react';
import styled from 'styled-components';
import { CharitySelectionWidget } from '@charitips/embed-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  padding: 24px 16px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
`;

const WidgetContainer = styled.div`
  flex: 1;q
`;

export default function Donate() {
  const onPaymentSuccess = useCallback(
    async (payload: {
      donationId: string;
      charityId: string;
      amount: number;
    }) => {
      console.log(payload);
    },
    []
  );
  return (
    <Container>
      <Header>
        <Title>Donate</Title>
      </Header>
      <WidgetContainer>
        <CharitySelectionWidget
          publicKey={process.env.NEXT_PUBLIC_CHARITIPS_PUBLIC_KEY || ''}
          size="fitContent"
          type="donate"
          onPaymentSuccess={onPaymentSuccess}
          locale="en"
        />
      </WidgetContainer>
    </Container>
  );
}
