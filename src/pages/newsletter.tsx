import React from "react";
import Link from "@/src/components/Link/Link";
import Box from "../components/Box/Box";
import Image from "../components/Image/Image";
import Text from "../components/Text/Text";
import TextClass from '@/src/components/theme/defaults/TextClass';
import Button from "../components/Button/Button";
import Footer from "../components/screens/HomeScreen/patterns/Footer/Footer";
import validator from 'validator';

function useForm ( {initialValues }) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleChange(evento) {
      const { name, value } = evento.target;
      setValues({
        ...values,
        [name]: value,
      })
    }
  };
}

export default function AbautScreen() {
  const form = useForm({
    initialValues: {
      emailNewsletter: ""
    }
  });

  return (
    <Box className="flex flex-col items-center justify-center h-screen w-screen">

    <form onSubmit={(evento) => {
      evento.preventDefault();
      console.log('Enviando os dados do formulario!')

      // Validar o e-mail utilizando o validator
      if (validator.isEmail(form.values.emailNewsletter)) {
        console.log("E-mail válido, enviando para o servidor");
      } else {
        console.log("E-mail inválido");
        return
      } 
      (alert("Você foi cadastrado com sucesso, cheque seu email para garantir."))

      // Enviar para o servidor o email da pessoa com fetch
      fetch("/api/newsletter/optin", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
      },
        body: JSON.stringify(form.values),
      }) 
      .then(async(respostaDoServer) => {
        console.log(await respostaDoServer.json());
      })
    }} 
    >
        <Box className="flex flex-col items-center mt-9 w-full max-w-[700px] p-[16px]">
        <Link href="/">
          <Image
            className="mt-[16px] mb-[16px] rounded-full w-[130px] h-[130px]"
            src="https://github.com/wesleyalcantara.png"
            alt="Img de Perfil"
          />
        </Link>
        <Text variant={TextClass.heading2}>
          Cadastre seu email e fique por dentro das ultimas notícias do universo tec.
        </Text>
          <NewsletterTextField
            className="mt-[5px]"
            name="emailNewsletter"
            placeholder="Informe seu email"
            value={form.values.emailNewsletter}
            onChange={form.handleChange}
          />
          <Button className="mt-[16px] border-0 outline-0 no-underline flex justify-center items-center my-2 rounded-md p-2 w-40 md:p-3 bg-primary-500 hover:bg-primary-300 text-white hover:shadow-md transition-all duration-300 ease-in-out">
            Cadastrar
          </Button>
        </Box>
      </form>
      <Footer/>        
    </Box>
  );
}

interface NewsletterTextFieldProps {
  placeholder?: string;
  children?: React.ReactNode;
  className?: string;
  value?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function NewsletterTextField ({children, placeholder, ...props}: NewsletterTextFieldProps) {
  const BaseNewsletterTextField = 'input'

  return(
    <Box 
      className="flex items-center justify-center w-full"
    >
      <BaseNewsletterTextField 
      {...props}
      placeholder={placeholder} 
      className="max-w-[300px] border-neutral-100 rounded-[4px] border-[1px] border-[] p-[8px] w-full mt-[5px]" 
      >
       {children}
      </BaseNewsletterTextField>
    </Box>
  )
}
