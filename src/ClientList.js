import React, { useState, useEffect } from "react";

const listaClientes = [
  {
    id: 1,
    name: "Hagen Waterhous",
    whatsapp: "01-719-2857",
    email: "hwaterhous0@fastcompany.com",
    ticket: 76251,
    has_admin: false,
  },
  {
    id: 2,
    name: "Dennis Remnant",
    whatsapp: "79-689-4777",
    email: "dremnant1@cyberchimps.com",
    ticket: 19913,
    has_admin: false,
  },
  {
    id: 3,
    name: "Dana Humberston",
    whatsapp: "89-793-4985",
    email: "dhumberston2@cloudflare.com",
    ticket: 80316,
    has_admin: true,
  },
  {
    id: 4,
    name: "Emmeline Fieller",
    whatsapp: "84-786-9852",
    email: "efieller3@joomla.org",
    ticket: 81359,
    has_admin: true,
  },
  {
    id: 5,
    name: "Valentina Lattimer",
    whatsapp: "89-879-8237",
    email: "vlattimer4@dropbox.com",
    ticket: 43663,
    has_admin: true,
  },
  {
    id: 6,
    name: "Douglas Clewley",
    whatsapp: "73-458-7878",
    email: "dclewley5@oracle.com",
    ticket: 56090,
    has_admin: false,
  },
  {
    id: 7,
    name: "Joell Fitzroy",
    whatsapp: "80-666-4744",
    email: "jfitzroy6@oaic.gov.au",
    ticket: 38920,
    has_admin: true,
  },
  {
    id: 8,
    name: "Irita Skellion",
    whatsapp: "10-810-2783",
    email: "iskellion7@webs.com",
    ticket: 63148,
    has_admin: false,
  },
  {
    id: 9,
    name: "Court Mattersley",
    whatsapp: "89-042-6786",
    email: "cmattersley8@opensource.org",
    ticket: 22443,
    has_admin: false,
  },
  {
    id: 10,
    name: "Jesselyn Farress",
    whatsapp: "82-447-8278",
    email: "jfarress9@t-online.de",
    ticket: 3256,
    has_admin: false,
  },
  {
    id: 11,
    name: "Amaleta Osbidston",
    whatsapp: "36-327-3815",
    email: "aosbidstona@fastcompany.com",
    ticket: 13078,
    has_admin: true,
  },
  {
    id: 12,
    name: "Lennie Cops",
    whatsapp: "60-185-4398",
    email: "lcopsb@fda.gov",
    ticket: 90028,
    has_admin: true,
  },
  {
    id: 13,
    name: "Isiahi McGillicuddy",
    whatsapp: "23-915-6438",
    email: "imcgillicuddyc@pagesperso-orange.fr",
    ticket: 55721,
    has_admin: false,
  },
  {
    id: 14,
    name: "Willetta Grishagin",
    whatsapp: "79-951-8927",
    email: "wgrishagind@twitter.com",
    ticket: 95559,
    has_admin: false,
  },
  {
    id: 15,
    name: "Jelene Weddeburn - Scrimgeour",
    whatsapp: "00-457-1978",
    email: "jweddeburne@opensource.org",
    ticket: 74749,
    has_admin: true,
  },
  {
    id: 16,
    name: "Spike McTrustey",
    whatsapp: "77-544-6117",
    email: "smctrusteyf@zimbio.com",
    ticket: 68636,
    has_admin: true,
  },
  {
    id: 17,
    name: "Stafford Tarbert",
    whatsapp: "89-054-3082",
    email: "starbertg@goodreads.com",
    ticket: 80698,
    has_admin: true,
  },
  {
    id: 18,
    name: "Oralee Scowcraft",
    whatsapp: "18-583-2125",
    email: "oscowcrafth@time.com",
    ticket: 34990,
    has_admin: true,
  },
  {
    id: 19,
    name: "Brit Deeson",
    whatsapp: "54-112-0393",
    email: "bdeesoni@nydailynews.com",
    ticket: 50799,
    has_admin: false,
  },
  {
    id: 20,
    name: "Roxane Gouldthorpe",
    whatsapp: "09-232-2220",
    email: "rgouldthorpej@behance.net",
    ticket: 6723,
    has_admin: true,
  },
];
const ClientItem = (props) => {
  const { name, whatsapp, resposta, email } = props;
  const onPress = props.onPress;
  return (
    <div>
      <h3>{name}</h3>
      <p>Tem Administrador? Resposta: {resposta}</p>
      <a href={`whatsapp://send?abid=${whatsapp}&text=Bem_Vindo!`}>
        Contato por Whats
      </a>
      <br />
      <a href={`mailto:${email}`}>Contato por email</a>
      <br />
      <button onClick={onPress}>Adiministrador</button>
    </div>
  );
};

const ClientList = (props) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const clienteToSet = listaClientes;
    setClients(clienteToSet);
  }, []);

  return (
    <div>
      <h2>lista de clientes</h2>
      {this.state.clientes.map((item) => (
        <ClientItem
          {...item}
          resposta={item.has_admin ? "Sim" : "Não"}
          onPress={() => {
            const has_admin = !item.has_admin;
            const newItem = {
              ...item,
              has_admin,
            };
            const listaClientesAntiga = this.state.clientes.filter(
              (cliente) => cliente.name != item.name
            );

            const clientes = [...listaClientesAntiga, newItem];

            this.setState({ clientes });
          }}
        />
      ))}
    </div>
  );
};

export default ClientList;
