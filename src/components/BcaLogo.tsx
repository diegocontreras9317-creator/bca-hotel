import React from 'react';

interface BcaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'white' | 'cream' | 'monochrome';
  logoImage?: string;
}

export const BcaLogo: React.FC<BcaLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'white',
  logoImage,
}) => {
  const sizeMap = {
    sm: { height: 42, subSize: 'text-[0.5rem]', tracking: 'tracking-[0.4em]' },
    md: { height: 52, subSize: 'text-[0.6rem]', tracking: 'tracking-[0.45em]' },
    lg: { height: 64, subSize: 'text-[0.75rem]', tracking: 'tracking-[0.5em]' },
    xl: { height: 80, subSize: 'text-[0.95rem]', tracking: 'tracking-[0.55em]' },
  };

  const current = sizeMap[size];

  const strokeColor = variant === 'cream' ? '#F5F1E9' : '#FFFFFF';
  const subtitleColor = variant === 'cream' ? 'text-[#FAF8F5]' : 'text-white';

  if (logoImage) {
    return (
      <div className={`inline-flex items-center justify-center select-none w-full h-full ${className}`}>
        <img
          src={logoImage}
          alt="BCA HOTEL"
          style={{ height: `${current.height}px` }}
          className="w-auto h-full max-h-[64px] object-contain block"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center select-none font-sans ${className}`}>
      {/* Monogram matching the exact Logo Hotel BCA-04.png geometry */}
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 240 76"
          className="w-auto h-full"
          style={{ height: `${current.height}px` }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* The signature geometric criss-cross line pattern of BCA logo */}
            <pattern id="bcaWireframe" width="14" height="14" patternUnits="userSpaceOnUse">
              <path
                d="M0 14L14 0M3 14L14 3M0 11L11 0M7 14L14 7M0 7L7 0M10 14L14 10M0 3L3 0M0 0L14 14M0 4L10 14M4 0L14 10"
                stroke={strokeColor}
                strokeWidth="0.9"
                strokeOpacity="0.85"
              />
            </pattern>
          </defs>

          {/* Letter B */}
          <g>
            <path
              d="M14 6 H 48 C 62 6 68 15 68 24 C 68 31 63 36 56 38 C 65 40 71 47 71 58 C 71 70 60 74 46 74 H 14 Z"
              fill="url(#bcaWireframe)"
              stroke={strokeColor}
              strokeWidth="2.2"
            />
            <path d="M 28 17 H 44 C 50 17 54 20 54 25 C 54 30 50 33 44 33 H 28 Z" fill="#0C0C0C" />
            <path d="M 28 45 H 46 C 52 45 57 48 57 55 C 57 62 52 65 46 65 H 28 Z" fill="#0C0C0C" />
          </g>

          {/* Letter C */}
          <g>
            <path
              d="M 148 24 C 143 14 132 6 114 6 C 90 6 78 24 78 40 C 78 56 90 74 114 74 C 132 74 144 66 148 56 H 132 C 128 61 122 64 114 64 C 99 64 92 51 92 40 C 92 29 99 16 114 16 C 122 16 128 19 132 24 Z"
              fill="url(#bcaWireframe)"
              stroke={strokeColor}
              strokeWidth="2.2"
            />
          </g>

          {/* Letter A */}
          <g>
            <path
              d="M 188 6 L 156 74 H 172 L 180 56 H 208 L 216 74 H 232 L 200 6 Z"
              fill="url(#bcaWireframe)"
              stroke={strokeColor}
              strokeWidth="2.2"
            />
            <polygon points="194,22 184,46 204,46" fill="#0C0C0C" />
          </g>
        </svg>
      </div>

      {/* Subtitle "H O T E L" */}
      <span
        className={`font-sans font-light ${current.subSize} ${current.tracking} uppercase ${subtitleColor} mt-1.5`}
        style={{ letterSpacing: '0.55em', textIndent: '0.55em' }}
      >
        HOTEL
      </span>
    </div>
  );
};
