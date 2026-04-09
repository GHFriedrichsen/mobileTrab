import { Stack } from "expo-router";
import { EventosProvider } from "../context/eventContext";

export default function RootLayout() {
    return (
        <EventosProvider>
            <Stack screenOptions={{ headerShown: false }} >
                <Stack.Screen name="login" />
                <Stack.Screen name="(tabs)" />
            </Stack>
        </EventosProvider>
    );
}