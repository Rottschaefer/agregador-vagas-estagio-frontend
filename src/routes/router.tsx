import { createBrowserRouter } from "react-router-dom";
import { BuscaEstagios } from "../pages/BuscaEstagios";

const router = createBrowserRouter([
  { index: true, element: <BuscaEstagios /> },
]);
export default router;
