import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { IoCloudUploadSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUpload = ({ callbackHandler }) => {
  const [cvFile, setCvFile] = useState();
  function handleFileChange(event) {
    console.log("CV", event.target.files);
    const fileList = event.target.files;
    setCvFile(fileList[0]);
  }
  useEffect(() => {
    if (cvFile) {
      callbackHandler(cvFile);
    }
  }, [cvFile]);
  return (
    <div>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<IoCloudUploadSharp />}
      >
        Upload CV in PDF
        <VisuallyHiddenInput
          type="file"
          onChange={(event) => {
            console.log("CV file", event.target.files);
            setCvFile(event.target.files[0]);
          }}
          multiple
        />
      </Button>
    </div>
  );
};
export default FileUpload;
