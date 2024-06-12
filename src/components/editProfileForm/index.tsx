import { useState } from 'react';
import defaultAvatar from 'assets/images/default-avatar.png';
import EditIcon from 'assets/icons/editIcon';
import { EditImgBtn, ImgWrap } from './styles';
import { useTranslation } from 'react-i18next';
import { ErrorMsg } from 'components/sharedUI/form/styles';
import { clothesSizes, jeansSizes, shoesSizes } from './data/sizes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Inputs } from './types';

export const EditprofileForm = () => {
  const [avatar, setAvatar] = useState<string>('');
  const { t } = useTranslation();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      avatar: null,
      name: '',
      email: '',
      phone: '',
      clothes: clothesSizes[0],
      shoes: shoesSizes[0],
      jeans: jeansSizes[0],
      address: '',
      card: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImgWrap>
          <img
            src={avatar ? avatar : defaultAvatar}
            alt="user-avatar"
            width={120}
            height={120}
          />
          <EditImgBtn htmlFor="user-avatar">
            <input
              type="file"
              {...register('avatar')}
              id="user-avatar"
              hidden
              accept="image/png, image/jpeg, image/heic"
              onChange={event => {
                if (event.target.files && event.target.files.length > 0) {
                  const file = event.target.files[0];
                  if (file) {
                    setValue('avatar', file);
                    const imageUrl = URL.createObjectURL(file);
                    setAvatar(imageUrl);
                  }
                }
              }}
            />
            <EditIcon />
          </EditImgBtn>
        </ImgWrap>
        <h2>{t('editProfile.title')}</h2>
        <div>
          <label htmlFor="user-name">{t('editProfile.name')}</label>
          <input
            type="text"
            {...register('name')}
            className={errors.name ? 'error-input' : ''}
            placeholder={t('editProfile.namePlaceholder')}
            id="user-name"
          />
          {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-email">{t('editProfile.email')}</label>
          <input
            type="text"
            {...register('email')}
            className={errors.email ? 'error-input' : ''}
            placeholder={t('editProfile.emailPlaceholder')}
            id="user-email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-phone">{t('editProfile.phone')}</label>
          <input
            type="text"
            {...register('phone')}
            className={errors.email ? 'error-input' : ''}
            placeholder={t('editProfile.phonePlaceholder')}
            id="user-phone"
          />
          {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
        </div>
        <h2>{t('editProfile.sizesTitle')}</h2>
        <div>
          <label htmlFor="user-clothes">{t('editProfile.sizes.clothes')}</label>
          <select {...register('clothes')} id="user-clothes">
            {clothesSizes.map((size, index) => {
              return (
                <option value={size} key={index}>
                  {size}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="user-shoes">{t('editProfile.sizes.shoes')}</label>
          <select {...register('shoes')} id="user-shoes">
            {shoesSizes.map((size, index) => {
              return (
                <option value={size} key={index}>
                  {size}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="user-jeans">{t('editProfile.sizes.jeans')}</label>
          <select {...register('jeans')} id="user-jeans">
            {jeansSizes.map((size, index) => {
              return (
                <option value={size} key={index}>
                  {size}
                </option>
              );
            })}
          </select>
        </div>
        <Link to="">{t('editProfile.sizeLink')}</Link>
        <div>
          <label htmlFor="user-address">{t('editProfile.address')}</label>
          <input
            type="text"
            {...register('address')}
            className={errors.name ? 'error-input' : ''}
            placeholder={t('editProfile.addressPlaceholder')}
            id="user-address"
          />
          {errors.address && <ErrorMsg>{errors.address.message}</ErrorMsg>}
        </div>
        <div>
          <label htmlFor="user-card">{t('editProfile.card')}</label>
          <input
            type="text"
            {...register('card')}
            className={errors.name ? 'error-input' : ''}
            placeholder={t('editProfile.cardPlaceholder')}
            id="user-card"
          />
          {errors.card && <ErrorMsg>{errors.card.message}</ErrorMsg>}
        </div>
        <button type="submit" disabled={!isDirty || isSubmitting}>
          {t('editProfile.button')}
        </button>
      </form>
    </>
  );
};
