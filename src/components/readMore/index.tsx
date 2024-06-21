import { useState } from 'react';
import { ReadMoreContainer } from 'components/readMore/styles.ts';
import { ReadMoreType } from 'components/readMore/types';

export const ReadMore = ({ text, amountOfWords }: ReadMoreType) => {
  const splitedText = text.split(' ');

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <ReadMoreContainer>
      {isReadMore ? splitedText.slice(0, amountOfWords - 1).join(' ') : text}
      <span onClick={toggleReadMore}>
        {isReadMore ? ' Read more' : ' Show less'}
      </span>
    </ReadMoreContainer>
  );
};

export default ReadMore;
