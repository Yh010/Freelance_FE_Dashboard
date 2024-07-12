import { Charts } from "@/components/ResultsPage/Charts";
import { DatePickerWithRange } from "@/components/ResultsPage/Datepicker";
import RevenueCard from "@/components/ResultsPage/RevenueCards";
import { TableComponent } from "@/components/ResultsPage/Table";
import { PersonIcon } from "@radix-ui/react-icons";
import { DollarSignIcon, LineChartIcon, ScaleIcon } from "lucide-react";

export default function ResultsPage() {
  return (
    <div className="mt-12 flex justify-center min-h-screen">
      <div className="w-1/2 ">
        <div className="flex items-center  ">
          <DatePickerWithRange />
          <div className="flex justify-between bg-slate-100 border h-full w-64 p-2 rounded-lg text-slate-400">
            <div>28 Days</div>
            <div>14 Days</div>
            <div>7 Days</div>
          </div>
        </div>
        <div className="flex justify-between">
          <RevenueCard
            title="Total Revenue"
            icon={<DollarSignIcon />}
            amount="$45,231.89"
            description="+20.1% from last month"
          />
          <RevenueCard
            title="Subscriptions"
            icon={<PersonIcon />}
            amount="$45,231.89"
            description="+20.1% from last month"
          />
          <RevenueCard
            title="Sales"
            icon={<ScaleIcon />}
            amount="$45,231.89"
            description="+20.1% from last month"
          />
          <RevenueCard
            title="Active Now"
            icon={<LineChartIcon />}
            amount="$45,231.89"
            description="+20.1% from last month"
          />
        </div>
        <div className="flex space-x-8">
          <div className="border w-1/2">
            <Charts />
          </div>
          <div className="border w-1/2">
            <TableComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
