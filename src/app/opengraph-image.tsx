import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Style & Clothing Preference Survey'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#fdeee9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow top-right */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,196,184,0.35) 0%, transparent 70%)',
          display: 'flex',
        }} />
        {/* Ambient glow bottom-left */}
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,137,122,0.2) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Flower emblem */}
        <svg width="72" height="72" viewBox="0 0 36 36" style={{ marginBottom: '20px' }}>
          <ellipse cx="18" cy="8"  rx="4" ry="8" fill="#e8c4b8" opacity="0.9"/>
          <ellipse cx="18" cy="8"  rx="4" ry="8" fill="#e8c4b8" opacity="0.8" transform="rotate(60 18 18)"/>
          <ellipse cx="18" cy="8"  rx="4" ry="8" fill="#e8c4b8" opacity="0.8" transform="rotate(120 18 18)"/>
          <ellipse cx="18" cy="8"  rx="4" ry="8" fill="#e8c4b8" opacity="0.8" transform="rotate(180 18 18)"/>
          <ellipse cx="18" cy="8"  rx="4" ry="8" fill="#e8c4b8" opacity="0.8" transform="rotate(240 18 18)"/>
          <ellipse cx="18" cy="8"  rx="4" ry="8" fill="#e8c4b8" opacity="0.8" transform="rotate(300 18 18)"/>
          <circle cx="18" cy="18" r="6"   fill="#d4a89a"/>
          <circle cx="18" cy="18" r="2.5" fill="#c9897a"/>
        </svg>

        {/* Eyebrow */}
        <div style={{
          fontSize: '15px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#c9897a',
          marginBottom: '18px',
          fontFamily: 'sans-serif',
        }}>
          ファッション＆スタイル調査
        </div>

        {/* Title line 1 */}
        <div style={{
          fontSize: '74px',
          fontWeight: 300,
          color: '#2c2420',
          lineHeight: 1.1,
          fontFamily: 'Georgia, serif',
        }}>
          Style &amp; Clothing
        </div>

        {/* Title line 2 — italic accent */}
        <div style={{
          fontSize: '74px',
          fontWeight: 300,
          fontStyle: 'italic',
          color: '#c9897a',
          lineHeight: 1.1,
          marginBottom: '28px',
          fontFamily: 'Georgia, serif',
        }}>
          Preference Survey
        </div>

        {/* Divider dot row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <div style={{ width: '48px', height: '1px', background: '#d4a89a' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#d4a89a' }} />
          <div style={{ width: '48px', height: '1px', background: '#d4a89a' }} />
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: '20px',
          color: '#6b5a55',
          fontFamily: 'sans-serif',
          fontWeight: 300,
          marginBottom: '28px',
        }}>
          Help us design clothes that truly fit your life.
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: '12px' }}>
          {['🔒 Anonymous · 匿名', '⏱ ~5 min', '👗 Fashion'].map((label) => (
            <div
              key={label}
              style={{
                fontSize: '14px',
                color: '#c9897a',
                background: '#f5e8e4',
                border: '1.5px solid #e8c4b8',
                borderRadius: '999px',
                padding: '6px 18px',
                fontFamily: 'sans-serif',
                display: 'flex',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
