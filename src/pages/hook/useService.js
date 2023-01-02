import axios from "axios";
import React, { useState } from "react";

const useService = () => {
  const [services, setServices] = useState([]);
  axios
    .get("http://localhost:5050/services")
    .then((res) => setServices(res.data));
  return [services];
};

export default useService;
