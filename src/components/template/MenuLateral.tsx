import { IconeInicio, IconeAjustes, IconeSino, IconeSair } from "../icons";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
import useAuth from "../../data/hook/useAuth";

export default function MenuLateral() {
  const { logout } = useAuth();

  return (
    <aside className="flex flex-col bg-gray-200 text-gray-700 text-gray dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 h-20 w-20">
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={IconeInicio} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul>
        <MenuItem
          texto="Sair"
          onClick={logout}
          icone={IconeSair}
          className="text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white"
        />
      </ul>
    </aside>
  );
}
