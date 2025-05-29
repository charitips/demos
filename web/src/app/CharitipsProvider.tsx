'use client';

import { CharitipsProvider as CharitipsProviderBase } from '@charitips/embed-react';

export default function CharitipsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CharitipsProviderBase baseUrl="https://embed.sandbox.charitips.com">
      {children}
    </CharitipsProviderBase>
  );
}
