import { MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DeleteAccountModalProps } from './types';
import { useTranslation } from 'react-i18next';
import { Backdrop, Modal, CancelBtn, DeleteBtn, CloseBtn } from './styles';
import DeleteIcon from 'assets/icons/iconDelete';
import CloseIcon from 'assets/icons/iconClose';

const modalRoot = document.querySelector('#modal-root');

export const DeleteAccountModal = ({
  isModalOpen,
  onClose,
}: DeleteAccountModalProps) => {
  const { t } = useTranslation();
  useEffect(() => {
    const handleModalCloseByEsc = (evt: KeyboardEvent) => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleModalCloseByEsc);

    if (isModalOpen || modalRoot?.children.length) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleModalCloseByEsc);
    };
  }, [onClose, isModalOpen]);

  const handleModalCloseByClickOnBackdrop = (evt: MouseEvent<HTMLElement>) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <>
      <Backdrop onClick={handleModalCloseByClickOnBackdrop}>
        <Modal>
          <CloseBtn type="button" onClick={onClose}>
            <CloseIcon />
          </CloseBtn>
          <DeleteIcon width={94} height={94} />
          <h1>{t('deleteAccount.title')}</h1>
          <p>{t('deleteAccount.subtitle')}</p>
          <ul>
            <li>
              <CancelBtn type="button" onClick={onClose}>
                {t('deleteAccount.cancel')}
              </CancelBtn>
            </li>
            <li>
              <DeleteBtn type="submit">{t('deleteAccount.delete')}</DeleteBtn>
            </li>
          </ul>
        </Modal>
      </Backdrop>
    </>,
    modalRoot,
  );
};
