import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import useAddProduct from "../hooks/GetSimilarproduct";
import Skeleton from "../components/skeleton";
import AsyncHOC from "../HOC/asyncHOC";
function ProductDetail() {
  const { productId } = useParams();
  const { loading, data, err, getData } = useAsync(`products/${productId}`);
  const { loading2, data2, err2, getData2 } = useAsync(`products/${productId}`);
  const location = useLocation();
  console.log("My location:", location);
  useEffect(() => {
    getData();
    getData2();
  }, []);
  console.log(productId);
  const Rating = (ratingNum) => {
    const ratingList = Array.from(Array(5));

    console.log("roundedrate:", ratingNum);
    return (
      <div className="rating rating-md ">
        {ratingList.map((item, index) => {
          return (
            <input
              key={index}
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              checked={
                parseInt(ratingNum.ratingNum) === index + 1 ? true : false
              }
            />
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <AsyncHOC loading={loading}>
        {console.log("datanew:", data)}

        <div className="card card-side bg-base-100 shadow-xl w-[90%] mx-auto my-8">
          <figure className="h-[60%] my-auto mx-auto">
            <img
              className="w-[70%]  mx-auto"
              src={
                data2?.data?.images?.[0] ||
                data2?.data?.images?.[1] ||
                data2?.data?.images?.[2] ||
                data2?.data?.category?.image
              }
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {data?.data?.category}</h2>
            <p> {data?.data?.description}</p>
            <div className="card-actions justify-end">
              <h4>Price:${data2?.data?.price}</h4>
              <br />
              <Rating ratingNum={data?.data?.rating?.rate} />
              Rate:
              {data?.data?.rating?.rate}
              {console.log("datanew2:", data2)}
              <button className="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
        {console.log("datanew2:", data2)}
      </AsyncHOC>
    </div>
  );
}

export default ProductDetail;
