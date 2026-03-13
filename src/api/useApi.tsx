import { Query } from "@tanstack/react-query"
import axios from "axios"

export const getUsers = async ({queryKey}) => {
    const [_key, page, limit] = queryKey;
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
            page,
            limit
        }
    })
    return response.data
}