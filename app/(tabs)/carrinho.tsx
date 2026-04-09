import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons"; 
import { useEventos } from "../../context/eventContext";

export default function CarrinhoScreen() {
    const { carrinho, removerDoCarrinho, finalizarCompra } = useEventos();

    const valorTotal = carrinho.reduce((total, item) => {
        const precoLimpo = item.preco.toLowerCase();
        if (precoLimpo.includes('gratuito') || !item.preco) {
            return total;
        }
        const apenasNumeros = item.preco.replace(/[^\d,]/g, '').replace(',', '.');
        return total + parseFloat(apenasNumeros);
    }, 0);

    const handleFinalizar = () => {
        if (carrinho.length === 0) return;
        finalizarCompra();
        Alert.alert("Sucesso!", "Sua compra foi finalizada com sucesso!");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.tituloTela}>Meu Carrinho</Text>
                <Text style={styles.contadorItens}>{carrinho.length} itens selecionados</Text>
            </View>

            <FlatList
                data={carrinho}
                keyExtractor={(item) => item.instanceId.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listaContainer}
                ListEmptyComponent={
                    <Text style={styles.textoVazio}>O seu carrinho está vazio.</Text>
                }
                renderItem={({ item }) => (
                    <View style={styles.cardItem}>
                        <Image source={{ uri: item.imagem }} style={styles.imagemItem} />
                        
                        <View style={styles.infoItem}>
                            <View style={styles.topoCard}>
                                <Text style={styles.tituloItem} numberOfLines={1}>{item.titulo}</Text>
                                <TouchableOpacity onPress={() => removerDoCarrinho(item.instanceId)}>
                                    <MaterialIcons name="delete-sweep" size={26} color="#FF3B30" />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.detalheTexto}>{item.data}</Text>
                            <Text style={styles.detalheTexto} numberOfLines={1}>{item.local}</Text>
                            <Text style={styles.valorItem}>{item.preco}</Text>
                        </View>
                    </View>
                )}
            />

            <View style={styles.footer}>
                <View style={styles.resumoTotal}>
                    <Text style={styles.labelTotal}>Total do pedido</Text>
                    <Text style={styles.valorTotal}>R$ {valorTotal.toFixed(2).replace('.', ',')}</Text>
                </View>

                <TouchableOpacity 
                    style={[styles.btnFinalizar, carrinho.length === 0 && { backgroundColor: '#333' }]} 
                    onPress={handleFinalizar}
                    disabled={carrinho.length === 0}
                >
                    <Text style={styles.textoBtnFinalizar}>FINALIZAR COMPRA</Text>
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
        padding: 25, 
        backgroundColor: '#1A1C26', 
        borderBottomWidth: 1, 
        borderBottomColor: '#333' 
    },
    tituloTela: { 
        fontSize: 28, 
        fontWeight: "900", 
        color: "#FFD600" 
    },
    contadorItens: { 
        fontSize: 14, 
        color: "#A0A0A0",
        marginTop: 4
    },
    listaContainer: { 
        padding: 20, 
        paddingBottom: 150 
    },
    cardItem: { 
        flexDirection: "row", 
        backgroundColor: "#1A1C26", 
        borderRadius: 15, 
        padding: 12, 
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#333'
    },
    imagemItem: { 
        width: 75, 
        height: 95, 
        borderRadius: 10 
    },
    infoItem: { 
        flex: 1, 
        marginLeft: 15, 
        justifyContent: 'space-between' 
    },
    topoCard: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    tituloItem: { 
        fontSize: 16, 
        fontWeight: "bold", 
        color: "#FFF", 
        flex: 1 
    },
    detalheTexto: { 
        fontSize: 12, 
        color: "#A0A0A0" 
    },
    valorItem: { 
        fontSize: 16, 
        fontWeight: "bold", 
        color: "#FFD600", 
        marginTop: 4 
    },
    footer: { 
        position: 'absolute', 
        bottom: 0, 
        width: '100%', 
        backgroundColor: '#1A1C26', 
        padding: 25, 
        borderTopWidth: 1, 
        borderTopColor: '#333',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    resumoTotal: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 20 
    },
    labelTotal: { 
        fontSize: 16, 
        color: '#A0A0A0' 
    },
    valorTotal: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        color: '#FFF' 
    },
    btnFinalizar: { 
        backgroundColor: "#FFD600", 
        padding: 18, 
        borderRadius: 15, 
        alignItems: "center" 
    },
    textoBtnFinalizar: { 
        color: "#000", 
        fontSize: 16, 
        fontWeight: "900",
        letterSpacing: 1
    },
    textoVazio: { 
        textAlign: 'center', 
        marginTop: 60, 
        color: '#666', 
        fontSize: 16 
    }
});