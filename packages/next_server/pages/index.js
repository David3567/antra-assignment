import LayOut from "./layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <LayOut></LayOut>
      </QueryClientProvider>
    </div>
  );
}
