import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "../components/Card";
import fitlit from "../assets/FitLit.png"


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Project 1",
          subTitle: "The cookbook for developers",
          imgSrc: fitlit,
          link: "https://devgrub.com",
          selected: false,
        },
        {
          id: 1,
          title: "Project 2",
          subTitle: "YouTube channel",
          imgSrc: fitlit,
          link: "https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",
          selected: false,
        },
        {
          id: 2,
          title: "Project 3",
          subTitle: "A social network for developers",
          imgSrc: fitlit,
          link: "https://github.com/garrettlove8/evverest",
          selected: false,
        }
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
