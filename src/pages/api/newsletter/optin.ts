
const controlerByMethod = {
  POST(req, res) {
    res
      .status(200)
      .json({ message: "Post request!"})
  },
  GET(req, res) {
    res
      .status(200)
      .json({ message: "Get request!"})
  }
}

export default function handler(req, res) {
  const controller = controlerByMethod[req.method]
  if(!controller) {
    res
    .status(404)
    .json({message: "Nada encontrado aqui :("})
  return;
  }

  controller(req, res)
}
