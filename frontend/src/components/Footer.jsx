import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 mt-auto bg-[#101622]  w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 px-4 md:px-10 lg:px-20 xl:px-40 max-w-[960px] mx-auto w-full">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 Aanklan.ai. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Terms of Service</a>
          <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
