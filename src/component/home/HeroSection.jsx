import React from 'react';

const HeroSection = () => {
  const reviews = [
    {
      userName: "Md Nasir",
      review: "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate.",
      color: `#ff0000`
    },
    {
      userName: "Rohit Bhati",
      review: "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
      color: "green"
    },
    {
      userName: "Pradeep Kumar",
      review: "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience",
      color: "#ef6c00"
    },
    {
      userName: "Surjit Kumar",
      review: "Genuine and Authorized Tyre shop in indirapuram having latest manufactured stock. Well equipped workshop with professional staff. I change my care Tyre there, highly satisfied with service and lasted available stock.. Keep it up !!!",
      color: "#f4511e"
    },
    {
      userName: "Pardeep Kumar",
      review: "Best shoppe in Indirapuram. Good customer service. After sale service amazing. Overall nice experience",
      color: "greenyellow"
    }
  ]
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex">
        <div className="">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            SHREE HEMKUNT TYRES AND SERVICES
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            PLOT NUMBER 69 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-2 INDIRAPURAM,
            Ghaziabad, Uttar Pradesh, 201014
          </p>
          <p className="text-gray-700 dark:text-gray-300">Open - Monday   to   Sunday - 10:00AM to 8:00PM</p>
          <button className="mt-2 w-[41%] border-2 border-[#ed1c24] text-[#ed1c24] p-1">Get Directions</button>
        </div>
        <div className="relative overflow-x-hidden">
          <div className="flex overflow-x-scroll scroll-smooth" >
            <img src="/images/hero-shop-1.jpg" alt="CEAT Shoppe" className="w-full" />
            <img src="/images/hero-shop-2.jpg" alt="CEAT Shoppe" className="w-full" />
            <img src="/images/hero-shop-3.jpg" alt="CEAT Shoppe" className="w-full" />
            <img src="/images/hero-shop-4.jpg" alt="CEAT Shoppe" className="w-full" />
            <img src="/images/hero-shop-1.jpg" alt="CEAT Shoppe" className="w-full" />
          </div>
        </div>
      </div>
      <p class="fw-bold mb-2"><span class="count me-2">2278</span> Google Reviews</p>
      <div className="relative overflow-x-hidden">
        <div className="flex overflow-x-scroll scroll-smooth gap-5" >
          {
            reviews.map((item, i) => (
              <div key={i} className="items-center border border-gray-200 rounded-lg p-4 mb-4 min-w-[33%]">
                <div className="flex gap-2 items-center mb-2">
                  <p className="flex justify-center items-center w-9 h-9 rounded-full text-slate-400 border font-semibold">{item.userName?.[0]}</p>
                  <p className='font-medium'>{item.userName}</p>
                </div>
                <div className="">
                  <p className="text-slate-600 useline-3">{item.review}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
