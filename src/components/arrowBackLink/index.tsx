import arrowImage from 'assets/images/arrow-back.svg';
import { Link } from './style';

export const ArrowBackLink = ({ link }: { link: string }) => {
  return (
    <Link href={link}>
      <img src={arrowImage} alt="Go back" />
    </Link>
  );
};
