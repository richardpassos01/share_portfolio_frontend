import Icon from './icons/icon.png';
import Signin from './icons/signin.png';
import Signup from './icons/signup.png';
import ArrowRight from './icons/arrowRight.svg';
import Eye from './icons/eye.svg';
import EyeSlash from './icons/eyeSlash.svg';
import Filter from './icons/filter.svg';
import Xlsx from './icons/xlsx.png';
import NotFoundIcon from './icons/notFound.png';

export { GlobalStyles } from './styles/GlobalStyles';
export { Colors } from './styles/Colors';
export { Tokens } from './styles/Tokens';
export { Theme } from './styles/Theme';

export { Button } from './components/Button';
export { Arrow } from './components/Arrow';
export { SelectBox } from './components/SelectBox';
export { Header, HeaderItem } from './components/Header';
export { Nav } from './components/NavHeader';
export { HyperLink } from './components/HyperLink';
export { ProgressBar } from './components/ProgressBar';
export { Title } from './components/Title';
export { StyledComponentsRegistry } from './components/StyledComponentsRegistry';
export { Hamburger } from './components/HamburguerMenu';
export { Filter } from './components/FilterMenu';
export { Hide } from './components/Hide';
export { Input } from './components/Input';
export { Paragraph } from './components/Paragraph';
export { Table } from './components/Table';
export { Card } from './components/Card';
export { Loader } from './components/Loader';
export { Skeleton } from './components/Skeleton';
export { Notification } from './components/Notification';
export { Containers } from './components/Containers';
export { NotFound } from './components/NotFound';

export type { Toast } from './components/Notification';

export const Icons = {
  Icon,
  Signin,
  Signup,
  ArrowRight,
  Eye,
  EyeSlash,
  Filter,
  Xlsx,
  NotFound: NotFoundIcon,
};
