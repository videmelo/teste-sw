export default function Confirm() {
   return (
      <main className="max-w-[700px] flex flex-col items-center justify-center p-10">
         <img src="/icons/icone.svg" className="text-white w-72 mb-10" alt="" />
         <h1 className="text-justify max-[795px]:text-center max-[795px]:text-4xl font-bold text-5xl mb-8">
            Obrigado por se inscrever na nossa newsletter!
         </h1>
         <p className="text-justify max-[795px]:text-center max-[795px]:text-xl text-2xl mb-8">
            Agora você faz parte da nossa comunidade Mindtech e está a um passo de ficar atualizado com as últimas noticias, inovações e tendências em
            Internet das Coisas (IoT).
         </p>
         <img className="w-64 h-auto" src="/icons/logo-mindtech.svg" alt="" />
      </main>
   );
}
