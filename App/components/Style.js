import { StyleSheet } from "react-native"


export default  Styles = StyleSheet.create(
    {
      container:
      {
        flex: 1,
      },
      datawrp:
      {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fffff0',
        margin: 5,
        padding: 6,
      },
      datawrp1:
      {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fffacd',
        margin: 5,
        padding: 6,
      },
      centView:
      {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      MOdalView:
      {
      
      backgroundColor:'#fff',
      padding:40,
      shadowColor:'#000',
      borderRadius:12,
      elevation:6,
      shadowOpacity:0.70,
      height:500,
      },
      input:
      {
        borderWidth:2,
        borderColor:'#8b0000',
        width:250,
        top:5,
        marginBottom:10,
        
      },
      MOdalBUtton:
      {
        
       flexDirection:'row',
       alignSelf:'stretch',
       height:50,
       width:200,
       left:50,
       top:10,
      }
    }
  )