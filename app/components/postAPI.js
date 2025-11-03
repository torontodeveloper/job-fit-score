import { useEffect, useState } from "react";
import axios from "axios";

const usePostAPI = (cvFile) => {
  const url = "http://localhost:8000/api/post/";
  const [apiResponse, setApiResponse] = useState("");

  function apiCall(cvFile) {
    console.log("cv file apiCall", cvFile);
    const formData = new FormData();
    formData.append("file", cvFile);
    axios
      .post(url, formData)
      .then((response) => response.data)
      .then((data) => {
        setApiResponse(data);
        console.log("response is", data);
      });
  }
  console.log("usePostAPI,cv file****", cvFile);
  useEffect(() => {
    apiCall(cvFile);
  }, [cvFile]);
  console.log("api response", apiResponse);
  return {
    apiResponse,
  };
};

export default usePostAPI;
