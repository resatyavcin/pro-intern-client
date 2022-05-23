//import React & Next
import React, { createContext, useContext, ReactNode, useMemo, useState, useEffect } from 'react';

//import Service
import {
  fetchAllInterns,
  applicationInternService,
  fetchInternService,
  createSignature,
  signatureFileService,
  commitSignatureToFileService
} from '../service/internService';
import { Intern } from '../common/models/Intern/Intern';

interface InternContextType {
  error?: any;
  allInterns: Intern[];
  applicationIntern: (form: any) => void;
  createSignatureFile: (path: string) => void;
  signatureFile: (fileID: string, internID: string, page: number) => void;
  processSignatureFile: (fileID: string, internID: string, page: number) => void;

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

  const errorDedection = (status: number, errorText: string) => {
    if (status === 500) {
      setError(errorText);
    }
  };

  const applicationIntern = async (form: any) => {
    const response = await applicationInternService({ ...form });
    return response;
  };

  const createSignatureFile = async (path: string) => {
    const response = await createSignature(path);
    return response;
  };

  const signatureFile = async (fileID: string, internID: string, page: number) => {
    const response = await signatureFileService(fileID, internID, page);
    errorDedection(response.status, response.data);
    return response;
  };

  const processSignatureFile = async (fileID: string, internID: string, page: number) => {
    const response = await commitSignatureToFileService(fileID, internID, page);
    return response;
  };

  const fetchIntern = async (intern_id: string | string[] | undefined) => {
    const intern = await fetchInternService(intern_id);
    return intern;
  };

  const memoedValue = useMemo(
    () => ({
      error,
      allInterns,
      signatureFile,
      processSignatureFile,
      applicationIntern,
      createSignatureFile,
      fetchIntern
    }),
    [error, allInterns]
  );

  return <InternContext.Provider value={memoedValue}>{children}</InternContext.Provider>;
}

export const useIntern = () => useContext(InternContext);

export default InternProvider;
