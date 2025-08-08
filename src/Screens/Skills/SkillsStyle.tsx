import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: "#fff",
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "600",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
  },
  skillsContainer: {
    width: "85%",
  },
  skillRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#29293d",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  skillText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
  },
  starsContainer: {
    flexDirection: "row",
  },
});
