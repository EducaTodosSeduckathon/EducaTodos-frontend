import React, { useContext } from 'react';
import { FaEyeSlash, FaSchool } from 'react-icons/fa';
import Logo from '../../images/logov.png';
import { FaChevronLeft, FaCircleChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';

function Header({ custom = false, back = true, icon, color, title, desc}) {

  const navigate = useNavigate()

  const { logout } = useContext(AuthContext);

  return (
    <>
      <header className="sticky top-0 w-full px-5 py-2 bg-white shadow-sm flex justify-between">
        <button 
          type="button"
          onClick={() => navigate(-1)}
          className='w-10 h-10 bg-brand-100 rounded-2xl grid place-content-center'>
          <FaChevronLeft className='text-brand-500'/>
        </button>
        <img src={Logo} className="h-[40px]" />
        <button type="button" onClick={() => logout()} className="w-10 h-10 bg-red-100 text-red-500 rounded-2xl grid place-content-center text-sm font-medium">Sair</button>

      </header>
      <div className="flex justify-center mt-3">
        {!custom ?
          <section className="w-full max-w-xs bg-white rounded-2xl shadow-lg px-6 py-7 flex flex-col items-center mb-3">
            <div className="flex flex-col items-center mb-3">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                alt="Avatar do Aluno"
                className="w-16 h-16 rounded-full border-4 border-[#E4EDFB] object-cover mb-2"
              />
              <h2 className="text-lg font-bold text-[#233366]">Olá, João Pedro!</h2>
              <span className="text-xs text-[#6D7B97] mt-1">Aluno do 7º ano • Turma B</span>
            </div>
            <div className="mt-3 flex items-center gap-2 bg-[#E4EDFB] rounded-lg px-3 py-1">
              <FaEyeSlash className="text-[#3653B4] text-base" />
              <span className="text-xs text-[#3653B4] font-semibold">Deficiência Auditiva</span>
              <span className="text-xs text-[#A4B1C8] ml-1">(Leitura e Visuais)</span>
            </div>
          </section>
          :
          <section className="w-full max-w-xs bg-white rounded-2xl shadow-lg px-6 py-3 flex flex-col items-center mb-3">
            <div className="flex flex-col items-center mb-3">
              <div className="flex items-center justify-center w-12 h-12 rounded-full text-xl shrink-0" style={{ backgroundColor: `${color}1A`, color: color }}>
                {icon}
              </div>
              <h2 className="text-lg font-bold text-[#233366]">{title}</h2>
              <span className="text-xs text-[#6D7B97] mt-1">{desc}</span>
            </div>
          </section>

        }
      </div>
    </>
  );
}

export default Header;