import { useSubscribe } from '../hooks/useSubscribe';

interface SubscribeFormProps {
   formRef: React.RefObject<HTMLFormElement | null>;
   loading: boolean;
   error: string;
   handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SubscribeForm: React.FC<SubscribeFormProps> = ({ formRef, loading, error, handleSubmit }) => (
   <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-1">
      <div className="relative flex flex-col gap-1">
         <label htmlFor="email">E-mail</label>
         <input
            id="email"
            type="text"
            name="email"
            placeholder="email@email.com"
            className={`border bg-white text-black p-4 rounded-xl outline-normal-blue ${error ? 'border-red-600 outline-red-600 input-error' : ''}`}
         />
         {error && <p className="text-red-600 text-sm absolute -bottom-6 left-1">&#9432; {error}</p>}
      </div>
      <button
         type="submit"
         className="bg-normal-blue text-white p-4 rounded-xl mt-7 hover:scale-101 transition-transform duration-300 cursor-pointer"
         disabled={loading}
      >
         {loading ? <span className="flex items-center gap-2 justify-center"><img className='w-6 h-6' src="/icons/loading.svg" alt="" /></span> : 'Inscrever-se'}
      </button>
   </form>
);

const FeaturesList: React.FC = () => {
   const features = [
      {
         title: 'Guia e Tutoriais:',
         description: 'Aprenda como implementar e otimizar soluções de IoT para sua empresa.',
      },
      {
         title: 'Noticias e Tendências:',
         description: 'Fique por dentro das ultimas novidade e avanços no mundo do IoT.',
      },
      {
         title: 'Ofertas e Promoções:',
         description: 'Receba ofertas especiais e promoções exclusivas para assinantes da nossa newsletter.',
      },
   ];

   return (
      <ul className="mb-6 space-y-2">
         {features.map((feature, idx) => (
            <li key={idx} className="flex gap-3 items-center">
               <svg width="121" height="121" viewBox="0 0 121 121" xmlns="http://www.w3.org/2000/svg" className="fill-normal-blue shrink-0 w-8 h-8">
                  <path d="M60.5 11.3438C50.7778 11.3438 41.274 14.2267 33.1903 19.6281C25.1066 25.0294 18.8061 32.7066 15.0856 41.6887C11.365 50.6708 10.3916 60.5545 12.2883 70.0899C14.185 79.6253 18.8667 88.3841 25.7413 95.2587C32.6159 102.133 41.3747 106.815 50.9101 108.712C60.4455 110.608 70.3292 109.635 79.3113 105.914C88.2934 102.194 95.9706 95.8934 101.372 87.8097C106.773 79.726 109.656 70.2222 109.656 60.5C109.643 47.4672 104.459 34.9721 95.2435 25.7565C86.0279 16.5409 73.5328 11.3575 60.5 11.3438ZM82.0815 51.8315L55.6128 78.3002C55.2616 78.6518 54.8446 78.9307 54.3855 79.121C53.9265 79.3113 53.4344 79.4092 52.9375 79.4092C52.4406 79.4092 51.9486 79.3113 51.4895 79.121C51.0305 78.9307 50.6135 78.6518 50.2623 78.3002L38.9185 66.9565C38.209 66.247 37.8104 65.2847 37.8104 64.2812C37.8104 63.2778 38.209 62.3155 38.9185 61.606C39.6281 60.8965 40.5904 60.4979 41.5938 60.4979C42.5972 60.4979 43.5595 60.8965 44.269 61.606L52.9375 70.2793L76.731 46.481C77.0824 46.1297 77.4994 45.851 77.9584 45.6609C78.4175 45.4708 78.9094 45.3729 79.4063 45.3729C79.9031 45.3729 80.3951 45.4708 80.8541 45.6609C81.3131 45.851 81.7302 46.1297 82.0815 46.481C82.4328 46.8323 82.7115 47.2494 82.9016 47.7084C83.0918 48.1674 83.1896 48.6594 83.1896 49.1562C83.1896 49.6531 83.0918 50.1451 82.9016 50.6041C82.7115 51.0631 82.4328 51.4802 82.0815 51.8315Z" />
               </svg>
               <p className="text-justify">
                  <span className="font-bold">{feature.title}</span> {feature.description}
               </p>
            </li>
         ))}
      </ul>
   );
};

export default function Home() {
   const { formRef, loading, error, handleSubmit } = useSubscribe();

   return (
      <main className="flex items-center justify-between gap-[50px] max-w-[1055px]">
         <section className="flex flex-col text-base max-w-[455px]">
            <h1 className="font-bold text-4xl mb-6">Inscreva-se agora!</h1>
            <p className="mb-6 text-justify">
               Preencha o formulário abaixo para se inscrever e começar a receber nossas atualizações diretamente em sua caixa de entrada.
            </p>
            <FeaturesList />
            <section className="relative hover:scale-101 transition-transform duration-300 items-center justify-center mb-6 cursor-pointer min-[1135px]:hidden">
               <img src="/hero.png" alt="Ilustração Iot" width={550} height={635} className="object-contain z-0" />
            </section>
            <SubscribeForm formRef={formRef} loading={loading} error={error} handleSubmit={handleSubmit} />
         </section>
         <section className="max-[1135px]:hidden relative hover:scale-101 transition-transform duration-300 cursor-pointer">
            <img src="/hero.png" alt="Ilustração Iot" width={550} height={635} className="object-contain z-0" />
         </section>
      </main>
   );
}
