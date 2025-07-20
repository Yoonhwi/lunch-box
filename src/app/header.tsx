import { ThemeSwitcher } from "@/components/theme-switcher";

import Navigations from "./navigations";

export default function MainLayoutHeader() {
  return (
    <div className="flex p-4 border-b border-border items-center justify-center">
      <div className="flex w-full max-w-6xl justify-between items-center h-10 gap-10">
        <Navigations />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
