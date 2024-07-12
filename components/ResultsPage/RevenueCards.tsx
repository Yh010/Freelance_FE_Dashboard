interface CardProps {
  title: string;
  icon: any;
  amount: string;
  description: string;
}
export default function RevenueCard({
  title,
  icon,
  amount,
  description,
}: CardProps) {
  return (
    <div className="mt-6 mb-6">
      <div className="border w-52 p-4  shadow-sm rounded-lg">
        <div className="flex justify-between">
          <div className="text-sm">{title}</div>
          <div>{icon}</div>
        </div>
        <div className="font-semibold text-lg">{amount}</div>
        <div className="text-xs font-light">{description}</div>
      </div>
    </div>
  );
}
