import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./head.css"
const Header = () => {
  const { user,loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div className="setposition">
        <button className="btn"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Log Out
        </button>
        
        <h2>{user.name}</h2>

        </div>
      ) : (
        <>
        <button className="btn" onClick={() => loginWithRedirect()}>Let's Get Started</button>
        {/* <img src="https://wallpaper-house.com/data/out/8/wallpaper2you_231925.jpg" className="imgbg"></img> */}
        <div className="container">

        </div>

        </>  
      )}
    </div>
  );
};

export default Header;
