export const projects = [
  {
    id: 'workforce-insight',
    slug: 'workforce-insight',
    title: 'Workforce & Career Planning Insight',
    tag: 'Workforce Insights · 2020 – 2021',
    shortDesc:
      'Designed a leadership workforce insight tool enabling Directors and Managers to visualize team capacity, track career progression, and make data-driven staffing and development decisions.',
    heroMetrics: [
      { label: 'Director & Manager roles supported', value: '50+' },
      { label: 'Workforce decisions accelerated', value: '40%' },
      { label: 'Career paths visualized', value: '1,000+' },
    ],
    role: 'UI/UX Design, Visual Design, Interaction Design',
    team: '5 Software Engineers, 1 Product Manager, HR team, 1 Senior UX Researcher',
    timeline: '2020 – 2021 (1 year)',
    company: 'ServiceNow',
    domain: 'Workforce Analytics / People Operations',
    problem:
      'Design a workforce insight dashboard that gives Directors and Managers unified visibility into team capacity, skill gaps, and career progression to accelerate data-driven staffing and development decisions.',
    process: [
      {
        phase: 'Research',
        detail:
          'Interviewed 20+ Directors and Managers across engineering, sales, and operations. Mapped their workforce planning workflows and identified pain points in team visibility and career tracking.',
      },
      {
        phase: 'Synthesis',
        detail:
          'Created personas for leadership roles and identified 5 core workforce planning scenarios. Prioritized team capacity planning and career development tracking as the highest-impact features.',
      },
      {
        phase: 'Design',
        detail:
          'Designed an interactive dashboard with team composition visualizations, skill gap heatmaps, and career trajectory timelines. Built prototypes for workforce planning and succession planning workflows.',
      },
      {
        phase: 'Validation',
        detail:
          'Tested with 12 Directors and Managers using real workforce data. Iterated on visualization density, filtering controls, and export capabilities for executive presentations.',
      },
    ],
    solution:
      'A workforce insight dashboard that gives Directors and Managers real-time visibility into team structure, skill coverage, and career progression. Interactive planning tools replace static reports, enabling data-driven staffing and development decisions.',
    outcomes: [
      'Accelerated workforce planning decisions by 40%',
      'Supported 50+ Director and Manager roles with unified team visibility',
      'Visualized 1,000+ employee career paths for development planning',
    ],
    reflection:
      'Designing for leadership audiences taught me the importance of respecting their time. Every visualization had to answer a specific question in under 10 seconds. I learned that the best executive tools feel like they are reading your mind — surfacing the right insight before you ask for it.',
  },
  {
    id: 'hologic',
    slug: 'hologic',
    title: 'Hologic Diagnostics',
    tag: 'Healthcare Workflow · 2020 – 2022',
    shortDesc:
      'Redesigned diagnostic imaging and patient scheduling workflows for clinical staff, improving accuracy and reducing manual data entry errors.',
    heroMetrics: [
      { label: 'Clinics onboarded', value: '200+' },
      { label: 'Data entry errors reduced', value: '55%' },
      { label: 'Scheduling time saved', value: '30%' },
    ],
    role: 'UI/UX Design, Visual Design, Interaction Design',
    team: '4 Software Engineers, 1 Product Manager, Clinical team, 1 UX Researcher',
    timeline: '2020 – 2022',
    company: 'Hologic',
    domain: 'Healthcare / Medical Devices',
    problem:
      'Redesign diagnostic imaging and patient scheduling workflows to cut data entry errors and streamline coordination across clinical staff.',
    process: [
      {
        phase: 'Research',
        detail:
          'Shadowed 20+ clinical staff across mammography and cytology labs. Documented pain points in patient intake, scheduling, and results reporting.',
      },
      {
        phase: 'Synthesis',
        detail:
          'Mapped patient journeys from referral to results delivery. Identified 8 high-friction handoff points where data re-entry caused errors.',
      },
      {
        phase: 'Design',
        detail:
          'Designed an integrated scheduling and results dashboard with smart auto-fill, conflict detection, and HL7-compliant data exchange.',
      },
      {
        phase: 'Validation',
        detail:
          'Tested with 15 clinical coordinators in live lab settings. Refined touch targets, contrast, and error recovery for high-stress environments.',
      },
    ],
    solution:
      'A unified diagnostics workflow platform that connects scheduling, imaging, and results reporting. Smart auto-fill and conflict detection cut data entry errors by 55%, while integrated scheduling reduced appointment coordination time by 30%.',
    outcomes: [
      'Reduced manual data entry errors by 55%',
      'Cut appointment scheduling coordination time by 30%',
      'Onboarded 200+ clinics with minimal training overhead',
    ],
    reflection:
      'Designing for healthcare taught me that every pixel can affect a patient outcome. The constraint of working with legacy HL7 systems forced creative solutions — we could not change the backend, so we had to make the frontend incredibly forgiving. I started vibe-coding quick prototypes to test touch targets with actual gloves on.',
  },
  {
    id: 'opswat',
    slug: 'opswat',
    title: 'OPSWAT Security Platform',
    tag: 'Cybersecurity Workflow · 2018 – 2020',
    shortDesc:
      'Designed threat detection and incident response workflows for security analysts, reducing triage time and improving cross-team coordination.',
    heroMetrics: [
      { label: 'Triage time reduced', value: '60%' },
      { label: 'False positive rate cut', value: '35%' },
      { label: 'SOC analysts supported', value: '500+' },
    ],
    role: 'UI/UX Design, Interaction Design',
    team: '6 Software Engineers, 1 Product Manager, Security team, 1 UX Researcher',
    timeline: '2018 – 2020',
    company: 'OPSWAT',
    domain: 'Cybersecurity / SOC Operations',
    problem:
      'Design a unified threat detection and incident response platform to reduce alert triage time and improve cross-team coordination for security analysts.',
    process: [
      {
        phase: 'Research',
        detail:
          'Embedded with a SOC team for 2 weeks. Observed triage workflows, alert fatigue patterns, and handoff rituals between analysts and incident responders.',
      },
      {
        phase: 'Synthesis',
        detail:
          'Created an alert severity matrix and incident lifecycle map. Identified 3 breakpoints: alert overload, context fragmentation, and noisy escalations.',
      },
      {
        phase: 'Design',
        detail:
          'Designed a unified threat detection dashboard with alert grouping, risk scoring, and inline investigation tools. Built escalation workflows with shared incident timelines.',
      },
      {
        phase: 'Validation',
        detail:
          'Tested with 8 SOC analysts using simulated breach scenarios. Iterated on alert density, color semantics, and keyboard shortcuts for rapid triage.',
      },
    ],
    solution:
      'A unified security operations platform that surfaces grouped, risk-scored alerts with inline investigation context. Shared incident timelines and automated escalation routing reduced triage time by 60% and cut false-positive noise by 35%.',
    outcomes: [
      'Reduced security alert triage time by 60%',
      'Cut false positive rate by 35% through smart grouping',
      'Supported 500+ SOC analysts across enterprise deployments',
    ],
    reflection:
      'Cybersecurity is the ultimate high-stakes, low-tolerance domain. Analysts do not have time to learn your UI — it must be immediately scannable. I learned that in security, less UI is often more UI. Removing features was harder than adding them. I also built coded prototypes to simulate real-time alert feeds, which helped us validate density thresholds.',
  },
]

export const skills = [
  {
    area: 'Design',
    items: ['Product Strategy', 'UX Research', 'Interaction Design', 'Visual Design', 'Prototyping', 'Design Systems'],
  },
  {
    area: 'Engineering',
    items: ['React', 'Vibe Coding', 'Framer Motion', 'CSS / Animation', 'Git', 'Component Libraries'],
  },
  {
    area: 'Tools',
    items: ['Figma', 'FigJam', 'Principle', 'Framer', 'Maze', 'VS Code'],
  },
]

export const aboutStats = [
  { num: '7+', label: 'Years experience' },
  { num: '3', label: 'Complex domains mastered' },
  { num: '6', label: 'Design systems built' },
  { num: '15+', label: 'Cross-functional teams led' },
]
