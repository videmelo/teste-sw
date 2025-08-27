import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import axios from '../services/api';

export function useSubscribe() {
   const formRef = useRef<HTMLFormElement>(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   function isValidEmail(email: string): boolean {
      if (!email || typeof email !== 'string') return false;
      if (email.includes(' ')) return false;
      if (!email.includes('@') || !email.includes('.')) return false;
      if (/^[@.]/.test(email) || /[@.]$/.test(email)) return false;
      const basicRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      return basicRegex.test(email);
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      let email = formRef.current?.elements.namedItem('email') as HTMLInputElement;
      if (!email || !email.value) {
         setError('O campo de e-mail é obrigatório.');
         setLoading(false);
         return;
      }
      if (!isValidEmail(email.value)) {
         setError('Digite um e-mail válido.');
         setLoading(false);
         return;
      }
      try {
         const response = await axios.post('/subscribe', {
            email: email.value,
         });
         await emailjs.send(
            'service_jwilmnm',
            'template_b24kqa8',
            {
               email: email.value,
               unsubscribe: `${window.location.origin}/unsubscribe?id=${response.data.id}`,
            },
            'z8EmYIq6I0lT-LKsZ'
         );
         window.location.href = `/confirm?email=${email.value}`;
      } catch (error: any) {
         setError(error.response?.data?.message || 'Erro ao tentar inscrever-se.');
      } finally {
         setLoading(false);
      }
   };

   return { formRef, loading, error, handleSubmit };
}
