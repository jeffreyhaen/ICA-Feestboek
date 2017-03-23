export const onLike = (post) => {
    console.log("onLike called!");
    console.log(post);

    return {
        type: "ON_LIkE",
        payload: post,
    }
}