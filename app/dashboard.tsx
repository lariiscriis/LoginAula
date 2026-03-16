import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet} from "react-native";
import { Link } from "expo-router";
export default function Dasboard(){

    const {email} = useLocalSearchParams()
    return(
        <View style={styles.container}>
        <Text>{email}</Text>
        <Text>Dashboard</Text>
        <Link href='/'>
            <Text>Voltar</Text>
        </Link>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',

    }
})