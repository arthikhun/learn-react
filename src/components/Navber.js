import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center h-16 p-4 gap-40 border-b-2 bg-red-50 italic">
      <Link
        className="hover:bg-yellow-300 hover:text-red-600 hover:scale-150 hover:text-9xl"
        to="/"
      >
        Home
      </Link>
      <Link to="/add">Add</Link>
      <Link to="/view">View</Link>
      <a href="/add2">aw</a>
    </div>
  );
}

export default Navbar;
