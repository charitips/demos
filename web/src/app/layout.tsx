import CharitipsProvider from './CharitipsProvider';
import './global.css';
import { StyledComponentsRegistry } from './registry';

export const metadata = {
  title: 'Charitips Demo',
  description: 'Demo of the Charitips charity selection widget',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CharitipsProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </CharitipsProvider>
      </body>
    </html>
  );
}
