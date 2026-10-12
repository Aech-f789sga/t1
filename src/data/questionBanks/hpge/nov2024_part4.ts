import { Question } from '../../../types/exam';

export const HPGE_NOV2024_PART4: Question[] = [
  // Item 36
  {
    id: 'hpge-nov2024-q36',
    number: 36,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Earthwork & Embankment Compaction',
    text: 'Situation 4 — A highway embankment 10 m wide and 1.5 m thick after compaction is to be constructed using sandy soil hauled from a borrow pit. The soil in the borrow pit has a water content of 15% and a void ratio of 0.69. The embankment specification requires a compacted dry unit weight of 18 kN/m³. Assume a specific gravity of solids of (Gs = 2.7). For a 1 km length of embankment, determine the following:\n\nPart 1: The dry unit weight (kN/m³) of sandy soil from the borrow pit required to construct the embankment.',
    figureSvg: `<svg viewBox="0 0 450 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <pattern id="embHatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#f59e0b" stroke-width="1.2" opacity="0.4"/>
        </pattern>
      </defs>
      <!-- Embankment Trapezoid -->
      <polygon points="120,70 330,70 370,150 80,150" fill="url(#embHatch)" stroke="#f59e0b" stroke-width="2"/>
      <!-- Ground Line -->
      <line x1="30" y1="150" x2="420" y2="150" stroke="#64748b" stroke-width="3"/>
      <!-- Top Width = 10 m -->
      <line x1="120" y1="55" x2="330" y2="55" stroke="#38bdf8" stroke-width="1.5"/>
      <polygon points="120,55 128,51 128,59" fill="#38bdf8"/>
      <polygon points="330,55 322,51 322,59" fill="#38bdf8"/>
      <text x="225" y="48" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Width = 10 m</text>
      <!-- Thickness = 1.5 m -->
      <line x1="390" y1="70" x2="390" y2="150" stroke="#38bdf8" stroke-width="1.5"/>
      <polygon points="390,70 386,78 394,78" fill="#38bdf8"/>
      <polygon points="390,150 386,142 394,142" fill="#38bdf8"/>
      <text x="402" y="115" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold">1.5 m</text>
      <!-- Specifications Text -->
      <text x="225" y="105" fill="#f8fafc" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Compacted Embankment (γ_dry = 18 kN/m³)</text>
      <text x="225" y="125" fill="#cbd5e1" font-size="10" font-family="sans-serif" text-anchor="middle">Length = 1 km = 1,000 m  |  V_emb = 15,000 m³</text>
      <!-- Borrow pit parameters box -->
      <rect x="70" y="170" width="310" height="45" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1.5"/>
      <text x="225" y="188" fill="#f59e0b" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="middle">Borrow Pit: w = 15%, e = 0.69, Gs = 2.7</text>
      <text x="225" y="204" fill="#38bdf8" font-size="10" font-family="sans-serif" text-anchor="middle">γ_dry = Gs·γw / (1 + e) = 15.67 kN/m³</text>
    </svg>`,
    figureCaption: 'Figure 36: Embankment dimensions and borrow pit properties',
    options: [
      { label: 'A', text: '16.54' },
      { label: 'B', text: '15.67' },
      { label: 'C', text: '16.33' },
      { label: 'D', text: '15.44' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Compute in situ dry unit weight in the borrow pit using the phase formula γ_dry = Gs·γw / (1 + e).',
      formulas: [
        '\\gamma_{\\text{dry,borrow}} = \\frac{G_s \\gamma_w}{1 + e} = \\frac{2.7(9.81)}{1 + 0.69} = \\frac{26.487}{1.69} = 15.673\\text{ kN/m}^3 \\approx 15.67\\text{ kN/m}^3',
      ],
      steps: [
        'Step 1: Identify borrow pit properties: Gs = 2.7, void ratio e = 0.69.',
        'Step 2: Dry unit weight equation: γ_dry = Gs · γw / (1 + e).',
        'Step 3: γ_dry = 2.7(9.81) / (1 + 0.69) = 26.487 / 1.69 = 15.67 kN/m³.',
      ],
      finalAnswer: '15.67 (Option B)',
      pageNumber: 255,
    },
  },

  // Item 37
  {
    id: 'hpge-nov2024-q37',
    number: 37,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Earthwork & Truckloads',
    text: 'Situation 4 — Part 2: The number of 10 m³ truckloads of sandy soil required for the construction.',
    options: [
      { label: 'A', text: '1561' },
      { label: 'B', text: '1660' },
      { label: 'C', text: '1821' },
      { label: 'D', text: '1723' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'Find the total weight of dry solids needed for the compacted embankment, then compute the required borrow pit volume and divide by truck capacity (10 m³).',
      formulas: [
        'V_e = 1000 \\times 10 \\times 1.5 = 15,000\\text{ m}^3',
        'W_s = \\gamma_{\\text{dry,emb}} \\times V_e = 18 \\times 15,000 = 270,000\\text{ kN}',
        'V_{\\text{borrow}} = \\frac{W_s}{\\gamma_{\\text{dry,borrow}}} = \\frac{270,000}{15.673} = 17,227.32\\text{ m}^3',
        'N_{\\text{truck}} = \\frac{17,227.32}{10} = 1722.73 \\approx 1723\\text{ trucks}',
      ],
      steps: [
        'Step 1: Compacted embankment volume = 1,000 m × 10 m × 1.5 m = 15,000 m³.',
        'Step 2: Total required dry weight of solids: Ws = 18 kN/m³ × 15,000 m³ = 270,000 kN.',
        'Step 3: Borrow pit volume needed: V_borrow = Ws / γ_dry,borrow = 270,000 / 15.673 = 17,227.32 m³.',
        'Step 4: Number of 10 m³ truckloads: 17,227.32 / 10 = 1,722.73 ≈ 1,723 trucks.',
      ],
      finalAnswer: '1723 (Option D)',
      pageNumber: 256,
    },
  },

  // Item 38
  {
    id: 'hpge-nov2024-q38',
    number: 38,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Degree of Saturation',
    text: 'Situation 4 — Part 3: Determine the degree of saturation of the sandy soil in the borrow pit (in situ).',
    options: [
      { label: 'A', text: '58.7%' },
      { label: 'B', text: '78.5%' },
      { label: 'C', text: '65.7%' },
      { label: 'D', text: '75.6%' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'Use the fundamental volumetric identity S·e = Gs·w to calculate the degree of saturation S.',
      formulas: [
        'S \\cdot e = G_s \\cdot w \\implies S = \\frac{G_s w}{e}',
        'S = \\frac{2.7(0.15)}{0.69} = \\frac{0.405}{0.69} = 0.58696 = 58.7\\%',
      ],
      steps: [
        'Step 1: Identify borrow pit properties: Gs = 2.7, w = 15% = 0.15, e = 0.69.',
        'Step 2: Relationship: S · e = Gs · w.',
        'Step 3: S = (2.7 × 0.15) / 0.69 = 0.405 / 0.69 = 0.587 = 58.7%.',
      ],
      finalAnswer: '58.7% (Option A)',
      pageNumber: 256,
    },
  },

  // Item 39
  {
    id: 'hpge-nov2024-q39',
    number: 39,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Effective Stress Principle',
    text: 'Situation 5 — A 7.6 m thick clay layer is overlain by a 15.2 m thick sand deposit extending to the ground surface. When the groundwater table is at the ground surface, the sand has a saturated unit weight of 21.2 kN/m³ and a dry unit weight of 18.2 kN/m³. The saturated unit weight of the clay is 18.8 kN/m³. The groundwater table is then lowered by 7.6 m. The degree of saturation of the sand above the lowered groundwater table becomes 20%.\n\nPart 1: Evaluate the effective pressure, in kPa at the mid-height of the clay layer, before lowering the water table.',
    figureSvg: `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <!-- Ground surface line -->
      <line x1="40" y1="30" x2="420" y2="30" stroke="#cbd5e1" stroke-width="2"/>
      <text x="45" y="24" fill="#cbd5e1" font-size="10" font-family="sans-serif">Ground Surface</text>
      <!-- Sand Layer 15.2 m -->
      <rect x="40" y="30" width="380" height="90" fill="#0284c7" fill-opacity="0.25" stroke="#0284c7" stroke-width="1"/>
      <text x="230" y="75" fill="#f8fafc" font-size="11" font-family="sans-serif" text-anchor="middle">Sand: 15.2 m (γ_sat = 21.2 kN/m³)</text>
      <!-- Clay Layer 7.6 m -->
      <rect x="40" y="120" width="380" height="80" fill="#0369a1" fill-opacity="0.35" stroke="#0284c7" stroke-width="1"/>
      <text x="230" y="150" fill="#f8fafc" font-size="11" font-family="sans-serif" text-anchor="middle">Clay: 7.6 m (γ_sat = 18.8 kN/m³)</text>
      <!-- Mid-height of clay line -->
      <line x1="40" y1="160" x2="420" y2="160" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 2"/>
      <text x="45" y="175" fill="#f59e0b" font-size="10" font-family="sans-serif" font-weight="bold">Mid-Clay (depth = 19.0 m)</text>
      <!-- Water Table Marker at surface -->
      <polygon points="350,22 355,30 345,30" fill="#38bdf8"/>
      <line x1="340" y1="20" x2="360" y2="20" stroke="#38bdf8" stroke-width="1"/>
      <text x="365" y="25" fill="#38bdf8" font-size="10" font-family="sans-serif">GWT 1 (Surface)</text>
      <!-- Stress Summary Box -->
      <rect x="100" y="195" width="260" height="45" rx="5" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>
      <text x="230" y="212" fill="#cbd5e1" font-size="10" font-family="sans-serif" text-anchor="middle">p_T = 393.68 kPa  |  p_w = 186.39 kPa</text>
      <text x="230" y="228" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">p_e = 393.68 - 186.39 = 207.29 kPa</text>
    </svg>`,
    figureCaption: 'Figure 39: Initial stress state with groundwater table at the ground surface',
    options: [
      { label: 'A', text: '393.68' },
      { label: 'B', text: '207.29' },
      { label: 'C', text: '263.61' },
      { label: 'D', text: '375.44' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'Before lowering the water table, both sand (15.2 m) and clay (to mid-height = 3.8 m) are fully submerged. Compute total vertical stress p_T, pore water pressure p_w = γw · 19.0, and effective stress p_e = p_T - p_w.',
      formulas: [
        'p_T = \\gamma_{\\text{sat,sand}}(15.2) + \\gamma_{\\text{sat,clay}}(3.8) = 21.2(15.2) + 18.8(3.8) = 322.24 + 71.44 = 393.68\\text{ kPa}',
        'p_w = \\gamma_w (15.2 + 3.8) = 9.81(19.0) = 186.39\\text{ kPa}',
        'p_e = p_T - p_w = 393.68 - 186.39 = 207.29\\text{ kPa}',
      ],
      steps: [
        'Step 1: Total depth to mid-height of clay: 15.2 m + 7.6/2 m = 19.0 m.',
        'Step 2: Total vertical stress: p_T = 21.2(15.2) + 18.8(3.8) = 393.68 kPa.',
        'Step 3: Hydrostatic pore water pressure: p_w = 9.81 × 19.0 = 186.39 kPa.',
        'Step 4: Effective stress: p_e = p_T - p_w = 393.68 - 186.39 = 207.29 kPa.',
      ],
      finalAnswer: '207.29 (Option B)',
      pageNumber: 257,
    },
  },

  // Item 40
  {
    id: 'hpge-nov2024-q40',
    number: 40,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Effective Stress Principle',
    text: 'Situation 5 — Part 2: Evaluate the effective pressure, in kPa, after lowering of the water table.',
    options: [
      { label: 'A', text: '393.68' },
      { label: 'B', text: '207.29' },
      { label: 'C', text: '263.61' },
      { label: 'D', text: '375.44' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'With the GWT lowered by 7.6 m, the top 7.6 m of sand has degree of saturation S = 20%. The moist unit weight of this layer is γ_m = γ_dry + S(γ_sat - γ_dry) = 18.8 kN/m³. Compute new total stress and pore pressure.',
      formulas: [
        '\\gamma_{m,\\text{sand}} = 18.2 + 0.20(21.2 - 18.2) = 18.8\\text{ kN/m}^3',
        'p_T = 18.8(7.6) + 21.2(7.6) + 18.8(3.8) = 142.88 + 161.12 + 71.44 = 375.44\\text{ kPa}',
        'p_w = 9.81(7.6 + 3.8) = 9.81(11.4) = 111.83\\text{ kPa}',
        'p_e = p_T - p_w = 375.44 - 111.83 = 263.61\\text{ kPa}',
      ],
      steps: [
        'Step 1: Moist unit weight of upper unsaturated sand: γ_m = 18.2 + 0.20(21.2 - 18.2) = 18.8 kN/m³.',
        'Step 2: Total stress at mid-clay: p_T = 18.8(7.6) + 21.2(7.6) + 18.8(3.8) = 375.44 kPa.',
        'Step 3: New pore water pressure with water table at 7.6 m depth: p_w = 9.81 × (7.6 + 3.8) = 111.83 kPa.',
        'Step 4: Effective stress: p_e = 375.44 - 111.83 = 263.61 kPa.',
      ],
      finalAnswer: '263.61 (Option C)',
      pageNumber: 257,
    },
  },

  // Item 41
  {
    id: 'hpge-nov2024-q41',
    number: 41,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Geotechnical Engineering - Effective Stress Principle',
    text: 'Situation 5 — Part 3: Evaluate the effective pressure, in kPa, when there is no water in the sand layer, but it remains in moist condition at the same degree of saturation (S = 20%).',
    options: [
      { label: 'A', text: '319.92' },
      { label: 'B', text: '371.23' },
      { label: 'C', text: '322.31' },
      { label: 'D', text: '357.21' },
    ],
    correctAnswer: 'A',
    solution: {
      summary: 'When the water table drops to the top of the clay layer (depth 15.2 m), the entire 15.2 m sand layer has γ_m = 18.8 kN/m³. Pore water pressure at mid-clay is due only to the 3.8 m submerged clay column.',
      formulas: [
        'p_T = 18.8(15.2) + 18.8(3.8) = 285.76 + 71.44 = 357.20\\text{ kPa}',
        'p_w = 9.81(3.8) = 37.278\\text{ kPa}',
        'p_e = p_T - p_w = 357.20 - 37.278 = 319.922\\text{ kPa} \\approx 319.92\\text{ kPa}',
      ],
      steps: [
        'Step 1: Entire sand layer (15.2 m) is unsaturated with moist unit weight γ_m = 18.8 kN/m³.',
        'Step 2: Total vertical stress: p_T = 18.8(15.2) + 18.8(3.8) = 357.20 kPa.',
        'Step 3: Pore water pressure acts only below the top of clay: p_w = 9.81 × 3.8 = 37.278 kPa.',
        'Step 4: Effective stress: p_e = 357.20 - 37.278 = 319.92 kPa.',
      ],
      finalAnswer: '319.92 (Option A)',
      pageNumber: 258,
    },
  },

  // Item 42
  {
    id: 'hpge-nov2024-q42',
    number: 42,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Mechanics - Types of Flow',
    text: 'A stream with steady flow and the average velocity is the same at every cross-section along a given length, the flow is called:',
    options: [
      { label: 'A', text: 'Steady' },
      { label: 'B', text: 'Uniform' },
      { label: 'C', text: 'Laminar' },
      { label: 'D', text: 'Continuous' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'In fluid mechanics, uniform flow occurs when velocity and other flow parameters remain constant with respect to distance along the channel.',
      steps: [
        'Uniform: Average velocity and cross-sectional depth remain identical at every section along a given length (spatial invariance ∂v/∂s = 0).',
        'Steady: Flow parameters do not change with time at any given cross section (temporal invariance ∂v/∂t = 0).',
        'Laminar: Fluid particles move in parallel layers or streamlines without macroscopic mixing.',
        'Continuous: Flow satisfies the conservation of mass continuity equation along the stream.',
      ],
      finalAnswer: 'Uniform (Option B)',
      pageNumber: 259,
    },
  },

  // Item 43
  {
    id: 'hpge-nov2024-q43',
    number: 43,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Pressure Measurement Instruments',
    text: 'A manometer is used to measure:',
    options: [
      { label: 'A', text: 'Low Pressure' },
      { label: 'B', text: 'Atmospheric Pressure' },
      { label: 'C', text: 'Fluid pressure in pipes' },
      { label: 'D', text: 'Velocity of flow in channels' },
    ],
    correctAnswer: 'C',
    solution: {
      summary: 'A manometer is a fluid column device that measures the gage or differential pressure of fluids contained within pipes or closed vessels.',
      steps: [
        'Fluid pressure in pipes: Manometers measure static or differential pressure in closed fluid systems by column displacement.',
        'Atmospheric Pressure: Measured specifically by a mercury barometer.',
        'Velocity of flow in channels: Measured using a Pitot tube, current meter, or acoustic Doppler velocimeter.',
        'Low Pressure: Although open U-tubes can measure small pressure differences, manometers also measure high pressures via high-density manometric fluids.',
      ],
      finalAnswer: 'Fluid pressure in pipes (Option C)',
      pageNumber: 260,
    },
  },

  // Item 44
  {
    id: 'hpge-nov2024-q44',
    number: 44,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Open Channel Flow - Most Economical Section',
    text: 'What is the most efficient channel section?',
    options: [
      { label: 'A', text: 'Triangular' },
      { label: 'B', text: 'Trapezoidal' },
      { label: 'C', text: 'Rectangular' },
      { label: 'D', text: 'Semi-Circular' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'The most hydraulically efficient (most economical) channel cross section delivers the maximum discharge for a given area, roughness, and slope. This corresponds to the minimum wetted perimeter, which is mathematically achieved by a semi-circular section.',
      steps: [
        'Hydraulic Efficiency Ranking:',
        '1. Semi-Circular: The absolute most efficient theoretical shape (minimum wetted perimeter for a given area).',
        '2. Trapezoidal: Most efficient among practical polygonal lined/unlined channels (half-hexagon with 60° side slopes).',
        '3. Rectangular: Most efficient when bottom width is twice the flow depth (b = 2y).',
        '4. Triangular: Most efficient when side slopes form a 90° apex angle (slope 1:1).',
      ],
      finalAnswer: 'Semi-Circular (Option D)',
      pageNumber: 261,
    },
  },

  // Item 45
  {
    id: 'hpge-nov2024-q45',
    number: 45,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Mechanics - Ideal Fluid Properties',
    text: 'An ideal liquid has the characteristic of:',
    options: [
      { label: 'A', text: 'compressible and viscous' },
      { label: 'B', text: 'same as gas' },
      { label: 'C', text: 'frictionless and compressible' },
      { label: 'D', text: 'frictionless and incompressible' },
    ],
    correctAnswer: 'D',
    solution: {
      summary: 'An ideal fluid is an idealized theoretical model possessing zero viscosity (frictionless, μ = 0) and constant density regardless of pressure (incompressible, ρ = const).',
      steps: [
        'Frictionless (Inviscid): Zero viscosity (μ = 0), meaning no shear resistance exists between fluid layers and no energy loss occurs from fluid friction.',
        'Incompressible: Volume and density remain strictly constant under external pressure changes (ρ = constant).',
        'Real liquids possess both finite viscosity and slight compressibility.',
      ],
      finalAnswer: 'frictionless and incompressible (Option D)',
      pageNumber: 262,
    },
  },

  // Item 46
  {
    id: 'hpge-nov2024-q46',
    number: 46,
    pageNumber: 4,
    subject: 'HPGE',
    year: 2024,
    month: 'November',
    category: 'Fluid Statics - Forced Vortex in Cylindrical Vessel',
    text: 'In a vessel containing water, what is the relationship between the height of the rise at the sides and the depth of the depression at the center?',
    figureSvg: `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="vortexGrad46" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.75"/>
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.95"/>
        </linearGradient>
      </defs>
      <!-- Cylinder Tank -->
      <g transform="translate(140, 20)">
        <ellipse cx="80" cy="15" rx="70" ry="12" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
        <rect x="10" y="15" width="140" height="170" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
        <ellipse cx="80" cy="185" rx="70" ry="12" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Paraboloid Surface -->
        <path d="M 10,40 Q 80,140 150,40 L 150,185 Q 80,197 10,185 Z" fill="url(#vortexGrad46)"/>
        <!-- Static Water Level -->
        <line x1="-15" y1="90" x2="175" y2="90" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 2"/>
        <text x="185" y="94" fill="#f59e0b" font-size="10" font-family="sans-serif">Static Level</text>
        <!-- Rise y/2 on side -->
        <line x1="-5" y1="40" x2="-5" y2="90" stroke="#38bdf8" stroke-width="1.5"/>
        <polygon points="-5,40 -8,48 -2,48" fill="#38bdf8"/>
        <polygon points="-5,90 -8,82 -2,82" fill="#38bdf8"/>
        <text x="-12" y="68" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold" text-anchor="end">Rise = y/2</text>
        <!-- Depression y/2 in center -->
        <line x1="80" y1="90" x2="80" y2="140" stroke="#ec4899" stroke-width="1.5"/>
        <polygon points="80,90 77,98 83,98" fill="#ec4899"/>
        <polygon points="80,140 77,132 83,132" fill="#ec4899"/>
        <text x="90" y="118" fill="#ec4899" font-size="10" font-family="sans-serif" font-weight="bold">Depression = y/2</text>
      </g>
      <text x="220" y="225" fill="#f8fafc" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">y_rise = y_depression = y / 2 (Symmetry Principle)</text>
    </svg>`,
    figureCaption: 'Figure 46: Principle of symmetry in forced vortex paraboloid of revolution',
    options: [
      { label: 'A', text: 'The rise at the sides is greater than the depression at the center.' },
      { label: 'B', text: 'The rise at the sides is equal to the depression at the center.' },
      { label: 'C', text: 'The rise at the sides is less than the depression at the center.' },
      { label: 'D', text: 'The rise at the sides and the dip in the middle do not have a constant relationship.' },
    ],
    correctAnswer: 'B',
    solution: {
      summary: 'In a forced vortex in a cylindrical vessel, the free liquid surface forms a paraboloid of revolution. Because a paraboloid’s volume is exactly half that of its circumscribed cylinder, conservation of liquid volume requires that the height the liquid rises at the outer walls above the original stationary level equals the depth it drops below that level at the center: y_rise = y_depression = y / 2.',
      formulas: [
        'y_{\\text{rise}} = \\frac{y}{2}',
        'y_{\\text{depression}} = \\frac{y}{2}',
        'y_{\\text{rise}} = y_{\\text{depression}}',
      ],
      steps: [
        'Step 1: Under uniform rotation about the central vertical axis, the free surface assumes the shape of a paraboloid of revolution of height y = ω²r² / (2g).',
        'Step 2: By geometric property, the volume of a paraboloid is 1/2 of the circumscribing cylinder: V_paraboloid = (1/2) · π · r² · y.',
        'Step 3: By conservation of liquid volume, the volume of liquid forced above the initial static level around the perimeter equals the volume evacuated below the static level at the center.',
        'Step 4: Therefore, the rise at the walls is exactly equal to the depression at the center: y_rise = y_depression = y / 2.',
      ],
      finalAnswer: 'The rise at the sides is equal to the depression at the center (Option B)',
      pageNumber: 263,
    },
  },
];
