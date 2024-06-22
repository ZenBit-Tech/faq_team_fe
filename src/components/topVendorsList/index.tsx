import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import BuyIcon from 'assets/icons/iconBuy';
import defaultAvatar from 'assets/images/default-avatar.png';

import { vendors } from './data/vendors';
import {
  ImgWrap,
  ProductCardBottom,
  ProductName,
  ProductPrice,
  ProductsList,
  VendorCardName,
  VendorImg,
  VendorName,
  VendorsListItem,
} from './styles';

export const TopVendorsList = () => {
  return (
    <ul>
      {vendors.map((vendor, id) => {
        return (
          <VendorsListItem key={id}>
            <ImgWrap>
              <VendorImg
                src={vendor.avatar ? vendor.avatar : defaultAvatar}
                alt="vendor-avatar"
              />
              <VendorName>{vendor.vendorName}</VendorName>
            </ImgWrap>

            <ProductsList>
              <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                  450: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  880: {
                    width: 500,
                    slidesPerView: 3,
                    spaceBetween: 16,
                  },
                  1440: {
                    width: 900,
                    slidesPerView: 4,
                    spaceBetween: 32,
                  },
                }}
              >
                {vendor.products.map((product, id) => {
                  return (
                    <SwiperSlide key={id}>
                      <li>
                        <img src={product.img} alt="product" />
                        <ProductCardBottom>
                          <div>
                            <ProductName>{product.productName}</ProductName>
                            <ProductPrice>{product.productPrice}</ProductPrice>
                            <VendorCardName>{product.vendor}</VendorCardName>
                          </div>
                          <button type="button">
                            <BuyIcon />
                          </button>
                        </ProductCardBottom>
                      </li>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ProductsList>
          </VendorsListItem>
        );
      })}
    </ul>
  );
};
