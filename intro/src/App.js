import Card from "./components/Card/Card";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
function App() {
  const items = [
    {
      title: "The Majesty of Mountains",
      subtitle: "Exploring the rugged beauty of the world's tallest peaks",
      image: img1,
    },
    {
      title: "Life in the Forest",
      subtitle: "Discovering the secrets of the lush, green wilderness",
      image: img2,
    },
    {
      title: "The Wonders of the Ocean",
      subtitle: "Diving deep into the mysterious depths of the sea",
      image: img3,
    },
    {
      title: "A Walk in the Park",
      subtitle: "Taking in the tranquility and beauty of nature's urban oasis",
      image: img4,
    },
  ];
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <div style={{ display: "flex" }}>
        {items.map((item) => (
          <Card data={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
