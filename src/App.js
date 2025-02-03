import "./App.css";
// import { Card } from "./Cards";
import Text from "./Text";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "react-bootstrap";

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
      <Header />

      <Container fluid>Hello Welcome to the React project</Container>
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
      <div className="container">
        <Card />
        <Card />
        <Card />
      </div>
      <Uikit />

      {/* <Text /> */}
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
      <Footer />
    </div>
  );
}

export default App;

function Card() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="./pic (2).jpg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-dark">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

function Uikit() {
  return (
    <div className="uk-container">
      Uikit Animations
      <div
        class="uk-align-center uk-child-width-1-2 uk-child-width-1-4@s uk-grid-match bg"
        uk-grid
      >
        <div class="uk-animation-toggle card-bg" tabindex="0">
          <div class="uk-card uk-card-primary uk-card-body uk-animation-fade">
            <p class="uk-text-center">Fade</p>
          </div>
        </div>
        <div class="uk-animation-toggle card-bg" tabindex="0">
          <div class="uk-card uk-card-primary uk-card-body uk-animation-scale-up">
            <p class="uk-text-center">Scale Up</p>
          </div>
        </div>
        <div class="uk-animation-toggle card-bg" tabindex="0">
          <div class="uk-card uk-card-primary uk-card-body uk-animation-scale-down">
            <p class="uk-text-center">Scale Down</p>
          </div>
        </div>
      </div>
    </div>
  );
}
