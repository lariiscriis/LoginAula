import { TouchableOpacity, Text, StyleSheet } from "react-native";


export default function Botao({nome, cor, funcao}){
    return(
        <TouchableOpacity 
        style={[styles.btn, {backgroundColor: cor,}]}
        onPress={funcao}
        
        >
            <Text style={styles.txt}>{nome}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 15,
        borderRadius: 10,
        margin: 10,
        width: '48%',
        marginHorizontal: 5, 
    },

    txt:{
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})