export default function Card1({item}) {
  return (
    <div className="p-2 w-52 h-72 transform hover:scale-105">
      <div className="w-full h-full relative bg-black shadow-lg rounded-lg group flex justify-center items-center">
        <div
          className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${process.env.REACT_IMAGE}original/${item.poster_path})`,
          }}
        ></div>
      </div>
    </div>
  );
}
