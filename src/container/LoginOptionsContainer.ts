import LoginOptions from '../components/auth/LoginOptions';
import { connect } from 'react-redux';
import { SignInAction } from '../actions/AuthAction';
const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (payload) => dispatch(SignInAction(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOptions);