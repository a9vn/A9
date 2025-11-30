import React, { useState } from "react";
import Sidebar from "./components/UI/Sidebar";
import SidebarToggle from "./components/UI/SidebarToggle";
import SidebarOverlay from "./components/UI/SidebarOverlay";
import Player from "./components/Player/Player";
import Display from "./pages/Display";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen bg-black">
      <SidebarToggle isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <SidebarOverlay isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="h-[90%] flex">
        <Sidebar isOpen={isSidebarOpen} />
        <Display />
      </div>
      <Player />
    </div>
  );
};

export default App;
