import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Event } from '../../types/event';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { useEventos } from '../../context/eventContext';

type RenderizarEventoProps = {
  item: Event;
}

export default function HomeScreen() {
  const router = useRouter();


  const { eventos } = useEventos();

  const renderizarEvento = ({ item }: RenderizarEventoProps) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagemCapa} />

      <View style={styles.infoContainer}>

        <Text style={styles.tituloTexto} numberOfLines={2}>{item.titulo}</Text>
        <Text style={styles.dataTexto}>{item.data}</Text>
        <Text style={styles.localTexto}>{item.local}</Text>

        <View style={styles.rodapeCard}>
          <Text style={styles.precoTexto}>{item.preco}</Text>
          <TouchableOpacity
            style={styles.botaoComprar}
            onPress={() => router.push({
              pathname: '/detalhes',
              params: { id: item.id }
            })}
          >
            <FontAwesome name="chevron-right" size={16} color="#000" />
            <Text style={styles.textoBotao}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho Dark */}
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Eventos Disponíveis</Text>
        <View style={styles.searchSection}>
          <FontAwesome name="search" size={18} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.inputBusca}
            placeholder="Buscar eventos, shows, cursos..."
            placeholderTextColor="#666"
          />
        </View>
      </View>

      {/* Lista de Eventos */}
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={renderizarEvento}
        contentContainerStyle={styles.listaContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F111A',
  },
  header: {
    padding: 20,
    backgroundColor: '#1A1C26',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A2FF86',
    marginBottom: 15,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F111A',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#333',
  },
  searchIcon: {
    marginRight: 10,
  },
  inputBusca: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#FFF',
  },
  listaContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#1A1C26',
    borderRadius: 16,
    borderLeftColor: '#A2FF86',
    borderLeftWidth: 9,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  imagemCapa: {
    width: '100%',
    height: 180,
  },
  infoContainer: {
    padding: 15,
  },
  dataTexto: {
    color: '#A2FF86',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  tituloTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  localTexto: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 15,
  },
  rodapeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 15,
  },
  precoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  botaoComprar: {
    backgroundColor: '#A2FF86',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 8
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
});