import { useEffect, useState } from "react";
import OutlinedCard from "./card";
import useFetchAPI from "./fetchAPI";
import FileUpload from "./fileupload";
import usePostAPI from "./postAPI";

const RightSidePanel = () => {
  const { apiResponse } = useFetchAPI();
  const [cvFile, setCvFile] = useState("");
  const { status } = usePostAPI(cvFile);
  function uploadCV(file) {
    setCvFile(file);
  }
  useEffect(() => {
    
  }, [cvFile]);
  console.log("CV file uploaded", cvFile);
  return (
    <div>
      <h1>Dashboard Overview</h1>
      {cvFile && <OutlinedCard />}
      {/* <h1>Component Score Breakdown</h1>
      <OutlinedCard />
      <h1>Take a Deep Dive Into Metricx</h1> */}
      {apiResponse && <h1>{apiResponse}</h1>}
      <FileUpload callbackHandler={uploadCV} />
      <p>{status}</p>
    </div>
  );
};
export default RightSidePanel;
