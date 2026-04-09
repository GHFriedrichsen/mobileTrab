import { Tabs } from 'expo-router';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: '#A2FF86', 
        tabBarInactiveTintColor: '#666666', 
        tabBarStyle: {
          backgroundColor: '#090a0f', 
          borderTopWidth: 0, 
          height: 65, 
          paddingBottom: 8,
          paddingTop: 8,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={28} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="bilhetes"
        options={{
          title: 'Bilhetes', 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket-confirmation" size={28} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="carrinho"
        options={{
          title: 'Carrinho', 
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" size={28} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}