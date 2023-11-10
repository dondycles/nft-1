import { Button } from "@nextui-org/button";
import {
  ConnectWallet,
  Web3Button,
  ConnectModalInline,
} from "@thirdweb-dev/react";

export default function Home() {
  return (
    <main className="pb-32 px-4 sm:px-16 md:px-32 lg:px-64 max-h-full w-full pt-16 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4  gap-2 overflow-y-auto overflow-x-hidden">
      {Array.from({ length: 8 }, (_, index) => (
        <div className=" rounded-xl bg-primary/10  p-2 flex flex-col gap-2  aspect-square">
          <div className="bg-black rounded-lg h-full  aspect-square"></div>
          <p className="text-xs text-center font-black">
            Lorem ipsum dolor sit.
          </p>
          <Button
            color="primary"
            size="sm"
            radius="sm"
            variant="shadow"
            className="text-xs font-black text-white mb-0 mt-auto"
          >
            BUY
          </Button>
        </div>
      ))}
    </main>
  );
}
