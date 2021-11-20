import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const timeRef = useRef();

  const fetchData = (url) => {
    setLoading(true);
    setError(false);
    axios
      .get(url)
      .then((res) => {
        setData(res.data[0].PostOffice);
        console.log(res.data[0].PostOffice);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        setError(true);
      });
  };

  useEffect(() => {
    timeRef.current && clearTimeout(timeRef.current);
    setLoading(true);
    timeRef.current = setTimeout(() => {
      fetchData(url);
    }, 600);
  }, [url]);

  return { loading, error, data };
};

// function debouncer(delay, callback) {
//   var debounce;
//   return function (e) {
//     debounce && clearTimeout(debounce);
//     debounce = setTimeout(function () {
//       callback(e);
//     }, delay);
//   };
// }
