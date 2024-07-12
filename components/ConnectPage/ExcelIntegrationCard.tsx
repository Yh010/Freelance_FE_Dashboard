import Image from "next/image";
import excel from "../../public/office365.png";
import { ConnectButton } from "./ConnectButton";
export default function ExcelIntegrationCard() {
  return (
    <div className="w-full mx-auto border-2 shadow-sm rounded flex">
      <div className="flex p-3">
        <div className="w-1/12 justify items-center">
          <Image alt="email" src={excel} className="h-14 w-14 m-4" />
        </div>
        <div className="w-11/12 flex justify items-center ml-6">
          <div className="flex">
            <div className="w-11/12">
              <div className="flex">
                <div>Excel</div>
              </div>
              <div className="w-full">
                Send your typeform responses to Excel Online. Turn feedback into
                graphs,support queries into workflows, and much more
              </div>
            </div>
            <div className="w-1/12 ml-14 mr-10 flex justify items-center">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
