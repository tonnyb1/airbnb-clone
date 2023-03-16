import React from "react";

export default function WindowTracker() {

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    
    React.useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    
    }, []);
    
    return (
         <p className="paraWin">Window width: {windowWidth}</p>
    );
}