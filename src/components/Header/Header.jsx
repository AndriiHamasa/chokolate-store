import css from './Header.module.css';
import { MobileMenu } from 'components/MobileMenu';
import { Navigation } from 'components/Navigation';

export const Header = ({ width }) => {
  console.log('width: ', width)
  return (
    <header>
      <div className={css.Container}>
        <a href='./index.html'><span>logo
        </span></a>
        {(width >= 1200) ? <Navigation /> : <MobileMenu /> }
      </div>
    </header>
  );
};
