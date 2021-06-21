import AccountScreen from './AccountScreen';
import { connect } from 'react-redux';
import { signOutAction } from '../../actions/AuthAction';
const mapStateToProps = (state: any) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signOut: (payload: any) => dispatch(signOutAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);