import React, { useState } from 'react';
import InputForm from './Components/CardKodam';
import emyu from './Images/emyu.jpg'
import rumme from './Images/rumme.jpg'
import messi from './Images/messi.jpg'

function App() {
  const [nameInput, setNameInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [khodam, setKhodam] = useState(null);

  const khodams = [
    { name: 'harimau himalaya' },
    { name: 'nyi blorong' },
    { name: 'keris sakti' },
    { name: 'kucing isriwil' },
    { name: 'kucing oyen' },
    { name: 'sapi kurban' },
    { name: 'manusia kepala buaya' },
    { name: 'buaya lgbt' },
    { name: 'sapu lidi' },
    { name: 'tehyung' },
    { name: 'jongkok bts' },
    { name: 'karina aespa' },
    { name: 'boboiboy solar' },
    { name: 'boboiboy daun' },
    { name: 'kipas angin' },
    { name: 'pocong' },
    { name: 'rawa rontek' },
    { name: 'harimau putih' },
    { name: 'Bocil epep' },
    { name: 'Alok' },
    { name: 'Goat Messi' },

    { name: 'Rummenigge',img: rumme, decs: 'kamu adalah titisan Rumme' },
    { name: 'Messi',img: messi, decs: 'kamu adalah goat' },
    { name: 'emyu',img: emyu, decs: 'yahaha fans emyu' },
    // tambahkan kodam
  ];

  const cekKhodam = () => {
    if (!nameInput) {
      alert('GAK BOLEH KOSONG!😡');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
      setKhodam(randomKhodam);
      setLoading(false);
    }, 500);
  };

  const resetForm = () => {
    setNameInput('');
    setKhodam(null);
  };

  return (
    <div className="bg-red-600   min-h-screen flex flex-col justify-center items-center text-center">
      <div className="card  border-2 bg-red-600 rounded-lg p-8 max-w-lg  w-full shadow-lg backdrop-blur-lg relative shadow-slate-200">
        <h1 className="text-white text-3xl mb-4 font-bold">Cek Khodam</h1>
        <p className="text-white mb-4">Masukkan nama untuk mengetahui khodam</p>
        
        <InputForm
          nameInput={nameInput}
          setNameInput={setNameInput}
          cekKhodam={cekKhodam}
          loading={loading}
          reset={resetForm}
          kodam={khodam} // Prop ini harus disesuaikan dengan nama yang benar (kodam vs khodam)
        />
      </div>
      <br>
        <br>
          <br>
            <br>
      <div className="text-white">
       @di buat oleh Ryu
      </div>
    </div>
    
  );
}

export default App;
