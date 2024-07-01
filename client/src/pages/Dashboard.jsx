import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";

function Dashboard() {
  const location = useLocation();
  const [subTab, setSubTab] = useState("");
  useEffect(() => {
    // location.search give the string of the url  urlParams helps to perform
    const urlParams = new URLSearchParams(location.search);
     console.log(urlParams)
    // tab= paxi j lekhxam tyo yesma aahuxa
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);
    if (tabFromUrl) {
      setSubTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className=" min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        
        <DashSidebar />
        
      </div>
      
    </div>
  );
}

export default Dashboard;
