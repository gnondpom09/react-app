import * as ActionTypes from "./ActionTypes";

import { baseUrl } from "../../shared/baseUrl";

// DISHES

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          let error = new Error("error " + res.status + " : " + res.statusText);
          error.response = res;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((err) => dispatch(dishesFailed(err.message)));
};

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

// COMMENTS

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
    date: new Date().toISOString(),
  };

  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  })
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          let err = new Error("Error " + res.status + ": " + res.statusText);
          err.response = res;
          throw err;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((res) => res.json())
    .then((res) => dispatch(addComment(res)))
    .catch((error) => {
      console.log("post comments", error.message);
      alert("Your comment could not be posted\nError: " + error.message);
    });
};

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          let error = new Error("error " + res.status + " : " + res.statusText);
          error.response = res;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((err) => dispatch(commentsFailed(err.message)));
};

export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess,
});

// PROMOS

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading());

  return fetch(baseUrl + "promotions")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          let error = new Error("error " + res.status + " : " + res.statusText);
          error.response = res;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((err) => dispatch(promosFailed(err.message)));
};

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess,
});

// LEADERS

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errMessage) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errMessage,
});

export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());

  return fetch(baseUrl + "leaders")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          let err = new Error("Error " + res.status + " : " + res.statusText);
          err.response = res;
          throw err;
        }
      },
      (err) => {
        const message = err.message;
        throw message;
      }
    )
    .then((res) => res.json())
    .then((leaders) => dispatch(addLeaders(leaders)))
    .catch((err) => dispatch(leadersFailed(err.message)));
};

// FEEDBACK

export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback,
});

export const feedBackFailed = (errMessage) => ({
  type: ActionTypes.FEEDBACK_FAILED,
  payload: errMessage,
});

export const postFeedback = (firstname, lastname, telnum, email, message) => (
  dispatch
) => {
  const newFeedback = {
    firstname,
    lastname,
    telnum,
    email,
    message,
  };

  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json",
      credentials: "same-origin",
    },
  })
    .then(
      (res) => {
        if (res) {
          return res;
        } else {
          let error = new Error("Error " + res.status + " : " + res.statusText);
          throw error;
        }
      },
      (err) => {
        const message = err.message;
        throw message;
      }
    )
    .then((res) => res.json())
    .then((feedback) => dispatch(addFeedback(feedback)))
    .catch((err) => dispatch(feedBackFailed(err.message)));
};

export const fetchFeedbacks = () => (dispatch) => {
  return fetch(baseUrl + "feedback")
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          let error = new Error("error " + res.status + " : " + res.statusText);
          error.response = res;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((res) => res.json())
    .then((feedbacks) => dispatch(addFeedback(feedbacks)))
    .catch((err) => dispatch(feedBackFailed(err.message)));
};
