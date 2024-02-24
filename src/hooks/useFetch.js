import { useEffect, useState } from "react";

function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    // clean up function
    let abortController = new AbortController();
    let signal = abortController.signal
    //setting loading true
    setLoading(true);
    //fetching url  
    fetch(url,{
        signal
    })
      .then((res) => {
        if (!res.ok) {
            throw Error('something went wrong')
        }
        return res.json()
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null)
      })
      .catch(e=>{
        setError(e.message);
      })
       //clean up function
      return ()=>{
        abortController.abort()
      }
  }, [url]);
  return { data, loading ,error};
}

export default useFetch;
