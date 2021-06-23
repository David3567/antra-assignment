import React from "react";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";

function LayOut({ children }) {
  return (
    <div>
      <div>
        <Link href="/ip/apple_tv/0007?username=james">Go to Demo Page</Link>
      </div>
      <div>
        <Link href="/ip/any/0004?username=monica">Go to test Page</Link>
      </div>

      {children}
    </div>
  );
}

export default LayOut;
