import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/Button/button";

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <Button>Hello, world!</Button>
    </div>
  );
}
