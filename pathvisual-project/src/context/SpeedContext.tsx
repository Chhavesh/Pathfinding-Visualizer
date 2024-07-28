import {createContext, ReactNode,  useState } from "react";
import { SpeedType } from "../utils/types";

type SpeedContextInterface = {
    speed: SpeedType;
    setSpeed: (speed: SpeedType) => void;
}

export const SpeedContext = createContext<SpeedContextInterface | undefined>(
    undefined
);

export const SpeedProvider = ({children}: {children: ReactNode}) => {
    const [speed, setSpeed] = useState<SpeedType>(0.5);

    return (
        <SpeedContext.Provider value={{speed,setSpeed}}>
            {children}
        </SpeedContext.Provider>
    );
}

// export const useSpeed = () => {
//     const context = useContext(SpeedContext);

//     if(!context)
//         throw new Error("useSpeed must be used within a SpeedProvider");

//     return context;
// }