import React, { use } from "react";
import shakibimg from "../../assets/Shakib.jpg";
import starImg from "../../assets/starImg.png";
import downloadIconImg from "../../assets/downloadIcon.png";
import { useNavigate } from "react-router";

const Card = ({ cardsDataPromise }) => {
  const singleCard = use(cardsDataPromise);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="font-bold mt-8 text-4xl text-center">Trending Apps</h1>
      <p className="text-lg mt-2 mb-6 text-[#627382] text-center">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {singleCard.map((card) => (
          <div key={card.id}>
            <div className="card bg-base-100 shadow-sm p-2">
              <figure>
                <img src={shakibimg} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p className="font-semibold">{card.description}</p>
                <div className="card-actions justify-between mt-2">
                  <div className="badge bg-[#F1F5E8]">
                    <img src={downloadIconImg} alt="" />
                    <p className="text-[#00D390]">{card.downloads}</p>
                  </div>
                  <div className="badge bg-[#FFF0E1]">
                    <img src={starImg} alt="" />
                    <p className="text-[#FF8811]">{card.ratingAvg}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-9 mb-6">
        <button
          onClick={() => navigate("/app")}
          className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] px-8 text-white"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Card;
