import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e2e2",
    height: 200,
    borderRadius: 12,
    margin: 8,
    overflow: "hidden",
  },
  imageWrapper: {
    flex: 2,
    backgroundColor: "#a5a5a5",
    alignItems: "center",
    justifyContent: "center"
  },
  description: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  autor: {
    fontSize: 14,
    color: "#A8A3A3",
  },
  image:{
    width: "100%",
    height: "100%",
    resizeMode: 'cover'
  },
  btnSaibaMais:{
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    gap: 2
  }
});
