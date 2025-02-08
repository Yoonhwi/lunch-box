import Navigations from "./navigations";

export default function MainLayoutHeader() {
  return (
    <div className="flex p-4 border-b-1 items-center justify-center">
      <div className="flex w-content justify-between h-10">
        <Navigations />
      </div>
    </div>
  );
}
