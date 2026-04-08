import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from 'expo-router';
import { DADOS_EVENTOS } from "../mocks/event";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function DetalhesScrenn() {
    const { id } = useLocalSearchParams();
    const eventoOriginal = DADOS_EVENTOS.find((item) => item.id === id);

    const [evento, setEvento] = useState(eventoOriginal);

    const router = useRouter();

    function garantirIngresso() {
        if (evento) {
            setEvento({ ...evento, status: 'comprado' });
        }
    }

    function adicionarAoCarrinho() {
        if (evento) {
            setEvento({ ...evento, status: 'Adicionado ao carrinho' });
        }
    }

    function onVoltarPress() {
        router.replace("/home");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.botaoVoltar}
                    onPress={onVoltarPress}
                >
                    <Feather name="chevron-left" size={24} color="#000000" />
                </TouchableOpacity>

                <Text style={styles.tituloHeader}>
                    {evento?.titulo}
                </Text>
            </View>

            <View style={styles.body}>
                <Image source={{ uri: evento?.imagem }} style={styles.imagem} />

                <Text style={styles.tituloBody}>
                    {evento?.titulo}
                </Text>

                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                        <View style={styles.infoIcon}>
                            <FontAwesome name="calendar" size={20} color="#2b6638" />
                        </View>

                        <View style={styles.infoText}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "700",
                                color: "#6d6d6d",

                            }}>
                                Data e Hora
                            </Text>
                            <Text>
                                {evento?.data}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <View style={styles.infoIcon}>
                            <FontAwesome name="map-marker" size={20} color="#2b6638" />
                        </View>

                        <View style={styles.infoText}>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "700",
                                color: "#6d6d6d",

                            }}>
                                Local
                            </Text>
                            <Text>
                                {evento?.local}
                            </Text>
                        </View>

                    </View>


                </View>

                <View style={styles.sobreContainer}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        marginBottom: 10,
                    }}
                    
                    >Sobre o evento</Text>

                    <Text>
                        {evento?.descricao}
                        
                    </Text>
                </View>

            </View>

            <View style={styles.footer}>
                <TouchableOpacity 
                    style={[styles.botaoComprar, 
                            { backgroundColor: evento?.status === 'comprado' ? '#8e8e93' : '#aaff5a' }]}
                    onPress={garantirIngresso}   
                    disabled={evento?.status === 'comprado'} 
                >
                    <Text style={styles.textBtnComprar}>
                        {evento?.status === 'comprado' ? 'Ingresso Comprado' : evento?.status === 'noCarrinho' ? 'Adicionado ao Carrinho' : 'Comprar Ingresso'}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F7FA",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        width: "100%",
        backgroundColor: "#fff",
        shadowColor: "#000",
    },
    tituloHeader: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
    },
    botaoVoltar: {
        padding: 10,
        borderRadius: 5,
    },
    imagem: {
        width: "100%",
        height: 300,
    },
    body: {
        alignItems: "center",
    },
    tituloBody: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 15,
        marginLeft: 20,
    },
    infoContainer: {
        backgroundColor: "#dfdfdf",
        borderRadius: 20,
        width: "90%",
        borderWidth: 1,
        borderColor: "#a7a7a7",
        padding: 15,
    },
    infoItem: {
        flexDirection: "row",
        marginTop: 10,
    },
    infoIcon: {
        backgroundColor: "#65ff876e",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    infoText: {

    },
    footer: {
        paddingTop: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    botaoComprar: {
        backgroundColor: "#aaff5a",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: "center",
    },
    textBtnComprar: {
        color: "#111111",
        fontSize: 19,
        fontWeight: "bold",
    },
    sobreContainer: {
        width: "90%",
        marginTop: 20,
    },
})