export const onCommentLike = (comment, user) => {
    return {
        type: "ON_COMMENT_LIKE",
        payload: {comment: comment, user: user},
    }
}

export const onCommentAdd = (post, comment) => {
    return {
        type: "ON_COMMENT_ADD",
        payload: {post: post, comment: comment},
    }
}