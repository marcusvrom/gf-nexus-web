/* GF Nexus — i18n engine. PT-BR is the default (text in HTML). EN loaded from this dict. */
(function () {
  'use strict';

  var STORAGE_KEY = 'gfnexus_lang';
  var SUPPORTED   = ['pt-BR', 'en'];

  /* ── English translations ─────────────────────────────────────────────── */
  var en = {
    /* shared nav */
    'nav.about':      'About',
    'nav.guides':     'Guides',
    'nav.community':  'Community',
    'nav.news':       'News',
    'nav.recruitment':'Recruitment',
    'nav.status':     'Beta in preparation',
    'nav.cta':        'Join the beta',

    /* shared footer */
    'footer.legal': 'GF Nexus · non-profit private server · 2026<br>Grand Fantasia &copy; X-Legend Entertainment. Fan project, no official affiliation.',

    /* ── index.html ───────────────────────────────────────────────────── */
    'idx.hero.eyebrow':    'Grand Fantasia · Private Server · Living community',
    'idx.hero.h1':         'The portal to <em>Saphael</em><br>is opening.',
    'idx.hero.lead':       'GF Nexus is a new home for those who miss the colorful adventure, spontaneous parties, companion sprites, and that MMORPG vibe that makes you log in just to live in the world for a few more hours.',
    'idx.hero.cta1':       'Reserve my spot',
    'idx.hero.cta2':       'Join Discord',
    'idx.hero.meta1':      'Beta window',
    'idx.hero.meta2':      'Meaningful progression',
    'idx.hero.meta3':      'As you remember it',

    'idx.pillars.kicker':  'What is GF Nexus',
    'idx.pillars.h2':      'A renaissance, not a copy.',
    'idx.pillars.desc':    'We rebuilt the classic Grand Fantasia experience with respect for the original progression — but with the stability, community, and care that a server made by people who love the game can offer.',
    'idx.pillars.p1.title':'Vanilla spirit',
    'idx.pillars.p1.text': 'Progression with meaning, a living economy, and a journey that keeps its value. Every level is an achievement.',
    'idx.pillars.p2.title':'Nexus Points (NP)',
    'idx.pillars.p2.text': 'The premium currency inspired by the old APs, integrated into the shop and marketplace — no pay-to-win, just convenience and cosmetics.',
    'idx.pillars.p3.title':'Community from the beta',
    'idx.pillars.p3.text': 'Surveys, guilds, suggestions, and recruitment. Help build the server with players, from day one.',

    'idx.explore.kicker':       'Explore the Nexus',
    'idx.explore.h2':           'More about the project.',
    'idx.explore.desc':         'Get to know the server\'s proposal, follow the news, and see how to participate in building the community from the start.',
    'idx.explore.c1.title':     'About GF Nexus',
    'idx.explore.c1.text':      'Understand our vision, classic-like philosophy, planned progress, and community commitment.',
    'idx.explore.c1.link':      'Read about the project →',
    'idx.explore.c2.title':     'News & updates',
    'idx.explore.c2.text':      'Follow announcements, roadmap, development stages, recruitment, and beta preparation.',
    'idx.explore.c2.link':      'See news →',
    'idx.explore.c3.title':     'Staff Recruitment',
    'idx.explore.c3.text':      'See open positions, responsibilities, expected profile, and the official application form.',
    'idx.explore.c3.link':      'Learn about recruitment →',

    'idx.classes.kicker':  'Choose your path',
    'idx.classes.h2':      'Classes of Saphael.',
    'idx.classes.desc':    'From base classes to elite evolutions — find the style that suits you before stepping into the world.',
    'idx.classes.note':    'And many more — including the special evolutions every GF veteran recognizes.',

    'idx.roadmap.kicker':  'The journey to launch',
    'idx.roadmap.h2':      'Nexus Roadmap.',
    'idx.roadmap.desc':    'Full transparency — follow each stage toward launch.',
    'idx.rm.p0.phase':  'Phase 0 · completed',
    'idx.rm.p0.title':  'Technical foundation',
    'idx.rm.p0.text':   'Server mapped, data catalogued, PT-BR translation pipeline and infrastructure defined.',
    'idx.rm.p1.phase':  'Q2 2026 · now',
    'idx.rm.p1.title':  'Community Research',
    'idx.rm.p1.text':   'Building the community by listening to suggestions and ideas. Feedback collection, balancing, and stability.',
    'idx.rm.p2.phase':  'Q3 2026',
    'idx.rm.p2.title':  'Open Beta',
    'idx.rm.p2.text':   'Doors open to the community. Events, guilds, and the first endgame content.',
    'idx.rm.p3.phase':  'Q4 2026',
    'idx.rm.p3.title':  'Official Launch',
    'idx.rm.p3.text':   'Stable server, full content up to cap, cosmetic NP shop, integrated marketplace.',

    'idx.rec.kicker':     'Join the team',
    'idx.rec.h2':         'Staff Recruitment.',
    'idx.rec.p1':         'GF Nexus is growing and we want responsible people passionate about Grand Fantasia to help build a strong, welcoming, and well-organized community.',
    'idx.rec.p2':         'We are looking for support in areas such as player support, moderation, events, testing, translation, content creation, promotion, and technical support.',
    'idx.rec.li1':        '✓ Help new players and strengthen the community',
    'idx.rec.li2':        '✓ Participate in organizing events and testing',
    'idx.rec.li3':        '✓ Contribute with translation, content, and server improvements',
    'idx.rec.li4':        '✓ Be part of building the Nexus from the start',
    'idx.rec.badge':      'Open positions',
    'idx.rec.card.title': 'Apply for Staff',
    'idx.rec.card.text':  'Fill out the recruitment form carefully. All responses will be reviewed by the administration, and selected candidates may be invited for a conversation or additional step.',
    'idx.rec.card.btn':   'See recruitment details',
    'idx.rec.card.small': 'Submitting the form does not guarantee approval. We look for people with responsibility and commitment to the community.',

    'idx.community.kicker': 'Build with us',
    'idx.community.h2':     'The community has already started.',
    'idx.community.p':      'Join the Discord to follow development, participate in surveys, find your guild, and be the first to know when the beta opens.',
    'idx.community.cta1':   'Join Discord',
    'idx.community.cta2':   'Waitlist',

    'idx.beta.status': 'Beta in preparation',
    'idx.beta.h2':     'Beta registrations are <em>not</em> open yet.',
    'idx.beta.lead':   'We are finalizing the last beta preparations. There is no sign-up form yet — but you can join the community now and be the <strong>first to know</strong> when spots open.',
    'idx.beta.d.title':'Discord',
    'idx.beta.d.small':'Join the community',
    'idx.beta.x.title':'X (Twitter)',
    'idx.beta.x.small':'@gfnexusofc',
    'idx.beta.ig.title':'Instagram',
    'idx.beta.ig.small':'@gfnexusofc',
    'idx.beta.note':   '✓ Those already in the community when the beta opens will get a <strong>priority invite</strong> and the in-game <strong>Founder title</strong>.',

    'idx.faq.kicker': 'Frequently asked questions',
    'idx.faq.h2':     'What you need to know.',
    'idx.faq.q1':     'Is the server paid?',
    'idx.faq.a1':     'No. Playing is completely free. We will have a shop with Nexus Points (NP) focused on cosmetics and convenience — no pay-to-win.',
    'idx.faq.q2':     'What are the EXP and drop rates?',
    'idx.faq.a2':     'Vanilla philosophy: rates close to the original 1×. We want progression to have value and the economy to make sense long-term.',
    'idx.faq.q3':     'What language does the server support?',
    'idx.faq.a3':     'We are translating the game to Brazilian Portuguese as a priority, with English, Spanish, and French planned next.',
    'idx.faq.q4':     'How do I play when the beta opens?',
    'idx.faq.a4':     'You will download the client from our site or Discord and create an account. Complete instructions will be sent to the waitlist and shared on Discord.',

    /* ── sobre.html ───────────────────────────────────────────────────── */
    'sobre.eyebrow':  'About the project · Classic-like · Living community',
    'sobre.h1':       'A new gathering place for those who still carry <em>Saphael</em> in their memory.',
    'sobre.lead':     'GF Nexus was born to bring together old and new players in an experience close to the classic spirit of Grand Fantasia, with valued progression, an active community, and transparent development.',
    'sobre.cta1':     'Join Discord',
    'sobre.cta2':     'Help the project',

    'sobre.vision.kicker': 'Our vision',
    'sobre.vision.h2':     'Revitalizing the community with respect for the classic experience.',
    'sobre.vision.p1':     'GF Nexus doesn\'t want to transform Grand Fantasia into something unrecognizable. The proposal is to preserve the feeling of journey, the importance of progression, the organic economy, and the player cooperation that made the game meaningful to so many people.',
    'sobre.vision.p2':     'We are building a classic-like foundation with improvements in organization, communication, support, documentation, and long-term planning. The goal is for each stage of the server to be accompanied by the community, with space for suggestions, testing, and feedback.',

    'sobre.feat.p1.title': 'Progression with value',
    'sobre.feat.p1.text':  'Rates close to vanilla, relevant achievements, and an evolution curve that rewards dedication.',
    'sobre.feat.p2.title': 'Community from the start',
    'sobre.feat.p2.text':  'Surveys, feedback channels, recruitment, and active participation even before the public beta.',
    'sobre.feat.p3.title': 'Planned localization',
    'sobre.feat.p3.text':  'Brazilian Portuguese as a priority, with future support for English, Spanish, and French.',
    'sobre.feat.p4.title': 'Transparency',
    'sobre.feat.p4.text':  'Public roadmap, periodic news, and clear communication about changes, tests, and maintenance.',

    'sobre.id.badge': 'Identity',
    'sobre.id.title': 'GF Nexus',
    'sobre.id.text':  'Classic-like Grand Fantasia private server preparing for beta.',
    'sobre.id.li1':   '<strong>Focus:</strong> Brazilian community',
    'sobre.id.li2':   '<strong>Progression:</strong> vanilla 1×',
    'sobre.id.li3':   '<strong>Beta:</strong> Q3 2026',
    'sobre.id.li4':   '<strong>Launch:</strong> Q4 2026',

    'sobre.pillars.kicker': 'Pillars',
    'sobre.pillars.h2':     'What guides the Nexus.',
    'sobre.pillars.desc':   'Technical decisions, events, rules, and balancing must respect these principles.',
    'sobre.pillars.p1.title': 'Fair play',
    'sobre.pillars.p1.text':  'Clean environment, no bots, no bug abuse, no favoritism, and no unfair advantages.',
    'sobre.pillars.p2.title': 'No pay-to-win',
    'sobre.pillars.p2.text':  'Nexus Points for convenience and cosmetics, preserving competitiveness and the economy.',
    'sobre.pillars.p3.title': 'Nostalgic spirit',
    'sobre.pillars.p3.text':  'Respect for the classic vibe, sprites, parties, trading, and group adventure.',

    /* ── noticias.html ────────────────────────────────────────────────── */
    'news.eyebrow': 'News · Changelog · Announcements',
    'news.h1':      'Follow the development of <em>GF Nexus</em>.',
    'news.lead':    'This page gathers announcements, roadmap stages, development notes, recruitment posts, and news about beta preparation.',

    'news.feat.tag':   'Announcement',
    'news.feat.title': 'Staff Recruitment open',
    'news.feat.text':  'We are expanding the team to strengthen support, moderation, events, testing, translation, content, and community organization. Responsible and committed people can apply through the official form.',
    'news.feat.meta':  'Published in 2026 · GF Nexus Team',
    'news.feat.btn':   'See recruitment',

    'news.sidebar.title':    'Categories',
    'news.sidebar.roadmap':  'Roadmap',
    'news.sidebar.devlog':   'Devlog',
    'news.sidebar.community':'Community',
    'news.sidebar.beta':     'Beta',

    'news.sec.kicker': 'Latest updates',
    'news.sec.h2':     'News hub.',
    'news.sec.desc':   'Use the cards below as a base for new server announcements.',

    'news.c1.tag':   'Roadmap',
    'news.c1.title': 'Public roadmap defined for 2026',
    'news.c1.text':  'The project proceeds in phases: technical foundation, community research, open beta in Q3 2026, and official launch planned for Q4 2026.',
    'news.c1.meta':  'Planning · 2026',
    'news.c2.tag':   'Devlog',
    'news.c2.title': 'PT-BR translation as priority',
    'news.c2.text':  'Brazilian Portuguese localization is a priority to make Saphael more accessible to the national community, with English, Spanish, and French planned afterward.',
    'news.c2.meta':  'Localization · In progress',
    'news.c3.tag':   'Community',
    'news.c3.title': 'Discord as the community hub',
    'news.c3.text':  'Surveys, guilds, suggestions, support, and official announcements will be centered on Discord to connect players and the team.',
    'news.c3.meta':  'Community · Active',
    'news.c4.tag':   'Beta',
    'news.c4.title': 'Beta in preparation',
    'news.c4.text':  'The beta will be used to test stability, translation, progression, economy, events, and general experience before the official launch.',
    'news.c4.meta':  'Beta · Q3 2026',

    'news.cta.kicker': 'Get updates',
    'news.cta.h2':     'Join the official Discord.',
    'news.cta.p':      'Major announcements, surveys, and test calls will be published first in the community.',
    'news.cta.btn1':   'Join Discord',
    'news.cta.btn2':   'See roadmap',

    /* ── recrutamento.html ────────────────────────────────────────────── */
    'rec.eyebrow': 'Staff Recruitment · Open positions',
    'rec.h1':      'Help build the future of <em>GF Nexus</em>.',
    'rec.lead':    'We are looking for responsible, mature, communicative, and committed people to strengthen the server\'s team and support the community from beta preparation.',
    'rec.cta1':    'Fill out the form',
    'rec.cta2':    'See positions',

    'rec.profile.kicker': 'Expected profile',
    'rec.profile.h2':     'Staff is responsibility, not status.',
    'rec.profile.p':      'Being part of the team means helping players, organizing information, keeping the community healthy, reporting issues, supporting events, and acting ethically. We look for people who know how to separate friendship from administrative decisions and who are willing to learn.',

    'rec.feat.p1.title': 'Responsibility',
    'rec.feat.p1.text':  'Keep commitments, respect internal rules, and act maturely in conflict situations.',
    'rec.feat.p2.title': 'Communication',
    'rec.feat.p2.text':  'Respond clearly, maintain a respectful posture, and escalate issues through the right channels.',
    'rec.feat.p3.title': 'Ethics',
    'rec.feat.p3.text':  'Don\'t use your role for personal benefit, don\'t favor friends, and maintain confidentiality about internal matters.',
    'rec.feat.p4.title': 'Commitment',
    'rec.feat.p4.text':  'Have real availability to support the community, test content, and contribute to the project\'s growth.',

    'rec.form.badge':  'Official form',
    'rec.form.title':  'Staff application',
    'rec.form.p':      'Fill out carefully. Responses will be reviewed by the administration.',
    'rec.form.btn':    'Access the form',
    'rec.form.note':   'Submission does not guarantee approval. Candidates may go through a conversation or additional step.',

    'rec.areas.kicker': 'Open positions',
    'rec.areas.h2':     'Where you can help.',
    'rec.areas.desc':   'The form allows you to indicate one or more areas of interest.',

    'rec.role.r1.title': 'Player support',
    'rec.role.r1.text':  'Answer questions, guide beginners, escalate issues, and maintain welcoming service.',
    'rec.role.r2.title': 'Discord moderation',
    'rec.role.r2.text':  'Organize channels, enforce rules, reduce conflicts, combat spam, and keep the community healthy.',
    'rec.role.r3.title': 'GM / Events',
    'rec.role.r3.text':  'Support in-game activities, official events, interaction tests, and player experience monitoring.',
    'rec.role.r4.title': 'QA / Testing',
    'rec.role.r4.text':  'Test quests, maps, classes, items, bugs, translation, and changes before they reach the community.',
    'rec.role.r5.title': 'Translation / Localization',
    'rec.role.r5.text':  'Help review and adapt texts for Portuguese, English, Spanish, and French.',
    'rec.role.r6.title': 'Content / Promotion',
    'rec.role.r6.text':  'Create guides, posts, art, videos, news, announcements, and materials for social media.',
    'rec.role.r7.title': 'Design / Art',
    'rec.role.r7.text':  'Support visual identity, banners, event images, posts, and communication materials.',
    'rec.role.r8.title': 'Technical support',
    'rec.role.r8.text':  'Contribute with documentation, config analysis, bug organization, and internal tools.',

    'rec.proc.kicker': 'Process',
    'rec.proc.h2':     'How the selection works.',
    'rec.proc.s1.phase':  'Step 1',
    'rec.proc.s1.title':  'Submit the form',
    'rec.proc.s1.text':   'The candidate provides their area of interest, experience, availability, and situational responses.',
    'rec.proc.s2.phase':  'Step 2',
    'rec.proc.s2.title':  'Administration review',
    'rec.proc.s2.text':   'The team evaluates maturity, attitude, availability, background, and fit with the project.',
    'rec.proc.s3.phase':  'Step 3',
    'rec.proc.s3.title':  'Chat or test',
    'rec.proc.s3.text':   'Some candidates may be invited for a Discord conversation or a simple practical activity.',
    'rec.proc.s4.phase':  'Step 4',
    'rec.proc.s4.title':  'Trial period',
    'rec.proc.s4.text':   'New members may start with limited permissions, monitoring, and internal guidance.',

    'rec.cta.kicker': 'Ready to participate?',
    'rec.cta.h2':     'Submit your application.',
    'rec.cta.p':      'Read the information carefully and respond sincerely. We look for people with good posture, not just experience.',
    'rec.cta.btn1':   'Fill out the form',
    'rec.cta.btn2':   'Join Discord',

    /* ── guia.html ────────────────────────────────────────────────────── */
    'guia.eyebrow': 'Beginner\'s Guide · First steps · Saphael',
    'guia.h1':      'Never played <em>Grand Fantasia</em>? Start here.',
    'guia.lead':    'A straightforward guide to get you started: create your character, understand the famous Sprite system, choose your class, and take your first steps in Saphael without getting lost. Made for those who never played — and for those returning after years.',
    'guia.cta1':    'See the step by step',
    'guia.cta2':    'Ask questions on Discord',

    'guia.whatIs.kicker': 'Before anything else',
    'guia.whatIs.h2':     'What is Grand Fantasia?',
    'guia.whatIs.desc':   'A colorful and lighthearted fantasy MMORPG, known for its cute visuals, group adventure, and a unique mechanic: <strong>Sprites</strong> — magical companions who collect materials and <strong>craft your equipment</strong>.',
    'guia.whatIs.p1.title': 'Classic adventure',
    'guia.whatIs.p1.text':  'Tab-target combat, quests, group dungeons, and level progression. The pace is from the golden age of MMORPGs — every level is an achievement.',
    'guia.whatIs.p2.title': 'Companion Sprites',
    'guia.whatIs.p2.text':  'The heart of GF. Your Sprite collects resources around the world and crafts weapons and armor for you. Good equipment comes from your Sprite\'s work.',
    'guia.whatIs.p3.title': 'Living community',
    'guia.whatIs.p3.text':  'Spontaneous parties, guilds, player trading, and events. Much of what makes the game fun happens together with other people.',

    'guia.steps.kicker': 'From zero to the world',
    'guia.steps.h2':     'Your first steps in Saphael.',
    'guia.steps.desc':   'Six stages to go from the creation screen to adventuring.',
    'guia.step1.phase': 'Step 1',
    'guia.step1.title': 'Create your account and character',
    'guia.step1.text':  'Register on the site, download the client, and create your character. You start as a <strong>Novice</strong> (levels 1 to 5) — no class yet. Don\'t worry about choosing everything now: the class comes later.',
    'guia.step2.phase': 'Step 2',
    'guia.step2.title': 'Complete the tutorial in Blue Bay',
    'guia.step2.text':  'Your journey begins in the starting region of <strong>Blue Bay</strong>. Follow the first training quests (killing some simple monsters in the area). They teach the basics of movement, combat, and rewards, and will get you to level 5 quickly.',
    'guia.step3.phase': 'Step 3',
    'guia.step3.title': 'Receive your first Sprite',
    'guia.step3.text':  'Early on you receive your first <strong>Sprite</strong>. It is your permanent companion: learns to collect materials and, later, to craft equipment. Take care of it — it\'s the one that will gear you throughout the game.',
    'guia.step4.phase': 'Step 4',
    'guia.step4.title': 'Choose your class path',
    'guia.step4.text':  'Upon reaching <strong>level 6</strong>, you choose your first class from six paths (see the "Classes" section below). This choice defines your playstyle — but it\'s just the beginning of a long evolution tree.',
    'guia.step5.phase': 'Step 5',
    'guia.step5.title': 'Level up and unlock skills',
    'guia.step5.text':  'Complete quests and defeat same-level monsters to gain EXP. At each class evolution (levels 16, 31, and beyond), you unlock new abilities and look visually more imposing. Progression is <strong>vanilla 1×</strong> — worth it.',
    'guia.step6.phase': 'Step 6',
    'guia.step6.title': 'Join the community',
    'guia.step6.text':  'Form a party with other players, join a guild, and participate in events. GF shines when played in a group — and the Nexus community starts in our Discord.',

    'guia.sprite.kicker': 'The most important mechanic',
    'guia.sprite.h2':     'Understanding Sprites.',
    'guia.sprite.desc':   'If you understand only one thing about GF before starting, let it be this. Your Sprite is what sets Grand Fantasia apart from any other MMORPG.',
    'guia.sprite.c1.title': 'Material collection',
    'guia.sprite.c1.text':  'Your Sprite automatically collects resources (ores, herbs, fabrics, essences) while you play. These materials are the raw input for everything it will craft.',
    'guia.sprite.c2.title': 'Item crafting',
    'guia.sprite.c2.text':  'In GF, you don\'t depend on stores to gear up: your Sprite <strong>crafts</strong> weapons, armor, and accessories from collected materials. The better trained the Sprite, the better what it creates.',
    'guia.sprite.c3.title': 'Fusion and evolution',
    'guia.sprite.c3.text':  'Sprites can be fused and evolved to gain better attributes and appearances. Investing in your Sprite is investing directly in your ability to gear the character.',
    'guia.sprite.note':     'Beginner summary: <strong>collect everything, feed your Sprite materials, and let it craft.</strong> Don\'t sell materials without knowing — they\'re worth more in your Sprite\'s hands than at the NPC.',

    'guia.classes.kicker': 'Choose at level 6',
    'guia.classes.h2':     'The six starting classes.',
    'guia.classes.p':      'Upon reaching level 6, the Novice chooses one of six paths. Each evolves into sub-classes at levels 16, 31, and beyond (up to the 5th evolution at endgame). There is no "wrong" choice — there is the one that suits you.',
    'guia.cls.c1.title': '&#9876; Fighter',
    'guia.cls.c1.text':  'Melee combat, resilience, and physical damage. Evolves to <strong>Warrior</strong> then <strong>Berserker</strong> or <strong>Paladin</strong>. Great for those who want to be on the front line.',
    'guia.cls.c2.title': '&#127993; Hunter',
    'guia.cls.c2.text':  'Ranged damage with a bow and mobility. Evolves to <strong>Archer</strong> then <strong>Ranger</strong> or <strong>Assassin</strong>. For those who like controlling combat from afar.',
    'guia.cls.c3.title': '&#10010; Acolyte',
    'guia.cls.c3.text':  'Support and healing, keeping the group alive. Evolves to <strong>Priest</strong> then <strong>Cleric</strong> or <strong>Sage</strong>. Always welcome in any party.',
    'guia.cls.c4.title': '&#10022; Sorcerer',
    'guia.cls.c4.text':  'Area magic damage and burst. Evolves to <strong>Mage</strong> then <strong>Warlock</strong> or <strong>Necromancer</strong>. Fragile, but devastating.',
    'guia.cls.c5.title': '&#9881; Mechanic',
    'guia.cls.c5.text':  'Gadgets, firearms, and contraptions. Evolves to <strong>Engineer</strong> then <strong>Artificer</strong> or <strong>Gunner</strong>. Versatile and unique style.',
    'guia.cls.c6.title': '&#9201; Voyager',
    'guia.cls.c6.text':  'Utility, speed, and time tricks. Evolves to <strong>Nomad</strong> then <strong>Duelist</strong> or <strong>Clockmaker</strong>. For those who like to play outside the box.',
    'guia.classes.gallery': 'Want to see classes with art? Check the <a class="text-link" href="index.html#classes">class gallery →</a>',

    'guia.aside.badge': 'Quick summary',
    'guia.aside.title': 'Class evolution',
    'guia.aside.li1':   '<strong>Lv 1–5:</strong> Novice',
    'guia.aside.li2':   '<strong>Lv 6:</strong> 1st class (6 paths)',
    'guia.aside.li3':   '<strong>Lv 16:</strong> 2nd evolution',
    'guia.aside.li4':   '<strong>Lv 31:</strong> 3rd evolution (branches)',
    'guia.aside.li5':   '<strong>Endgame:</strong> 4th and 5th evolutions',

    'guia.tips.kicker': 'Learn from veterans',
    'guia.tips.h2':     'Golden tips for beginners.',
    'guia.tip1.title':  'Don\'t sell materials early',
    'guia.tip1.text':   'Ores, herbs, and essences are worth more being processed by your Sprite than sold to an NPC. Keep them until you know what they do.',
    'guia.tip2.title':  'Play in groups',
    'guia.tip2.text':   'EXP and drops in a party are better, and dungeons require a team. Inviting to party is the fastest way to make friends in GF.',
    'guia.tip3.title':  'Follow the quest line',
    'guia.tip3.text':   'Main quests take you through zones in the right level order. Following the story is the most efficient way to level up early on.',
    'guia.tip4.title':  'Train your Sprite always',
    'guia.tip4.text':   'A well-trained Sprite crafts better equipment. Invest in it from the start — it\'s your personal blacksmith throughout the whole game.',
    'guia.tip5.title':  'Watch the economy',
    'guia.tip5.text':   'The server is vanilla, no pay-to-win. Gold has real value — spend wisely and be suspicious of trades that seem "too good."',
    'guia.tip6.title':  'Ask the community',
    'guia.tip6.text':   'Stuck on a quest, don\'t know where to go? The Nexus Discord has people ready to help. Don\'t suffer alone.',

    'guia.gloss.kicker': 'Decoding the jargon',
    'guia.gloss.h2':     'Quick GF glossary.',
    'guia.gloss.desc':   'Terms you will hear in chat and what they mean.',
    'guia.gloss.t1.q':   'Sprite / Elf / Sprite',
    'guia.gloss.t1.a':   'Your magical companion that collects materials and crafts equipment. The signature mechanic of Grand Fantasia. Different translations use different names, but it\'s all the same thing.',
    'guia.gloss.t2.q':   'Crafting / Manufacturing',
    'guia.gloss.t2.a':   'The process of your Sprite turning collected materials into weapons, armor, and accessories. The main source of equipment in the game.',
    'guia.gloss.t3.q':   'Party',
    'guia.gloss.t3.a':   'Group of players. Shares EXP and drops, and is required for dungeons and bosses.',
    'guia.gloss.t4.q':   'Class evolution',
    'guia.gloss.t4.a':   'Changing class upon reaching certain levels (6, 16, 31...), unlocking new abilities and appearance. The "promotion" of your character.',
    'guia.gloss.t5.q':   'Vanilla / 1×',
    'guia.gloss.t5.a':   'EXP and drop rates close to the original, without inflated multipliers. Slower and more valued progression — the Nexus proposal.',
    'guia.gloss.t6.q':   'NP (Nexus Points)',
    'guia.gloss.t6.a':   'The server\'s premium currency, focused on convenience and cosmetics. No pay-to-win.',
    'guia.gloss.t7.q':   'Saphael',
    'guia.gloss.t7.a':   'The name of the world/continent where Grand Fantasia takes place. "Saphael is reborn here" is our motto.',

    'guia.faq.kicker':  'Common questions from beginners',
    'guia.faq.h2':      'Beginner FAQ.',
    'guia.faq.q1':      'Do I need prior experience to understand?',
    'guia.faq.a1':      'No. The game has an initial tutorial in Blue Bay that teaches the basics, and this guide covers the rest. Anyone can start from scratch.',
    'guia.faq.q2':      'What is the best class to start with?',
    'guia.faq.a2':      'There\'s no "best" — there\'s the one that matches your style. Fighter and Hunter are simpler to learn; Acolyte is always wanted in groups. See the classes section above.',
    'guia.faq.q3':      'Is the game hard to solo?',
    'guia.faq.a3':      'You can level up quite a bit solo by following quests, but dungeons and bosses need a group. GF was made to be social — it\'s worth playing with others.',
    'guia.faq.q4':      'How do I get equipment?',
    'guia.faq.a4':      'Mainly through your Sprite, which crafts items from materials. There are also monster drops, quest rewards, and trading with other players.',
    'guia.faq.q5':      'When does the beta open?',
    'guia.faq.a5':      'The closed beta window is planned for Q3 2026. Registrations are not yet open — join the Discord to be the first to know.',

    'guia.cta.kicker': 'Still have questions?',
    'guia.cta.h2':     'The community helps you get started.',
    'guia.cta.p':      'Join the GF Nexus Discord to ask questions, find a party, join a guild, and follow when the beta opens. Nobody starts alone.',
    'guia.cta.btn1':   'Join Discord',
    'guia.cta.btn2':   'Follow the beta',

    'guia.footer.legal': 'GF Nexus · non-profit private server · 2026<br>Grand Fantasia &copy; X-Legend Entertainment. Fan project, no official affiliation.<br>Guide based on classic game mechanics and client data from this version.',
  };

  /* ── Class card data-attribute translations (EN only) ─────────────────── */
  var classCards = {
    en: {
      'Ranger':     { caption: 'Ranged and AoE DPS',          role: 'Ranged DPS',           summary: 'A ranged combat specialist, the Ranger excels through mobility, constant pressure, and area attacks. Great for those who like keeping enemies under control without being on the front line.' },
      'Berserker':  { caption: 'Melee damage and AoE',         role: 'Melee damage',          summary: 'The Berserker is an aggressive short-range class focused on brute force, impact, and AoE damage. Ideal for players who enjoy charging into battle and taking out groups of enemies with heavy strikes.' },
      'Paladino':   { caption: 'Holy tank and reduction',       role: 'Defensive tank',        summary: 'Resilient and dependable, the Paladin protects allies, absorbs damage, and holds the front line. Perfect for those who enjoy leading groups through dungeons and keeping the team safe.' },
      'Clérigo':    { caption: 'Support / Healer',              role: 'Support and healing',   summary: 'The Cleric is essential for group survival, providing healing, support, and stability in extended battles. Recommended for players who enjoy helping allies and keeping the team on their feet.' },
      'Feiticeiro': { caption: 'Magic DPS and AoE control',     role: 'Magic DPS',             summary: 'Master of magical damage and area control, the Sorcerer dominates groups with powerful spells. Ideal for those who prefer massive impact from range with explosions and field control.' },
      'Assassino':  { caption: 'Stealth burst and evasion',     role: 'Burst and evasion',     summary: 'Fast, lethal, and hard to hit, the Assassin shines with burst damage and high mobility. For those who enjoy agility, precision, and eliminating enemies before they can react.' },
      'Sábio':      { caption: 'Versatility, damage and support', role: 'Versatility',         summary: 'The Sage combines support, utility, and offense in a balanced package. Great for players who like adapting to the situation and providing value to the group in different ways.' },
      'Necromante': { caption: 'Dark summoning and debuffs',    role: 'Summoning and debuffs', summary: 'Dark and strategic, the Necromancer weakens enemies and dominates the field with debuffs and summons. Ideal for those who enjoy control, constant pressure, and a unique playstyle.' },
      'Prime':      { caption: 'Sustained damage',              role: 'Sustained damage',      summary: 'The Prime focuses on constant offense, aggressive rhythm, and sustained pressure on the enemy. Good for those who like keeping damage active at all times and dominating through persistence.' },
      'Optimus':    { caption: 'Heavy artillery',               role: 'Heavy artillery',       summary: 'A firepower specialist, the Optimus brings heavy attacks and significant impact at medium and long range. Perfect for an offensive playstyle with a strong, imposing presence.' },
      'Viajante':   { caption: 'Magic damage, reduction',       role: 'Magic and reduction',   summary: 'The Voyager mixes magical resources, control, and reduction, offering a differentiated and strategic approach. Suited for players who enjoy utility, combat mastery, and a less conventional class.' },
      'Samurai':    { caption: 'Magic crit, mobility',          role: 'Critical and mobility', summary: 'Agile and elegant, the Samurai combines mobility, precision, and high critical potential. Ideal for those who enjoy an offensive rhythm, quick movement, and landing impactful precise strikes.' },
    }
  };

  /* ── Engine ────────────────────────────────────────────────────────────── */
  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.startsWith('pt') ? 'pt-BR' : 'en';
  }

  function applyLang(lang) {
    var dict = lang === 'en' ? en : {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
      else if (lang === 'pt-BR' && el.dataset.i18nOrig !== undefined) {
        el.textContent = el.dataset.i18nOrig;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
      else if (lang === 'pt-BR' && el.dataset.i18nOrigHtml !== undefined) {
        el.innerHTML = el.dataset.i18nOrigHtml;
      }
    });

    var cardDict = (classCards[lang] || {});
    document.querySelectorAll('.class-card[data-title]').forEach(function (card) {
      var title = card.getAttribute('data-title');
      var tr = cardDict[title];
      if (tr) {
        if (tr.role)    card.setAttribute('data-role', tr.role);
        if (tr.summary) card.setAttribute('data-summary', tr.summary);
        var cap = card.querySelector('.class-cap span');
        if (cap && tr.caption) cap.textContent = tr.caption;
      } else if (lang === 'pt-BR') {
        if (card.dataset.roleOrig)    card.setAttribute('data-role', card.dataset.roleOrig);
        if (card.dataset.summaryOrig) card.setAttribute('data-summary', card.dataset.summaryOrig);
        var capEl = card.querySelector('.class-cap span');
        if (capEl && card.dataset.captionOrig) capEl.textContent = card.dataset.captionOrig;
      }
    });

    document.documentElement.lang = lang;
    updateToggleUI(lang);
  }

  function storeOriginals() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (el.dataset.i18nOrig === undefined) el.dataset.i18nOrig = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      if (el.dataset.i18nOrigHtml === undefined) el.dataset.i18nOrigHtml = el.innerHTML;
    });
    document.querySelectorAll('.class-card[data-title]').forEach(function (card) {
      if (card.dataset.roleOrig === undefined)    card.dataset.roleOrig    = card.getAttribute('data-role') || '';
      if (card.dataset.summaryOrig === undefined) card.dataset.summaryOrig = card.getAttribute('data-summary') || '';
      var cap = card.querySelector('.class-cap span');
      if (cap && card.dataset.captionOrig === undefined) card.dataset.captionOrig = cap.textContent;
    });
  }

  function updateToggleUI(lang) {
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (el) {
      el.classList.toggle('active', el.getAttribute('data-lang') === lang);
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function init() {
    storeOriginals();
    var lang = getLang();
    updateToggleUI(lang);
    if (lang !== 'pt-BR') applyLang(lang);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-lang]');
      if (btn && btn.closest('.lang-toggle')) {
        setLang(btn.getAttribute('data-lang'));
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.GFI18n = { setLang: setLang, getLang: getLang };
})();
