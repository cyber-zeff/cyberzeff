import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FiDownload, FiDollarSign, FiUser } from 'react-icons/fi';

interface Ebook {
  id: number;
  title: string;
  description: string;
  author: string;
  price: string;
  imageUrl: string;
  downloadUrl: string;
}

const EbooksPage: React.FC = () => {
  const starterEbook = {
    title: "Releasing Soon...",
    // description: "A free beginner-friendly ebook that introduces you to the world of cybersecurity. Learn about ethical hacking, securing your devices, and more.",
    // author: "Muhammad Huzaifa",
    // price: "Free",
    // imageUrl: "/ebooks/starter.jpg",
    // downloadUrl: "#"
  };

  const ebooks: Ebook[] = [
    // {
    //   id: 1,
    //   title: "Mastering Ethical Hacking",
    //   description: "Step-by-step guide to learning ethical hacking from basics to advanced.",
    //   author: "Zeff Huzaifa",
    //   price: "$9.99",
    //   imageUrl: "/ebooks/ethical-hacking.jpg",
    //   downloadUrl: "#"
    // },
    
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#76925a] mb-4">
          My Ebooks
        </h1>

        {/* Starter Ebook Section */}
        <section className="mb-20 mt-10">
          <div className="bg-[#1a1a1a] border border-[#76925a]/40 rounded-xl flex flex-col md:flex-row overflow-hidden shadow-lg">
            {/* <img 
              src={starterEbook.imageUrl} 
              alt={starterEbook.title} 
              className="w-full md:w-1/3 object-cover h-72 md:h-auto"
            /> */}
            <div className="p-6 flex flex-col justify-center md:w-2/3">
              <h2 className="text-3xl font-bold text-white mb-2">{starterEbook.title}</h2>
              {/* <p className="text-sm text-gray-300 mb-2 flex items-center">
                <FiUser className="mr-1" /> {starterEbook.author}
              </p>
              <p className="text-gray-400 mb-4">{starterEbook.description}</p>
              <a 
                href={starterEbook.downloadUrl} 
                className="inline-flex items-center px-4 py-2 bg-[#76925a] text-black font-semibold rounded hover:bg-[#9acd32] transition-colors w-fit"
              >
                <FiDownload className="mr-2" /> Download for Free
              </a> */}
            </div>
          </div>
        </section>

        {/* All Ebooks */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-[#76925a] mb-8">All Ebooks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map(ebook => (
              <div 
                key={ebook.id} 
                className="bg-[#121212] rounded-xl overflow-hidden border border-gray-800 hover:border-[#76925a]/50 shadow-lg hover:shadow-xl transition-all"
              >
                <img 
                  src={ebook.imageUrl} 
                  alt={ebook.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-1">{ebook.title}</h3>
                  <p className="text-sm text-gray-400 mb-2 flex items-center">
                    <FiUser className="mr-1" /> {ebook.author}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">{ebook.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400 flex items-center">
                      {ebook.price}
                    </span>
                    <a 
                      href={ebook.downloadUrl} 
                      className="flex items-center text-[#76925a] hover:text-[#9acd32] transition-colors text-sm"
                    >
                      Download <FiDownload className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EbooksPage;
