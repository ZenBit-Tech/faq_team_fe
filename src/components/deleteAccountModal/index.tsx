import { MouseEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import CloseIcon from 'assets/icons/iconClose';
import DeleteIcon from 'assets/icons/iconDelete';

import { Backdrop, CancelBtn, CloseBtn, DeleteBtn, Modal } from './styles';
import { DeleteAccountModalProps } from './types';

const modalRoot = document.querySelector('#modal-root');
const escapeBtn: string = 'Escape';
const hiddenOverflow: string = 'hidden';
const autoOverflow: string = 'auto';
const deleteIconSize: number = 94;

export const DeleteAccountModal = ({
  isModalOpen,
  onClose,
}: DeleteAccountModalProps) => {
  const { t } = useTranslation();
  useEffect(() => {
    const handleModalCloseByEsc = (evt: KeyboardEvent) => {
      if (evt.code === escapeBtn) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleModalCloseByEsc);

    if (isModalOpen || modalRoot?.children.length) {
      document.body.style.overflow = hiddenOverflow;
    }

    return () => {
      document.body.style.overflow = autoOverflow;
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
          <DeleteIcon width={deleteIconSize} height={deleteIconSize} />
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
