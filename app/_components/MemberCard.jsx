"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MemberCard({ member }) {
  return (
    <div className="grid sm:grid-cols-3 bg-[var(--primary-blue)] rounded-lg border-2 border-purple-200 hover:shadow-2xl transition-shadow ease-in-out shadow-lg overflow-hidden">
  <div className="h-full">
    <Image
      className="w-full h-full object-cover"
      src={member.img}
      alt={`${member.name} Avatar`}
      height={300}
      width={300}
    />
  </div>

  <div className="md:col-span-2 p-5 flex flex-col justify-center">
    <h3 className="text-xl font-bold tracking-tight text-[var(--third-blue)]">
      <a href="#">{member.name}</a>
    </h3>
    <span className="text-[var(--sec-blue)]">{member.post}</span>
    <p className="mt-3 mb-4 text-sm  text-gray-600 dark:text-gray-400">
      {member.about}
    </p>
    <ul className="flex space-x-4">
      {member.facebook && (
        <li>
          <a
            href={member.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            {/* Facebook Icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      )}

      {member.instagram && (
        <li>
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            {/* Instagram Icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      )}

      {member.linkedin && (
        <li>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            {/* LinkedIn Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 30 26" fill="currentColor">
              <path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" />
            </svg>
          </a>
        </li>
      )}

      {member.twitter && (
  <li>
    <a
      href={member.twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    >
      {/* Twitter Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.954 4.569c-0.885 0.392-1.83 0.656-2.825 0.775 1.014-0.609 1.794-1.574 2.163-2.724-0.951 0.564-2.005 0.974-3.127 1.194-0.897-0.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.204-4.928 4.928 0 0.386 0.045 0.762 0.127 1.124-4.094-0.205-7.725-2.166-10.161-5.144-0.424 0.729-0.666 1.577-0.666 2.476 0 1.708 0.87 3.216 2.188 4.099-0.807-0.026-1.566-0.247-2.228-0.616v0.061c0 2.385 1.693 4.374 3.946 4.827-0.413 0.111-0.849 0.171-1.296 0.171-0.317 0-0.626-0.031-0.928-0.089 0.627 1.956 2.444 3.377 4.6 3.417-1.685 1.32-3.808 2.107-6.115 2.107-0.397 0-0.789-0.023-1.175-0.069 2.179 1.397 4.768 2.213 7.548 2.213 9.057 0 14.009-7.496 14.009-13.986 0-0.21-0.004-0.423-0.015-0.635 0.961-0.694 1.8-1.562 2.46-2.549z"/>
      </svg>
    </a>
  </li>
)}
{member.email && (
  <li>
    <a
      href={`mailto:${member.email}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    >
      {/* Email Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l8 6 8-6V18H4z" />
      </svg>
    </a>
  </li>
)}


    </ul>
  </div>
</div>

  );
}

export default MemberCard;
