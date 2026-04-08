import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "#8e8e93"
        }}>
            <Tabs.Screen 
                name="home" 
                options={{ 
                    title: "Home",
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} /> 
                }} 
            />

            <Tabs.Screen 
                name="profile" 
                options={{ 
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} /> 
                }} 
            />
        </Tabs>
    )
}