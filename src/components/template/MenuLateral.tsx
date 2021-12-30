import { IconeInicio, IconeAjustes, IconeSino, IconeSair } from "../icons";
import MenuItem from "./MenuItem";
import Logo from "./Logo";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 h-20 w-20">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeInicio} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem texto="Sair" onClick={() => console.log("sair")} icone={IconeSair} className="text-red-600 hover:bg-red-400 hover:text-white"/>
      </ul>
    </aside>
  );
}
