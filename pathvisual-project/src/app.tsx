import { PathfindingProvider } from "./context/PathfindingContext";

export default function App() {
  return (
    <PathfindingProvider>
    <h1 className="text-5xl font-bold underline h-screen w-screen bg-purple-500">
      Hello world!
    </h1>
    </PathfindingProvider>
  );
}