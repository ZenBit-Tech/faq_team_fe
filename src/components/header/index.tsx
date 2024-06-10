import logo from 'assets/images/logo.png';
import UserIcon from 'assets/icons/iconUser';
import BagIcon from 'assets/icons/iconBag';
import BellIcon from 'assets/icons/iconBell';
import {
  Circle,
  Icon,
  IconBag,
  IconsContainer,
  InnerContainer,
  Logo,
  MenuNav,
  MenuNavItem,
  Nav,
  NavLink,
  StyledHeader,
} from './styles';
import { Container } from 'components/section/styles';
import { useAppSelector } from 'redux/hooks';
import { Button } from 'components/button';
import { ButtonVariant } from 'components/button/types';

export const Header = () => {
  const { access_token } = useAppSelector(state => state.auth);
  return (
    <StyledHeader>
      <Container>
        <InnerContainer>
          <Logo>
            <img src={logo} />
          </Logo>
          <Nav>
            <MenuNav>
              <MenuNavItem>
                <NavLink to={''}>Shop</NavLink>
              </MenuNavItem>
              <MenuNavItem>
                <NavLink to={''}>Vendor</NavLink>
              </MenuNavItem>
              <MenuNavItem>
                <NavLink to={''}>Messages</NavLink>
              </MenuNavItem>
            </MenuNav>
          </Nav>
          <IconsContainer>
            {access_token ? (
              <>
                <Icon>
                  <BellIcon />
                </Icon>
                <Icon>
                  <UserIcon />
                </Icon>
                <IconBag>
                  <BagIcon />
                  <Circle>2</Circle>
                </IconBag>
              </>
            ) : (
              <>
                <Button variant={ButtonVariant.Black}>Sign in</Button>
                <Button variant={ButtonVariant.White}>Sign up</Button>
              </>
            )}
          </IconsContainer>
        </InnerContainer>
      </Container>
    </StyledHeader>
  );
};
