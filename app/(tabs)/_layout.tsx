import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import BlurTabBarBackground from "../components/TabBarBackground.ios";

export default function TabLayout() {
  return <Tabs screenOptions={
    {
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
            backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
            backgroundColor: '#25292e',
        },
        tabBarBackground: BlurTabBarBackground,
    }
  }> 
    <Tabs.Screen name="index" options={{
      title: "Home Page",
      tabBarLabel: "Home",
      tabBarIcon: ({color, size})=><Ionicons name="home" color={color} size={size}/>,
    }} />
    <Tabs.Screen name="recipe" options={{
        title: "Recipe Page",
        tabBarLabel: "Recipe",
        tabBarIcon: ({color, size})=><Ionicons name="fast-food" color={color} size={size}/>,
    }} />
    <Tabs.Screen name="cooking" options={{
        title: "Cooking Recipe",
        tabBarLabel: "Cooking",
        tabBarIcon: ({color, size})=><Ionicons name="restaurant" color={color} size={size}/>,
    }} />
  </Tabs>;
}
