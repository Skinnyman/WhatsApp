import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Top from '../Component/Top'
import Topbar from '../Navigation/Topbar'

const MainScreen = () => {
  return (
    <>
        <View style={{top:-2}}>
              <Top/>
        </View>
        <Topbar/>
    </>
  )
}

export default MainScreen

const styles = StyleSheet.create({})