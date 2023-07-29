import Navbar from "./Navber";
function Layout({ children }) {
  return (
    <div className="h-screen">
      <Navbar />
      {children}
    </div>
  );
}
export default Layout;
