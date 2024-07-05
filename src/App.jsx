import React, { useState } from 'react';
import InputForm from './Components/CardKodam';
import './App.css';
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
    { name: 'dodo' },
    { name: 'El gasing' },
    { name: 'El dear god' },
    { name: 'kipas angin' },
    { name: 'kulkas' },
    { name: 'katak bizer' },
    { name: 'nasi padang' },
    { name: 'skibidi toilet' },
    { name: 'sigma' },
    { name: 'mewing' },
    { name: 'ngeriz' },
    { name: 'prabowo' },
    { name: 'mas anis mas anis' },
    { name: 'jokowi' },
    { name: 'megachan' },
    
    { name: 'emyu',img: emyu, decs: 'yahaha fans emyu' },
    { name: 'buta tuli' },
    { name: 'harimau jawa' },
    { name: 'setan kober' },
    { name: 'tuyul' },
    { name: 'genderuwo' },
    { name: 'jenglot' },
    { name: 'cakar harimau' },
    { name: 'srigala jadian' },
    { name: 'genderuwo' },
    { name: 'leak bali' },
    { name: 'kereta hantu' },
    { name: 'siluman ular' },
    { name: 'siluman kuda' },
    { name: 'tumbal roh' },
    { name: 'tuyul hoki' },
    { name: 'siluman harimau' },
    { name: 'pocong galau' },
    { name: 'malaikat jatuh' },
    { name: 'manusia kucing' },
    { name: 'setan gundul' },
    { name: 'tumbal roh' },
    { name: 'tuyul pocong' },
    { name: 'genderuwo siluman' },
    { name: 'jimat' },
    { name: 'kukang' },
    { name: 'naga sakti' },
    { name: 'orang dalam' },
    { name: 'kurama' },
    { name: 'kunti bogel' },
    { name: 'ganjar' },
    { name: 'banteng merah' },
    { name: 'PDI' },
    { name: 'vespa' },
    { name: 'setan merah' },
    { name: 'cekgu besar' },
    { name: 'upin' },
    { name: 'ipin' },
    { name: 'mewing gyat 10x' },
    { name: 'naga emas' },
    { name: 'pempek' },
    { name: 'mie goreng' },
    { name: 'windah basudara' },
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
    <div className="bodys   min-h-screen flex flex-col justify-center items-center text-center">
      <div className="card backdrop-opacity-60 backdrop-invert bg-white/30  border-2 bg-blue-600 rounded-lg p-8 max-w-lg  w-full shadow-lg backdrop-blur-lg relative shadow-slate-200">
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
      <br/>
      <br/>
      <div>
      <h1 className="text-white"> @di buat oleh Rio</h1>
      </div>
    </div>
    
  );
}

export default App;
