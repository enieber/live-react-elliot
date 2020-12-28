import React, { useState, useEffect } from "react";

import ClientItem from './ClientItem'
import listaClientes from './listClients.json'

const ClientList = (props) => {
  const [clientes, setClients] = useState([]);

  useEffect(() => {
    const clienteToSet = listaClientes.data;
    setClients(clienteToSet);
  }, []);

  const filter = (item) => {
    const has_admin = !item.has_admin;
    const newItem = {
      ...item,
      has_admin,
    };
    // eslint-disable-next-line no-use-before-define
    const listaClientesAntiga = clientes.filter(
      (cliente) => cliente.name !== item.name
    );

    const clientes = [...listaClientesAntiga, newItem];
    setClients(clientes);
  }

  return (
    <div>
      <h2>lista de clientes</h2>
      {clientes.map((item) => (
        <ClientItem
          {...item}
          resposta={item.has_admin ? "Sim" : "Não"}
          onPress={() => filter(item)}
        />
      ))}
    </div>
  );
};

export default ClientList;
