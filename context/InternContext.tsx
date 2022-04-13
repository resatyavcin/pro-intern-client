//import React & Next
import React, { createContext, useContext, ReactNode, useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

//import Service
import { fetchAllInterns } from '../service/internService';
import { Intern } from '../common/models/Intern/Intern';

interface InternContextType {
  error?: any;
  allInterns: Intern[];
}

const InternContext = createContext<InternContextType>({} as InternContextType);

function InternProvider({ children }: { children: ReactNode }): JSX.Element {
  const [error, setError] = useState<string>();
  const [allInterns, setAllInterns] = useState<Intern[]>([]);

  useEffect(() => {
    const init = async () => {
      const interns = await fetchAllInterns();
      setAllInterns(interns);
    };
    init();
  }, []);

  const router = useRouter();

  const memoedValue = useMemo(() => ({ error, allInterns }), [error, allInterns]);

  return <InternContext.Provider value={memoedValue}>{children}</InternContext.Provider>;
}

export const useIntern = () => useContext(InternContext);

export default InternProvider;
