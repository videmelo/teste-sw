import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function Unsubscribe() {
   const [searchParams] = useSearchParams();
   const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
   const [message, setMessage] = useState('');

   useEffect(() => {
      const emailId = searchParams.get('id');
      if (!emailId) {
         setStatus('error');
         setMessage('ID do email não encontrado na URL.');
         return;
      }

      const timeout = setTimeout(() => {
         axios
            .post('http://localhost:3000/unsubscribe', { id: emailId })
            .then(() => {
               setStatus('success');
               setMessage('Você foi removido da nossa newsletter com sucesso.');
            })
            .catch(() => {
               setStatus('error');
               setMessage('Ocorreu um erro ao tentar remover seu email.');
            });
      }, 2000); // delay só para mostrar o icone de loading :)

      return () => clearTimeout(timeout);
   }, [searchParams]);

   return (
      <main className="max-w-[700px] flex flex-col items-center justify-center">
         {status === 'pending' ? (
            <img src="/icons/cog.svg" className="text-white w-72 mb-10 animate-spin" alt="" />
         ) : status === 'success' ? (
            <img src="/icons/icone.svg" className="text-white w-72 mb-10" alt="" />
         ) : (
            <img src="/icons/error.svg" className="text-white w-72 mb-10" alt="" />
         )}
         <h1 className="font-bold max-[795px]:text-center text-5xl mb-8">
            {status === 'pending' ? 'Processando...' : status === 'success' ? 'Desinscrição bem-sucedida!' : 'Erro ao desinscrever'}
         </h1>
         <p className="text-justify  max-[795px]:text-center text-2xl mb-8">
            {status === 'pending' ? 'Aguarde enquanto processamos sua solicitação.' : message}
         </p>
         <img className="w-64 h-auto" src="/icons/logo-mindtech.svg" alt="" />
      </main>
   );
}
