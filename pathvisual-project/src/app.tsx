import { useRef } from "react";
import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import {Grid} from "./components/Grid";

function App() {
   const isVisualizationRunningRef = useRef(false);
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
    <div className="h-screen w-screen flex flex-col bg-[#131416]">
      <Grid isVisualizationRunningRef = {isVisualizationRunningRef} />
    </div>
    </SpeedProvider>
    </TileProvider>
    </PathfindingProvider>
  );
}

export default App;