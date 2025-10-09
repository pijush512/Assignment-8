import React, { use } from "react";
import shakibimg from "../../../assets/Shakib.jpg";
import starImg from "../../../assets/starImg.png";
import downloadIconImg from "../../../assets/downloadIcon.png";

const AllAppCard = ({ allAppDataPromise }) => {
  const appCards = use(allAppDataPromise);

  return (
    <div>


    <div className='mt-8 flex justify-between items-center mb-5'>
                    <h3 className="font-bold text-lg">({appCards.length}) Apps Found</h3>
                    <div>
                        <input type="text" name='searce'  placeholder='Search Apps'
                            className='border-1 border-gray-300 px-7 py-1 rounded-lg'
                        />
                    </div>
                </div>
    

        <div className="grid grid-cols-4 gap-4">
      {appCards.map((appCard) => (
        <div key={appCard.id}>
            <div className="card bg-base-100 shadow-sm p-2">
            <figure>
              <img src={shakibimg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <p>{appCard.description}</p>
              <div className="card-actions justify-between mt-2">
                <div className="badge badge-outline">
                  <img src={downloadIconImg} alt="" />
                  <p>{appCard.downloads}</p>
                </div>
                <div className="badge badge-outline">
                  <img src={starImg} alt="" />
                  <p>{appCard.ratingAvg}</p>
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
