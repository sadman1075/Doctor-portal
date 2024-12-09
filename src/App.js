import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">

      <RouterProvider router={routes}>

      </RouterProvider>
      <Toaster></Toaster>

    </div>
  );
}

export default App;
