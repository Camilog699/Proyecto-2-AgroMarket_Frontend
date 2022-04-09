import { StyleSheet } from 'react-native'
import theme from '../../../theme'

export default StyleSheet.create({
  itemWrapper: {
    height: 150,
    padding: 1,
    borderBottomWidth: 2,
    borderTopColor: theme.color.main,
    borderBottomColor: theme.color.whitish,
    backgroundColor: theme.color.blue,
    justifyContent: 'center',
    elevation: 10,
  },
  itemTitle: {
    marginBottom: 8,
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemDate: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  action: {
    width: 100,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  actionText: {
    marginLeft: 8,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  
})
