import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEventos } from "../../context/eventContext";

export default function BilhetesScreen() {
    const { bilhetes } = useEventos();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.tituloTela}>Meus Bilhetes</Text>
                <Text style={styles.subtitulo}>{bilhetes.length} bilhetes ativos</Text>
            </View>

            <FlatList
                data={bilhetes}
                keyExtractor={(item) => item.instanceId.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.lista}
                ListEmptyComponent={
                    <View style={styles.vazioContainer}>
                        <MaterialCommunityIcons name="ticket-outline" size={80} color="#333" />
                        <Text style={styles.vazioTexto}>Você ainda não possui bilhetes comprados.</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.imagem }} style={styles.imagem} />
                        
                        <View style={styles.info}>
                            <Text style={styles.tituloItem} numberOfLines={1}>{item.titulo}</Text>
                            
                            <View style={styles.detalheRow}>
                                <MaterialCommunityIcons name="calendar" size={14} color="#A2FF86" />
                                <Text style={styles.detalheText}>{item.data}</Text>
                            </View>

                            <View style={styles.detalheRow}>
                                <MaterialCommunityIcons name="map-marker" size={14} color="#A2FF86" />
                                <Text style={styles.detalheText} numberOfLines={1}>{item.local}</Text>
                            </View>
                            
                            <View style={styles.codigoContainer}>
                                <MaterialCommunityIcons name="qrcode-scan" size={18} color="#A2FF86" />
                                <Text style={styles.codigoText}>TKT-2026-X{item.id}B{Math.floor(item.instanceId % 1000)}Y</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#0F111A" 
    },
    header: { 
        padding: 20, 
        backgroundColor: '#1A1C26', 
        borderBottomWidth: 1, 
        borderBottomColor: '#333' 
    },
    tituloTela: { 
        fontSize: 24, 
        fontWeight: "bold", 
        color: "#A2FF86" 
    },
    subtitulo: { 
        fontSize: 16, 
        color: "#A0A0A0", 
        marginTop: 4 
    },
    lista: { 
        padding: 20 
    },
    card: { 
        flexDirection: "row", 
        backgroundColor: "#1A1C26", 
        borderRadius: 15, 
        padding: 12, 
        marginBottom: 15,
        elevation: 4,
        borderLeftWidth: 5,
        borderLeftColor: '#A2FF86' 
    },
    imagem: { 
        width: 80, 
        height: 100, 
        borderRadius: 10 
    },
    info: { 
        flex: 1, 
        marginLeft: 15, 
        justifyContent: "space-between" 
    },
    tituloItem: { 
        fontSize: 16, 
        fontWeight: "bold", 
        color: "#FFF" 
    },
    detalheRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 2 
    },
    detalheText: { 
        fontSize: 12, 
        color: "#A0A0A0", 
        marginLeft: 4 
    },
    codigoContainer: { 
        flexDirection: "row", 
        alignItems: "center", 
        marginTop: 8,
        backgroundColor: '#0F111A',
        padding: 6,
        borderRadius: 8,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#333'
    },
    codigoText: { 
        fontSize: 13, 
        fontWeight: "bold", 
        color: "#A2FF86", 
        marginLeft: 6,
        letterSpacing: 1
    },
    vazioContainer: { 
        alignItems: 'center', 
        marginTop: 100 
    },
    vazioTexto: { 
        marginTop: 15, 
        color: '#666', 
        fontSize: 16, 
        textAlign: 'center', 
        paddingHorizontal: 40 
    }
});