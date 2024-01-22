import React from "react";
import Skeleton from "../components/skeleton";
import Spinner from "../components/spinner";
export default function AsyncHOC({ loading, children }) {
  const LoadingComponent = () => {
    return (
      <div className="flex gap-4 flex-wrap justify-between my-4 mx-7">
        {Array.from(Array(1)).map((item) => (
          <Spinner key={item} />
        ))}
      </div>
    );
  };
  if (loading) return <LoadingComponent />;
  return <>{children}</>;
}
