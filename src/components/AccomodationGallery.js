import datas from "../AccomodationDatas/datas";
import Card from "./AccomodationCard";

/**
 * Génère pour chaque entrées du tableau data des cartes avec les valeurs id, title et cover de ce tableau data.
 * @returns 
 */
function Gallery() {
  return (
    <main className="cards-gallery">
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}         
          />
        );
      })}
    </main>
  );
}
export default Gallery;