import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import CommentForm from "./CommentFormComponent";

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <Card>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>
            <h4>{dish.name}</h4>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
}

function RenderComments({ comments }) {
  if (comments != null) {
    const commentsList = comments.map((com) => {
      return (
        <div key={com.id}>
          <ul className="list-unstyled">
            <li>{com.comment}</li>
            <span className="author">
              -- {com.author},{" "}
              {new Intl.DateTimeFormat("fr-FR", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(com.date)))}
            </span>
          </ul>
        </div>
      );
    });
    return (
      <div className="comments">
        <h5>Comments</h5>
        {commentsList}
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/menu">Menu</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="col-12 col-md-5 mb-4">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 p-4">
            <RenderComments comments={props.comments} />
            <CommentForm />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
