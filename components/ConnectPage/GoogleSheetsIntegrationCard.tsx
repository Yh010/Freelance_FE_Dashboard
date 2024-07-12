import Image from "next/image";
import sheets from "../../public/sheets.png";
import { ConnectButton } from "./ConnectButton";
export default function GoogleSheetsIntegrationCard() {
  return (
    <div className="w-full mx-auto border-2 shadow-sm rounded flex">
      <div className="flex p-3">
        <div className="w-1/12 justify items-center">
          <Image alt="email" src={sheets} className="h-14 w-14 m-4" />
        </div>
        <div className="flex justify items-center ml-6">
          <div className="flex">
            <div className="w-11/12 ">
              <div className="flex">
                <div>Google Sheets</div>
              </div>
              <div className="w-full">
                Send your data straight to Google Sheets.Automatically syncs as
                results come in.
              </div>
            </div>
            <div className="w-1/12 ml-14 mr-2 flex justify items-center">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
