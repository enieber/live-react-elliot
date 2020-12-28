import React from 'react'

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

export default ClientItem