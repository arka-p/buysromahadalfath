import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <Link to="/" className="hover:underline text-lime-600">
        Home
      </Link>

      {pathnames.length === 2 && (
        <>
          {" / "}
          <span className="text-gray-700">
            {capitalize(pathnames[0])}-{pathnames[1]}
          </span>
        </>
      )}

      {pathnames.length === 1 && (
        <>
          {" / "}
          <span className="text-gray-700">
            {capitalize(pathnames[0])}
          </span>
        </>
      )}
    </nav>
  );
}
