export const projects = [
  {
    id: 'servicenow',
    slug: 'servicenow',
    title: 'ServiceNow Platform',
    tag: 'B2B Enterprise Workflow · 2022 – 2024',
    shortDesc:
      'Led design for enterprise IT and HR workflow modules, reducing task completion time and unifying the platform experience across 15+ product teams.',
    heroMetrics: [
      { label: 'Product teams aligned', value: '15+' },
      { label: 'Workflow modules shipped', value: '6' },
      { label: 'User tasks streamlined', value: '40%' },
    ],
    role: 'Senior Product Designer',
    timeline: '2022 – 2024',
    company: 'ServiceNow',
    domain: 'B2B SaaS / Enterprise Workflow',
    problem:
      'Enterprise users were bouncing between fragmented modules to complete cross-functional workflows. Each team had its own visual language, interaction patterns, and navigation model, creating a steep learning curve and high support ticket volume.',
    process: [
      {
        phase: 'Research',
        detail:
          'Conducted 30+ interviews with IT admins and HR operators. Mapped end-to-end workflow journeys to identify breakage points across modules.',
      },
      {
        phase: 'Synthesis',
        detail:
          'Created a unified journey map and identified 12 shared interaction patterns. Prioritized the 4 highest-impact patterns for standardization.',
      },
      {
        phase: 'Design',
        detail:
          'Designed a scalable workflow canvas and task panel system. Built Figma prototypes with conditional logic and multi-step approval flows.',
      },
      {
        phase: 'Validation',
        detail:
          'Ran moderated usability tests with 12 enterprise users. Iterated on approval flow density and mobile responsiveness.',
      },
    ],
    solution:
      'A unified workflow designer and task execution experience that standardizes navigation, actions, and feedback across ITSM, HRSD, and CSM modules. Reduced context switching and cut onboarding time for new admins by 40%.',
    outcomes: [
      'Reduced workflow setup time by 40% for new admins',
      'Unified 6 modules under a single interaction framework',
      'Cut support tickets related to navigation confusion by 35%',
    ],
    reflection:
      'The hardest part was getting 15 product teams to agree on one button placement. I learned that design systems are 80% politics and 20% pixels. Building live-coded prototypes alongside Figma mocks helped engineers visualize the end state and accelerated buy-in.',
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
    role: 'Product Designer',
    timeline: '2020 – 2022',
    company: 'Hologic',
    domain: 'Healthcare / Medical Devices',
    problem:
      'Clinical staff were spending excessive time on manual data entry and appointment coordination across fragmented systems. Errors in patient scheduling led to missed appointments and delayed diagnostic results, impacting patient outcomes.',
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
    role: 'UX Designer',
    timeline: '2018 – 2020',
    company: 'OPSWAT',
    domain: 'Cybersecurity / SOC Operations',
    problem:
      'Security analysts were drowning in alert noise. Threat investigation required jumping between 4+ tools, and false positives consumed 40% of analyst time. Cross-team coordination during incidents was chaotic, with no shared situational awareness.',
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
