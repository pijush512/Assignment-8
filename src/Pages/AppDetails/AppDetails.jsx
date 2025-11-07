import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import DownlodImg from "../../assets/Downlod.png"
import starImg from "../../assets/starImg.png";
import LikeImg from "../../assets/LikeImg.png"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AppDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const allCards = location.state?.allAppData || [];
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const selectedApp = allCards.find(item => item.id === parseInt(id));
    setApp(selectedApp);
  }, [id, allCards]);

  const handleInstall = () => {
    setIsInstalled(true);
    toast.success("App Installed Successfully!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };


  if (!app) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="flex flex-col md:flex-row items-center gap-16 bg-white shadow-lg rounded-2xl p-6">
        <img
          src={app.image} alt={app.name}
          className="w-4/12 h-60 rounded-xl object-cover" />
        <div>
          <h1 className="text-3xl font-bold mb-5">{app.title}</h1>

          <div className='flex items-center gap-20'>
            <div>
              <img className="w-6" src={DownlodImg} alt="" />
              <p>Downloads</p>
              <p className='font-bold text-2xl'>{app.downloads}</p>
            </div>
            <div>
              <img className="w-6" src={starImg} alt="" />
              <p>Rating</p>
              <p className='font-bold text-2xl'>{app.ratingAvg}</p>
            </div>
            <div>
              <img className="w-6" src={LikeImg} alt="" />
              <p>Reviews</p>
              <p className='font-bold text-2xl'>{app.reviews}</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className="bg-[#00D390] hover:bg-blue-600 w-8/12 text-white px-4 py-2 rounded-lg mt-6">
            {/* Install Now */}
            {isInstalled ? "Installed" : "Install"}
          </button>
        </div>
        <div>
        </div>
      </div>
      <div>
        <h2>Description</h2>
        <p className="text-gray-600 mb-3">{app.description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;





