import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import ButtonUI from '../ui/button/buttonUI';
import { useIntern } from '../../context/InternContext';
function DrawSignature() {
  let sigCanvas: any = null;

  const { createSignatureFile } = useIntern();
  const clear = () => {
    sigCanvas.clear();
  };
  const trim = async () => {
    await createSignatureFile(sigCanvas.getTrimmedCanvas().toDataURL('image/png'));
  };

  return (
    <div>
      <div style={{ border: '1px solid #74a9ee', borderRadius: 4 }}>
        <div style={{ display: 'flex', padding: 15 }}>
          <ButtonUI type="primary" label="İmzayı Kaydet" onClick={trim} />
          <ButtonUI type="link" label="Değişikleri Sıfırla" onClick={clear} />
        </div>
        <SignatureCanvas
          ref={(ref) => {
            sigCanvas = ref;
          }}
          penColor="black"
          canvasProps={{ width: 800, height: 200 }}
        />
      </div>
    </div>
  );
}

export default DrawSignature;
