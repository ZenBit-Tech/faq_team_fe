import ReviewsList from 'components/reviewsList';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';
import { useTranslation } from 'react-i18next';

const PublicBuyerTab = ({ userReviews }: Partial<PublicProfileInfoType>) => {
  const { t } = useTranslation();

  return (
    <Tabs defaultIndex={0}>
      <TabList>
        <Tab>
          {t('titleText.reviews')}({userReviews?.length})
        </Tab>
      </TabList>
      <TabPanel>
        <ReviewsList userReviews={userReviews} />
      </TabPanel>
    </Tabs>
  );
};

export default PublicBuyerTab;