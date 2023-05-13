import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons*/
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faSun, faMoon, faCheck);

export default FontAwesomeIcon;
