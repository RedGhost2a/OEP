import {
  faClose,
  faAtom,
  faHome,
  faDashboard,
  faList, faFileInvoiceDollar, faBook, faGear, faChartLine
} from "@fortawesome/free-solid-svg-icons";

export const  btnClose = faClose
export const  btnHome = faAtom

export const navbarData = [
  {
    routeLink: '',
    icon: faHome,
    label: 'Home'
  },
  {
    routeLink: '',
    icon: faChartLine,
    label: 'Tableau de bord'
  },
  {
    routeLink: '',
    icon: faList,
    label: 'Clients'
  },
  {
    routeLink: '',
    icon: faFileInvoiceDollar,
    label: 'Devis'
  },
  {
    routeLink: '',
    icon: faBook,
    label: 'Bibliothéque de prix'
  },
  {
    routeLink: 'parametre',
    icon: faGear,
    label: 'Paramètres'
  }
];
