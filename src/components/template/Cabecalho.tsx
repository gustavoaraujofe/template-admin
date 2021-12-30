import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";
import useAppData from "../../data/hook/useAppData";

interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
}

export default function Layout(props: CabecalhoProps) {
  const {tema, alternarTema} = useAppData()

  return (
    <div className="flex">
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className="flex flex-grow justify-end">
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
      </div>
    </div>
  );
}
