export interface PostInterface {
    id: number,
    img: string,
    title: string,
    description: string,
    author: string
}

export interface Comments {
    id: number,
    topic_id: number
    text: string
}
