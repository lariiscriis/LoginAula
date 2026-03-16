import { Stack } from "expo-router";
import { View, Text, StyleSheet} from "react-native";

export default function Layout(){
    return(
        <View style={styles.container}>


        <Stack screenOptions={{headerTintColor: 'white', headerStyle:{backgroundColor: 'pink'}}}>

            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="dashboard" options={{title: 'Área Restrita'}}/>
        </Stack>
            <View style={styles.cabecalho}>
                <Text>
                    todos os direitos reservados
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',

    },

    cabecalho:{
        padding: 20,
        backgroundColor: 'pink',
    }
})