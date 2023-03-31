import { Component } from "react";
import Card from "react-bootstrap/Card";
class SingleFilm extends Component {
  mouseIn = () => {
    let target = document.getElementById(this.props.film.imdbID);

    target.classList.remove("trick");
    target.classList.remove("scale-out-ver-bottom");
    target.classList.add("scale-in-ver-bottom");
  };
  mouseOut = () => {
    let target = document.getElementById(this.props.film.imdbID);

    target.classList.remove("scale-in-ver-bottom");
    target.classList.add("scale-out-ver-bottom");
  };
  state = {};
  render() {
    return (
      <>
        <Card className="h-100 justify-content-between">
          {/* <Card.Header>{this.props.film.Title}</Card.Header> */}
          <Card.Img
            variant="top"
            width={300}
            src={this.props.film.Poster}
            className="h-100 rounded"
          />

          <Card.ImgOverlay
            onMouseEnter={this.mouseIn}
            onMouseLeave={this.mouseOut}
            className="p-1 "
          >
            <div
              id={this.props.film.imdbID}
              className="bg-dark text-light trick rounded text-wrap"
            >
              <Card.Body className="pb-0 ">
                <Card.Title className="fw-bold">
                  {this.props.film.Title}
                </Card.Title>
                <Card.Text>Year: {this.props.film.Year}</Card.Text>
              </Card.Body>

              <Card.Footer className=" ">
                <small className="text-muted">
                  imdbID: {this.props.film.imdbID}
                </small>
              </Card.Footer>
            </div>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  }
}
export default SingleFilm;
