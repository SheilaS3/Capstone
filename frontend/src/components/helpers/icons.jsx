import { 
    faBuilding,
    faUser,
    faTrash, 
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(
        faBuilding,
        faUser,
        faTrash,
        faSignOutAlt,
        faEdit,
        faSpinner,
        faPlusCircle,
        faPhone,
        faEnvelope,
        faMapMarkedAlt,
        faLock
    );
};

export default Icons;