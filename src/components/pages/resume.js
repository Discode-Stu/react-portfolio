import React, { useState } from 'react'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import ResumePdf from '../../images/DStuartResume.pdf'


export default function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  return (
    <div className='resume-container'>
      <Document className='resume' file={ResumePdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page 
        pageNumber={pageNumber} 
        scale='1.5'
        
        /> 
      </Document>
      {/* <p>Page {pageNumber} of {numPages}</p> */}
    </div>
  );
}