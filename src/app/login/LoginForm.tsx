'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(false)
    setLoading(true)

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    setLoading(false)

    if (res.ok) {
      const from = searchParams.get('from') || '/'
      router.push(from)
      router.refresh()
    } else {
      setError(true)
      setPassword('')
      inputRef.current?.focus()
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ marginBottom: 16 }}>
        <label
          htmlFor="password"
          style={{
            display: 'block',
            fontSize: 14,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.55)',
            marginBottom: 8,
            letterSpacing: '0.04em',
          }}
        >
          Password
        </label>
        <input
          ref={inputRef}
          id="password"
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false) }}
          autoComplete="current-password"
          aria-describedby={error ? 'login-error' : undefined}
          aria-invalid={error}
          style={{
            display: 'block',
            width: '100%',
            padding: '14px 16px',
            background: 'rgba(255,255,255,0.07)',
            border: error ? '1.5px solid #ff4d4d' : '1.5px solid rgba(255,255,255,0.18)',
            color: '#fff',
            fontSize: 16,
            fontFamily: 'inherit',
            outline: 'none',
            transition: 'border-color 0.15s',
          }}
          onFocus={(e) => {
            if (!error) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
          }}
          onBlur={(e) => {
            if (!error) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
          }}
        />
      </div>

      {error && (
        <p
          id="login-error"
          role="alert"
          style={{
            fontSize: 14,
            color: '#ff6b6b',
            marginBottom: 16,
            marginTop: -4,
          }}
        >
          Incorrect password. Try again.
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !password}
        style={{
          display: 'block',
          width: '100%',
          padding: '14px 24px',
          background: loading || !password ? 'rgba(161,0,255,0.4)' : 'var(--purple)',
          color: '#fff',
          fontSize: 16,
          fontWeight: 600,
          fontFamily: 'inherit',
          border: 'none',
          cursor: loading || !password ? 'not-allowed' : 'pointer',
          transition: 'background 0.15s',
          letterSpacing: '0.02em',
        }}
        onMouseEnter={(e) => {
          if (!loading && password) e.currentTarget.style.background = 'var(--purple-dk)'
        }}
        onMouseLeave={(e) => {
          if (!loading && password) e.currentTarget.style.background = 'var(--purple)'
        }}
      >
        {loading ? 'Checking…' : 'Enter'}
      </button>
    </form>
  )
}
