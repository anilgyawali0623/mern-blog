import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
function Dashboard() {
  const location = useLocation();
  const [tab, setSubTab] = useState("");
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
      {tab==="profile" && <DashProfile/>}
      {tab === 'posts' && <DashPosts />}
    {tab==='users' && <DashUsers/>}
    </div>
  );
}

export default Dashboard;
