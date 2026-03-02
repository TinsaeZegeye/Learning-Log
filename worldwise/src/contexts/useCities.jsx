import { useContext } from "react";
import { CitiesContext } from "./CitiesContext";

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error(
      "Accessing CitiesContext outside the CitiesProvider is not allowed",
    );
  return context;
}

export { useCities };
