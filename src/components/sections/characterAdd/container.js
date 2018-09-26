import View from './view'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        house: state.houses.item,
        isFetching: state.characters.isFetching || state.houses.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)