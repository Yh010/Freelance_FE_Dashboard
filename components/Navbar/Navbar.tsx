import { BreadcrumbComponent } from "./breadcrumbComponent";
import EyeButton from "./eyeButton";
import NavigationButtons from "./NavigationButtons";
import { ProfileIcon } from "./profileIcon";
import { PublishButton } from "./publishButton";

export default function Navbar() {
  return (
    <div className="border-b border-slate-200">
      <div className="flex justify-between p-2 px-4">
        <div className="flex items-center">
          <BreadcrumbComponent />
        </div>
        <div>
          <NavigationButtons />
        </div>
        <div>
          <div className="flex items-center space-x-4">
            <EyeButton />
            <PublishButton />
            <ProfileIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
