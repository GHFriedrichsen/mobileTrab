import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
    const router = useRouter();
    const [secureText, setSecureText] = useState(true);

    function trocarEstadoSenha() {
        setSecureText(!secureText);
    }

    function logar() {
        router.replace("/(tabs)/home");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                
                <Text style={styles.appTitle}>Easy-Ticket</Text>

                <MaterialCommunityIcons 
                    name="ticket-confirmation-outline" 
                    size={80} 
                    color={"#A2FF86"}
                    style={styles.logo} 
                />

                <Text style={styles.title}>Acesse sua conta</Text>

                <Text style={styles.label}>E-mail</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="email@example.com"
                    placeholderTextColor="#666"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput 
                        style={styles.passwordInput}
                        placeholder="*********"
                        placeholderTextColor="#666"
                        secureTextEntry={secureText}

                    />
                    <TouchableOpacity 
                        onPress={trocarEstadoSenha}
                        style={styles.iconContainer}
                    >
                        <Ionicons
                            name={secureText ? "eye-off-outline" : "eye-outline"}
                            size={20}
                            color={"#A2FF86"}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={logar}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F111A"
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    appTitle: {
        fontSize: 32,
        fontWeight: "900",
        color: "#A2FF86",
        letterSpacing: 2,
        marginBottom: 10
    },
    logo: {
        marginBottom: 20,
        transform: [{ rotate: '-10deg' }]
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 40 
    },
    label: {
        alignSelf: "flex-start",
        fontSize: 12,
        fontWeight: '700',
        color: '#A2FF86',
        marginBottom: 8,
        textTransform: "uppercase"
    },
    input: {
        width: "100%",
        height: 55,
        backgroundColor: "#1A1C26",
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#FFF",
        borderWidth: 1,
        borderColor: "#333",
        marginBottom: 20
    },
    passwordContainer: {
        flexDirection: "row",
        width: "100%",
        height: 55,
        backgroundColor: "#1A1C26",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#333",
        marginBottom: 25,
        overflow: "hidden",
        color: "#FFF"
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#FFF"
    },
    iconContainer: {
        justifyContent: "center",
        paddingHorizontal: 15
    },
    button: {
        width: "100%",
        height: 55,
        backgroundColor: "#A2FF86",
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        elevation: 5,
        shadowColor: "#A2FF86",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '900',
        color: "#000",
        textTransform: "uppercase",
        letterSpacing: 1
    }
});