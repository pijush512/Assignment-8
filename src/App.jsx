// import './App.css'

// function App() {


//   return (
//     <>

//     </>
//   )
// }

// export default App


import React from "react";
import AllAppCard from "../../Components/Cards/AllAppCard/AllAppCard";
import appsData from "../../data/CardsData.json";

const AppPage = () => {
  return (
    <div>
      <AllAppCard allAppDataPromise={Promise.resolve(appsData)} />
    </div>
  );
};

export default AppPage;

