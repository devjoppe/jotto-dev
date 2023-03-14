// API connection

export const apiFetch = async (slug:string, type:boolean) => {
    const response = await fetch(process.env.API_URL+slug)
    const data = await response.json()
    return (type) ? data.data : data.data.attributes
}