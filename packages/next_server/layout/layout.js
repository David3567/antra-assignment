import React from "react";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";

function LayOut({ children }) {
  return (
    <div>
      <Link href="/ip/apple_tv/0007?username=james">Go to Demo Page</Link>
      {children}
    </div>
  );
}

export default LayOut;
