export default function() {
    return [
        {
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
    ]
}