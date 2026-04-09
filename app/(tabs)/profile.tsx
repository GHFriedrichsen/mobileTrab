import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
    const router = useRouter();

    function onSairPress() {
        router.replace("/login");
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.imageBorder}>
                    <Image 
                        source={{
                            uri: "https://avatars.githubusercontent.com/u/177074311?v=4"
                        }}
                        style={styles.profileImage}
                    />
                </View>

                <Text style={styles.textName}>Gabriel Friedrichsen</Text>

                <TouchableOpacity 
                    style={styles.botaoSair}
                    onPress={onSairPress}
                >
                    <Text style={styles.textBtnSair}>SAIR DA CONTA</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F111A", 
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    card: {
        backgroundColor: "#1A1C26", 
        padding: 30,
        borderRadius: 20,
        alignItems: "center",
        width: "100%",
        maxWidth: 300,
        borderWidth: 1,
        borderColor: "#333", 
    },
    imageBorder: {
        padding: 4,
        borderRadius: 65,
        borderWidth: 2,
        borderColor: "#A2FF86", 
        marginBottom: 15
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    textName: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#A2FF86", 
        marginBottom: 10,
        textAlign: "center"
    },
    textBio: {
        fontSize: 14,
        textAlign: "center",
        color: "#A0A0A0", 
        lineHeight: 20,
        marginBottom: 10
    },
    botaoSair: {
        marginTop: 20,
        backgroundColor: "#A2FF86",
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 12,
        alignItems: "center",
        width: "100%"
    },
    textBtnSair: {
        color: "#000",
        fontWeight: "900",
        fontSize: 14,
        letterSpacing: 1
    }
});