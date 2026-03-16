import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import Botao from './components/botao'
import { use, useState } from 'react';

export default function App() {
  // const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  // const [idade, setIdade] = useState('')
  // const [sobre, setSobre] = useState('')
  const [dados, setDados] = useState('')

  function cadastrar(){

    if( email==='mobile2@email.com' && senha === 'mobile2'){
    const cadastro = `
      Login realizado com sucessos divx!!!!!!
    `
    
    setDados(cadastro)
  }      
  else{
    setDados('Preencha todos os campooooooooooos')
  }


    }


  
  function cancelar(){

    // setNome('')
    setEmail('')
    setSenha('')
    // setIdade('')
    // setSobre('')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastre-se</Text>



      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder='Digite seu E-mail:' keyboardType='email-adress'  value={email} onChangeText={setEmail}/>


      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input} placeholder='Digite sua senha:' secureTextEntry  value={senha} onChangeText={setSenha}/>




      <View style={styles.botoes}>
      <Botao nome='Entrar' cor='lightpink' funcao={cadastrar}></Botao>
      <Botao nome='Cancelar' cor='gray' funcao={cancelar}></Botao>

      </View>

 { dados != '' &&

    (<View style={styles.dados}>

      <Text>{dados}</Text>

      {/* <Text>Nome: {nome}</Text>
      <Text>E-mail: {email}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Mensagem: {sobre}</Text> */}


    </View>)


}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  dados:{
    backgroundColor: 'lightpink',
    padding: 15,
    marginTop: 10, 
  },

titulo:{
  marginVertical: 15,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 24,
},
label:{
  margin: 10,
  fontSize: 16,
},

input: {
  borderWidth: 1,
  borderRadius: 10,
  borderColor: 'pink',
  padding: 10,
  marginBottom: 10
},

container:{
  flex :1,
  backgroundColor: '#fff',
  padding: 15,
},

botoes:{
  flexDirection: 'row',
  justifyContent: 'center',
},

});