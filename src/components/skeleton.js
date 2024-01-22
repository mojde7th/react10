function Skeleton() {
    return (
      <div className="flex flex-col md:flex-row gap-4 w-[90%] md:w-[45%] align-middle mx-auto flex-wrap">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
}

export default Skeleton;