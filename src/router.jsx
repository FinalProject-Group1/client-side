import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import AddProduct from "./views/dashboard-views/AddProduct";
import ViewProducts from "./views/dashboard-views/ViewProducts";
import EditProduct from "./views/dashboard-views/EditProduct";
import ViewInvoices from "./views/dashboard-views/ViewInvoices";
import InvoiceDetails from "./views/dashboard-views/InvoiceDetails";
import EditOrderStatus from "./views/dashboard-views/EditOrderStatus";

const router = createBrowserRouter([
  {
    path: "/shop",
    element: <Dashboard />,
    children: [
      {
        path: ":sellerId/add-products",
        element: <AddProduct type="create" />,
      },
      {
        path: ":sellerId/products",
        element: <ViewProducts />,
      },
      {
        path: ":sellerId/products/:productId",
        element: <EditProduct type="edit" />,
      },
      {
        path: "invoices",
        element: <ViewInvoices />,
      },
      {
        path: "invoices/:invoiceId",
        element: <InvoiceDetails />,
      },
      {
        path: "invoices/:invoiceId/order-status",
        element: <EditOrderStatus type="edit"/>,
      },
    ],
  },
]);

export default router;