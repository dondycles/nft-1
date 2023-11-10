// app/providers.tsx
"use client";
import { ConnectWallet } from "@thirdweb-dev/react";
import {
  Button,
  ButtonGroup,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  NextUIProvider,
  useDisclosure,
} from "@nextui-org/react";
import { useTheme } from "../store";
import { useState, useEffect } from "react";
import { BsFillWalletFill } from "react-icons/bs";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
export default function Providers({ children }) {
  const theme = useTheme();
  const [hydrated, setHydrated] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <>
      {hydrated && (
        <NextUIProvider
          className={` ${theme.mode} dark max-h-[100dvh] h-screen w-full bg-background text-foreground bg-gradient-to-t from-black to-primary/10 flex flex-col overflow-y-auto overflow-x-hidden `}
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
            <ButtonGroup size="sm" radius="sm" className="gap-[0.5px]">
              <Button
                onClick={onOpen}
                size="sm"
                radius="sm"
                color="primary"
                variant="shadow"
                className="text-xs font-black"
              >
                REFERRAL
              </Button>
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
            </ButtonGroup>
          </nav>
          <Modal
            size="xs"
            className={theme.mode}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            hideCloseButton
            classNames={{ body: " p-2 ", base: "bg-primary/5" }}
          >
            <ModalContent className={theme.mode}>
              {(onClose) => (
                <>
                  <ModalBody
                    className={`${theme.mode} flex flex-row items-center bg-transparent`}
                  >
                    <Input
                      size="sm"
                      color="primary"
                      variant="bordered"
                      className="text-white"
                      label="Referral"
                    />
                    <div className="flex gap-2 justify-end">
                      <Button
                        startContent={<AiFillCheckCircle />}
                        isIconOnly
                        radius="full"
                        color="success"
                        size="sm"
                        className="text-2xl text-white"
                        onClick={onClose}
                      />
                      <Button
                        startContent={<AiFillCloseCircle />}
                        isIconOnly
                        radius="full"
                        color="danger"
                        size="sm"
                        className="text-2xl text-white"
                        onClick={onClose}
                      />
                    </div>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
          {children}
        </NextUIProvider>
      )}
    </>
  );
}
