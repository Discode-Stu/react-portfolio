import { faLock, faFlagUsa, faCity, faAddressBook, faUserCircle, faPhone, faEnvelope, faTrash, faSignOutAlt, faEdit, faMinusCircle, faSpinner, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Icons = () => {
 return library.add(faLock, faFlagUsa, faCity, faAddressBook, faUserCircle, faPhone, faEnvelope, faTrash, faSignOutAlt, faEdit, faMinusCircle, faSpinner, faPlusCircle, faGithubSquare, faLinkedin)
}



export default Icons;