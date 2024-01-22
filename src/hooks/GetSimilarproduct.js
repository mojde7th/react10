import { useState } from "react";

function useAddProduct() {
  const [data2, setData2] = useState(undefined);
  const [loading2, setLoading2] = useState(false);
  const [error2, setError2] = useState(undefined);
  const [data3, setData3] = useState(undefined);
  const [loading3, setLoading3] = useState(false);
  const [error3, setError3] = useState(undefined);
  function GetSimilarproduct(id) {
    console.log("My id from useadd", id);
    setLoading2(true);
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setLoading2(false);
        console.log("This is my getplatzii:", json);
        setData2(json);
      })
      .catch((er2) => {
        console.log("errorrr");
        setError2(er2);
      });
  }
  function GetSinglePro(id) {
    console.log("My id from useadd", id);
    setLoading3(true);
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setLoading3(false);
        console.log("This is my getplatzii:", json);
        setData3(json);
      })
      .catch((er3) => {
        console.log("errorrr");
        setError3(er3);
      });
  }
  return { GetSimilarproduct, GetSinglePro, data2,data3, error2,error3,loading3, loading2 };
}

export default useAddProduct;
