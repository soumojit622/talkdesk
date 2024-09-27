export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="gif mb-6 rounded-lg overflow-hidden h-40 sm:h-52 md:h-64 lg:h-72">
          <img
            src="https://i.postimg.cc/2yrFyxKv/giphy.gif"
            alt="Not Found GIF"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="content text-center bg-white bg-opacity-90 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-violet-600 mb-4 leading-tight">
            Oops! 404 - Page Not Found
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
            It seems that the page you are searching for has either been moved or does not exist.
          </p>
          <a href="/" rel="noopener noreferrer">
            <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-violet-600 text-white text-base sm:text-lg transition duration-200 hover:bg-violet-700 transform hover:scale-105">
              Return to Home <i className="far fa-hand-point-right"></i>
            </button>
          </a>
        </div>
      </div>
    );
  }
  