"use client";
import './global.css';
import { UiLayout } from '@/components/ui/ui-layout';
import { Provider } from './provider';
import { SigningCosmWasmProvider } from "react-keplr";
import chainInfo from "@/chainInfo";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <SigningCosmWasmProvider networkConfig={chainInfo}>
              <UiLayout>{children}</UiLayout>
              </SigningCosmWasmProvider>
        </Provider>
      </body>
    </html>
  );
}
