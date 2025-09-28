import React, { useState, useRef } from "react";
import { Search, ZoomIn, ZoomOut, X, FileDown } from "lucide-react";

const GenwinCatalog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showTOC, setShowTOC] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const audioRef = useRef(null);

  const totalPages = 14;

  const products = [
    {
      id: 1,
      name: "GENWIN ACRYLIC CLEAR TAPE",
      size: "9MM (W) x 1MM (T) x 3MTR(L)",
      code: "GW*CL*9*1*3",
      price: 44,
      packing: 36,
      type: "clear",
      features:
        "Double-sided adhesive, crystal clear finish, premium quality, high-tack where applicable.",
    },
    {
      id: 2,
      name: "GENWIN ACRYLIC CLEAR TAPE",
      size: "12MM (W) x 1MM (T) x 3MTR(L)",
      code: "GW*CL*12*1*3",
      price: 56,
      packing: 30,
      type: "clear",
      features:
        "Double-sided adhesive, crystal clear finish, premium quality, high-tack where applicable.",
    },
    {
      id: 3,
      name: "GENWIN ACRYLIC CLEAR TAPE",
      size: "9MM(W) x 1MM (T) x 9MTR(L)",
      code: "GW*CL*9*1*9",
      price: 90,
      packing: 36,
      type: "clear",
      features:
        "Double-sided adhesive, crystal clear finish, premium quality, high-tack where applicable.",
    },
    {
      id: 4,
      name: "GENWIN ACRYLIC CLEAR TAPE",
      size: "12MM (W) x 1MM (T) x 9MTR(L)",
      code: "GW*CL*12*1*9",
      price: 120,
      packing: 30,
      type: "clear",
      features:
        "Double-sided adhesive, crystal clear finish, premium quality, high-tack where applicable.",
    },
    {
      id: 5,
      name: "GENWIN ACRYLIC CLEAR TAPE",
      size: "18MM(W) x 1MM (T) x 9MTR(L)",
      code: "GW*CL*18*1*9",
      price: 180,
      packing: 18,
      type: "clear",
      features:
        "Double-sided adhesive, crystal clear finish, premium quality, high-tack where applicable.",
    },
    {
      id: 6,
      name: "GENWIN ACRYLIC CLEAR TAPE",
      size: "24MM (W) x 1MM (T) x 9MTR(L)",
      code: "GW*CL*24*1*9",
      price: 240,
      packing: 15,
      type: "clear",
      features:
        "Double-sided adhesive, crystal clear finish, premium quality, high-tack where applicable.",
    },
    {
      id: 7,
      name: "GENWIN ACRYLIC FOAM TAPE",
      size: "9MM(W) x 0.8MM (T) x 3MTR(L)",
      code: "GW*GREY*9*0.8*3",
      price: 44,
      packing: 36,
      type: "foam",
      features:
        "Double-sided adhesive, heavy-duty mounting, premium foam, high-tack where applicable.",
    },
    {
      id: 8,
      name: "GENWIN ACRYLIC FOAM TAPE",
      size: "12MM (W) x 0.8MM (T) x 3MTR(L)",
      code: "GW*GREY*12*0.8*3",
      price: 56,
      packing: 30,
      type: "foam",
      features:
        "Double-sided adhesive, heavy-duty mounting, premium foam, high-tack where applicable.",
    },
    {
      id: 9,
      name: "GENWIN ACRYLIC FOAM TAPE",
      size: "9MM (W) x 0.8MM(T) x 9MTR(L)",
      code: "GW*GREY*9*0.8*9",
      price: 90,
      packing: 36,
      type: "foam",
      features:
        "Double-sided adhesive, heavy-duty mounting, premium foam, high-tack where applicable.",
    },
    {
      id: 10,
      name: "GENWIN ACRYLIC FOAM TAPE",
      size: "12MM (W) x 0.8MM (T) x 9MTR(L)",
      code: "GW*GREY*12*0.8*9",
      price: 120,
      packing: 30,
      type: "foam",
      features:
        "Double-sided adhesive, heavy-duty mounting, premium foam, high-tack where applicable.",
    },
    {
      id: 11,
      name: "GENWIN ACRYLIC FOAM TAPE",
      size: "18MM (W) x 0.8MM (T) x 9MTR(L)",
      code: "GW*GREY*18*0.8*9",
      price: 180,
      packing: 18,
      type: "foam",
      features:
        "Double-sided adhesive, heavy-duty mounting, premium foam, high-tack where applicable.",
    },
    {
      id: 12,
      name: "GENWIN ACRYLIC FOAM TAPE",
      size: "24MM (W) x 0.8MM (T) x 9MTR(L)",
      code: "GW*GREY*24*0.8*9",
      price: 240,
      packing: 15,
      type: "foam",
      features:
        "Double-sided adhesive, heavy-duty mounting, premium foam, high-tack where applicable.",
    },
  ];

  const tableOfContents = [
    { title: "Acrylic Clear Tapes (Pages 3-6)", page: 2, pageRange: "3-6" },
    { title: "Acrylic Foam Tapes (Pages 7-12)", page: 8, pageRange: "7-12" },
    { title: "Full Product Matrix", page: 12, pageRange: "13" },
    { title: "Contact Us", page: 13, pageRange: "14" },
  ];

  const playPageSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  
  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      playPageSound();
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 400);
    }
  };

   const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      playPageSound();
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const goToPage = (pageNum) => {
    if (!isFlipping && pageNum !== currentPage) {
      setIsFlipping(true);
      playPageSound();
      setTimeout(() => {
        setCurrentPage(pageNum);
        setIsFlipping(false);
      }, 400); 
    }
  };

  const openMediaZoom = (mediaUrl, type, downloadUrl) => {
    setSelectedMedia({ url: mediaUrl, type, downloadUrl });
    setZoomLevel(1);
  };

  const closeMediaZoom = () => {
    setSelectedMedia(null);
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel(Math.min(zoomLevel * 1.2, 3));
  };

  const zoomOut = () => {
    setZoomLevel(Math.max(zoomLevel / 1.2, 0.5));
  };

  const downloadMedia = () => {
    if (selectedMedia) {
      const link = document.createElement("a");
      link.href = selectedMedia.downloadUrl || selectedMedia.url;
      link.download = `genwin-product-${selectedMedia.type}.${
        selectedMedia.type === "video" ? "mp4" : "jpg"
      }`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const downloadPDF = () => {
    const pdfContent = {
      title: "GENWIN Premium Adhesive Tapes Collection",
      products: products,
      tableOfContents: tableOfContents,
    };

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(pdfContent, null, 2));
    const link = document.createElement("a");
    link.href = dataStr;
    link.download = "Genwin-Catalog.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert(
      "PDF Downloaded! (In production, this would generate actual PDF with product images)"
    );
  };

  const renderCoverPage = () => (
    <div className="h-full bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

      <div className="relative z-10 text-center px-8">
        <div className="mb-8">
          <img
            src="/api/placeholder/80/80"
            alt="cover"
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-white p-2"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wider">
          GENWIN
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90 font-medium">
          Building Up to Your Expectation
        </p>
        <p className="text-lg md:text-xl opacity-80 font-light">
          Premium Adhesive Tapes Collection
        </p>
      </div>
    </div>
  );

  const renderTOCPage = () => (
    <div className="h-full bg-white p-8">
      <div className="flex items-center gap-4 mb-8">
        <img
          src="/api/placeholder/48/48"
          alt="Genwin Logo"
          className="w-12 h-12"
        />
        <div>
          <h1 className="text-2xl font-bold text-red-600">GENWIN</h1>
          <p className="text-gray-600 text-sm">
            Building Up to Your Expectation
          </p>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-8 text-black">Table of Contents</h2>

      <div className="space-y-4">
        {tableOfContents.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 cursor-pointer hover:text-red-600 transition-colors"
            onClick={() => goToPage(item.page)}
          >
            <span className="text-lg text-gray-800">
              {index + 1}. {item.title}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <img
            src="/api/placeholder/200/200"
            alt="placeholder"
            className="mx-auto mb-2 opacity-50"
          />
          <p className="text-sm">
            Tip: Click any TOC item to jump directly to a page.
          </p>
          <p className="text-xs mt-2">
            You can add videos and extra images to each page in the editor.
          </p>
        </div>
      </div>
    </div>
  );

  const renderProductPage = (productIndex) => {
    const product = products[productIndex];
    if (!product) return null;

    return (
      <div className="h-full bg-white">
        <div className="flex">
          <div className="w-1/2 p-8 flex items-center justify-center bg-gray-50">
            <div
              className="relative group cursor-pointer"
              onClick={() =>
                openMediaZoom(
                  `/api/placeholder/400/300?text=${product.name}`,
                  "image"
                )
              }
            >
              <img
                src=""
                alt={product.name}
                className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3">
                  <Search className="text-gray-700" size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-6">
              {product.name}
            </h2>

            <div className="space-y-4 mb-8">
              <div>
                <span className="font-semibold text-gray-700">Size: </span>
                <span className="text-gray-800">{product.size}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">
                  Product Code:{" "}
                </span>
                <span className="text-gray-800 font-mono">{product.code}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">Features:</h3>
              <p className="text-gray-600">{product.features}</p>
            </div>

            <div className="flex gap-4 mb-8">
              <div
                className="flex-1 bg-gray-200 rounded p-4 text-center cursor-pointer hover:bg-gray-300 transition-colors"
                onClick={() =>
                  openMediaZoom(
                    `/api/placeholder/200/150?text=PHOTO+1`,
                    "image"
                  )
                }
              >
                <div className="text-xs text-gray-600 mb-1">
                  Photo / Video Placeholder
                </div>
                <div className="w-full h-16 bg-white rounded"></div>
              </div>
              <div
                className="flex-1 bg-gray-200 rounded p-4 text-center cursor-pointer hover:bg-gray-300 transition-colors"
                onClick={() =>
                  openMediaZoom(
                    `/api/placeholder/200/150?text=PHOTO+2`,
                    "image"
                  )
                }
              >
                <div className="text-xs text-gray-600 mb-1">
                  Photo / Video Placeholder
                </div>
                <div className="w-full h-16 bg-white rounded"></div>
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium">
                Download Spec
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Request Quote
              </button>
            </div>

            <div className="text-sm text-gray-500">Page {productIndex + 3}</div>
          </div>
        </div>
      </div>
    );
  };

  const renderProductMatrix = () => (
    <div className="h-full bg-white p-6">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/api/placeholder/40/40"
          alt="Genwin Logo"
          className="w-10 h-10"
        />
        <div>
          <h1 className="text-lg font-bold text-red-600">GENWIN</h1>
          <p className="text-gray-600 text-xs">
            Building Up to Your Expectation
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Full Product Matrix
      </h2>

      <div
        className="overflow-auto"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <table className="w-full border-collapse border border-gray-300 text-sm bg-white shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 p-3 text-left font-bold">
                Sl No
              </th>
              <th className="border border-gray-300 p-3 text-left font-bold">
                DESCRIPTION OF GOODS
              </th>
              <th className="border border-gray-300 p-3 text-left font-bold">
                SIZE
              </th>
              <th className="border border-gray-300 p-3 text-left font-bold">
                PRODUCT CODE
              </th>
              <th className="border border-gray-300 p-3 text-left font-bold">
                DIST. PRICE PER PC
              </th>
              <th className="border border-gray-300 p-3 text-left font-bold">
                MASTER PACKING
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-3 text-center font-medium">
                  {product.id}
                </td>
                <td className="border border-gray-300 p-3">{product.name}</td>
                <td className="border border-gray-300 p-3 font-mono text-xs">
                  {product.size}
                </td>
                <td className="border border-gray-300 p-3 font-mono text-xs">
                  {product.code}
                </td>
                <td className="border border-gray-300 p-3 text-center font-bold text-red-600">
                  ₹{product.price}
                </td>
                <td className="border border-gray-300 p-3 text-center">
                  {product.packing}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderContactPage = () => (
    <div className="h-full bg-gradient-to-br from-gray-50 to-white p-8 flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">GW</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600">
            We're here to help you with all your adhesive tape needs
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-red-600 mb-2">GENWIN</h3>
            <p className="text-gray-600 font-medium">
              Building Up to Your Expectation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-700 block">
                  Address:
                </span>
                <span className="text-gray-600">
                  123 Industrial Area, Sector 5<br />
                  Manufacturing Hub, IN - 560001
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 block">
                  Phone:
                </span>
                <span className="text-gray-600">+91 9000000000</span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-700 block">
                  Email:
                </span>
                <span className="text-gray-600">
                  info@genwin.com
                  <br />
                  sales@genwin.com
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 block">
                  Website:
                </span>
                <span className="text-gray-600">www.genwin.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    if (currentPage === 0) return renderCoverPage();
    if (currentPage === 1) return renderTOCPage();
    if (currentPage >= 2 && currentPage <= 11) {
      const productIndex = currentPage - 2;
      return renderProductPage(productIndex);
    }
    if (currentPage === 12) return renderProductMatrix();
    if (currentPage === 13) return renderContactPage();
    return renderCoverPage();
  };

  return (
    <div className="w-full h-screen bg-gray-800 flex flex-col">
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotateY-0 {
          transform: rotateY(0deg);
        }
        .rotateY-180 {
          transform: rotateY(180deg);
        }
        .animate-flip-page {
          animation: flipPage 0.6s ease-in-out;
        }
        @keyframes flipPage {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(-180deg);
          }
        }
        .page-shadow {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <audio ref={audioRef} preload="auto">
        <source src="/sounds/pageflip.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-white border-b flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-4">
          <img
            src="/api/placeholder/40/40"
            alt="Genwin Logo"
            className="w-10 h-10"
          />
          <div>
            <h1 className="text-lg font-bold text-red-600">GENWIN</h1>
            <p className="text-gray-600 text-xs">
              Building Up to Your Expectation
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowTOC(!showTOC)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Table of Contents
          </button>
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
          >
            Prev
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage >= totalPages - 1 || isFlipping}
            className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage + 1} / {totalPages}
          </span>
        </div>
      </div>

      <div className="flex-1 bg-gray-100 flex">
        {showTOC && (
          <div className="w-80 bg-white border-r shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Table of Contents
            </h3>
            <div className="space-y-3">
              {tableOfContents.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 px-4 border border-gray-200 cursor-pointer hover:bg-red-50 hover:border-red-200 transition-colors rounded-lg"
                  onClick={() => goToPage(item.page)}
                >
                  <span className="text-gray-700 hover:text-red-600">
                    {index + 1}. {item.title}
                  </span>
                  <span className="text-red-600 font-bold">
                    {item.pageRange}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex-1 p-4">
          <div className="relative w-full h-full bg-white shadow-2xl rounded-lg overflow-hidden perspective-1000">
            <div
              className={`transition-all duration-500 h-full transform-style-preserve-3d ${
                isFlipping
                  ? "animate-flip-page transform rotateY-180"
                  : "transform rotateY-0"
              }`}
            >
              <div className="absolute inset-0 backface-hidden">
                {renderCurrentPage()}
              </div>

              <div className="absolute inset-0 backface-hidden transform rotateY-180 bg-white">
                {currentPage < totalPages - 1 ? (
                  <div className="h-full">
                    {currentPage + 1 === 1
                      ? renderTOCPage()
                      : currentPage + 1 === 12
                      ? renderProductMatrix()
                      : currentPage + 1 === 13
                      ? renderContactPage()
                      : currentPage + 1 >= 2 && currentPage + 1 <= 11
                      ? renderProductPage(currentPage - 1)
                      : renderCoverPage()}
                  </div>
                ) : (
                  <div className="h-full bg-gray-100 flex items-center justify-center">
                    <p className="text-gray-500">End of catalog</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-12 h-16 text-xs border rounded flex flex-col items-center justify-center cursor-pointer transition-colors ${
                currentPage === index
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="font-bold text-xs mb-1">{index + 1}</div>
              <div className="text-xs truncate w-full text-center px-1">
                {index === 0
                  ? "COVER"
                  : index === 1
                  ? "TOC"
                  : index === 12
                  ? "MATRIX"
                  : index === 13
                  ? "CONTACT"
                  : `PRODUCT`}
              </div>
            </button>
          ))}
        </div>

        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-red-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
          ></div>
        </div>
      </div>

      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                onClick={zoomOut}
                className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={zoomIn}
                className="bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={downloadMedia}
                className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
              >
                <FileDown size={20} />
              </button>
              <button
                onClick={closeMediaZoom}
                className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full text-sm">
              {Math.round(zoomLevel * 100)}%
            </div>

            <div
              className="transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.url}
                  alt="Zoomed content"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              ) : (
                <video
                  src={selectedMedia.url}
                  controls
                  className="max-w-full max-h-full rounded-lg shadow-2xl"
                  autoPlay
                  muted
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenwinCatalog;
