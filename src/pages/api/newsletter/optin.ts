import { NextApiRequest, NextApiResponse } from 'next';

interface ControllerByMethodProps {
  [key: string]: (req: NextApiRequest, res: NextApiResponse) => void;
}

const controlerByMethod: ControllerByMethodProps = {
  POST(req: NextApiRequest, res: NextApiResponse) {
    res
      .status(200)
      .json({ message: "Post request!"})
  },
  GET(req: NextApiRequest, res: NextApiResponse) {
    res
      .status(200)
      .json({ message: "Get request!"})
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = (req.method || "").toUpperCase();
  const controller = controlerByMethod[method];

  if (!controller) {
    res
      .status(404)
      .json({ message: "Nada encontrado aqui :(" });
    return;
  }

  controller(req, res);
}
