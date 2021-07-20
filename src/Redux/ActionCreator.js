const ADD_ARTICLE = "ADD_ARTICLE";

const AddArticle = (payload) => {
  return {
    type: ADD_ARTICLE,
    payload
  };
};

export default AddArticle;
