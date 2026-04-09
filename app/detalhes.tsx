import { useRouter, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useEventos } from "../context/eventContext";

export default function DetalhesScrenn() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const { eventos, adicionarAoCarrinho, carrinho } = useEventos();

    const evento = eventos.find((item) => item.id === String(id));

    const estaNoCarrinho = carrinho.some(item => item.id === evento?.id);

    function handleGarantirIngresso() {
        if (evento && !estaNoCarrinho) {
            adicionarAoCarrinho(evento); 
        }
    }

    function onVoltarPress() {
        router.back(); 
    }

    if (!evento) return null;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.botaoVoltar}
                    onPress={onVoltarPress}
                >
                    <Feather name="chevron-left" size={24} color="#A2FF86" />
                </TouchableOpacity>

                <Text style={styles.tituloHeader} numberOfLines={1}>
                    {evento.titulo}
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.body}>
                <Image source={{ uri: evento.imagem }} style={styles.imagem} />

                <View style={styles.contentPadding}>
                    <Text style={styles.tituloBody}>
                        {evento.titulo}
                    </Text>

                    <View style={styles.infoContainer}>
                        <View style={styles.infoItem}>
                            <View style={styles.infoIcon}>
                                <FontAwesome name="calendar" size={18} color="#A2FF86" />
                            </View>

                            <View style={styles.infoText}>
                                <Text style={styles.labelInfo}>Data e Hora</Text>
                                <Text style={styles.valueInfo}>{evento.data}</Text>
                            </View>
                        </View>

                        <View style={styles.infoItem}>
                            <View style={styles.infoIcon}>
                                <FontAwesome name="map-marker" size={20} color="#A2FF86" />
                            </View>

                            <View style={styles.infoText}>
                                <Text style={styles.labelInfo}>Localização</Text>
                                <Text style={styles.valueInfo}>{evento.local}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.sobreContainer}>
                        <Text style={styles.tituloSobre}>Sobre o evento</Text>
                        <Text style={styles.descricaoTexto}>
                            {evento.descricao}
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity 
                    style={[
                        styles.botaoComprar, 
                        estaNoCarrinho && { backgroundColor: "#FFD600" }
                    ]}
                    onPress={handleGarantirIngresso}
                    disabled={estaNoCarrinho}
                >
                    <Text style={styles.textBtnComprar}>
                        {estaNoCarrinho ? "ESTÁ NO CARRINHO" : "GARANTIR INGRESSO"}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#0F111A" 
    },
    header: { 
        flexDirection: "row", 
        alignItems: "center", 
        padding: 20, 
        backgroundColor: "#1A1C26", 
        borderBottomWidth: 1,
        borderBottomColor: "#333"
    },
    tituloHeader: { 
        fontSize: 18, 
        fontWeight: "bold", 
        marginLeft: 10,
        color: "#FFF",
        flex: 1
    },
    botaoVoltar: { 
        padding: 5, 
        borderRadius: 5 
    },
    imagem: { 
        width: "100%", 
        height: 250 
    },
    body: { 
        alignItems: "center", 
        paddingBottom: 30 
    },
    contentPadding: {
        width: "100%",
        paddingHorizontal: 20
    },
    tituloBody: { 
        fontSize: 26, 
        fontWeight: "bold", 
        color: "#A2FF86", 
        marginTop: 20,
        marginBottom: 10
    },
    infoContainer: { 
        backgroundColor: "#1A1C26", 
        borderRadius: 15, 
        width: "100%", 
        padding: 20,
        marginVertical: 15,
        borderWidth: 1,
        borderColor: "#333"
    },
    infoItem: { 
        flexDirection: "row", 
        marginVertical: 8,
        alignItems: "center"
    },
    infoIcon: { 
        backgroundColor: "rgba(162, 255, 134, 0.1)", 
        alignItems: "center", 
        justifyContent: "center", 
        width: 40, 
        height: 40, 
        borderRadius: 10, 
        marginRight: 15 
    },
    infoText: {
        flex: 1
    },
    labelInfo: {
        fontSize: 11,
        fontWeight: "700",
        color: "#666",
        textTransform: "uppercase"
    },
    valueInfo: {
        fontSize: 14,
        color: "#FFF",
        marginTop: 2
    },
    sobreContainer: { 
        width: "100%", 
        marginTop: 10 
    },
    tituloSobre: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 10
    },
    descricaoTexto: {
        fontSize: 15,
        color: "#A0A0A0",
        lineHeight: 24,
        textAlign: "justify"
    },
    footer: { 
        padding: 20, 
        backgroundColor: "#1A1C26",
        borderTopWidth: 1,
        borderTopColor: "#333"
    },
    botaoComprar: { 
        paddingVertical: 18,
        borderRadius: 12, 
        alignItems: "center",
        backgroundColor: "#A2FF86",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8
    },
    textBtnComprar: { 
        fontSize: 16, 
        fontWeight: "900",
        letterSpacing: 1,
        color: "#000"
    },
});