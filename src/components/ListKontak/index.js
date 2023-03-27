import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListKontak } from '../../actions/kontakAction';

const ListKontak = () => {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
  } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    // panggil action getListKontak
    dispatch(getListKontak());
  }, [dispatch]);
  return (
    <div>
      <h1>List Kontak</h1>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama}-{kontak.nohp}
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>LOADING. . . </p>
      ) : (
        <p>
          {getListKontakError ? getListKontakError : 'Data Kosong'}
        </p>
      )}
    </div>
  );
};

export default ListKontak;
