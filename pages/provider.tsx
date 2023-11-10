// app/providers.tsx
"use client";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Button, ButtonGroup, NextUIProvider } from "@nextui-org/react";
import { useTheme } from "../store";
import { useState, useEffect } from "react";
import { BsFillWalletFill } from "react-icons/bs";
export function Providers({ children }) {
  const theme = useTheme();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (hydrated)
    return (
      <NextUIProvider
        className={` ${theme.mode} dark max-h-[100dvh] h-screen w-full bg-background text-foreground bg-gradient-to-t from-black to-primary/10 flex flex-col overflow-y-auto overflow-x-hidden`}
      >
        <nav className=" rounded-full flex flex-row gap-[0.5px] px-4 sm:px-16 md:px-32 lg:px-64 w-full justify-between py-4">
          <ButtonGroup size="sm" radius="sm" className="gap-[0.5px]">
            <Button
              className="font-black text-xs"
              color="primary"
              variant="shadow"
            >
              HOME
            </Button>
            <Button
              className="font-black text-xs"
              color="primary"
              variant="shadow"
            >
              NFT
            </Button>
          </ButtonGroup>
          <Button
            radius="sm"
            as={"div"}
            color="primary"
            variant="shadow"
            className="m-0"
            size="sm"
            endContent={<BsFillWalletFill />}
            startContent={
              <ConnectWallet
                btnTitle="CONNECT"
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "14px",
                  padding: "0px",
                  minHeight: "0px",
                  minWidth: "0px",
                  scale: "0.9",
                  background: "transparent",
                  border: "0",
                }}
                dropdownPosition={{
                  side: "bottom",
                  align: "center",
                }}
              />
            }
          />
        </nav>
        {children}
      </NextUIProvider>
    );
}
