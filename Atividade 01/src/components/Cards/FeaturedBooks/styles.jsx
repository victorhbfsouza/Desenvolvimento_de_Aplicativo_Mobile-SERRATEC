import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 200,
    backgroundColor: "#cad5e2",
    marginHorizontal: 10,
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 10,
  },
  imageWrapper: {
    flex: 2,
    backgroundColor: "#a5a5a5",
  },
  bookInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#A8A3A3",
  },
  bookRating: {
    flexDirection: "row",
    gap: 6,
  },
});
