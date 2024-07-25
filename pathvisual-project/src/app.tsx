import { PathfindingProvider } from "./context/PathfindingContext";
import { TileProvider } from "./context/TileContext";

export default function App() {
  return (
    <PathfindingProvider>
      <TileProvider>
    <h1 className="text-5xl font-bold underline h-screen w-screen bg-purple-500">
      Hello world!
    </h1>
    </TileProvider>
    </PathfindingProvider>
  );
}