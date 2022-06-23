const commentsCounter = (comments) => {
    let count = 0;
    if (comments != 0) {
        comments.forEach(() => {
        count += 1;
      });
    }
    return count;
  };

  export default commentsCounter;