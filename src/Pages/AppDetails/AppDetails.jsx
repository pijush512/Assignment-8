import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

const AppDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const allAppData = location.state?.allAppData || [];
  const [app, setApp] = useState(null);

  useEffect(() => {
    const selectedApp = allAppData.find(item => item.id === parseInt(id));
    setApp(selectedApp);
  }, [id, allAppData]);

  if (!app) {
    return <p className="text-center mt-10">Loading...</p>;
  }
  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-2xl p-6">
        <img
          src={app.image} alt={app.name}
          className="w-6/12 h-60 rounded-xl object-cover" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{app.name}</h1>
          <p className="text-gray-600 mb-3">{app.description}</p>
          <p><strong>Downloads:</strong> {app.downloads}</p>
          <p><strong>Rating:</strong> {app.rating}</p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
            Install App
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;