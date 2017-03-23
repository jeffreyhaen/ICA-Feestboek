export default function (state = null, action) {
            
   /* console.log("ON_COMMENT_ STATE:")
    console.log(state);
    console.log(action);
    console.log("-----");*/

    switch (action.type) {
        case 'ON_COMMENT_LIKE':
            // ?
            break;
        case 'ON_COMMENT_ADD':
            action.payload.comments.push(action.payload.comment);
            return action.payload.comments;
            break;
    }
    return state;
}