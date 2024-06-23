import React from 'react';

const InputForm = ({ nameInput, setNameInput, cekKhodam, loading, reset, kodam }) => {
  return (
    <div className="mb-4 relative">
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        placeholder="Ketik nama kamu di sini"
        className="bg-transparent text-white rounded-full border-2 focus:border-white border-white py-2 px-4 text-center w-80 mb-4"
      />
      <button
        onClick={cekKhodam}
        className="bg-green-500 mr-3 text-white py-2 px-6 rounded-full text-lg hover:bg-green-600 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Cek Khodam'}
      </button>
      {loading && (
        <div className="loading-spinner border-4 border-white border-solid rounded-full w-10 h-10 animate-spin absolute top-[25%] left-[45%]"></div>
      )}
      <button
        onClick={reset}
        className="bg-gray-500 text-white py-2 px-6 rounded-full text-lg mt-4 hover:bg-gray-600 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
      >
        Reset
      </button>
      {kodam && (
        <div className="text-rose-600 mt-4 text-2xl font-bold">
          <h2 className="text-xl mb-2">Khodam {kodam{nameInput}} : {kodam.name}</h2>
          <img className='w-[30%] mx-auto' src={kodam.img} alt="" />
          <h2 className="text-xl mb-2"> {kodam.decs}</h2>

        </div>
      )}
    </div>
  );
};

export default InputForm;
