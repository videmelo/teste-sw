import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Confirm() {
   const [searchParams] = useSearchParams();
   const email = searchParams.get('email');

   useEffect(() => {
      if (!email) window.location.href = '/';
   }, [email]);

   return (
      <main className="max-w-[700px] flex flex-col items-center justify-center">
         <img src="/icons/icone.svg" className="text-white w-72 mb-10" alt="" />
         <h1 className="text-justify max-[795px]:text-center max-[795px]:text-4xl font-bold text-5xl mb-8">
            Obrigado por se inscrever na nossa newsletter!
         </h1>
         <p className="text-justify max-[795px]:text-center max-[795px]:text-xl text-2xl mb-8">
            Agora você faz parte da nossa comunidade Mindtech e está a um passo de ficar atualizado com as últimas noticias, inovações e tendências em
            Internet das Coisas (IoT).
         </p>
         <img className="w-64 h-auto" src="/icons/logo-mindtech.svg" alt="" />
         <p className="text-center text-xs font-light opacity-50 mt-8">
            Um email de confirmação foi enviado para <span className="underline">{email}</span>. Por favor, verifique sua caixa de entrada e siga as instruções caso queira se desinscrever da newsletter.
         </p>
      </main>
   );
}
