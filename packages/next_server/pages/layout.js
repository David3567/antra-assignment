import React from "react";
import Link from "next/link";

function LayOut({ children }) {
  return (
    <div>
      <Link href="/ip/name/name">Go to Demo Page</Link>
      {children}
    </div>
  );
}

export default LayOut;
