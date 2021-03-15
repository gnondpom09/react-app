import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  render() {
    const dishDetail = this.props.dish;
    const comments = dishDetail.comments.map((comment) => {
      if (dishDetail.comments && dishDetail.comments.length > 0) {
        return (
          <div className="comments">
            <ul>
              <li key={comment.id}>
                {comment.comment}
                <span className="author">
                  -- {comment.author}, {comment.date}
                </span>
              </li>
            </ul>
          </div>
        );
      } else {
        return <div></div>;
      }
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg src={dishDetail.image} alt={dishDetail.name} />
              <CardBody>
                <CardTitle>
                  <h4>{dishDetail.name}</h4>
                </CardTitle>
                <CardText>{dishDetail.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 p-4">
            <h5>Comments</h5>
            {comments}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
