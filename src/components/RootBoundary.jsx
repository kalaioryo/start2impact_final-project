import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NotFound from "../pages/NotFound";

function RootBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound/>
    }

    return <div>Something went wrong</div>;
  }
}

export default RootBoundary