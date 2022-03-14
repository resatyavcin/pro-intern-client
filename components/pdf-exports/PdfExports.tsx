//import react
import React from 'react';

//import conponents
import ButtonUI from '../ui/button/buttonUI';

//import packages
import { saveAs } from 'file-saver';

const download = async () => {
  await saveAs('http://localhost:3000/sample.pdf');
};

function PdfExports() {
  return <ButtonUI onClick={download} label={"Pdf'i İndir"} />;
}

export default PdfExports;
