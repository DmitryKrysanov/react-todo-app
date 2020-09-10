import { db } from "../../config/fbConfig"
import Cookies from "js-cookie"
import { GET_USER } from "../../constants/userActions"

export const getUser = () => {
    const uid = Cookies.get('uid')

    return (dispatch: any) => {
        db.collection('users').doc(uid).get()
        .then(resp => {
            const userData = resp.data();
            dispatch( { type: GET_USER, userData } )
        })
    }
}