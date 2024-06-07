import { Container } from './styles';

type Props = {
  children: React.ReactElement;
  className?: string;
};

export const Section = ({ className, children }: Props) => {
  return (
    <section className={className}>
      <Container>{children}</Container>
    </section>
  );
};
