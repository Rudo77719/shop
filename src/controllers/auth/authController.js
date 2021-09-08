import httpClients from '../../services/httpClients';
import { rxSetAuth } from '../../stateManagment/actions/loginAction'
class AuthController {
    constructor(authOperation) {
        this.authOperation = authOperation
    }
    login = async(state, action) => {
        const response = await this.authOperation.login(action.payload);
        if(response.token) {
            httpClients.addAuthorization(response.token);
            state.dispatch(rxSetAuth(true));
            localStorage.setItem("token", response.token)
        }
        return response;
    }

    registaration = async(state, action) => {
        const response = await this.authOperation.registaration(action.payload);
        return response;
    }
}

export default AuthController;