import { Link } from "react-router-dom";

const DivisionLayout = ({ title, description, image, careers, tools }) => {
  const duplicatedTools = [...tools, ...tools]; // Duplikasi untuk scroll tak terputus

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 space-y-20 bg-white">
      {/* Tombol Kembali */}
      <div>
        <Link
          to="/division"
          className="inline-block mb-4 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-transparent hover:text-red-600 hover:border-2 hover:border-red-600 hover:font-bold transition"
        >
          ← Kembali ke Divisi
        </Link>
      </div>

      {/* Hero Section */}
      <div className="py-7 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-tight bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">{title}</h1>
          <p className="text-gray-700 text-lg">{description}</p>
        </div>
        <div className="flex justify-center">
          <img src={image} alt={title} className="w-60 h-60 md:w-96 md:h-96 object-contain" />
        </div>
      </div>

      {/* Prospek Karier */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Prospek Karier</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside md:text-xl">
          {careers.map((career, i) => (
            <li key={i}>{career}</li>
          ))}
        </ul>
      </div>

      {/* Tools Section (Infinite Seamless Scroll) */}
        <div className="mb-15 mt-15 ">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">Tools Yang Digunakan</h2>

            <div className="relative overflow-hidden pt-10">
                <div className="animate-infinite-scroll flex whitespace-nowrap items-center gap-12 ">
                {Array.from({ length: 10 }).flatMap((_, j) =>
                    tools.map((tool, i) => (
                    <img
                        key={`${j}-${i}`}
                        src={tool}
                        alt={`Tool ${i}`}
                        className="h-12 w-auto object-contain md:h-20"
                    />
                    ))
                )}
                </div>
            </div>
        </div>
    </section>
  );
};

export default DivisionLayout;
