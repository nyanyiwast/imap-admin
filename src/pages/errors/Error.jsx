import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
        <div id="error-page" className="flex items-center justify-center h-screen">
        <div className="text-center">
            <h1 className="text-[90px] text-red-400">Oops!</h1>
            <p className="text-[20px]">Sorry, an unexpected error has occurred.</p>
            <p className="text-[20px]">
            <i>Reason: {error.statusText || error.message}</i>
            </p>
        </div>
        </div>
  );
}
