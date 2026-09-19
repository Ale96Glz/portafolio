import { createContext, useContext, useState, type ReactNode } from "react";
import { systemBodies } from "../../data/system";

const CatalogContext = createContext<{
  selectedId: string;
  select: (id: string) => void;
} | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [selectedId, setSelectedId] = useState(systemBodies[0].id);

  return (
    <CatalogContext.Provider value={{ selectedId, select: setSelectedId }}>
      {children}
    </CatalogContext.Provider>
  );
}

export function useCatalog() {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error("useCatalog debe usarse dentro de CatalogProvider");
  }
  return context;
}
