import { Container } from 'components/section/styles';
import logo from 'src/assets/images/logo.png';
import FacebookIcon from 'assets/icons/iconFacebook';
import InstagramIcon from 'assets/icons/iconInstagram';
import EmailIcon from 'assets/icons/iconEmail';
import {
  FooterInner,
  StyledFooter,
  FooterLeft,
  FooterRight,
  FooterLink,
  FooterLogo,
  FooterMenu,
  FooterMenuItem,
  FooterSocials,
  FooterText,
  FooterTitle,
  FooterMenuList,
  FooterIcon,
  Credentials,
} from './styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterInner>
          <FooterLeft>
            <FooterLogo>
              <img src={logo} />
            </FooterLogo>
            <FooterText>Some text will be here two - three lines</FooterText>
            <FooterSocials>
              <FooterIcon>
                <FooterLink to="#">
                  <InstagramIcon />
                </FooterLink>
              </FooterIcon>
              <FooterIcon>
                <FooterLink to="#">
                  <FacebookIcon />
                </FooterLink>
              </FooterIcon>
              <FooterIcon>
                <FooterLink to="#">
                  <EmailIcon />
                </FooterLink>
              </FooterIcon>
            </FooterSocials>
          </FooterLeft>
          <FooterRight>
            <FooterMenu>
              <FooterTitle>Shop</FooterTitle>
              <FooterMenuList>
                <FooterMenuItem>
                  <FooterLink to="#">Login</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">Wishlist</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">Cart</FooterLink>
                </FooterMenuItem>
              </FooterMenuList>
            </FooterMenu>
            <FooterMenu>
              <FooterTitle>Company</FooterTitle>
              <FooterMenuList>
                <FooterMenuItem>
                  <FooterLink to="#">About US</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">Terms & Conditions</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">Privacy Policy</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">Contact Us</FooterLink>
                </FooterMenuItem>
              </FooterMenuList>
            </FooterMenu>
            <FooterMenu>
              <FooterTitle>Help</FooterTitle>
              <FooterMenuList>
                <FooterMenuItem>
                  <FooterLink to="#">FAQs</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">Wishlist</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">Shipping and Delivery</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">Rent your closet</FooterLink>
                </FooterMenuItem>
                <FooterMenuItem>
                  <FooterLink to="#">Resell your closet</FooterLink>
                </FooterMenuItem>
              </FooterMenuList>
            </FooterMenu>
          </FooterRight>
        </FooterInner>
        <Credentials>© 2023 Black Cycle</Credentials>
      </Container>
    </StyledFooter>
  );
};
