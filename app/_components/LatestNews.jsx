import { Button } from "@/components/ui/button";
import { FaCalendarAlt } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const newsArticles = [
  {
    id: 1,
    title: "In this hospital there are special surgeon",
    author: {
      name: "John deo",
      avatar: "/about.jpg",
    },
    date: "21 July 2021",
    image: "/about.jpg",
    slug: "hospital-special-surgeon",
  },
  {
    id: 2,
    title: "Can you get a diflucan prescription online?",
    author: {
      name: "Peter Packer",
      avatar: "/about.jpg",
    },
    date: "20 July 2021",
    image: "/about.jpg",
    slug: "diflucan-prescription-online",
  },
  {
    id: 3,
    title: "Why Is Skin Surgeon Considered Underrated",
    author: {
      name: "Sonar Moyna",
      avatar: "/about.jpg",
    },
    date: "19 July 2021",
    image: "/about.jpg",
    slug: "skin-surgeon-underrated",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 md:px-16 lg:px-28 px-4 ">
      <div className="">
        {/* Header */}
        <div className="md:text-center text-start mb-12">
          <div className="inline-block w-fit bg-dash-pattern-org px-4 py-1 text-2xl font-semibold text-[var(--primary-orange)]  rounded-md">
            Latest News
          </div>
          <h2 className="text-3xl mt-4 md:text-4xl font-bold text-[var(--third-blue)]">
            Our Latest News
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Article Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                {/* Author and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative">
                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-orange-600 font-medium text-sm">
                      {article.author.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-6 leading-tight hover:text-orange-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>

                {/* Read More Button */}
                <button className="group border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 rounded-lg px-6 py-2 flex items-center">
                  Read More
                  <MdChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
          <div className=" flex justify-center items-center  transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              {/* Author and Date */}
               
                <button id='bottone1' > View all</button>
              {/* Read More Button */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
