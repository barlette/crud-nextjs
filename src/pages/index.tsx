import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import { useState } from "react";
export default function Home() {
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());

  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 23, "3"),
    new Cliente("Pedro", 54, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("formulario");
  }
  function clienteExcluido(cliente: Cliente) {}
  function salvarCliente(cliente: Cliente) {
    setVisivel("tabela");
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("formulario");
  }

  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white 
  `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green" onClick={() => novoCliente()}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          ></Formulario>
        )}
      </Layout>
    </div>
  );
}
