import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NotFound from "../pages/NotFound";

function RootBoundary() {
  const error = useRouteError();

  console.log(error);
  //et::ERR_CONNECTION_RESET 200

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound/>
    }

    return <div>Something went wrong</div>;
  }
}

export default RootBoundary