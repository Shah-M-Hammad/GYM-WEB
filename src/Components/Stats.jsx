import StatCounter from './StatCounter'; 

function Stats() {
  return (
    <div>
      <section className="text-red-500 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-[2rem] font-medium title-font mb-4 text-white">
            STATISTICS

            </h1>
          
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-red-700 px-4 py-6 rounded-lg">
                <img   className='w-12 h-12 mb-3 inline-block' src="src\images\two.png" alt="" />
           
                <h2 className="title-font font-medium text-3xl text-white">
                  <StatCounter endValue={70} />
                </h2>
                <p className="leading-relaxed">TRAINERS</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-red-700 px-4 py-6 rounded-lg">
              <img   className='w-12 h-12 mb-3 inline-block' src="src\images\branch (1).png" alt="" />

                <h2 className="title-font font-medium text-3xl text-white">
                  <StatCounter endValue={12} />
                </h2>
                <p className="leading-relaxed">BRANCHES</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-red-700 px-4 py-6 rounded-lg">
              <img   className='w-12 h-12 mb-3 inline-block' src="src\images\group-users.png" alt="" />

                <h2 className="title-font font-medium text-3xl text-white">
                  <StatCounter endValue={600} />
                </h2>
                <p className="leading-relaxed">MEMBERS</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-red-700 px-4 py-6 rounded-lg">
              <img   className='w-12 h-12 mb-3 inline-block' src="src\images\weightlifting.png" alt="" />

                <h2 className="title-font font-medium text-3xl text-white">
                  <StatCounter endValue={120} />
                </h2>
                <p className="leading-relaxed">EQUIPMENTS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats;
