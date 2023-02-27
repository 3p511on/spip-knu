const { CMS_API_URL, CMS_API_TOKEN } = process.env

const authHeader = { Authorization: `Bearer ${CMS_API_TOKEN}` }
const defaultOpts = { headers: { ...authHeader } }

export const getNews = async () => {
  try {
    const res = await fetch(`${CMS_API_URL}/news`, defaultOpts)
    const json = await res.json()
    return json
  } catch (err) {
    console.error(err)
    return null
  }
}

export const findPostByAlias = async (alias) => {
  try {
    const res = await fetch(`${CMS_API_URL}/news?filters[alias][$eq]=${alias}`, defaultOpts)
    const json = await res.json()
    const post = json.data[0]
    return post?.attributes
  } catch (err) {
    console.error(err)
    return null
  }
}
