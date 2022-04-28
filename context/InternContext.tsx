//import React & Next
import React, { createContext, useContext, ReactNode, useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

//import Service
import {
  fetchAllInterns,
  applicationInternService,
  createSignatureFileByStudentService,
  fetchInternService
} from '../service/internService';
import { Intern } from '../common/models/Intern/Intern';

interface InternContextType {
  error?: any;
  allInterns: Intern[];
  applicationIntern: (form: any) => void;
  createSignatureFile: (path: string) => void;
  fetchIntern: (intern_id: string | string[] | undefined) => void;
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

  const applicationIntern = async (form: any) => {
    await applicationInternService({ ...form });
  };

  const createSignatureFile = async (path: string) => {
    await createSignatureFileByStudentService(path);
  };

  const fetchIntern = async (intern_id: string | string[] | undefined) => {
    const intern = await fetchInternService(intern_id);
    return intern;
  };

  const router = useRouter();

  const memoedValue = useMemo(
    () => ({ error, allInterns, applicationIntern, createSignatureFile, fetchIntern }),
    [error, allInterns]
  );

  return <InternContext.Provider value={memoedValue}>{children}</InternContext.Provider>;
}

export const useIntern = () => useContext(InternContext);

export default InternProvider;
