import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Page Not Found</h2>
      <p>Sorry about that.</p>
      <p>
        <Link to="/">Visit the Homepage</Link>
      </p>
    </main>
  );
};

export default Missing;
