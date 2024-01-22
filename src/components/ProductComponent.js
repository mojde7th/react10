import { useNavigate, useNavigationType } from "react-router-dom";
import { NavigateOptions } from "react-router-dom";
import styled from "styled-components";
function trimh(params) {
  return params.slice(0, 50) + " .....";

  console.log("ssss:", params);
}
function trimt(params) {
  return params.slice(0, 10);

  console.log("ssss:", params);
}
function ProductComponent({ title, description, price, images, id,category }) {
  const navig = useNavigate();
console.log("images",images[0]);
  return (
    <div className="flex  sm:w-[50%] w-[100%]">
      <ProductWrapper withBorder>
        <div className="card mx-auto w-[90%] my-10 bg-base-100 shadow-xl">
          <figure>
            <img src={images[0] || images[1] || images[2] || category.image} alt="Shoes" className="w-40 my-4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{trimt(title)}</h2>
            <p>{trimh(description)}</p>
            <p>{price}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  navig(`/react10/products/${id}`);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </ProductWrapper>
    </div>
  );
}

trimh("ddkkkkkkkkkskkskkskkiifjiauhuhammmmm");
const ProductWrapper = styled.div`
  background: rgba(0, 0, 0.6, 0.04);
  margin: 5px;
  width: 100%;
  border-radius: 10px;
  border: ${(props) => props.withBorder && "1px solid grey"};
`;
export default ProductComponent;
