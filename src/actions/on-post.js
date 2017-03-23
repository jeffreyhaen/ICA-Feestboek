export const onPostLike = (post, user) => {
    return {
        type: "ON_POST_LIKE",
        payload: {post: post, user: user},
    }
}

export const onPostAdd = (post, user) => {
    return {
        type: "ON_POST_ADD",
        payload: {post: post, user: user},
    }
}