import axios from "axios"

export const getRecipe = async (req) =>{
    const res = await axios.get(req);
    return res;
}
