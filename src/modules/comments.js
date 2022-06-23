const url_involvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lt6GBu2WzXrJuUpzFb4d'

const getCommentsByItem = async (id) => {
  const response = await fetch(`${url_involvement}/comments?item_id=item${id}`)
  const dataComment = await response.json();
  console.log("datacomment",dataComment);
  return dataComment;
}

export {getCommentsByItem};