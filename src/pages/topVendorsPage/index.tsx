import { useTranslation } from 'react-i18next';

import FiltersIcon from 'assets/icons/filtersIcon';
import { TopVendorsList } from 'components/topVendorsList';

import {
  FiltersWrap,
  StyledSearchbar,
  TopVendorsSection,
  TopVendorsSectionWrap,
  TopVendorsTitleSection,
  VendorsListtWrap,
} from './styles';

const TopVendorsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <TopVendorsTitleSection>
        <div className="mobile-wrap">
          <p>{t('topVendors.title')}</p>
          <button>
            <FiltersIcon />
          </button>
        </div>
      </TopVendorsTitleSection>
      <TopVendorsSection>
        <TopVendorsSectionWrap>
          <FiltersWrap>
            <p>Filters</p>
          </FiltersWrap>
          <VendorsListtWrap>
            <StyledSearchbar>Searchbar</StyledSearchbar>
            <TopVendorsList />
          </VendorsListtWrap>
        </TopVendorsSectionWrap>
      </TopVendorsSection>
    </>
  );
};

export default TopVendorsPage;
