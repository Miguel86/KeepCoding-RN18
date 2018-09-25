import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import {connect} from 'react-redux'
import * as CharactersActions from '../../../redux/characters/actions'
import {CharacterCell } from '../../widgets'
import { Actions } from 'react-native-router-flux'

class Characters extends Component {
    componentDidMount(){
        this.props.fetchHouseCharacters()
    }

    _renderItem(item, index){
        //return  <View style={{height: 200, backgroundColor:'blue'}} />
        return <CharacterCell character={item} onCharacterPress={(character) => this.props.onCharacterTapped(character)}/>
    }
    render() {
        /*console.log("characters house: ", this.props.house)*/

        const { list, isFetching } = this.props
        console.log("characters list: ", this.props.list)
        return (
            <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={({ item, index}) => this._renderItem(item, index) }
                    keyExtractor={(item, i) => 'character' + i}
                />
            </View>
        )
        //<Text style={{color: 'white', fontWeight: 'bold' }}>PERSONAJES</Text>
    }
}
//Declaración como constante
const mapStateToProps = (state) => {
    console.log("mapStateToProps: ", state)
    return {
        isFetching: state.characters.isFetching,
        /*house: state.houses.item,*/
        list: state.characters.list
    }
}

//Declaración como función
function mapDispatchToProps(dispatch, props) {
    return {
        fetchHouseCharacters: () => {
            /*console.log("fetchHouseCharacters mapDispatchToProps")*/
            dispatch(CharactersActions.fetchHouseCharacters())
        },
        onCharacterTapped: (character) => {
            console.log("onCharacterTapped ", character)
            dispatch(CharactersActions.setItem(character))
            Actions.characterDetail({title: character.nombre})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters)