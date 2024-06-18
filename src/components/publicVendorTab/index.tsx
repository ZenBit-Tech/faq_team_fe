import ReviewsList from 'components/reviewsList';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import ProductsList from 'components/productsList';
import { useState } from 'react';
import { PublicProfileInfoType } from 'components/publicProfileInfo/types.ts';
import { useTranslation } from 'react-i18next';

const PublicVendorTab = ({
  userReviews,
  userProducts,
}: Partial<PublicProfileInfoType>) => {
  const [tabIndex, setTabIndex] = useState(1);
  const { t } = useTranslation();

  return (
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>
        <Tab>
          {t('titleText.products')}({userProducts?.length})
        </Tab>
        <Tab>
          {t('titleText.reviews')}({userReviews?.length})
        </Tab>
      </TabList>
      <TabPanel>
        <ProductsList userProducts={userProducts} />
      </TabPanel>
      <TabPanel>
        <ReviewsList userReviews={userReviews} />
      </TabPanel>
    </Tabs>
  );
};

export default PublicVendorTab;
