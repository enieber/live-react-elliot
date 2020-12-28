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
    
    setClients(clientes.map((cliente) => {
        if (item === cliente) {
          return {
            ...item,
            has_admin
          }
        }
        return cliente
      }
    ));
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
