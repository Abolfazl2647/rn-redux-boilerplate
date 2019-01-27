import { WhenThisActionHappend   } from './types';

/* ============================================
    This Function => "yourFunction"
    will be "this.props.yourFunction" in your components
    ============================================
*/

export const yourFunction = (element) => (dispatch) => {
    dispatch({
        type: WhenThisActionHappend,
        peyload: [element]
    })
}
