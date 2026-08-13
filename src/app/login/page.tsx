import { Suspense } from 'react'
import LoginForm from './LoginForm'

export const metadata = {
  title: 'Sign in — US Trends 2027',
}

export default function LoginPage() {
  return (
    <div
      className="on-dark"
      style={{
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(24px, 5.5vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background GT graphic */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/Acc_GT_Solid_P1_RGB.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-120px',
          bottom: '-80px',
          width: 'clamp(320px, 45vw, 600px)',
          opacity: 0.06,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 440 }}>
        <span className="eyebrow">D&amp;DP · US Life Trends POV 2027</span>

        <h1
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 300,
            color: '#fff',
            lineHeight: 1.2,
            marginBottom: 40,
          }}
        >
          Enter site password
        </h1>

        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  )
}
