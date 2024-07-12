import { Button } from "@/components/ui/button";

export default function NavigationButtons() {
  return (
    <div>
      <Button className="bg-white text-black hover:bg-white hover:border-b-4 hover:border-black rounded-none">
        Create
      </Button>
      <Button className="bg-white text-black hover:bg-white hover:border-b-4 hover:border-black rounded-none">
        Connect
      </Button>
      <Button className="bg-white text-black hover:bg-white hover:border-b-4 hover:border-black rounded-none">
        Share
      </Button>
      <Button className="bg-white text-black hover:bg-white hover:border-b-4 hover:border-black rounded-none">
        Results
      </Button>
    </div>
  );
}
