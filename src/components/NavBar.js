import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
      <nav>
        {links.map((link) => {
          let pageLinks = `#${link}`
          return <a href={pageLinks} key={Math.random() *10}>
            {link}
          </a>
        })}
      </nav>
  );
}


export default NavBar;
