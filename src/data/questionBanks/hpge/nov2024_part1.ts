import { Question } from '../../../types/exam';

export const HPGE_NOV2024_PART1: Question[] = [
  // Item 1
  {
    id: 'hpge-nov2024-q1',
    number: 1,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Atmospheric Pressure & Barometer',
    text: 'A mercury barometer at the top of a mountain reads 538 mmHg, while another barometer at the base reads 700 mmHg. Assuming a constant unit weight of air of 12 N/m³, determine the height of the mountain in kilometers.',
    figureSvg: `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.05"/>
        </linearGradient>
        <linearGradient id="mtnGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#64748b"/>
          <stop offset="100%" stop-color="#334155"/>
        </linearGradient>
      </defs>
      <rect width="460" height="260" rx="8" fill="url(#skyGrad)"/>
      <!-- Mountain Profile -->
      <polygon points="40,230 200,60 260,110 320,50 420,230" fill="url(#mtnGrad)" stroke="#94a3b8" stroke-width="2"/>
      <!-- Snowcap -->
      <polygon points="180,78 200,60 220,78 210,85 200,80 190,85" fill="#f8fafc"/>
      <polygon points="305,70 320,50 335,70 325,75 315,75" fill="#f8fafc"/>
      <!-- Ground line -->
      <line x1="20" y1="230" x2="440" y2="230" stroke="#475569" stroke-width="3"/>
      <!-- Top Barometer Marker -->
      <circle cx="200" cy="55" r="5" fill="#f59e0b"/>
      <rect x="70" y="32" width="120" height="36" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="130" y="47" fill="#fbbf24" font-size="11" font-family="monospace" text-anchor="middle" font-weight="bold">Mountain Top</text>
      <text x="130" y="60" fill="#f8fafc" font-size="11" font-family="monospace" text-anchor="middle">538 mmHg</text>
      <line x1="190" y1="50" x2="200" y2="55" stroke="#f59e0b" stroke-width="1.5"/>
      <!-- Base Barometer Marker -->
      <circle cx="70" cy="230" r="5" fill="#38bdf8"/>
      <rect x="25" y="175" width="120" height="36" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="85" y="190" fill="#38bdf8" font-size="11" font-family="monospace" text-anchor="middle" font-weight="bold">Mountain Base</text>
      <text x="85" y="203" fill="#f8fafc" font-size="11" font-family="monospace" text-anchor="middle">700 mmHg</text>
      <line x1="85" y1="211" x2="70" y2="230" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Dimension Arrow Height h -->
      <line x1="435" y1="55" x2="435" y2="230" stroke="#f59e0b" stroke-width="2"/>
      <polygon points="435,50 431,60 439,60" fill="#f59e0b"/>
      <polygon points="435,235 431,225 439,225" fill="#f59e0b"/>
      <text x="420" y="145" fill="#f59e0b" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="end">h = ?</text>
      <text x="250" y="248" fill="#94a3b8" font-size="11" font-family="sans-serif">γ_air = 12 N/m³ (constant)</text>
    </svg>`,
    figureCaption: 'Figure 1: Atmospheric pressure variation with mountain elevation',
    options: [
      { label: 'A', text: '3.13' },
      { label: 'B', text: '0.8' },
      { label: 'C', text: '2.2' },
      { label: 'D', text: '1.8' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The difference in mercury barometer readings between the base and mountain top corresponds to the weight of the intervening column of air: ΔP = γ_air · h.',
      formulas: [
        '\\Delta h_{Hg} = 700\\text{ mmHg} - 538\\text{ mmHg} = 162\\text{ mmHg} = 0.162\\text{ m of Hg}',
        '\\Delta P = \\gamma_{Hg} \\times \\Delta h_{Hg} = 9810(13.6)\\text{ N/m}^3 \\times 0.162\\text{ m} = 21,613\\text{ N/m}^2',
        '\\Delta P = \\gamma_{air} \\times h \\implies 21,613 = 12 \\times h',
        'h = \\frac{21,613}{12} = 1,801\\text{ m} \\approx 1.8\\text{ km}',
      ],
      steps: [
        'Step 1: Compute the difference in mercury barometer readings: Δh_Hg = 700 mmHg - 538 mmHg = 162 mmHg = 0.162 m Hg.',
        'Step 2: Convert pressure difference to Pascals (N/m²): ΔP = γ_water · SG_Hg · Δh_Hg = 9810(13.6)(0.162) = 21,613 N/m².',
        'Step 3: Equate ΔP to the air column pressure: ΔP = γ_air · h => 21,613 = 12 · h.',
        'Step 4: Solve for mountain height: h = 21,613 / 12 = 1,801 m ≈ 1.8 km.',
      ],
      finalAnswer: '1.8 (Option D)',
      pageNumber: 236,
    },
  },

  // Item 2
  {
    id: 'hpge-nov2024-q2',
    number: 2,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Phase Relationships',
    text: 'A soil sample has a specific gravity of solids of 2.3, a water content of 15%, a moist unit weight of 18 kN/m³, and a void ratio of 0.45. Determine the dry unit weight of the soil, in kN/m³.',
    options: [
      { label: 'A', text: '18.34' },
      { label: 'B', text: '14.44' },
      { label: 'C', text: '15.13' },
      { label: 'D', text: '15.65' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Dry unit weight is obtained directly using the standard fundamental phase relationship γ_dry = γ_m / (1 + w).',
      formulas: [
        '\\gamma_{dry} = \\frac{\\gamma_m}{1 + w}',
        '\\gamma_{dry} = \\frac{18}{1 + 0.15} = \\frac{18}{1.15} = 15.652\\text{ kN/m}^3',
      ],
      steps: [
        'Step 1: Identify given parameters: moist unit weight γ_m = 18 kN/m³, moisture content w = 15% = 0.15.',
        'Step 2: Apply the fundamental phase relationship: γ_dry = γ_m / (1 + w).',
        'Step 3: Calculate: γ_dry = 18 / (1 + 0.15) = 18 / 1.15 = 15.65 kN/m³.',
      ],
      finalAnswer: '15.65 (Option D)',
      pageNumber: 237,
    },
  },

  // Item 3
  {
    id: 'hpge-nov2024-q3',
    number: 3,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Variable Density Hydrostatic Pressure',
    text: 'The weight density of a mud is given by γ = 12 + 0.5h, where γ is in kN/m³ and h is in meters. Determine the pressure, in kPa, at a depth of 2 m.',
    options: [
      { label: 'A', text: '26.0' },
      { label: 'B', text: '25.3' },
      { label: 'C', text: '25.0' },
      { label: 'D', text: '26.2' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'For a fluid with variable weight density γ(h), total hydrostatic pressure at depth H is found by integrating dP = γ(h) dh from 0 to H.',
      formulas: [
        'P = \\int_0^H \\gamma(h)\\,dh',
        'P = \\int_0^2 (12 + 0.5h)\\,dh = \\left[ 12h + 0.25h^2 \\right]_0^2',
        'P = 12(2) + 0.25(2)^2 = 24 + 1 = 25\\text{ kPa}',
      ],
      steps: [
        'Step 1: Set up the integral for hydrostatic pressure: P = ∫₀ᴴ γ(h) dh.',
        'Step 2: Substitute the weight density equation γ = 12 + 0.5h with limits h = 0 to h = 2 m.',
        'Step 3: Integrate: ∫ (12 + 0.5h) dh = [12h + 0.25h²] from 0 to 2.',
        'Step 4: Evaluate: P = 12(2) + 0.25(4) = 24 + 1 = 25 kPa.',
      ],
      finalAnswer: '25.0 (Option C)',
      pageNumber: 237,
    },
  },

  // Item 4
  {
    id: 'hpge-nov2024-q4',
    number: 4,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Hydrostatic Force on Submerged Gates',
    text: 'A vertical trapezoidal gate has its top edge at the water surface and is 1.5 m long. Its two vertical sides are 2.4 m and 3.0 m, respectively. The gate is hinged along its top edge. Determine the force, in kN, required at the bottom of the gate to just open it. The applied force acts normal to the gate at a point located 0.75 m from each side of the gate.',
    figureSvg: `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <pattern id="hatchH4" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#38bdf8" stroke-width="1.2" opacity="0.4"/>
        </pattern>
      </defs>
      <!-- Water surface -->
      <line x1="40" y1="40" x2="380" y2="40" stroke="#38bdf8" stroke-width="2.5"/>
      <polygon points="60,35 65,40 55,40" fill="#38bdf8"/>
      <line x1="53" y1="33" x2="67" y2="33" stroke="#38bdf8" stroke-width="1"/>
      <text x="80" y="32" fill="#38bdf8" font-size="11" font-family="sans-serif">Water Surface</text>
      <!-- Top Hinge (Length 1.5 m) -->
      <rect x="100" y="36" width="180" height="8" rx="2" fill="#f59e0b" stroke="#b45309" stroke-width="1"/>
      <text x="190" y="28" fill="#f59e0b" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Hinged Top Edge (1.5 m)</text>
      <!-- Trapezoidal Gate 3D Projection -->
      <!-- Left side 2.4 m, Right side 3.0 m -->
      <polygon points="100,44 280,44 280,210 100,175" fill="url(#hatchH4)" stroke="#f8fafc" stroke-width="2"/>
      <!-- Division into Rectangle and Triangle -->
      <line x1="100" y1="175" x2="280" y2="175" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
      <!-- Labels on Gate -->
      <text x="190" y="110" fill="#f8fafc" font-size="11" font-family="sans-serif" text-anchor="middle">Part 1: Rectangle (1.5 × 2.4)</text>
      <text x="190" y="195" fill="#f8fafc" font-size="10" font-family="sans-serif" text-anchor="middle">Part 2: Triangle (h = 0.6 m)</text>
      <!-- Dimensions -->
      <!-- Left side height 2.4 m -->
      <line x1="80" y1="44" x2="80" y2="175" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="75" y1="44" x2="85" y2="44" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="75" y1="175" x2="85" y2="175" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="70" y="115" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="end">2.4 m</text>
      <!-- Right side height 3.0 m -->
      <line x1="300" y1="44" x2="300" y2="210" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="295" y1="44" x2="305" y2="44" stroke="#94a3b8" stroke-width="1.5"/>
      <line x1="295" y1="210" x2="305" y2="210" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="310" y="130" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="start">3.0 m</text>
      <!-- Applied Force P -->
      <line x1="190" y1="240" x2="190" y2="200" stroke="#ec4899" stroke-width="3"/>
      <polygon points="190,192 185,202 195,202" fill="#ec4899"/>
      <text x="205" y="235" fill="#ec4899" font-size="12" font-family="sans-serif" font-weight="bold">P = ? (0.75 m from edges)</text>
    </svg>`,
    figureCaption: 'Figure 4: Vertical trapezoidal gate hinged at the top edge',
    options: [
      { label: 'A', text: '36.2' },
      { label: 'B', text: '35.2' },
      { label: 'C', text: '21.3' },
      { label: 'D', text: '33.6' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Divide the trapezoidal gate into a rectangular area (1.5 m × 2.4 m) and a right-triangular area (1.5 m × 0.6 m). Compute hydrostatic forces and center of pressures, then sum moments about the top hinge.',
      formulas: [
        'F_H = \\gamma \\bar{h} A,\\quad e = \\frac{I_g}{A \\bar{h}}',
        '\\text{Rectangle: } A_1 = 1.5(2.4) = 3.6\\text{ m}^2,\\; \\bar{h}_1 = 1.2\\text{ m},\\; F_{H1} = 9.81(1.2)(3.6) = 42.3792\\text{ kN}',
        'e_1 = \\frac{1.5(2.4)^3 / 12}{3.6(1.2)} = 0.4\\text{ m} \\implies r_1 = 1.2 + 0.4 = 1.6\\text{ m}',
        '\\text{Triangle: } A_2 = 0.5(1.5)(0.6) = 0.45\\text{ m}^2,\\; \\bar{h}_2 = 2.4 + \\frac{0.6}{3} = 2.6\\text{ m},\\; F_{H2} = 9.81(2.6)(0.45) = 11.477\\text{ kN}',
        'e_2 = \\frac{1.5(0.6)^3 / 36}{0.45(2.6)} = 0.0167\\text{ m} \\implies r_2 = 2.6 + 0.0167 = 2.6167\\text{ m}',
        '\\sum M_{\\text{hinge}} = 0 \\implies 42.3792(1.6) + 11.477(2.6167) = P \\left(\\frac{2.4 + 3.0}{2}\\right) = 2.7P',
        '97.838 = 2.7P \\implies P = 36.24\\text{ kN} \\approx 36.2\\text{ kN}',
      ],
      steps: [
        'Step 1: Divide trapezoidal gate into rectangle (1.5 m × 2.4 m) and triangle (1.5 m base × 0.6 m height).',
        'Step 2: For rectangle: F_H1 = γ·h̄₁·A₁ = 9.81(1.2)(3.6) = 42.3792 kN. Moment arm from hinge: r₁ = h̄₁ + e₁ = 1.2 + 0.4 = 1.6 m.',
        'Step 3: For triangle: F_H2 = γ·h̄₂·A₂ = 9.81(2.6)(0.45) = 11.477 kN. Moment arm from hinge: r₂ = h̄₂ + e₂ = 2.6 + 0.0167 = 2.6167 m.',
        'Step 4: Average lever arm for force P applied at 0.75 m from each side (centerline): y_P = (2.4 + 3.0)/2 = 2.7 m.',
        'Step 5: Equilibrium ΣM_hinge = 0: 42.3792(1.6) + 11.477(2.6167) = P(2.7) => 97.838 = 2.7P => P = 36.2 kN.',
      ],
      finalAnswer: '36.2 (Option A)',
      pageNumber: 238,
    },
  },

  // Item 5
  {
    id: 'hpge-nov2024-q5',
    number: 5,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Accelerated Liquid Mass',
    text: 'A tank contains water to a depth of 0.60 m and is transported by an elevator moving upward at a constant velocity of 2 m/s. Determine the pressure at the bottom of the tank, in kPa.',
    options: [
      { label: 'A', text: '4.1' },
      { label: 'B', text: '5.9' },
      { label: 'C', text: '5.7' },
      { label: 'D', text: '2.5' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'When moving at constant velocity, vertical acceleration is zero (a = 0). Hydrostatic pressure depends solely on static fluid depth.',
      formulas: [
        'P = \\gamma h \\left(1 \\pm \\frac{a}{g}\\right)',
        'a = 0 \\implies P = \\gamma h = 9.81(0.60) = 5.886\\text{ kPa} \\approx 5.9\\text{ kPa}',
      ],
      steps: [
        'Step 1: Check acceleration: Since the elevator travels upward at constant velocity (v = 2 m/s), acceleration a = 0.',
        'Step 2: The hydrostatic pressure equation for vertical motion is P = γ·h(1 ± a/g).',
        'Step 3: Substitute a = 0: P = 9.81(0.60)(1 + 0) = 5.886 kPa ≈ 5.9 kPa.',
      ],
      finalAnswer: '5.9 (Option B)',
      pageNumber: 239,
    },
  },

  // Item 6
  {
    id: 'hpge-nov2024-q6',
    number: 6,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Rotating Cylindrical Vessels',
    text: 'An open cylindrical tank is 2.1 m high and 1.3 m in diameter. It is initially filled with water to two-thirds of its height. The tank is rotated about its vertical central axis at 90 rpm. Determine the volume of water spilled, in liters.',
    figureSvg: `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="waterCyl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <!-- Tank 1: At rest -->
      <g transform="translate(60, 20)">
        <text x="65" y="15" fill="#94a3b8" font-size="11" font-family="sans-serif" text-anchor="middle" font-weight="bold">Static (2/3 Full)</text>
        <ellipse cx="65" cy="40" rx="45" ry="12" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="20" y="40" width="90" height="150" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
        <ellipse cx="65" cy="190" rx="45" ry="12" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Water body -->
        <path d="M 20,90 Q 65,100 110,90 L 110,190 Q 65,202 20,190 Z" fill="url(#waterCyl)" opacity="0.75"/>
        <ellipse cx="65" cy="90" rx="45" ry="10" fill="#38bdf8" stroke="#0284c7" stroke-width="1"/>
        <!-- Dimensions -->
        <text x="65" y="145" fill="#f8fafc" font-size="11" font-family="sans-serif" text-anchor="middle">Water = 1.4 m</text>
        <text x="65" y="70" fill="#cbd5e1" font-size="10" font-family="sans-serif" text-anchor="middle">Air = 0.7 m</text>
      </g>
      <!-- Tank 2: Rotating at 90 rpm -->
      <g transform="translate(260, 20)">
        <text x="65" y="15" fill="#f59e0b" font-size="11" font-family="sans-serif" text-anchor="middle" font-weight="bold">Rotating (90 rpm)</text>
        <ellipse cx="65" cy="40" rx="45" ry="12" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="20" y="40" width="90" height="150" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
        <ellipse cx="65" cy="190" rx="45" ry="12" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Paraboloid curve -->
        <path d="M 20,40 Q 65,175 110,40 L 110,190 Q 65,202 20,190 Z" fill="url(#waterCyl)"/>
        <!-- Paraboloid depth line -->
        <line x1="65" y1="40" x2="65" y2="175" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="125" y="110" fill="#f59e0b" font-size="10" font-family="sans-serif">y = 1.913 m</text>
        <!-- Rotation Arrow -->
        <path d="M 45,215 A 25 10 0 1 0 85,215" fill="none" stroke="#38bdf8" stroke-width="2"/>
        <polygon points="85,212 90,217 83,219" fill="#38bdf8"/>
        <text x="65" y="235" fill="#38bdf8" font-size="10" font-family="sans-serif" text-anchor="middle">ω = 90 rpm</text>
      </g>
    </svg>`,
    figureCaption: 'Figure 6: Forced vortex rotation with water spillage in open cylindrical tank',
    options: [
      { label: 'A', text: '81.3' },
      { label: 'B', text: '313.4' },
      { label: 'C', text: '91.3' },
      { label: 'D', text: '340.3' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Compute angular velocity ω, height of the paraboloid of revolution y, verify that the vortex vertex remains within the vessel, then compute spilled volume as the difference between final air volume and initial air volume.',
      formulas: [
        '\\omega = 90\\text{ rpm} \\times \\frac{\\pi}{30} = 3\\pi\\text{ rad/s} = 9.4248\\text{ rad/s}',
        'y = \\frac{\\omega^2 r^2}{2g} = \\frac{(3\\pi)^2 (0.65)^2}{2(9.81)} = 1.913\\text{ m} < 2.1\\text{ m}',
        'V_{\\text{air,final}} = \\frac{1}{2} \\pi r^2 y = \\frac{1}{2}\\pi(0.65)^2(1.913) = 1.269\\text{ m}^3',
        'V_{\\text{air,initial}} = \\pi r^2 (2.1 - 1.4) = \\pi(0.65)^2(0.70) = 0.929\\text{ m}^3',
        'V_{\\text{spilled}} = V_{\\text{air,final}} - V_{\\text{air,initial}} = 1.269 - 0.929 = 0.3403\\text{ m}^3 = 340.3\\text{ L}',
      ],
      steps: [
        'Step 1: Compute angular velocity: ω = 90(π/30) = 3π rad/s.',
        'Step 2: Radius r = 1.3 / 2 = 0.65 m. Initial water depth = (2/3)(2.1) = 1.4 m; initial air depth = 0.7 m.',
        'Step 3: Paraboloid height: y = ω²r² / (2g) = (3π)²(0.65)² / (2 × 9.81) = 1.913 m < 2.1 m (vertex inside tank).',
        'Step 4: Air volume during rotation = 1/2 · π · r² · y = 0.5 × π × (0.65)² × 1.913 = 1.269 m³.',
        'Step 5: Initial air volume = π · r² · 0.7 = π × (0.65)² × 0.7 = 0.929 m³.',
        'Step 6: Volume spilled = 1.269 m³ - 0.929 m³ = 0.3403 m³ = 340.3 liters.',
      ],
      finalAnswer: '340.3 (Option D)',
      pageNumber: 239,
    },
  },

  // Item 7
  {
    id: 'hpge-nov2024-q7',
    number: 7,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Rotating Cylindrical Vessels',
    text: 'An open cylindrical tank is 1.5 m high and 0.40 m in diameter and initially contains water. The tank rotates about its vertical central axis at 240 rpm. Determine the maximum initial water depth (in meter) that will prevent spillage during rotation.',
    figureSvg: `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="rotGrad7" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#0369a1" stop-opacity="0.95"/>
        </linearGradient>
      </defs>
      <rect width="460" height="240" rx="8" fill="#0f172a"/>
      <!-- Tank Outline -->
      <g transform="translate(190, 20)">
        <ellipse cx="40" cy="20" rx="40" ry="10" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="0" y="20" width="80" height="170" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
        <ellipse cx="40" cy="190" rx="40" ry="10" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Paraboloid to top rim (no spillage condition) -->
        <path d="M 0,20 Q 40,165 80,20 L 80,190 Q 40,200 0,190 Z" fill="url(#rotGrad7)"/>
        <!-- Static water level dashed line -->
        <line x1="-15" y1="92.5" x2="95" y2="92.5" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="105" y="96" fill="#f59e0b" font-size="10" font-family="sans-serif">Static Level</text>
        <!-- Rise y/2 and depression y/2 -->
        <line x1="95" y1="20" x2="95" y2="92.5" stroke="#38bdf8" stroke-width="1.2"/>
        <text x="105" y="60" fill="#38bdf8" font-size="10" font-family="sans-serif">d = y/2</text>
      </g>
      <!-- Annotations -->
      <text x="60" y="70" fill="#f8fafc" font-size="12" font-family="sans-serif" font-weight="bold">No Spillage Condition:</text>
      <text x="60" y="95" fill="#cbd5e1" font-size="11" font-family="sans-serif">y = ω²r² / 2g = 1.288 m</text>
      <text x="60" y="115" fill="#cbd5e1" font-size="11" font-family="sans-serif">Rise at wall = y / 2 = 0.644 m</text>
      <text x="60" y="145" fill="#38bdf8" font-size="12" font-family="sans-serif" font-weight="bold">h_initial = H - y / 2</text>
      <text x="60" y="165" fill="#38bdf8" font-size="12" font-family="sans-serif">= 1.5 - 0.644 = 0.856 m</text>
    </svg>`,
    figureCaption: 'Figure 7: Maximum permissible initial water depth to avoid spillage at 240 rpm',
    options: [
      { label: 'A', text: '0.131' },
      { label: 'B', text: '0.856' },
      { label: 'C', text: '0.912' },
      { label: 'D', text: '0.713' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'To prevent spillage, the water surface climbing the wall must reach at most the tank rim. Because the rise above the static level equals y/2, the maximum initial depth is h = H - y/2.',
      formulas: [
        '\\omega = 240\\text{ rpm} \\times \\frac{\\pi}{30} = 8\\pi\\text{ rad/s} = 25.1327\\text{ rad/s}',
        'y = \\frac{\\omega^2 r^2}{2g} = \\frac{(8\\pi)^2 (0.20)^2}{2(9.81)} = 1.288\\text{ m} < 1.5\\text{ m}',
        'h_{\\text{max}} = H - \\frac{y}{2} = 1.5 - \\frac{1.288}{2} = 1.5 - 0.644 = 0.856\\text{ m}',
      ],
      steps: [
        'Step 1: Compute angular speed: ω = 240(π/30) = 8π rad/s.',
        'Step 2: Radius r = 0.40 / 2 = 0.20 m.',
        'Step 3: Paraboloid height: y = ω²r² / (2g) = (8π)²(0.2)² / (2 × 9.81) = 1.288 m.',
        'Step 4: Water surface rise at the wall is y/2 = 1.288 / 2 = 0.644 m.',
        'Step 5: Maximum initial water depth = H - y/2 = 1.5 - 0.644 = 0.856 m.',
      ],
      finalAnswer: '0.856 (Option B)',
      pageNumber: 240,
    },
  },

  // Item 8
  {
    id: 'hpge-nov2024-q8',
    number: 8,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: "Fluid Statics - Buoyancy & Archimedes' Principle",
    text: 'An irregular stone weighs 300 N in air and 230 N when fully submerged in water. Determine the volume of the stone in liters.',
    options: [
      { label: 'A', text: '7.14' },
      { label: 'B', text: '31.4' },
      { label: 'C', text: '7.33' },
      { label: 'D', text: '23.6' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: "By Archimedes' Principle, the buoyant force equals the weight loss of the body in water, which equals the weight of displaced water.",
      formulas: [
        'BF = W_{\\text{air}} - W_{\\text{water}} = 300 - 230 = 70\\text{ N}',
        'BF = \\gamma_{\\text{water}} \\times V_{\\text{stone}} \\implies 70 = 9810 \\times V_{\\text{stone}}',
        'V_{\\text{stone}} = \\frac{70}{9810} = 0.007136\\text{ m}^3 = 7.136\\text{ L} \\approx 7.14\\text{ L}',
      ],
      steps: [
        'Step 1: Calculate buoyant force: BF = W_air - W_water = 300 - 230 = 70 N.',
        'Step 2: Relate buoyant force to displaced volume: BF = γ_water · V_stone.',
        'Step 3: Solve for V_stone: V = 70 / 9810 = 0.007136 m³.',
        'Step 4: Convert to liters (1 m³ = 1000 L): V = 0.007136 × 1000 = 7.14 L.',
      ],
      finalAnswer: '7.14 (Option A)',
      pageNumber: 241,
    },
  },

  // Item 9
  {
    id: 'hpge-nov2024-q9',
    number: 9,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Buoyancy & Moored Submerged Bodies',
    text: 'A sphere with a radius of 375 mm is fully immersed in seawater with a specific gravity of 1.026 and is anchored to the seabed. The tension in the mooring line is 270 N. Determine the unit weight of the sphere in kN/m³.',
    figureSvg: `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#334155"/>
        </radialGradient>
      </defs>
      <rect width="460" height="240" rx="8" fill="#0f172a"/>
      <!-- Water Background -->
      <rect x="20" y="20" width="420" height="200" rx="6" fill="#0284c7" fill-opacity="0.15" stroke="#0284c7" stroke-dasharray="4 2"/>
      <text x="40" y="45" fill="#38bdf8" font-size="11" font-family="sans-serif">Seawater (SG = 1.026)</text>
      <!-- Submerged Sphere -->
      <g transform="translate(230, 100)">
        <circle cx="0" cy="0" r="45" fill="url(#sphereGrad)" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="0" y="4" fill="#f8fafc" font-size="10" font-family="sans-serif" text-anchor="middle">R = 375 mm</text>
        <!-- Buoyant Force Arrow Up -->
        <line x1="0" y1="-45" x2="0" y2="-85" stroke="#38bdf8" stroke-width="3"/>
        <polygon points="0,-92 -5,-82 5,-82" fill="#38bdf8"/>
        <text x="12" y="-70" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold">BF</text>
        <!-- Weight Arrow Down -->
        <line x1="-15" y1="20" x2="-15" y2="60" stroke="#f59e0b" stroke-width="2.5"/>
        <polygon points="-15,66 -19,57 -11,57" fill="#f59e0b"/>
        <text x="-25" y="55" fill="#f59e0b" font-size="10" font-family="sans-serif" text-anchor="end">W_sphere</text>
        <!-- Tension Arrow Down -->
        <line x1="0" y1="45" x2="0" y2="100" stroke="#ec4899" stroke-width="2.5"/>
        <polygon points="0,85 -4,75 4,75" fill="#ec4899"/>
        <text x="12" y="80" fill="#ec4899" font-size="10" font-family="sans-serif" font-weight="bold">T = 270 N</text>
      </g>
      <!-- Seabed Anchor -->
      <rect x="200" y="200" width="60" height="12" rx="2" fill="#475569"/>
      <line x1="170" y1="212" x2="290" y2="212" stroke="#64748b" stroke-width="3"/>
      <text x="230" y="226" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Seabed</text>
    </svg>`,
    figureCaption: 'Figure 9: Submerged anchored sphere in equilibrium',
    options: [
      { label: 'A', text: '0.901' },
      { label: 'B', text: '0.475' },
      { label: 'C', text: '0.385' },
      { label: 'D', text: '0.914' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'For vertical equilibrium of the submerged sphere: BF = W_sphere + T. Compute displaced volume, buoyant force from seawater, deduce sphere weight, and evaluate specific gravity / unit weight ratio.',
      formulas: [
        'V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi (0.375)^3 = 0.22089\\text{ m}^3',
        'BF = \\gamma_{\\text{sw}} V = 1.026(9810)(0.22089) = 2223.3\\text{ N}',
        'W_{\\text{sphere}} = BF - T = 2223.3 - 270 = 1953.3\\text{ N}',
        '\\gamma_{\\text{sphere}} = \\frac{1953.3}{0.22089} = 8842.75\\text{ N/m}^3 = 8.84\\text{ kN/m}^3',
        'SG_{\\text{sphere}} = \\frac{8842.75}{9810} = 0.901',
      ],
      steps: [
        'Step 1: Compute sphere volume: V = (4/3)π(0.375)³ = 0.221 m³.',
        'Step 2: Compute buoyant force from seawater: BF = 1.026(9810)(0.221) = 2223.3 N.',
        'Step 3: Equilibrium equation: W_sphere + T = BF => W_sphere = 2223.3 - 270 = 1953.3 N.',
        'Step 4: Unit weight γ = 1953.3 / 0.221 = 8842.75 N/m³; relative density / specific gravity ratio reported in PRC exam key: SG = 8842.75 / 9810 = 0.901.',
      ],
      finalAnswer: '0.901 (Option A)',
      pageNumber: 241,
    },
  },

  // Item 10
  {
    id: 'hpge-nov2024-q10',
    number: 10,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Flotation & Ship Hydrostatics',
    text: 'A barge has an unloaded weight of 70,000 metric tons and carries a cargo load of 20,000 metric tons. Its waterline area is 10,000 m², and its draft in seawater with a specific gravity of 1.03 is 10.37 m. Obtain the draft of the loaded barge when floating in freshwater.',
    options: [
      { label: 'A', text: '10.13' },
      { label: 'B', text: '10.63' },
      { label: 'C', text: '10.44' },
      { label: 'D', text: '11.27' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute the displacement volume in ocean water versus fresh water for the total 90,000 metric ton mass. The additional volume required in fresh water divided by the waterline area yields the change in draft Δd.',
      formulas: [
        'M_{\\text{total}} = 70,000 + 20,000 = 90,000\\text{ metric tons} = 90 \\times 10^6\\text{ kg}',
        'V_{\\text{ocean}} = \\frac{90 \\times 10^6}{1.03 \\times 1000} = 87,378.64\\text{ m}^3',
        'V_{\\text{fresh}} = \\frac{90 \\times 10^6}{1000} = 90,000\\text{ m}^3',
        '\\Delta V = V_{\\text{fresh}} - V_{\\text{ocean}} = 90,000 - 87,378.64 = 2,621.36\\text{ m}^3',
        '\\Delta d = \\frac{\\Delta V}{A_{\\text{wl}}} = \\frac{2,621.36}{10,000} = 0.2621\\text{ m}',
        'd_{\\text{fresh}} = 10.37 + 0.2621 = 10.632\\text{ m} \\approx 10.63\\text{ m}',
      ],
      steps: [
        'Step 1: Total displacement mass M = 70,000 + 20,000 = 90,000 tons = 90 × 10⁶ kg.',
        'Step 2: Submerged volume in ocean water: V_ocean = 90 × 10⁶ / 1030 = 87,378.64 m³.',
        'Step 3: Submerged volume in freshwater: V_fresh = 90 × 10⁶ / 1000 = 90,000 m³.',
        'Step 4: Additional volume required: ΔV = 90,000 - 87,378.64 = 2,621.36 m³.',
        'Step 5: Increase in draft: Δd = ΔV / A_wl = 2,621.36 / 10,000 = 0.2621 m.',
        'Step 6: Freshwater draft: d = 10.37 + 0.2621 = 10.63 m.',
      ],
      finalAnswer: '10.63 (Option B)',
      pageNumber: 242,
    },
  },

  // Item 11
  {
    id: 'hpge-nov2024-q11',
    number: 11,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Theoretical Soil Limits',
    text: 'A soil mass has a specific gravity of solids (Gs = 2.10). Determine its maximum possible unit weight.',
    options: [
      { label: 'A', text: '20.6' },
      { label: 'B', text: '17.8' },
      { label: 'C', text: '21.4' },
      { label: 'D', text: '19.2' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'The maximum theoretical unit weight of a soil mass occurs when there are no voids (e = 0), representing the solid particles alone.',
      formulas: [
        '\\gamma_{\\text{max}} = G_s \\gamma_w \\quad (\\text{at } e = 0)',
        '\\gamma_{\\text{max}} = 2.10 \\times 9.81 = 20.601\\text{ kN/m}^3 \\approx 20.6\\text{ kN/m}^3',
      ],
      steps: [
        'Step 1: The general soil unit weight relation is γ = [(Gs + Se)/(1 + e)] · γ_w.',
        'Step 2: Maximum possible unit weight occurs at zero void ratio (e = 0, completely void-free solid mass).',
        'Step 3: At e = 0: γ_max = Gs · γ_w = 2.10 × 9.81 = 20.601 kN/m³ ≈ 20.6 kN/m³.',
      ],
      finalAnswer: '20.6 (Option A)',
      pageNumber: 243,
    },
  },

  // Item 12
  {
    id: 'hpge-nov2024-q12',
    number: 12,
    pageNumber: 1,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Moisture Content Testing',
    text: 'A soil sample has a total volume of 100 cm³ and a wet weight of 190 g. After oven drying, its dry weight is 160 g. Determine the water content of the soil, expressed as a percentage.',
    options: [
      { label: 'A', text: '18.75' },
      { label: 'B', text: '15.59' },
      { label: 'C', text: '17.15' },
      { label: 'D', text: '20.57' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Moisture content is the ratio of the weight of water to the dry weight of soil solids expressed as a percentage.',
      formulas: [
        'W_{\\text{water}} = W_{\\text{moist}} - W_{\\text{dry}} = 190 - 160 = 30\\text{ g}',
        'w = \\frac{W_{\\text{water}}}{W_{\\text{dry}}} \\times 100\\%',
        'w = \\frac{30}{160} \\times 100\\% = 18.75\\%',
      ],
      steps: [
        'Step 1: Mass of water evaporated: W_water = W_moist - W_dry = 190 - 160 = 30 g.',
        'Step 2: Moisture content formula: w = (W_water / W_dry) × 100%.',
        'Step 3: w = (30 / 160) × 100% = 18.75%.',
      ],
      finalAnswer: '18.75 (Option A)',
      pageNumber: 244,
    },
  },
];
