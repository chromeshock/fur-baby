import { useEffect, useContext } from "react";
import { Context } from "../context/FirestoreContext";
import { useAuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";
import UploadForm from "./UploadForm";

function Layout({ children }) {
  const { dispatch, state, read } = useContext(Context);
  const { authenticate } = useAuthContext();
  const { isCollapsed: isVisible, inputs } = state; // destructuring the current state
  const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } });

  useEffect(() => {
    read();
    authenticate();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container  mt-5">
        <button
          className="btn btn-success float-end"
          onClick={() => toggle(!isVisible)}
        >
          {isVisible ? "Close" : "+ Add"}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm />
        {children}
      </div>
    </>
  );
}
export default Layout;
