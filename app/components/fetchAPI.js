import { useEffect, useState } from "react";
import axios from "axios";

const useFetchAPI = () => {
  const url = "http://localhost:8000/api/";
  const [apiResponse, setApiResponse] = useState("");

  function apiCall() {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        setApiResponse(data);
        console.log("response is", data);
      });
  }

  useEffect(() => {
    apiCall();
  }, []);
  console.log("api response", apiResponse);
  return {
    apiResponse,
  };
};

export default useFetchAPI;
