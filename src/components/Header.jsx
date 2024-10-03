import ToggleDarkMode from "./ToggleDarkMode";

export default function Header() {
  return (
    <header className="flex justify-between items-center max-w-135 mx-auto">
      <h1 className="font-bold text-white text-[2.5rem] tracking-[1.2rem] ">
        TODO
      </h1>
      <ToggleDarkMode />
    </header>
  );
}
