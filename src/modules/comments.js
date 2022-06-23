const urlInvolvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lt6GBu2WzXrJuUpzFb4d';

const getCommentsByItem = async (id) => {
  const response = await fetch(`${urlInvolvement}/comments?item_id=item${id}`);
  if (response.status !== 400) {
    const dataComment = await response.json();
    return dataComment;
  }
  return 0;
};

const addComment = async (id, username, comment) => {
  await fetch(`${urlInvolvement}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { getCommentsByItem, addComment };