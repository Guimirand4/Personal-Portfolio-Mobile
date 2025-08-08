import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e2f",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80,
  },
  image: {
    width: 180,
    height: 180,
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
    marginBottom: 40,
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
