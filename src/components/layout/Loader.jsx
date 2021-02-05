import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className="spinner">
      <Spinner role="status" className="spinner__animation" />
      <span className="sr-only">Loading content...</span>
    </div>
  );
}

export default Loader;
