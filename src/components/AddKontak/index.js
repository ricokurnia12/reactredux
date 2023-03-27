import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak } from '../../actions/kontakAction';

const AddKontak = () => {
  const [nama, setNama] = useState('');
  const [nohp, setNohp] = useState('');
  const { addKontakResult } = useSelector(
    (state) => state.KontakReducer
  );
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addKontak({ nama: nama, nohp: nohp }));
  };

  useEffect(() => {
    addKontakResult && dispatch(getListKontak());
    setNama('');
    setNohp('');
  }, [addKontakResult, dispatch]);

  return (
    <div>
      <h4>AddKontak</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="NAMA"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <input
          type="text"
          placeholder="No Handphone"
          value={nohp}
          onChange={(event) => setNohp(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddKontak;
