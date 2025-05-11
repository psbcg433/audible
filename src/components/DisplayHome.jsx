import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>

        <div className="flex overflow-auto">
          {albumsData.map((item, index) => {
            return (
              <AlbumItem
                key={index}
                image={item.image}
                name={item.name}
                description={item.desc}
                id={item.id}
              />
            );
          })}
        </div>

        <h1 className="my-5 font-bold text-2xl">Today's biggest Hits</h1>

        <div className="flex overflow-auto">
          {songsData.map((item, index) => {
            return (
              <SongItem key={index} image={item.image} description={item.desc} name={item.name} id={item.id}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
