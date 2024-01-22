import { useEffect } from "react";
import useAsync from "../hooks/useAsync";
import { navbarLinks } from "../libs/constants";
import Skeleton from "../components/skeleton";
import ProductComponent from "../components/ProductComponent";
import AsyncHOC from "../HOC/asyncHOC";

function ProductsPage() {
  const { loading2, data2, error2, getData2 } = useAsync("Products");
  useEffect(() => {
    getData2();
    setTimeout(() => {
      console.log("Mydata:", data2);
    }, 3000);
  }, []);


  console.log("data2:",data2);
  return (
    <div className="flex flex-wrap justify-around ">
      <AsyncHOC
        loading={loading2}
        
      >
        {data2?.data?.map((item) => {
          return <ProductComponent {...item} key={item.id} />;
        })}
      </AsyncHOC>
    </div>
  );
}

export default ProductsPage;
