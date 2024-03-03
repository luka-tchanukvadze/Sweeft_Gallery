import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
          padding: "2rem 0",
          marginBottom: "2rem",
          backgroundColor: "lightgray",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="history"
          style={{
            textDecoration: "none",
          }}
        >
          History
        </Link>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
