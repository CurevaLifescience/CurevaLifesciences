import React from "react";
import membersData from "@/constants/members";
import MemberCard from "./MemberCard";
function OurTeam() {
  return (
    <section className="bg-white dark:bg-gray-900 px-6 md:px-16 lg:px-28">
      <div className="py-8  mx-auto lg:max-w-screen-xl lg:py-16  ">
        <div className="mx-auto lg:max-w-screen-md max-w-screen-xl text-start md:text-center mb-8 lg:mb-16">
          <h2 className="mb-6 text-2xl  font-extrabold ">
            <div className="inline-block w-fit bg-dash-pattern-org px-4 py-1 font-semibold text-[var(--primary-orange)]  rounded-md">
              Our Team
            </div>
          </h2>
          <h2 className="text-3xl md:text-4xl mb-4  font-bold text-[var(--third-blue)]">
            Meet the Team Behind Cureva's Vision
          </h2>
          <p className=" text-gray-600 lg:mb-10 w-full sm:text-lg dark:text-gray-400">
            Cureva Lifesciences is powered by a team of dedicated minds shaping
            the future of healthcare. With a shared commitment to care and
            innovation, we work together to make wellness accessible and
            impactful for all.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {membersData.map((member, index) => (
            <MemberCard member={member} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
