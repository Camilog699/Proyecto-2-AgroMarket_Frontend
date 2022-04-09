import React, { useContext } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import ProductoItem from './ProductoItem'
import { ProductosContext } from '../../contexts'
import styles from './styles'

const Start = () => {
  const { navigate } = useNavigation()
  const { productos, destroyProducto } = useContext(ProductosContext)

  return (
    <SafeAreaView style={styles.startScreen}>
      <RectButton style={styles.roundedBtn} onPress={() => navigate('Form')}>
        <Feather name="plus" size={40} color="white" />
      </RectButton>

      <FlatList
        data={productos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductoItem
            producto={item}
            onDelete={() => destroyProducto(item.id)}
            onPress={() => navigate('Form', item.id)}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Start
