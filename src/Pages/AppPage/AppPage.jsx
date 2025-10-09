import React, { Suspense} from 'react';
import AllAppCard from '../../Components/Cards/AllAppCard/AllAppCard';

const AppPage = () => {

    const allAppDataPromise = fetch('AllAppData.json')
        .then(res => res.json());
    return (
        <div>
            <h1 className='font-bold text-4xl text-center mt-10 '>Our All Applications</h1>
            <p className='text-lg mt-2 mb-6 text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            
            <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>
                <AllAppCard allAppDataPromise={allAppDataPromise}></AllAppCard>
            </Suspense>

            
                      
        </div>
    );
};

export default AppPage;