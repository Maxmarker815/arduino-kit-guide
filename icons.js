// =========================================================================
// Component icons — Arduino Upgraded Learning Kit
// All icons drawn in a 60×40 viewBox, single stroke, optional --signal accent.
// Centralized so the kit grid stays clean and editable.
// =========================================================================

(function () {
  const INK = 'currentColor';
  const RED = '#C73E1D';
  const T_RED = '#F8D7C9';
  const TEAL = '#1B5E6B';

  // Helper to wrap consistent viewbox
  const v = (inner, vb = '0 0 60 40') =>
    `<svg viewBox="${vb}" fill="none" stroke="${INK}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

  const ICONS = {
    arduino_uno: v(`
      <rect x="6" y="8" width="48" height="24" rx="1" fill="${TEAL}" stroke="${INK}" stroke-width="1"/>
      <rect x="4" y="11" width="6" height="6" fill="#8a8a8a" stroke="${INK}" stroke-width="0.8"/>
      <rect x="4" y="22" width="5" height="6" fill="${INK}" stroke="${INK}" stroke-width="0.8"/>
      <rect x="22" y="14" width="14" height="12" fill="${INK}" stroke="none"/>
      <text x="29" y="22.5" font-family="JetBrains Mono, monospace" font-size="3.5" fill="#fff" text-anchor="middle">UNO</text>
      <circle cx="42" cy="14" r="1" fill="${INK}"/>
      <circle cx="46" cy="14" r="1" fill="${INK}"/>
      <circle cx="50" cy="14" r="1" fill="${RED}"/>
      <g stroke="${INK}" stroke-width="0.5">
        <line x1="14" y1="8" x2="14" y2="6"/><line x1="18" y1="8" x2="18" y2="6"/>
        <line x1="22" y1="8" x2="22" y2="6"/><line x1="26" y1="8" x2="26" y2="6"/>
        <line x1="30" y1="8" x2="30" y2="6"/><line x1="34" y1="8" x2="34" y2="6"/>
        <line x1="38" y1="8" x2="38" y2="6"/><line x1="42" y1="8" x2="42" y2="6"/>
        <line x1="46" y1="8" x2="46" y2="6"/><line x1="50" y1="8" x2="50" y2="6"/>
        <line x1="14" y1="32" x2="14" y2="34"/><line x1="18" y1="32" x2="18" y2="34"/>
        <line x1="22" y1="32" x2="22" y2="34"/><line x1="26" y1="32" x2="26" y2="34"/>
        <line x1="30" y1="32" x2="30" y2="34"/><line x1="34" y1="32" x2="34" y2="34"/>
        <line x1="38" y1="32" x2="38" y2="34"/><line x1="42" y1="32" x2="42" y2="34"/>
        <line x1="46" y1="32" x2="46" y2="34"/><line x1="50" y1="32" x2="50" y2="34"/>
      </g>
    `),

    breadboard: v(`
      <rect x="4" y="6" width="52" height="28" rx="0.5" fill="#fff" stroke="${INK}" stroke-width="0.8"/>
      <line x1="6" y1="9" x2="54" y2="9" stroke="${RED}" stroke-width="0.6"/>
      <line x1="6" y1="11" x2="54" y2="11" stroke="${INK}" stroke-width="0.4" stroke-dasharray="0.5 1.5"/>
      <line x1="6" y1="29" x2="54" y2="29" stroke="${INK}" stroke-width="0.4" stroke-dasharray="0.5 1.5"/>
      <line x1="6" y1="31" x2="54" y2="31" stroke="${TEAL}" stroke-width="0.6"/>
      <g fill="${INK}">
      ${(() => {
        let dots = '';
        for (let y = 14; y <= 26; y += 2) for (let x = 8; x <= 52; x += 2) dots += `<circle cx="${x}" cy="${y}" r="0.25"/>`;
        return dots;
      })()}
      </g>
      <line x1="4" y1="20" x2="56" y2="20" stroke="${INK}" stroke-width="0.4" stroke-dasharray="1 1"/>
    `),

    wire_mm: v(`
      <path d="M6 20 Q22 8 30 20 T54 20" stroke="${RED}" stroke-width="1.5"/>
      <rect x="2" y="18" width="6" height="4" fill="${INK}" stroke="none"/>
      <rect x="52" y="18" width="6" height="4" fill="${INK}" stroke="none"/>
      <line x1="2" y1="20" x2="0" y2="20" stroke="${INK}" stroke-width="1.5"/>
      <line x1="58" y1="20" x2="60" y2="20" stroke="${INK}" stroke-width="1.5"/>
    `),

    wire_fm: v(`
      <path d="M6 20 Q22 30 30 20 T54 20" stroke="#2A6FDB" stroke-width="1.5"/>
      <rect x="2" y="17" width="6" height="6" fill="#fff" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="5" cy="20" r="0.8" fill="${INK}"/>
      <rect x="52" y="18" width="6" height="4" fill="${INK}" stroke="none"/>
      <line x1="58" y1="20" x2="60" y2="20" stroke="${INK}" stroke-width="1.5"/>
    `),

    usb_cable: v(`
      <rect x="4" y="14" width="12" height="12" rx="1" fill="${INK}" stroke="none"/>
      <rect x="6" y="17" width="3" height="6" fill="${T_RED}"/>
      <rect x="11" y="17" width="3" height="6" fill="${T_RED}"/>
      <path d="M16 20 Q30 10 40 20 T54 18" stroke="${INK}" stroke-width="1.8" fill="none"/>
      <rect x="50" y="14" width="8" height="8" rx="1" fill="${INK}" stroke="none"/>
      <rect x="52" y="16" width="4" height="2" fill="${T_RED}"/>
    `),

    battery_9v: v(`
      <rect x="14" y="10" width="32" height="20" rx="1.5" fill="${INK}" stroke="${INK}"/>
      <rect x="22" y="6" width="4" height="4" fill="${INK}" rx="1"/>
      <rect x="34" y="6" width="4" height="4" fill="${INK}" rx="1"/>
      <circle cx="24" cy="8" r="1.5" fill="none" stroke="#fff" stroke-width="0.6"/>
      <circle cx="36" cy="8" r="1.5" fill="${RED}" stroke="#fff" stroke-width="0.6"/>
      <text x="30" y="23" font-family="JetBrains Mono, monospace" font-size="5" fill="${RED}" text-anchor="middle" font-weight="700">9V</text>
    `),

    led: v(`
      <path d="M22 6 L22 18 Q22 24 30 26 Q38 24 38 18 L38 6 Z" fill="${T_RED}" stroke="${INK}" stroke-width="1"/>
      <line x1="22" y1="6" x2="38" y2="6" stroke="${RED}" stroke-width="2.5"/>
      <line x1="27" y1="26" x2="27" y2="36" stroke="${INK}" stroke-width="1"/>
      <line x1="33" y1="26" x2="33" y2="32" stroke="${INK}" stroke-width="1"/>
      <line x1="33" y1="32" x2="33" y2="36" stroke="${INK}" stroke-width="1"/>
      <text x="40" y="36" font-family="JetBrains Mono, monospace" font-size="3" fill="${INK}">+ −</text>
    `),

    resistor: v(`
      <line x1="4" y1="20" x2="14" y2="20" stroke="${INK}" stroke-width="1"/>
      <rect x="14" y="14" width="32" height="12" rx="2" fill="#E8DCC2" stroke="${INK}" stroke-width="1"/>
      <rect x="18" y="14" width="2" height="12" fill="#8B4513"/>
      <rect x="22" y="14" width="2" height="12" fill="${INK}"/>
      <rect x="26" y="14" width="2" height="12" fill="${RED}"/>
      <rect x="36" y="14" width="2" height="12" fill="#DAA520"/>
      <line x1="46" y1="20" x2="56" y2="20" stroke="${INK}" stroke-width="1"/>
    `),

    button: v(`
      <rect x="20" y="12" width="20" height="16" fill="#fff" stroke="${INK}" stroke-width="1"/>
      <circle cx="30" cy="20" r="5" fill="${RED}" stroke="${INK}" stroke-width="0.6"/>
      <line x1="18" y1="14" x2="14" y2="14" stroke="${INK}"/>
      <line x1="42" y1="14" x2="46" y2="14" stroke="${INK}"/>
      <line x1="18" y1="26" x2="14" y2="26" stroke="${INK}"/>
      <line x1="42" y1="26" x2="46" y2="26" stroke="${INK}"/>
    `),

    tilt: v(`
      <rect x="12" y="14" width="36" height="12" rx="6" fill="${INK}" stroke="${INK}"/>
      <line x1="4" y1="20" x2="12" y2="20" stroke="${INK}"/>
      <line x1="48" y1="20" x2="56" y2="20" stroke="${INK}"/>
      <circle cx="40" cy="20" r="3" fill="#999"/>
    `),

    potentiometer: v(`
      <rect x="16" y="14" width="28" height="20" rx="1" fill="${TEAL}" stroke="${INK}" stroke-width="1"/>
      <circle cx="30" cy="14" r="6" fill="#444" stroke="${INK}" stroke-width="1"/>
      <line x1="30" y1="14" x2="30" y2="8" stroke="${RED}" stroke-width="1.5"/>
      <line x1="20" y1="34" x2="20" y2="38" stroke="${INK}"/>
      <line x1="30" y1="34" x2="30" y2="38" stroke="${INK}"/>
      <line x1="40" y1="34" x2="40" y2="38" stroke="${INK}"/>
    `),

    rgb_module: v(`
      <rect x="10" y="14" width="40" height="14" rx="0.5" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="20" cy="21" r="4" fill="#fff" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="20" cy="21" r="2" fill="${RED}" opacity="0.7"/>
      <g font-family="JetBrains Mono, monospace" font-size="2.5" fill="#fff">
        <text x="32" y="20">R G B</text>
        <text x="32" y="25">GND</text>
      </g>
      <line x1="32" y1="28" x2="32" y2="32" stroke="${INK}"/>
      <line x1="38" y1="28" x2="38" y2="32" stroke="${INK}"/>
      <line x1="44" y1="28" x2="44" y2="32" stroke="${INK}"/>
      <line x1="50" y1="28" x2="50" y2="32" stroke="${INK}"/>
    `),

    photoresistor: v(`
      <circle cx="30" cy="20" r="9" fill="#fff" stroke="${INK}" stroke-width="1"/>
      <path d="M22 18 Q26 14 30 18 T38 18" stroke="${INK}" stroke-width="0.6" fill="none"/>
      <path d="M22 22 Q26 18 30 22 T38 22" stroke="${INK}" stroke-width="0.6" fill="none"/>
      <line x1="24" y1="29" x2="24" y2="36" stroke="${INK}"/>
      <line x1="36" y1="29" x2="36" y2="36" stroke="${INK}"/>
    `),

    buzzer: v(`
      <circle cx="30" cy="20" r="12" fill="${INK}" stroke="${INK}"/>
      <circle cx="30" cy="20" r="1.5" fill="#fff"/>
      <text x="30" y="22.5" font-family="JetBrains Mono, monospace" font-size="3" fill="#fff" text-anchor="middle"></text>
      <line x1="26" y1="32" x2="26" y2="38" stroke="${INK}"/>
      <line x1="34" y1="32" x2="34" y2="38" stroke="${INK}"/>
      <text x="22" y="38" font-family="JetBrains Mono, monospace" font-size="3" fill="${RED}">+</text>
    `),

    sound_sensor: v(`
      <rect x="6" y="12" width="48" height="16" rx="0.5" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="16" cy="20" r="5" fill="#444" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="16" cy="20" r="3.5" fill="${INK}"/>
      <circle cx="16" cy="20" r="1" fill="#666"/>
      <rect x="28" y="16" width="6" height="6" fill="#3b82f6" stroke="${INK}" stroke-width="0.4"/>
      <circle cx="31" cy="19" r="1" fill="#FFE89E"/>
      <g font-family="JetBrains Mono, monospace" font-size="2" fill="#fff">
        <text x="40" y="20">A0 G +</text>
      </g>
    `),

    flame_sensor: v(`
      <rect x="6" y="12" width="48" height="16" rx="0.5" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="16" cy="20" r="4" fill="${INK}" stroke="${INK}"/>
      <circle cx="16" cy="20" r="2" fill="#333"/>
      <path d="M30 16 L32 20 L30 24 M34 14 L36 20 L34 26" stroke="${RED}" stroke-width="0.8" fill="none"/>
      <g font-family="JetBrains Mono, monospace" font-size="2" fill="#fff">
        <text x="42" y="22">D V G</text>
      </g>
    `),

    water_sensor: v(`
      <rect x="8" y="6" width="14" height="28" rx="0.5" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <g stroke="#DAA520" stroke-width="0.5">
        <line x1="10" y1="10" x2="20" y2="10"/>
        <line x1="10" y1="12" x2="20" y2="12"/>
        <line x1="10" y1="14" x2="20" y2="14"/>
        <line x1="10" y1="16" x2="20" y2="16"/>
        <line x1="10" y1="18" x2="20" y2="18"/>
        <line x1="10" y1="20" x2="20" y2="20"/>
        <line x1="10" y1="22" x2="20" y2="22"/>
        <line x1="10" y1="24" x2="20" y2="24"/>
      </g>
      <rect x="22" y="14" width="22" height="12" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <g font-family="JetBrains Mono, monospace" font-size="2.5" fill="#fff">
        <text x="26" y="21">S + −</text>
      </g>
      <path d="M48 24 Q50 20 52 24 Q50 28 48 24" fill="#3b82f6" stroke="none"/>
    `),

    dht11: v(`
      <rect x="18" y="6" width="24" height="22" rx="0.5" fill="#2A6FDB" stroke="${INK}" stroke-width="0.8"/>
      <g stroke="#fff" stroke-width="0.4">
        <line x1="20" y1="9" x2="40" y2="9"/>
        <line x1="20" y1="11" x2="40" y2="11"/>
        <line x1="20" y1="13" x2="40" y2="13"/>
        <line x1="20" y1="15" x2="40" y2="15"/>
        <line x1="20" y1="17" x2="40" y2="17"/>
        <line x1="20" y1="19" x2="40" y2="19"/>
        <line x1="20" y1="21" x2="40" y2="21"/>
        <line x1="20" y1="23" x2="40" y2="23"/>
        <line x1="20" y1="25" x2="40" y2="25"/>
      </g>
      <text x="30" y="20" font-family="JetBrains Mono, monospace" font-size="3.5" fill="#fff" text-anchor="middle">DHT11</text>
      <line x1="24" y1="28" x2="24" y2="36" stroke="${INK}"/>
      <line x1="30" y1="28" x2="30" y2="36" stroke="${INK}"/>
      <line x1="36" y1="28" x2="36" y2="36" stroke="${INK}"/>
    `),

    lm35: v(`
      <path d="M22 14 L38 14 L38 28 L22 28 Z M22 14 Q22 8 30 8 Q38 8 38 14" fill="${INK}" stroke="${INK}"/>
      <text x="30" y="22" font-family="JetBrains Mono, monospace" font-size="3.5" fill="#fff" text-anchor="middle">LM35</text>
      <line x1="25" y1="28" x2="25" y2="36" stroke="${INK}"/>
      <line x1="30" y1="28" x2="30" y2="36" stroke="${INK}"/>
      <line x1="35" y1="28" x2="35" y2="36" stroke="${INK}"/>
    `),

    servo: v(`
      <rect x="14" y="14" width="22" height="18" rx="1" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <rect x="14" y="10" width="22" height="4" fill="${INK}"/>
      <circle cx="20" cy="20" r="2.5" fill="#fff" stroke="${INK}" stroke-width="0.6"/>
      <circle cx="20" cy="20" r="1" fill="${RED}"/>
      <rect x="14" y="22" width="22" height="2" fill="#fff"/>
      <g stroke="${INK}" stroke-width="0.6">
        <line x1="36" y1="20" x2="42" y2="18"/>
        <line x1="36" y1="22" x2="42" y2="22"/>
        <line x1="36" y1="24" x2="42" y2="26"/>
      </g>
      <text x="46" y="22" font-family="JetBrains Mono, monospace" font-size="3" fill="${INK}">SG90</text>
    `),

    stepper: v(`
      <circle cx="24" cy="20" r="14" fill="#C7C7C7" stroke="${INK}" stroke-width="1"/>
      <circle cx="24" cy="20" r="3" fill="${INK}"/>
      <rect x="24" y="18" width="10" height="4" fill="#C7C7C7" stroke="${INK}" stroke-width="0.6"/>
      <path d="M38 20 Q44 16 50 22" stroke="${RED}" stroke-width="1" fill="none"/>
      <rect x="48" y="14" width="6" height="12" rx="0.5" fill="#fff" stroke="${INK}" stroke-width="0.6"/>
      <line x1="49" y1="14" x2="49" y2="26" stroke="${INK}" stroke-width="0.3"/>
      <line x1="51" y1="14" x2="51" y2="26" stroke="${INK}" stroke-width="0.3"/>
      <line x1="53" y1="14" x2="53" y2="26" stroke="${INK}" stroke-width="0.3"/>
    `),

    driver_uln: v(`
      <rect x="6" y="10" width="48" height="20" rx="0.5" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <rect x="10" y="14" width="22" height="12" fill="${INK}"/>
      <text x="21" y="22" font-family="JetBrains Mono, monospace" font-size="3" fill="#fff" text-anchor="middle">ULN2003</text>
      <circle cx="36" cy="16" r="1" fill="#FFE89E"/>
      <circle cx="40" cy="16" r="1" fill="#FFE89E"/>
      <circle cx="44" cy="16" r="1" fill="#FFE89E"/>
      <circle cx="48" cy="16" r="1" fill="#FFE89E"/>
      <rect x="36" y="20" width="14" height="6" fill="#fff" stroke="${INK}" stroke-width="0.4"/>
    `),

    relay: v(`
      <rect x="6" y="12" width="48" height="18" rx="0.5" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <rect x="10" y="16" width="16" height="10" rx="0.5" fill="#3b82f6" stroke="${INK}" stroke-width="0.5"/>
      <text x="18" y="23" font-family="JetBrains Mono, monospace" font-size="3" fill="#fff" text-anchor="middle">RELAY</text>
      <rect x="32" y="16" width="18" height="10" fill="#1a1814" stroke="${INK}" stroke-width="0.5"/>
      <rect x="34" y="18" width="4" height="6" fill="#DAA520"/>
      <rect x="40" y="18" width="4" height="6" fill="#DAA520"/>
      <rect x="46" y="18" width="4" height="6" fill="#DAA520"/>
    `),

    joystick: v(`
      <rect x="6" y="10" width="48" height="22" rx="0.5" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="22" cy="21" r="9" fill="#1a1814" stroke="${INK}" stroke-width="0.5"/>
      <circle cx="22" cy="21" r="6" fill="#000"/>
      <circle cx="22" cy="21" r="4" fill="${RED}"/>
      <circle cx="22" cy="21" r="2.5" fill="${INK}"/>
      <g font-family="JetBrains Mono, monospace" font-size="2.5" fill="#fff">
        <text x="36" y="16">VRx</text>
        <text x="36" y="21">VRy</text>
        <text x="36" y="26">SW</text>
      </g>
    `),

    lcd_1602: v(`
      <rect x="4" y="8" width="52" height="22" rx="0.5" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <rect x="8" y="12" width="44" height="14" fill="#4a9eff" stroke="${INK}" stroke-width="0.4"/>
      <text x="30" y="18" font-family="JetBrains Mono, monospace" font-size="3" fill="#fff" text-anchor="middle">Hello, World!</text>
      <text x="30" y="23" font-family="JetBrains Mono, monospace" font-size="3" fill="#fff" text-anchor="middle">Arduino time: 42</text>
      <g stroke="${INK}" stroke-width="0.3">
        ${(() => { let l = ''; for (let i = 0; i < 16; i++) l += `<line x1="${6 + i * 3}" y1="30" x2="${6 + i * 3}" y2="33"/>`; return l; })()}
      </g>
    `),

    ir_receiver: v(`
      <path d="M22 8 Q22 4 30 4 Q38 4 38 8 L38 22 L34 26 L26 26 L22 22 Z" fill="${INK}" stroke="${INK}"/>
      <circle cx="30" cy="14" r="3" fill="#444"/>
      <line x1="25" y1="26" x2="25" y2="36" stroke="${INK}"/>
      <line x1="30" y1="26" x2="30" y2="36" stroke="${INK}"/>
      <line x1="35" y1="26" x2="35" y2="36" stroke="${INK}"/>
    `),

    ir_remote: v(`
      <rect x="18" y="4" width="24" height="32" rx="3" fill="#1a1814" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="30" cy="9" r="1.5" fill="${RED}"/>
      <g fill="#fff">
        <circle cx="24" cy="16" r="1.2"/><circle cx="30" cy="16" r="1.2"/><circle cx="36" cy="16" r="1.2"/>
        <circle cx="24" cy="22" r="1.2"/><circle cx="30" cy="22" r="1.2"/><circle cx="36" cy="22" r="1.2"/>
        <circle cx="24" cy="28" r="1.2"/><circle cx="30" cy="28" r="1.2"/><circle cx="36" cy="28" r="1.2"/>
      </g>
    `),

    rtc: v(`
      <rect x="8" y="10" width="44" height="20" rx="0.5" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="20" cy="20" r="7" fill="#C0C0C0" stroke="${INK}" stroke-width="0.5"/>
      <circle cx="20" cy="20" r="5" fill="#fff" stroke="${INK}" stroke-width="0.3"/>
      <text x="20" y="22" font-family="JetBrains Mono, monospace" font-size="3" fill="${INK}" text-anchor="middle">+</text>
      <rect x="32" y="14" width="14" height="10" fill="${INK}"/>
      <text x="39" y="20" font-family="JetBrains Mono, monospace" font-size="2.5" fill="#fff" text-anchor="middle">DS1302</text>
    `),

    rfid: v(`
      <rect x="6" y="6" width="48" height="28" rx="0.5" fill="${TEAL}" stroke="${INK}" stroke-width="0.8"/>
      <rect x="10" y="10" width="32" height="20" rx="0.5" fill="none" stroke="#DAA520" stroke-width="0.6"/>
      <rect x="12" y="12" width="28" height="16" rx="0.5" fill="none" stroke="#DAA520" stroke-width="0.6"/>
      <rect x="14" y="14" width="24" height="12" rx="0.5" fill="none" stroke="#DAA520" stroke-width="0.6"/>
      <rect x="44" y="14" width="6" height="12" fill="${INK}"/>
      <text x="47" y="22" font-family="JetBrains Mono, monospace" font-size="3" fill="#fff" text-anchor="middle">RC</text>
    `),

    rfid_card: v(`
      <rect x="6" y="10" width="32" height="22" rx="2" fill="#fff" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="14" cy="20" r="3.5" fill="none" stroke="${INK}" stroke-width="0.5"/>
      <path d="M18 14 Q22 20 18 26" stroke="${INK}" stroke-width="0.4" fill="none"/>
      <path d="M21 12 Q26 20 21 28" stroke="${INK}" stroke-width="0.4" fill="none"/>
      <rect x="40" y="14" width="14" height="14" rx="3" fill="#2A6FDB" stroke="${INK}" stroke-width="0.8"/>
      <circle cx="44" cy="22" r="2" fill="none" stroke="#fff" stroke-width="0.4"/>
      <circle cx="44" cy="22" r="1" fill="#fff"/>
    `),

    matrix_8x8: v(`
      <rect x="14" y="6" width="32" height="28" rx="1" fill="${INK}" stroke="${INK}"/>
      <g fill="${RED}" opacity="0.8">
        ${(() => {
          let dots = '';
          for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) dots += `<circle cx="${17 + x * 3.5}" cy="${9 + y * 3.5}" r="0.9"/>`;
          return dots;
        })()}
      </g>
    `),

    seg7_single: v(`
      <rect x="20" y="8" width="20" height="24" rx="1" fill="${INK}" stroke="${INK}"/>
      <g stroke="${RED}" stroke-width="2.5" stroke-linecap="square" opacity="0.95">
        <line x1="25" y1="12" x2="35" y2="12"/>
        <line x1="35" y1="13" x2="35" y2="19"/>
        <line x1="35" y1="21" x2="35" y2="27"/>
        <line x1="25" y1="28" x2="35" y2="28"/>
        <line x1="25" y1="21" x2="25" y2="27"/>
        <line x1="25" y1="13" x2="25" y2="19"/>
        <line x1="26" y1="20" x2="34" y2="20"/>
      </g>
    `),

    seg7_4digit: v(`
      <rect x="6" y="10" width="48" height="20" rx="1" fill="${INK}" stroke="${INK}"/>
      <g stroke="${RED}" stroke-width="1.8" stroke-linecap="square" opacity="0.95">
        ${(() => {
          const draw = (ox) => `
            <line x1="${ox+2}" y1="14" x2="${ox+8}" y2="14"/>
            <line x1="${ox+8}" y1="15" x2="${ox+8}" y2="19"/>
            <line x1="${ox+8}" y1="21" x2="${ox+8}" y2="25"/>
            <line x1="${ox+2}" y1="26" x2="${ox+8}" y2="26"/>
            <line x1="${ox+2}" y1="21" x2="${ox+2}" y2="25"/>
            <line x1="${ox+2}" y1="15" x2="${ox+2}" y2="19"/>
            <line x1="${ox+3}" y1="20" x2="${ox+7}" y2="20"/>
          `;
          return draw(8) + draw(18) + draw(30) + draw(40);
        })()}
        <circle cx="28" cy="17" r="0.8" fill="${RED}" stroke="none"/>
        <circle cx="28" cy="23" r="0.8" fill="${RED}" stroke="none"/>
      </g>
    `),

    shift_register: v(`
      <rect x="14" y="8" width="32" height="24" rx="0.5" fill="${INK}" stroke="${INK}"/>
      <circle cx="18" cy="12" r="1.2" fill="none" stroke="#fff" stroke-width="0.5"/>
      <text x="30" y="20" font-family="JetBrains Mono, monospace" font-size="3" fill="#fff" text-anchor="middle">74HC595</text>
      <text x="30" y="25" font-family="JetBrains Mono, monospace" font-size="2.5" fill="#999" text-anchor="middle">DIP-16</text>
      <g stroke="${INK}" stroke-width="0.5">
        ${(() => {
          let pins = '';
          for (let i = 0; i < 8; i++) {
            pins += `<line x1="${15 + i * 4}" y1="8" x2="${15 + i * 4}" y2="5"/>`;
            pins += `<line x1="${15 + i * 4}" y1="32" x2="${15 + i * 4}" y2="35"/>`;
          }
          return pins;
        })()}
      </g>
    `),

    keypad: v(`
      <rect x="10" y="4" width="40" height="32" rx="1" fill="#1a1814" stroke="${INK}" stroke-width="0.8"/>
      <g fill="${T_RED}" stroke="${INK}" stroke-width="0.3" font-family="JetBrains Mono, monospace" font-size="3" text-anchor="middle">
        ${(() => {
          const labels = ['1','2','3','A','4','5','6','B','7','8','9','C','*','0','#','D'];
          let s = '';
          for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
            const x = 14 + c * 9, y = 8 + r * 7;
            s += `<rect x="${x}" y="${y}" width="7" height="5" rx="0.5"/>`;
            s += `<text x="${x + 3.5}" y="${y + 3.5}" fill="${INK}" stroke="none">${labels[r * 4 + c]}</text>`;
          }
          return s;
        })()}
      </g>
    `),
  };

  // Inject icons into the page
  window.KitIcons = ICONS;

  function fill() {
    document.querySelectorAll('[data-icon]').forEach(el => {
      if (el.querySelector('img')) return;
      const name = el.getAttribute('data-icon');
      if (ICONS[name]) el.innerHTML = ICONS[name];
      else el.innerHTML = `<svg viewBox="0 0 60 40"><rect x="6" y="6" width="48" height="28" fill="${T_RED}" stroke="${INK}" stroke-width="1"/></svg>`;
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fill);
  } else {
    fill();
  }
})();
