function LoadingSkeleton({ count = 3 }) {
  return (
    <div className="loading-skeleton">
      {Array.from({ length: count }).map((_, index) => (
        <div className="skeleton-card" key={index}></div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
