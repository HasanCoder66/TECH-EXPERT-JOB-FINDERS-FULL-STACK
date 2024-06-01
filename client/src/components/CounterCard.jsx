import React from "react";

function CounterCard() {
  return (
    <div className="bg-theme-red w-full flex justify-center py-40">
      <div className="hover:border-l-2 hover:border-t-2 hover:border-r-0 hover:border-b-0 border-dashed border-theme-black border-r-2 border-b-2 relative z-[2] text-center w-1/5 py-16  hover:bg-white hover:bg-opacity-20 transition-all duration-300 mr-8">
        <div className="relative">
          <p className="font-bold text-gray-600 text-9xl absolute -z-[1] w-full">
            TE
          </p>
          <div className="hover:translate-y-[-10px] transition-transform duration-300">
            <p className="text-theme-black text-6xl font-bold pt-6">633787</p>
            <p className="text-theme-black text-4xl font-bold">Resume Builts</p>
          </div>
        </div>
      </div>
      <div className="hover:border-l-2 hover:border-t-2 hover:border-r-0 hover:border-b-0 border-dashed border-theme-black border-r-2 border-b-2 relative z-[2] text-center w-1/5 py-16  hover:bg-white hover:bg-opacity-20 transition-all duration-300 mr-8">
        <div className="relative">
          <p className="font-bold text-gray-600 text-9xl absolute -z-[1] w-full">
            CH
          </p>
          <div className="hover:translate-y-[-10px] transition-transform duration-300">
            <p className="text-theme-black text-6xl font-bold pt-6">633787</p>
            <p className="text-theme-black text-4xl font-bold">
              Cover Letter Built
            </p>
          </div>
        </div>
      </div>
      <div className="hover:border-l-2 hover:border-t-2 hover:border-r-0 hover:border-b-0 border-dashed border-theme-black border-r-2 border-b-2 relative z-[2] text-center w-1/5 py-16  hover:bg-white hover:bg-opacity-20 transition-all duration-300 mr-8">
        <div className="relative">
          <p className="font-bold text-gray-600 text-9xl absolute -z-[1] w-full">
            EX
          </p>
          <div className="hover:translate-y-[-10px] transition-transform duration-300">
            <p className="text-theme-black text-6xl font-bold pt-6">633787</p>
            <p className="text-theme-black text-4xl font-bold">
              Websites Builts
            </p>
          </div>
        </div>
      </div>
      <div className="hover:border-l-2 hover:border-t-2 hover:border-r-0 hover:border-b-0 border-dashed border-theme-black border-r-2 border-b-2 relative z-[2] text-center w-1/5 py-16  hover:bg-white hover:bg-opacity-20 transition-all duration-300 mr-8">
        <div className="relative">
          <p className="font-bold text-gray-600 text-9xl absolute -z-[1] w-full">
            PERT
          </p>
          <div className="hover:translate-y-[-10px] transition-transform duration-300">
            <p className="text-theme-black text-6xl font-bold pt-6">633787</p>
            <p className="text-theme-black text-4xl font-bold">Signups</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterCard;
