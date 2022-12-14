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
    routeLink: 'dashboard',
    icon: faChartLine,
    label: 'Tableau de bord'
  },
  {
    routeLink: 'clients',
    icon: faList,
    label: 'Clients'
  },
  {
    routeLink: 'devis',
    icon: faFileInvoiceDollar,
    label: 'Devis'
  },
  {
    routeLink: 'bibliotheque',
    icon: faBook,
    label: 'Bibliothéque de prix'
  },
  {
    routeLink: 'parametre',
    icon: faGear,
    label: 'Paramètres'
  }
];
