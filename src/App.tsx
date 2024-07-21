import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { constPageRouters } from "./views/url";
import { ConfigProvider } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const constQueryClient = new QueryClient();
function App() {
  constQueryClient.setDefaultOptions({
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: { retry: 0 },
  });
  return (
    <QueryClientProvider client={constQueryClient}>
      <ConfigProvider>
        <DndProvider backend={HTML5Backend}>
          <RouterProvider router={constPageRouters} />
        </DndProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
