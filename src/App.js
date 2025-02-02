import "./App.css";
// import { Card } from "./Cards";
import Text from "./Text";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  let name = "new react course";
  let l = [1, 2, 3, 4, 5, 6, 7, 8];
  let statusname = true;
  let obj = {
    id: 1,
    name: "Ali",
    email: "A@gmail.com",
    password: 123,
  };

  return (
    <div className="root main">
      <Header></Header>

      {/* <CardsSection></CardsSection> */}
      {/* <h1>{name}</h1> */}

      {/* {l.map((v, index) => (
        <div key={index}>{v}</div> // Added 'key' prop to fix a React warning
      ))}

      <p>
        {"ID " +
          obj.id +
          " Name: " +
          obj.name +
          " Email: " +
          obj.email +
          " Password: " +
          obj.password}
      </p>

      <div>{20 + 30}</div> */}
      <Text></Text>
      {/* {statusname ? (
        <h1
          style={{
            color: "plum",
            backgroundColor: "black",
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          Welcome to React first project
        </h1>
      ) : (
        <span>Not found</span>
      )} */}
      <Footer></Footer>
    </div>
  );
}

export default App;
