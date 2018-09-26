import React, {Component} from 'react'
import { View, Text } from 'react-native'
import {Button, TextInput} from '../../widgets'
import styles from './styles'

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{padding: 20}}>
                    <TextInput
                        label={'Nombre del personaje'}
                        value={this.state.name}
                        onChangeText={name => this.setState({name: name})}
                    />
                </View>
            </View>
        )
    }
}