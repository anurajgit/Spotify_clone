import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PlayBox({ title, see = false, items }) {
  return (
    <section>
      <header className='flex justify-between'>
        <h3 className='text-2xl text-white font-bold hover:underline tracking-tight'>{title}</h3>
        {see && (
          <NavLink className='text-link text-[12px] font-semibold tracking-widest bottom-0' to={see}>
            HEPSİNİ GÖR {/* Replace with your desired text */}
          </NavLink>
        )}
      </header>
      {/* Here you can add your items rendering logic */}
    </section>
  );
}
