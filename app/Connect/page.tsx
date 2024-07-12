import EmailIntegrationCard from "@/components/ConnectPage/EmailIntegrationCard";
import ExcelIntegrationCard from "@/components/ConnectPage/ExcelIntegrationCard";
import GoogleSheetsIntegrationCard from "@/components/ConnectPage/GoogleSheetsIntegrationCard";
import IntegrationSearchBox from "@/components/ConnectPage/IntegrationSearchBox";

export default function ConnectPage() {
  return (
    <div className="mt-12 flex justify-center min-h-screen">
      <div className="w-1/2 space-y-4">
        <div className="mb-12">
          <IntegrationSearchBox />
        </div>

        <div className="space-y-6 mt-8">
          <EmailIntegrationCard />

          <GoogleSheetsIntegrationCard />
          <ExcelIntegrationCard />
        </div>
      </div>
    </div>
  );
}
