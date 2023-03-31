import { Component } from "react";
import SingleFilm from "./SingleFilm";
import Row from "react-bootstrap/Row";
import { Col, Spinner } from "react-bootstrap";

class MyGallery extends Component {
  state = { idError: false, isLoading: true, dataFilm: [], display: [0, 5] };

  nextPrev = () => {
    if (this.state.display[1] === 5) {
      this.setState({ display: [5, 10] });
    } else {
      this.setState({ display: [0, 5] });
    }
  };

  getSearchFilm = async (query) => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=6016a9b2&s=" + query
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          dataFilm: data.Search,
          isLoading: false,
        });
        console.log("data setted");
      } else {
        console.log("error while fetching");
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getSearchFilm(this.props.query);
  }

  render() {
    return (
      <>
        <br />
        <Row>
          <Col xs={1}></Col>
          <Col>
            <h1 className=" text-light">{this.props.query.toUpperCase()}</h1>
          </Col>{" "}
          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" role="status" variant="danger">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
        </Row>

        <Row className="mt-5 pb-2">
          <Col xs={1} className="d-flex justify-content-center">
            <span
              className="align-self-center text-muted coursor-pointer"
              onClick={this.nextPrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height={100}
                class="bi bi-chevron-compact-left align-self-center"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                />
              </svg>
            </span>
          </Col>
          {this.state.dataFilm
            .slice(this.state.display[0], this.state.display[1])
            .map((film) => (
              <Col className="slide-in-right">
                <SingleFilm film={film} />
              </Col>
            ))}
          <Col xs={1} className="d-flex justify-content-center ">
            <span
              className="align-self-center text-muted coursor-pointer"
              onClick={this.nextPrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={100}
                fill="currentColor"
                className="bi bi-chevron-compact-right align-self-center  "
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                />
              </svg>
            </span>
          </Col>
        </Row>
      </>
    );
  }
}
export default MyGallery;
