import { format } from "date-fns";

import Navigations from "./navigations";

export default function MainLayoutHeader() {
  const today = new Date();

  return (
    <div className="flex p-4 border-b-1 items-center justify-center">
      <div className="flex w-content justify-between h-10">
        {format(today, "dd-MM,,,,,,yyyy")}
        <Navigations />
      </div>
    </div>
  );
}
