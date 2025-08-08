const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="spinner-border spinner-border-sm mx-2" role="status" />
      <span>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
