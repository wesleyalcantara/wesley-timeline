import validator from 'validator';
import { createClient } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from 'next';
import sendGridMail from '@sendgrid/mail'

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  // Lidar com o erro de configuração ausente
  throw new Error('Supabase URL or Key not defined');
}

const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY)

interface ControllerByMethodProps {
  [key: string]: (req: NextApiRequest, res: NextApiResponse) => void;
}

const controlerByMethod: ControllerByMethodProps = {
  async POST(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body.emailNewsletter);
    const email = req.body.emailNewsletter

    if (!Boolean(email) || !validator.isEmail(email)) {
      res
        .status(400)
        .json({ message: "Você precisa enviar um email valido ex: teste@teste.com"});
      return;
    } 

    // Adiciona a pessoa na newsletter
    await dbClient.from("newsletter_users").insert({email: email, optin: true})

    // Cria usuários de fato do sistema
    await dbClient.auth.admin.createUser({email: email})

    try {
      const sendgridApiKey = process.env.SENDGRID_KEY ?? '';
    
      if (!sendgridApiKey) {
        throw new Error('Chave SendGrid não definida');
      }
    
      sendGridMail.setApiKey(sendgridApiKey);
    
      await sendGridMail.send({
        to: "wesleybaadm@gmail.com",
        from: "wesleydevadm@gmail.com",
        subject: "Titulo do Email!",
        html: "Aqui vai o <strong>Conteúdo!<strong></strong>"
      });
      res
      .status(200)
      .json({ message: "Post request!"})
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }

  },
  async GET(req: NextApiRequest, res: NextApiResponse) {
    const {data, error} = await dbClient
      .from("newsletter_users")
      .select("*")
    
    console.log(data)
    console.log(error)

    res
      .status(200)
      .json({ message: "Get request!", total: data?.length})
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
