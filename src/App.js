import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";

let arr = [
  "https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/19554832/pexels-photo-19554832/free-photo-of-facade-of-a-neo-gothic-university-building.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4088069/pexels-photo-4088069.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/14768533/pexels-photo-14768533.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/14846532/pexels-photo-14846532.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/9152584/pexels-photo-9152584.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/17011156/pexels-photo-17011156/free-photo-of-main-campus-building-of-oral-roberts-university-in-tulsa.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/17011156/pexels-photo-17011156/free-photo-of-main-campus-building-of-oral-roberts-university-in-tulsa.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/16981586/pexels-photo-16981586/free-photo-of-university-in-montreal.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/207729/pexels-photo-207729.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/556195/pexels-photo-556195.jpeg?auto=compress&cs=tinysrgb&w=600",
];
let filtered_Unis = [];
function App() {
  const [uni, setUni] = useState("");
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        filtered_Unis = data.filter(
          (item) => item.country === "United States" || item.country === "China"
        );
        console.log(filtered_Unis);
        setUni(filtered_Unis);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const run = () => {
    const cards = [];
    if (uni.length > 0) {
      for (let index = 0; index < Math.min(12, uni.length); index++) {
        cards.push(
          <div key={index} className="mb-5 mr-5">
            <Card
              uni_name={uni[index].name}
              uni_country={uni[index].country}
              // React throws an error if state-province is written like other properties, hence the [""]
              // uni_province={uni[index]["state-province"]}
              pic={arr[index]}
            />
          </div>
        );
      }
    }

    return cards;
  };

  return (
    <>
      <div className="flex flex-row justify-around flex-wrap mb-5">{run()}</div>
    </>
  );
}

export default App;
