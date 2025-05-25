import React from "react";

function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-lg group  transition-all ease-in-out overflow-hidden flex flex-col min-w-[280px] max-w-[280px] ">
      <div className="w-30 h-30 flex border-2 border-[var(--sec-blue)] rounded-2xl text-[var(--third-blue)] text-4xl  justify-center items-center">
        {service.icon}
      </div>
      <div className="flex flex-col justify-between items-start flex-grow pt-4">
        <div>
          <h2 className="text-2xl font-extrabold text-[var(--third-blue)]">
            {service.title}
          </h2>
          <p className="text-md text-gray-600 mt-2 font-sans">{service.description}</p>
        </div>
        <button className="mt-4 px-6 py-3 rounded-md font-medium bg-[var(--primary-blue)] text-[var(--sec-blue)] group-hover:text-white transition-all ease-in-out group-hover:bg-[var(--sec-blue)]">
          View More →
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
