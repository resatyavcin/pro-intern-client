import Router from 'next/router';
import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

interface ActionPanelToggleContextType {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActionPanelToggleContext = createContext<ActionPanelToggleContextType>({} as ActionPanelToggleContextType);

function ActionPanelToggleProvider({ children }: { children: ReactNode }): JSX.Element {
  const [collapsed, setCollapsed] = useState(true);

  const memoedValue = useMemo(() => ({ collapsed, setCollapsed }), [collapsed]);

  return <ActionPanelToggleContext.Provider value={memoedValue}>{children}</ActionPanelToggleContext.Provider>;
}

export const useCollapse = () => useContext(ActionPanelToggleContext);

export default ActionPanelToggleProvider;
