import React, { useState } from "react";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import ResumePdf from "../../images/DStuartResume.pdf";

import { motion } from "framer-motion";

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <motion.div className="resume-container"
    initial={{ scale: .1, y: -200 }}
        animate={{ scale: 1, rotate: 360, y:0 }}
        transition={{ type: "tween", velocity: 100, delay:.5, duration: 1 }} >
      <Document
        className="resume"
        file={ResumePdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale="1.3" />
      </Document>
      {/* <p>Page {pageNumber} of {numPages}</p> */}
    </motion.div>
  );
}
