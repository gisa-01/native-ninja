import { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import { client } from "../lib/appwrite";

const index = () => {
  const [pingStatus, setPingStatus] = useState("Appwrite has not been checked yet.");
  const [isPinging, setIsPinging] = useState(false);

  const pingAppwrite = async () => {
    setIsPinging(true);
    setPingStatus("Checking Appwrite connectivity...");

    try {
      await client.ping();
      setPingStatus("Connected to Appwrite successfully.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setPingStatus(`Could not reach Appwrite: ${message}`);
    } finally {
      setIsPinging(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.image} />
      <Spacer height={20} />
      <ThemedText style={styles.title} title={true}>
        Number 1
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading List App</ThemedText>
      <Spacer />
      <Button
        title={isPinging ? "Checking Appwrite..." : "Test Appwrite connection"}
        onPress={pingAppwrite}
        disabled={isPinging}
      />
      <Spacer height={10} />
      <ThemedText style={styles.status}>{pingStatus}</ThemedText>
      <Spacer />
      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  status: {
    textAlign: "center",
    paddingHorizontal: 24,
  },
  image: {
    height: 100,
    width: 100,
  },
});
