import Login from './Login';
import { connect } from 'react-redux';
import { signInAction } from '../../actions/AuthAction';
const mapStateToProps = (state: any) => {
    return {
        isSigning: state.auth.isSigning
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        signIn: (payload: any) => dispatch(signInAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);