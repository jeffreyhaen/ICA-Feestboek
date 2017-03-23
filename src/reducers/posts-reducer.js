export default function (state = null, action) {
            
    console.log("ON_POST_ STATE:")
    console.log(state);
    console.log(action);
    console.log("-----");

    switch (action.type) {
        case 'ON_POST_LIKE':
            action.payload.post.likes.push(action.payload.user.name);
            return action.payload.post;
            break;
        case 'ON_POST_ADD':
            //?
            break;
    }
    return state;
}