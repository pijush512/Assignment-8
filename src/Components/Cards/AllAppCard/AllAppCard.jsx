import React, { use, useState } from "react";
import shakibimg from "../../../assets/Shakib.jpg";
import starImg from "../../../assets/starImg.png";
import downloadIconImg from "../../../assets/downloadIcon.png";

const AllAppCard = ({ allAppDataPromise }) => {
  const appCards = use(allAppDataPromise);

  const [search, setSearch] = useState("");
  const filterAppsCard = appCards.filter(
    (app) => app.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mt-8 flex justify-between items-center mb-5">
        <h3 className="font-bold text-lg">({appCards.length}) Apps Found</h3>
        <div>
          <input
            type="text"
            name="search"
            value={search}
            placeholder="Search Apps"
            onChange={(e) => setSearch(e.target.value)}
            className="border-1 border-gray-300 px-7 py-1 rounded-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterAppsCard.map((appCard) => (
          <div key={appCard.id}>
            <div className="card bg-base-100 shadow-sm p-2">
              <figure>
                <img src={shakibimg} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p className="font-semibold">{appCard.description}</p>
                <div className="card-actions justify-between mt-2">
                  <div className="badge bg-[#F1F5E8]">
                    <img src={downloadIconImg} alt="" />
                    <p className="text-[#00D390]">{appCard.downloads}</p>
                  </div>
                  <div className="badge bg-[#FFF0E1] ">
                    <img src={starImg} alt="" />
                    <p className="text-[#FF8811]">{appCard.ratingAvg}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppCard;
