export interface PostInterface {
    id: number,
    img: string,
    title: string,
    description: string,
    author: string
}

export interface Comments {
    id: number,
    author: string
    topic_id: number
    text: string
}
