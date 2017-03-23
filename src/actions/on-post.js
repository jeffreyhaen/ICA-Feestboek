export const onPostLike = (postIndex, user) => {
    return {
        type: "ON_POST_LIKE",
        payload: {postIndex: postIndex, user: user},
    }
}

export const onPostAdd = (post, user) => {
    return {
        type: "ON_POST_ADD",
        payload: {post: post, user: user},
    }
}