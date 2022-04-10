/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import MetodoPagoItem from './metodoPagoItem'
import { ProductosContext } from '../../contexts'
import { MetotodosPagoContext } from '../../contexts'
import styles from './styles'

const Start = () => {
  const { navigate } = useNavigation()
  const { metodos, destroyProducto } = useContext(MetotodosPagoContext)

  return (
    <SafeAreaView style={styles.startScreen}>
      <RectButton style={styles.roundedBtn} onPress={() => navigate('Form')}>
        <Feather name="plus" size={40} color="white" />
      </RectButton>

      <FlatList
        data={metodos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <MetodoPagoItem
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
