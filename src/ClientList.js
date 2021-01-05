import React, { useState, useEffect } from "react";

import ClientItem from './ClientItem'
import listaClientes from './listClients.json'

const ClientList = (props) => {
  const [clientes, setClients] = useState([]);
  const [isLoading, setLogind] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      const clienteToSet = listaClientes.data;
      setClients(clienteToSet);
      setLoading(false)
    }, 2000);
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

  if (isLoading) {
    return (
      <div>carregando..</div>
    )
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
