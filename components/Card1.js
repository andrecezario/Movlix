export default function Card1({ item, width = 13, height = 18, resolution = 'rem' }) {
  return (
    <div style={{ width: width + resolution, height: height + resolution }}>
      <div className="w-full h-full relative bg-black shadow-lg rounded-lg group flex justify-center items-center">
        <div
          className="rounded-lg h-full w-full absolute z-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(${process.env.REACT_IMAGE}original/${item.poster_path})`
          }}></div>
      </div>
    </div>
  );
}
