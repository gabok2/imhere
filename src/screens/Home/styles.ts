import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  //mude a cor do placeholder
  input: {
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
    color: '#FDFCFE',
    fontSize: 16,
    padding:16,
    flex: 1,
    marginRight: 12,
  
  },
  buttonText:{
    color: '#FFF',
    fontSize: 24,
    
  },
  button:{
    width:56,
    height:56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:{
    marginTop: 36,
    marginBottom: 42,
    width: '100%',
    flexDirection: 'row',
    
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
})