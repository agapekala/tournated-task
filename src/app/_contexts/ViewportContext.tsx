import React, { createContext, useContext, ReactNode } from "react";

interface ViewportContextType {
  viewportWidth: number;
}

const ViewportContext = createContext<ViewportContextType | undefined>(
  undefined
);

interface ViewportProviderProps {
  children: ReactNode;
  viewportWidth: number;
}

export const ViewportProvider: React.FC<ViewportProviderProps> = ({
  children,
  viewportWidth,
}) => {
  return (
    <ViewportContext.Provider value={{ viewportWidth }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = (): ViewportContextType => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error("useViewport must be used within a ViewportProvider");
  }
  return context;
};
