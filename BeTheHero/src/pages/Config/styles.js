import {StyleSheet} from "react-native";

export default StyleSheet.create({
  headerText: {
    fontSize: 17,
    color: '#e02041',
  },

  optionContainer: {
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1,
    height: 100,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  containerText: {
    fontSize: 20,
    color: '#41414d',
  },
  containerSubtext: {
    color: '#c4c4c4',
    fontWeight: "bold"
  },
  containerAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: '90%',
    height: 240,
    backgroundColor: "#fff",
    borderRadius: 3,
    justifyContent: "space-evenly",
    elevation: 10,
    paddingHorizontal: 20,
  },
  modalText: {
    fontSize: 18,
  },

  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  radioSelection: {
    fontSize: 18,
    color: '#41414d',
  },
});
