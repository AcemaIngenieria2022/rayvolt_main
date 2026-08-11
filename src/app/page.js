"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8fafc',
      padding: '24px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Luces direccionales de alta intensidad */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(92, 225, 180, 0.28) 0%, transparent 65%)',
        filter: 'blur(90px)', pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute', bottom: '-10%', right: '-10%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, transparent 65%)',
        filter: 'blur(90px)', pointerEvents: 'none'
      }} />

      {/* Trama geométrica minimalista */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(30, 27, 75, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30, 27, 75, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        pointerEvents: 'none'
      }} />

      {/* TARJETA / PANEL PRINCIPAL */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '540px',
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: '28px',
        padding: '52px 40px 45px 40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.9)',
        boxShadow: `
          0 20px 50px -15px rgba(30, 27, 75, 0.1),
          0 0 30px -5px rgba(92, 225, 180, 0.25)
        `
      }}>

        {/* Borde superior resplandeciente en gradiente */}
        <div style={{
          position: 'absolute', top: 0, left: '10%', right: '10%', height: '3px',
          background: 'linear-gradient(90deg, transparent, var(--rayvolt-mint), var(--rayvolt-purple), transparent)',
          borderRadius: '99px'
        }} />

        {/* Rayo decorativo lateral de energía */}
        <div style={{
          position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '4px',
          background: 'linear-gradient(180deg, var(--rayvolt-mint) 0%, var(--rayvolt-purple) 100%)',
          borderRadius: '0 4px 4px 0',
          boxShadow: '2px 0 12px rgba(92, 225, 180, 0.6)'
        }} />

        {/* Logo Ray Volt */}
        <div style={{
          marginBottom: '28px',
          width: '100%',
          maxWidth: '310px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Image 
            src="/imagenes/ray-volt.webp"
            alt="RAY VOLT"
            width={310}
            height={155}
            priority
            unoptimized
            style={{ 
              objectFit: 'contain',
              filter: 'drop-shadow(0px 8px 16px rgba(30, 27, 75, 0.08))'
            }}
          />
        </div>

        {/* Separador tipo pulso de energía */}
        <div style={{
          width: '60px',
          height: '3px',
          borderRadius: '99px',
          background: 'linear-gradient(90deg, var(--rayvolt-mint), var(--rayvolt-purple))',
          marginBottom: '32px'
        }} />

        {/* Bloque Tipográfico */}
        <h1 style={{
          fontSize: 'clamp(32px, 7vw, 46px)', 
          color: 'var(--rayvolt-navy)', 
          fontWeight: '800', 
          margin: '0', 
          letterSpacing: '-0.5px',
          lineHeight: '1.1'
        }}>
          ¡Bienvenido!
        </h1>
        
        <p style={{
          fontSize: 'clamp(12px, 3vw, 13px)', 
          color: 'var(--rayvolt-purple)', 
          marginTop: '12px', 
          letterSpacing: '5px', 
          textTransform: 'uppercase', 
          fontWeight: '700'
        }}>
          Sitio en construcción
        </p>

      </div>
    </main>
  );
}