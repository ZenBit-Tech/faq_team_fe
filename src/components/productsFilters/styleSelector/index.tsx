import { Button, Container } from './style';
import { StyleSelectorProps } from './types';
// TODO styles should be taken from db
const styles = [
  'Essentials',
  'Casual',
  'Event Dressing',
  'Wedding Guest',
  'Streetstyle',
];

const StyleSelector: React.FC<StyleSelectorProps> = ({
  selectedStyle,
  setSelectedStyle,
}) => {
  return (
    <Container>
      {styles.map(style => (
        <Button
          key={style}
          selected={style === selectedStyle}
          onClick={() => setSelectedStyle(style)}
        >
          {style}
        </Button>
      ))}
    </Container>
  );
};

export default StyleSelector;
