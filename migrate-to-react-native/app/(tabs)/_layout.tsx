import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Add Account',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="ViewAccounts"
        options={{
          title: 'View Accounts',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
        }}
      />

      <Tabs.Screen
        name="AccountCharts"
        options={{
          title: 'Account Charts',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="paper-plane-o" color={color} />,
        }}
      />
    </Tabs>
  );
}
