import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ListAllPage } from "./pages/ListAllPage";
import { AddCardPage } from "./pages/AddCardPage";
import { App } from "./App"

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="list-all" element={<ListAllPage />} />
        <Route path="add-todo" element={<AddCardPage />} />
      </Route>
    )
  );
  