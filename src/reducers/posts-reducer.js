const initialPostState = {
    posts: [
        {
            id: 0,
            author: "Jeffrey",
            title: "Titel (1)",
            description: "Dit is een test bericht (1).",
            likes: ["Jevgeni"] /* userId */,
            comments: [
                {
                    user: "Jevgeni",
                    message: "Goed verhaal",
                    datetime: "3-19-2017 17:00"
                }
            ]
        },
        {
            id: 1,
            author: "Jevgeni",
            title: "Titel (2)",
            description: "Dit is een test bericht (2).",
            likes: ["Jevgeni", "Jeffrey"] /* userId */,
            comments: [
                {
                    user: "Jevgeni",
                    message: "Goed ferhaal",
                    datetime: "3-19-2017 17:00"
                },
                {
                    user: "Jevgeni",
                    message: "verhaal*",
                    datetime: "3-19-2017 17:01"
                },
                {
                    user: "Jeffrey",
                    message: "Ik vind dit leuk",
                    datetime: "3-19-2017 17:05"
                }
            ]
        },
    ],
};

import update from 'immutability-helper';

export default function (state = initialPostState, action) {
            
    console.log("ON_POST_ STATE:")
    console.log(state);
    console.log(action);
    console.log("-----");

    switch (action.type) {
        case 'ON_POST_LIKE':
            // action.payload.post.likes.push(action.payload.user.name);
            // return action.payload.post;

            // let newState = Object.assign({}, state);
            // newState.posts[action.payload.postIndex].likes.push(action.payload.user.name);
            // return newState;

            // let newState = Map(state);
            // console.log(newState);
            // newState.set(posts[action.payload.postIndex].likes.push(action.payload.user.name));
            // return newState;

            // var likesCopy = state.posts[action.payload.postIndex].likes.slice();
            // likesCopy.push(action.payload.user.name);

            // return $setArray(state.posts[action.payload.postIndex], {
            //     likes: $set(state.posts[action.payload.postIndex].likes, likesCopy),
            // });

            // state.posts[action.payload.postIndex].likes.push(action.payload.user.name);
            // return state;

            return update(state, 
            {
                posts: 
                {[action.payload.postIndex]: {likes: {$push: [action.payload.user.name]}}}
            });

            break;
        case 'ON_POST_ADD':
            //?
            break;
    }
    
    return state;
}