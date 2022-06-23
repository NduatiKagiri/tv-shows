const url_involvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lt6GBu2WzXrJuUpzFb4d'

const getCommentsByItem = async (id) => {
        const response = await fetch(`${url_involvement}/comments?item_id=item${id}`)
        if(response.status !== 400){
            const dataComment = await response.json();
            console.log("datacomment",dataComment);
            return dataComment;
        }else{
            return 0;
        }      
}


/* if (response.status !== 400) {    
    const results = await response.json();   
     results.map((item) => {      
        if (item.item_id != null) {        
            document.getElementById(`likes${item.item_id}`).innerHTML = `${item.likes} Likes`;  
}      return true;    });  } */

const addComment = async (id, username, comment) => {
    const response = await fetch(`${url_involvement}/comments`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: id, 
          username: username, 
          comment: comment
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
}

export {getCommentsByItem, addComment};