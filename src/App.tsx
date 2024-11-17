import { useState } from "react";
import "./App.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";

const DemoDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Button onClick={() => setIsDialogOpen(true)}>About</Button>
      <DialogContent>
        <DialogTitle>Vite Stack Boilerplate</DialogTitle>
        <DialogDescription>
          This is a starter template for a Vite + React + Typescript + Tailwind
          + Shadcn project.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

function App() {
  return (
    <div className="flex w-full h-full bg-slate-300">
      <div className="flex items-center justify-center m-auto w-1/2 flex-col gap-10">
        <img
          src="/vite.svg"
          className="w-32 h-32 m-auto animate-pulse"
          alt="Vite Logo"
        />
        <span className="font-bold text-xl text-slate-800">
          Vite + React + Typescript + Tailwind + Shadcn
        </span>
        <DemoDialog />
      </div>
    </div>
  );
}

export default App;
