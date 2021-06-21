import React from "react";
import Link from "next/link";

function LayOut({ children }) {
  return (
    <div>
      <Link href="/ip/apple_tv/0007?username=james">Go to Demo Page</Link>
      {children}
    </div>
  );
}

export default LayOut;
