import "./App.css";
// import { Card } from "./Cards";
import Text from "./Text";
import Footer from "./Footer";
import Header from "./Header";
// import { Container } from "react-bootstrap";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { blog } from "./Data/blog";

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
  let headerInfo = {
    name: "React",
    lastname: "web",
  };
  return (
    <div className="root main">
      <Header headerInfo={headerInfo} cname="Hello">
        <h1>Hello welcome to header section </h1>
      </Header>

      <Container
        fluid
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "20px 10px",
        }}
      >
        {/* <Row>
          <Col className="col-12 bg-danger text-center py-4">
            <h1>Hello</h1>
          </Col>
        </Row> */}
        <Row>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }} className="cardItem">
              <Card.Img variant="top" src="./img5.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }} className="cardItem">
              <Card.Img variant="top" src="./img5.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }} className="cardItem">
              <Card.Img variant="top" src="./img5.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }} className="cardItem">
              <Card.Img variant="top" src="./img5.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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
        <CardPart />
        <CardPart />
        <CardPart />
      </div>
      <Uikit />

      <Container>
        <Row>
          {blog.map((v, i) => {
            return <ProductItems key={i} pitem={v} />;
          })}
        </Row>
      </Container>
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

function ProductItems({ pitem }) {
  // console.log(pitem.title);

  return (
    <Col>
      <Card style={{ width: "18rem", marginTop: "10px" }}>
        <Card.Body>
          <Card.Title>{pitem.title}</Card.Title>
          <Card.Text>{pitem.body}</Card.Text>
          <Button className="btn btn-primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

function CardPart() {
  return (
    <div style={{ width: "18rem" }} className="cardItem">
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
        className="uk-align-center uk-child-width-1-2 uk-child-width-1-4@s uk-grid-match bg"
        uk-grid
      >
        <div className="uk-animation-toggle card-bg">
          <div className="uk-card uk-card-primary uk-card-body uk-animation-fade">
            <p className="uk-text-center">Fade</p>
          </div>
        </div>
        <div className="uk-animation-toggle card-bg">
          <div className="uk-card uk-card-primary uk-card-body uk-animation-scale-up">
            <p className="uk-text-center">Scale Up</p>
          </div>
        </div>
        <div className="uk-animation-toggle card-bg">
          <div className="uk-card uk-card-primary uk-card-body uk-animation-scale-down">
            <p className="uk-text-center">Scale Down</p>
          </div>
        </div>
      </div>
    </div>
  );
}
