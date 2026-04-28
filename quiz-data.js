const quizData = [
  // ── COMPUTER ETHICS (1–20) ──────────────────────────────────────────────
  {
    "id": 1, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "How does the Oxford English Dictionary define 'ethics'?",
    "options": [
      "Rules of conduct recognised in associations or departments of human life",
      "Scientific study of human behaviour in digital environments",
      "Laws passed by governments to regulate professional conduct",
      "Study of artificial intelligence and its social implications"
    ],
    "answer": 0,
    "explanation": "The OED defines ethics as (among other things) 'the rules of conduct recognised in certain associations or departments of human life'—a practical definition relevant to professional computing contexts."
  },
  {
    "id": 2, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "How does Kizza (2017) define ethics?",
    "options": [
      "A legal framework governing professional behaviour",
      "A theoretical examination of morality",
      "The rules applied by professional bodies to their members",
      "The study of how individuals interact with technology"
    ],
    "answer": 1,
    "explanation": "Kizza defines ethics simply as 'a theoretical examination of morality'—grounding it in philosophical inquiry rather than in law or professional codes alone."
  },
  {
    "id": 3, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "According to Moor (1985), what defines a problem in computer ethics?",
    "options": [
      "Any situation where a computer system causes financial harm to a specific individual or group",
      "When computer technology is involved and there is genuine uncertainty about what to do or how to understand the situation",
      "When a software developer deliberately and knowingly causes harm to users with their code",
      "Any legal dispute involving technology companies and the users of their products or services"
    ],
    "answer": 1,
    "explanation": "Moor's definition requires two things: computer technology must be central, AND genuine uncertainty must exist—not just about the right action, but about how to even frame the situation."
  },
  {
    "id": 4, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "What did Moor (1985) argue that computers create, requiring new thinking and new policies?",
    "options": ["Digital divides", "Policy vacuums", "Moral hazards", "Ethical frameworks"],
    "answer": 1,
    "explanation": "Moor argued that computers reveal 'policy vacuums'—situations where existing rules simply don't apply—requiring society to establish entirely new policies."
  },
  {
    "id": 5, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "According to Reynolds (2018), which development has most increased the risk of IT being used unethically?",
    "options": [
      "The rise of cryptocurrency, dark web markets, and untraceable anonymous online transactions",
      "Growth of the internet, social networks, mass personal data collection, and reliance on information systems",
      "The decline of traditional media and the unchecked rise of unregulated online journalism platforms",
      "Insufficient investment in cybersecurity infrastructure by large technology corporations globally"
    ],
    "answer": 1,
    "explanation": "Reynolds points to the internet's growth, social networks, the ability to capture vast personal data, and greater societal reliance on information systems as compounding factors raising ethical risks."
  },
  {
    "id": 6, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What does Baym (2015) mean by 'cultural anxiety' associated with new technology?",
    "options": [
      "Fear among workers that AI automation will make their jobs and skills entirely redundant",
      "Unease when technology becomes the assumed default solution to social problems before its implications are evaluated",
      "Widespread public concern about government surveillance enabled by always-on digital devices",
      "Anxiety within tech companies about the impact of incoming governmental regulatory oversight"
    ],
    "answer": 1,
    "explanation": "Baym's 'cultural anxiety' is the societal unease that comes with technology being treated as the default fix for everything—from health to governance—before society has properly assessed what it means."
  },
  {
    "id": 7, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "Baym (2015) describes two opposing public reactions to technological innovation. What are they?",
    "options": [
      "Adoption and rejection",
      "Utopian and dystopian perspectives",
      "Legal and illegal usage patterns",
      "Technological and social determinism"
    ],
    "answer": 1,
    "explanation": "Baym labels the two poles Utopian (technology is completely wonderful) and Dystopian (technology is totally evil)—both too simplistic to capture reality."
  },
  {
    "id": 8, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What is the 'technological neutrality' thesis?",
    "options": [
      "Technology should be regulated in the same consistent way across all nations and jurisdictions",
      "Technology is just a neutral tool for humans to use, with no inherent ethical character of its own",
      "Computing professionals and developers should not take political positions in their professional work",
      "AI systems must not treat different users differently based on their personal characteristics"
    ],
    "answer": 1,
    "explanation": "Technological neutrality holds that technology—like a hammer—is just a tool. Danks (2022) challenges this because digital technologies can make ethical decisions themselves."
  },
  {
    "id": 9, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "Why does Danks (2022) argue that digital technology is NOT neutral?",
    "options": [
      "Because all technology reflects and encodes the political biases of its designers and creators",
      "Because autonomous systems can plan, decide, and act—making ethical choices themselves, including life-and-death ones",
      "Because corporations consistently design technology to maximise their own profit at users' expense",
      "Because digital technologies are protected by patents and therefore not freely or equally available to all"
    ],
    "answer": 1,
    "explanation": "Danks argues that unlike a hammer, technologies like self-driving cars and autonomous weapons make ethical decisions themselves—sometimes literally life-and-death ones—undermining any claim to neutrality."
  },
  {
    "id": 10, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "Peterson, Ferreira & Vardi (2023) identify two factors in computer science that contribute to ethical distancing. What are they?",
    "options": [
      "Profit motive of corporations and intense global economic competition between firms",
      "Technological intermediation and computational thinking",
      "Anonymity provided by encryption and pseudonymous online identities and accounts",
      "Automation of human tasks and outsourcing of technical labour to lower-cost regions"
    ],
    "answer": 1,
    "explanation": "They identify technological intermediation (opacity between tech corporations and users) and computational thinking (training developers to think in abstractions rather than human impacts) as the two key distancing mechanisms."
  },
  {
    "id": 11, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What is 'abstracted power' as defined by Peterson, Ferreira & Vardi (2023)?",
    "options": [
      "The legal authority that governments have to regulate and impose sanctions on technology companies",
      "Human influence over a system that obscures or distances the actor from the consequences of that influence, via technology",
      "The autonomous power that algorithms have to make decisions entirely without any human input",
      "The effective ability of large global corporations to operate above national legal frameworks"
    ],
    "answer": 1,
    "explanation": "Abstracted power describes how technology creates moral and emotional distance between a person exercising power and the consequences of that power—making harms easier to dismiss."
  },
  {
    "id": 12, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What is 'technological determinism' also sometimes called in the lecture notes?",
    "options": ["Social constructivism", "Technological constructivism", "Actor-network theory", "Digital realism"],
    "answer": 1,
    "explanation": "The lecture notes that technological determinism is 'also known as technological constructivism'—the view that technology causes certain ways of doing things in a one-directional, inevitable relationship with society."
  },
  {
    "id": 13, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What is the key criticism of Actor-Network Theory (social determinism) in the lecture?",
    "options": [
      "It overestimates technology's influence and ignores how human choices shape technological change",
      "It treats all actors as equal, describes rather than explains, and fails to identify what matters most",
      "It consistently ignores the role of economics and profit motive in shaping technological development",
      "It only applies meaningfully to physical networks and not to digital or virtual networks"
    ],
    "answer": 1,
    "explanation": "ANT's difficulty: by treating all actors as equal and refusing a single explanatory trajectory, it ends up describing phenomena without explaining them and can't identify what matters most."
  },
  {
    "id": 14, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "Which of Baym's four mechanisms describes technology making certain tasks harder or impossible for some users?",
    "options": ["Affordances", "Preconditions", "Constraints", "Unintended consequences"],
    "answer": 2,
    "explanation": "Constraints in Baym's framework are the opposite of affordances—they describe the ways technology makes some tasks harder, or actively impedes certain activities or users."
  },
  {
    "id": 15, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "How does 'social shaping of technology' position itself relative to technological determinism and Actor-Network Theory?",
    "options": [
      "It fully sides with ANT, rejecting technology as having any meaningful causal force on society",
      "It fully sides with determinism, accepting technology as the single primary driver of all social change",
      "It takes a balanced middle position, seeing technology shaping society through affordances, constraints, preconditions, and unintended consequences",
      "It rejects both frameworks entirely and proposes that ethics alone should guide all technology design decisions"
    ],
    "answer": 2,
    "explanation": "Social shaping occupies a middle ground—neither reducing everything to technology causing change (determinism) nor to human networks alone (ANT), seeing the relationship as multidirectional and complex."
  },
  {
    "id": 16, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "The lecture presents four critical questions to ask about any technology. Which option lists all four correctly?",
    "options": [
      "Is it legal? Is it profitable? Is it safe? Is it innovative?",
      "Who benefits? Who suffers? Whom does it empower? Whom does it oppress?",
      "Who designed it? Who owns it? Who regulates it? Who uses it?",
      "What does it do? How does it work? Where is it deployed? When was it created?"
    ],
    "answer": 1,
    "explanation": "The four critical questions are: Who stands to benefit? Who stands to suffer? Whom might it empower? Whom might it oppress?—forming a justice-centred framework for evaluating technology."
  },
  {
    "id": 17, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "What were Big Tech corporations specifically criticised for in the opening discussion of the lecture?",
    "options": [
      "Deliberately charging excessive prices and exploiting users who lack meaningful alternatives",
      "Lacking empathy and responsibility for the social problems their technologies caused or worsened",
      "Routinely sharing private user data with foreign governments without user knowledge or consent",
      "Failing to invest adequately in cybersecurity systems despite generating enormous profits"
    ],
    "answer": 1,
    "explanation": "The lecture highlights Big Tech as widely criticised for lacking empathy and failing to take responsibility for social problems—including threats to civil dialogue, privacy, and fairness—that their technologies created or worsened."
  },
  {
    "id": 18, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What does 'technological intermediation' mean in the context of ethical distancing?",
    "options": [
      "The use of middleware software layers to connect otherwise technically incompatible systems",
      "Greater opacity between developers and users, created by huge faceless global tech corporations",
      "The process by which AI systems automatically mediate and resolve disputes between platform users",
      "Use of neutral third-party platforms to facilitate sharing of information between disputing parties"
    ],
    "answer": 1,
    "explanation": "Technological intermediation refers to how the scale and opacity of modern tech corporations creates distance between developers and users—the corporation is faceless and global, making it easy to ignore human consequences."
  },
  {
    "id": 19, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "What do Utopian and Dystopian responses to new technology have in common, according to the lecture?",
    "options": [
      "Both are grounded in careful empirical evidence and rigorous analysis of technological outcomes",
      "Both are simplistic extremes that prevent the critical thinking needed during the period of flux",
      "Both ultimately lead to effective and proportionate regulation of new and emerging technology",
      "Both originate from fundamentally the same underlying political and philosophical traditions"
    ],
    "answer": 1,
    "explanation": "Both Utopian and Dystopian responses are too extreme and insufficiently nuanced. Neither supports the critical, measured thinking needed before a technology becomes normalised."
  },
  {
    "id": 20, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "What does 'practical ethics' deal with, as described in the lecture?",
    "options": [
      "Applying theoretical ethical frameworks to professional engineering and software coding standards",
      "Individuals or groups deciding what is right or wrong in situations with real future consequences",
      "The legal framework that formally governs professional conduct in the computing industry",
      "Ethics training formally provided by professional computing bodies such as BCS or ACM"
    ],
    "answer": 1,
    "explanation": "Practical ethics is about real-world decision-making with future consequences—asking whether something is right or wrong so the appropriate action can be taken, not merely theorising about morality."
  },

  // ── DIGITAL DIVIDE (21–38) ─────────────────────────────────────────────
  {
    "id": 21, "topic": "Digital Divide", "difficulty": "easy",
    "question": "How does Tavani (2016) define the digital divide?",
    "options": [
      "The measurable difference in internet speeds between developed and developing nations",
      "The gap between those with and without access to information tools, and between those who can and cannot use them",
      "The historical divide between analogue telephony and modern digital communication systems",
      "The statistical disparity in social media platform usage between different age demographic groups"
    ],
    "answer": 1,
    "explanation": "Tavani's definition has two dimensions: access to the tools, and the ability to use them effectively—recognising that having a device doesn't automatically mean being able to participate digitally."
  },
  {
    "id": 22, "topic": "Digital Divide", "difficulty": "easy",
    "question": "Rooks and Weckert (2007) called the digital divide 'notoriously muddy'. What did they mean?",
    "options": [
      "The term is methodologically unscientific and should be replaced with a better concept",
      "The term covers many overlapping divides—between nations, rich and poor, educated and less educated, and more",
      "The concept is considered entirely outdated and no longer relevant to modern internet society",
      "There is insufficient academic consensus on whether a meaningful digital divide actually exists"
    ],
    "answer": 1,
    "explanation": "'Muddy' implies the term covers multiple overlapping divides—between nations, rich and poor, educated and less educated, disabled and non-disabled—not a single clean gap."
  },
  {
    "id": 23, "topic": "Digital Divide", "difficulty": "easy",
    "question": "As of 2024, what percentage of the 2.6 billion people still offline live in the developing world?",
    "options": ["72%", "84%", "96%", "61%"],
    "answer": 2,
    "explanation": "According to ITU 2025 data, 96% of the 2.6 billion people still offline are in the developing world—a stark illustration of global inequality in internet access."
  },
  {
    "id": 24, "topic": "Digital Divide", "difficulty": "easy",
    "question": "What is the global urban vs rural internet access split as of 2024?",
    "options": ["Urban 70% vs Rural 35%", "Urban 83% vs Rural 48%", "Urban 91% vs Rural 60%", "Urban 77% vs Rural 52%"],
    "answer": 1,
    "explanation": "ITU 2025 data shows 83% of urban dwellers have internet access compared to only 48% of rural inhabitants—driven largely by the high cost of rural infrastructure."
  },
  {
    "id": 25, "topic": "Digital Divide", "difficulty": "easy",
    "question": "What percentage of women globally use the internet compared to men (2024)?",
    "options": ["Women 55%, Men 68%", "Women 63%, Men 69%", "Women 71%, Men 75%", "Women 48%, Men 61%"],
    "answer": 1,
    "explanation": "Globally, 63% of women use the internet compared to 69% of men. The gap widens significantly in Least Developed Countries, where it is 21% women vs 32% men."
  },
  {
    "id": 26, "topic": "Digital Divide", "difficulty": "medium",
    "question": "Why is providing internet access in rural areas particularly expensive?",
    "options": [
      "Rural areas typically have fewer technically skilled workers available to build and maintain infrastructure",
      "The high cost of long-distance infrastructure like fibre optic cabling to reach scattered rural populations",
      "Rural users on average consume significantly more data, substantially driving up provider costs",
      "Government planning regulations actively prevent the construction of subsidised broadband in rural zones"
    ],
    "answer": 1,
    "explanation": "Infrastructure costs are the primary driver—fibre optic cabling is expensive to deploy over long distances to small, scattered rural populations, making the economics unfavourable without subsidy."
  },
  {
    "id": 27, "topic": "Digital Divide", "difficulty": "medium",
    "question": "What was the average global broadband download speed in 2024?",
    "options": ["35.98 Mbps", "46.79 Mbps", "55.38 Mbps", "29.79 Mbps"],
    "answer": 2,
    "explanation": "The average global broadband speed in 2024 was 55.38 Mbps—up from 46.79 Mbps in 2023, though speeds vary wildly between nations."
  },
  {
    "id": 28, "topic": "Digital Divide", "difficulty": "medium",
    "question": "In 40 out of 84 surveyed countries, what proportion of people lack basic skills like copying a file?",
    "options": ["Less than one quarter", "Less than one third", "Less than half", "Less than two thirds"],
    "answer": 2,
    "explanation": "In 40 of 84 countries with available data, less than half the population possesses basic computer skills—demonstrating the global skills dimension of the digital divide."
  },
  {
    "id": 29, "topic": "Digital Divide", "difficulty": "medium",
    "question": "What percentage of UK adults aged 18+ lack Foundation Level digital skills?",
    "options": ["8%", "12%", "15%", "22%"],
    "answer": 2,
    "explanation": "15% of UK adults (approximately 6.8 million people) lack Foundation Level digital skills, meaning they struggle with fundamental online tasks and risk being left behind."
  },
  {
    "id": 30, "topic": "Digital Divide", "difficulty": "medium",
    "question": "Why is Universal Credit cited as a problematic example of digital exclusion?",
    "options": [
      "It provides online banking to low-income families, excluding those without bank accounts",
      "It is 'digital by default'—claimable only online—excluding those who lack digital access or skills",
      "It is a government initiative that restricts free broadband to welfare claimants",
      "It is a digital literacy programme that excludes older learners from participation"
    ],
    "answer": 1,
    "explanation": "Universal Credit replaced six benefits and is 'digital by default'—claimable only online. This directly excludes people who lack digital access or skills, often the very people who most need welfare support."
  },
  {
    "id": 31, "topic": "Digital Divide", "difficulty": "medium",
    "question": "What did Hu and Qian (2021) find about older people who had only virtual contact during the COVID-19 lockdown?",
    "options": [
      "They adapted quickly and reported significantly reduced loneliness",
      "Virtual-only contact was more damaging to their mental health than having no contact at all",
      "They preferred phone calls to video calls for social connection",
      "They reported higher wellbeing than younger people during lockdown"
    ],
    "answer": 1,
    "explanation": "The study found older people unfamiliar with technology found it so stressful to learn that virtual-only contact harmed their mental health more than complete isolation—a stark finding about technology and the elderly."
  },
  {
    "id": 32, "topic": "Digital Divide", "difficulty": "medium",
    "question": "What is Scotland's Digital Inclusion Charter aimed at?",
    "options": [
      "Providing free and unlimited broadband internet access to all Scottish households by 2025",
      "Encouraging organisations across all sectors to recognise and actively promote digital inclusion in Scotland",
      "Training Scottish computing professionals to volunteer and teach digital skills in local schools",
      "Regulating and capping the cost of mobile data contracts sold to consumers throughout Scotland"
    ],
    "answer": 1,
    "explanation": "The Charter aims to get organisations across all sectors to sign up and promote digital inclusion, with an estimated 700,000 people in Scotland currently unable to access the internet."
  },
  {
    "id": 33, "topic": "Digital Divide", "difficulty": "hard",
    "question": "According to Lloyds Bank (2024), people with an impairment are how much more likely to struggle interacting with housing associations?",
    "options": ["1.5 times", "2.2 times", "2.5 times", "3.1 times"],
    "answer": 2,
    "explanation": "People with an impairment are 2.5 times more likely to have difficulty interacting with housing associations—illustrating how digital exclusion compounds existing social disadvantages."
  },
  {
    "id": 34, "topic": "Digital Divide", "difficulty": "hard",
    "question": "Accenture's 'Regenerative AI' initiative (2024–2027) aims to help how many people build AI skills?",
    "options": [
      "500,000 people in disadvantaged urban communities across the UK between 2024 and 2026",
      "750,000 people through funded partnerships with Scottish and Welsh local government bodies",
      "Over 1 million people in socioeconomically disadvantaged communities by bringing together volunteers and partners",
      "2 million people across Europe through a pan-EU digital literacy and AI skills programme"
    ],
    "answer": 2,
    "explanation": "Accenture's Regenerative AI initiative aims to help over a million people in socioeconomically disadvantaged communities build AI skills by 2027."
  },
  {
    "id": 35, "topic": "Digital Divide", "difficulty": "hard",
    "question": "Where is the digital gender gap growing fastest?",
    "options": [
      "Sub-Saharan Africa only, where mobile internet infrastructure remains most severely limited",
      "Developing countries, most severely in Least Developed Countries where the gap is widest",
      "Eastern Europe and Central Asia, where digital literacy programmes remain chronically underfunded",
      "Latin America and the Caribbean, where gender digital equity legislation is largely absent"
    ],
    "answer": 1,
    "explanation": "While the gender gap is small in developed countries (92% vs 93%), it is much larger in developing countries and growing fastest in Least Developed Countries."
  },
  {
    "id": 36, "topic": "Digital Divide", "difficulty": "easy",
    "question": "Which organisation publishes the UK Consumer Digital Index cited in the lecture?",
    "options": ["Ofcom", "Lloyds Bank", "Good Things Foundation", "DCMS"],
    "answer": 1,
    "explanation": "Lloyds Bank publishes the UK Consumer Digital Index, described as the UK's largest study of digital and financial lives."
  },
  {
    "id": 37, "topic": "Digital Divide", "difficulty": "medium",
    "question": "Beyond infrastructure, what is a key barrier to effective internet use in developing countries?",
    "options": [
      "Government censorship of international websites",
      "Illiteracy and lack of ICT skills",
      "Cultural resistance to adopting digital technology",
      "Absence of local content in native languages"
    ],
    "answer": 1,
    "explanation": "The lecture identifies both illiteracy and lack of ICT skills as major barriers—meaning infrastructure alone is insufficient to bridge the digital divide."
  },
  {
    "id": 38, "topic": "Digital Divide", "difficulty": "medium",
    "question": "Despite a 'pandemic boost' in 2020–21, what happened to the underlying global internet inequality?",
    "options": [
      "Growth accelerated and has continued to accelerate since",
      "The boost was short-lived; the urban-rural gap and global inequality remain severe",
      "Growth reversed as people reduced screen time post-pandemic",
      "Growth remained exactly as steady as in pre-pandemic years"
    ],
    "answer": 1,
    "explanation": "While the pandemic caused a temporary spike in internet usage, the boost was short-lived and the underlying inequality—particularly the urban-rural and global development gaps—remains severe."
  },

  // ── INTERNET FREEDOM AND DEMOCRACY (39–58) ────────────────────────────
  {
    "id": 39, "topic": "Internet Freedom and Democracy", "difficulty": "easy",
    "question": "What is an 'internet shutdown' according to Access Now?",
    "options": [
      "A planned maintenance outage by an internet service provider",
      "An intentional disruption of internet services to exert control over information flow",
      "A technical failure caused by a cyberattack on national infrastructure",
      "A legal injunction preventing specific websites from operating"
    ],
    "answer": 1,
    "explanation": "Access Now defines internet shutdowns as intentional disruptions—not accidents—used specifically to exert control over the flow of information."
  },
  {
    "id": 40, "topic": "Internet Freedom and Democracy", "difficulty": "easy",
    "question": "Which country ranks lowest globally for internet freedom according to Freedom House?",
    "options": ["Russia", "Iran", "China", "Myanmar"],
    "answer": 2,
    "explanation": "China consistently ranks at the very bottom of Freedom House's Freedom on the Net index, followed by Myanmar and Iran."
  },
  {
    "id": 41, "topic": "Internet Freedom and Democracy", "difficulty": "easy",
    "question": "Which country ranks top globally for internet freedom according to Freedom House (2023)?",
    "options": [
      "USA — consistently scoring highest due to its constitutional First Amendment free speech protections",
      "Taiwan — recognised for its advanced e-government and open civic technology infrastructure",
      "Iceland — ranking first for internet freedom in the Freedom House Freedom on the Net global index",
      "UK — recognised for balancing press freedom with robust legal and regulatory protections"
    ],
    "answer": 2,
    "explanation": "Iceland ranks first for internet freedom. The US is 9th, and the UK and Taiwan are tied in joint 5th place."
  },
  {
    "id": 42, "topic": "Internet Freedom and Democracy", "difficulty": "easy",
    "question": "How much did deliberate internet shutdowns cost the global economy in 2022?",
    "options": ["$8 billion", "$16 billion", "$24 billion", "$32 billion"],
    "answer": 2,
    "explanation": "Top10VPN (2023) reported that deliberate internet shutdowns cost the global economy $24 billion in 2022, following 114 major outages across 23 countries."
  },
  {
    "id": 43, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What technology does Russia's Roskomnadzor (RKN) require all ISPs to install?",
    "options": [
      "Mandatory antivirus and malware scanning software on all servers",
      "A government-produced deep packet inspection (DPI) system for monitoring and blocking traffic",
      "A national firewall that blocks all foreign IP addresses by default",
      "State-approved encryption software for all user communications"
    ],
    "answer": 1,
    "explanation": "Roskomnadzor requires ISPs to install its own DPI system—giving the Kremlin the ability to monitor, filter, and block any internet traffic across Russia."
  },
  {
    "id": 44, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is Russia's most visited website and dominant search engine?",
    "options": ["VK (Vkontakte)", "Mail.ru", "Yandex", "Telegram"],
    "answer": 2,
    "explanation": "Yandex is Russia's most visited website and dominant search engine, offering services comparable to Google. Google is available in Russia but less popular."
  },
  {
    "id": 45, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is VK (Vkontakte) and what is its market position in Russia?",
    "options": [
      "Russia's government news portal, with 50% market share",
      "Russia's biggest social media site, with over 75% market share",
      "A Russian messaging app rivalling WhatsApp, with 60% market share",
      "A state-controlled browser, with 80% market share"
    ],
    "answer": 1,
    "explanation": "VK (Vkontakte) is Russia's biggest social media platform with over 75% market share, offering features similar to Facebook including private messaging, photo sharing, and video streaming."
  },
  {
    "id": 46, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "How many internet sites were blocked in Russia by September 2022, six months after the invasion of Ukraine?",
    "options": ["Around 200,000", "Around 500,000", "Around 1.2 million", "Around 3 million"],
    "answer": 2,
    "explanation": "By September 2022, approximately 1.2 million internet sites had been blocked in Russia, demonstrating the scale of the Kremlin's censorship operation."
  },
  {
    "id": 47, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is Iran's internet freedom rating according to Freedom House (2024)?",
    "options": ["21/100", "11/100", "31/100", "8/100"],
    "answer": 1,
    "explanation": "Iran scores 11/100 for internet freedom (Freedom House, 2024), one of the most restrictive in the world. Russia scores 21/100 and Taiwan scores 78/100 for comparison."
  },
  {
    "id": 48, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What happened to Iran's internet following the death of Mahsa Amini in September 2022?",
    "options": [
      "The government temporarily opened access to foreign social media platforms as a concession",
      "Authorities shut down the internet and mobile networks, then repeated this on the 2023 anniversary of her death",
      "Iran completely disconnected from the global internet for a period of 30 consecutive days",
      "The government rapidly launched a national intranet to comprehensively replace all foreign internet platforms"
    ],
    "answer": 1,
    "explanation": "Iran shut down the internet and mobile networks following protests—and repeated this on the 2023 anniversary to preemptively prevent protests from being organised online."
  },
  {
    "id": 49, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What did US Section 230 of the Communications Decency Act 1996 effectively do?",
    "options": [
      "Required platforms to actively remove all demonstrably illegal content within 48 hours of notification",
      "Discouraged platforms from moderating content by protecting neutral platforms from publisher-level legal liability",
      "Gave the US federal government legal power to shut down websites hosting demonstrably harmful content",
      "Created significant financial penalties for platforms that algorithmically amplify verified political misinformation"
    ],
    "answer": 1,
    "explanation": "Section 230 created a perverse incentive: platforms that moderated content became publishers (legally liable), while those that left content untouched were protected—discouraging proactive content moderation."
  },
  {
    "id": 50, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is the EU Digital Services Act (DSA) and when was it fully implemented?",
    "options": [
      "An EU law completely banning all forms of targeted digital advertising, fully implemented January 2023",
      "An EU regulation for internet intermediaries, implemented February 2024, with fines up to 1% of annual income",
      "An EU competition law specifically targeting large technology sector monopolies, implemented in 2022",
      "An EU data protection regulation supplementing GDPR specifically for digital services, implemented in 2024"
    ],
    "answer": 1,
    "explanation": "The DSA was fully implemented February 2024, applying to all internet intermediaries in the EU, with extra burdens on Very Large Online Platforms (45m+ monthly EU users) and potential fines of 1% of annual income."
  },
  {
    "id": 51, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is Taiwan's 'g0v' (gov-zero) movement?",
    "options": [
      "Taiwan's official government digital services, e-governance, and public administration portal",
      "A decentralised civic tech community focused on transparency, open results, and open cooperation",
      "A political movement using digital technology to actively campaign for full Taiwanese independence",
      "A state-funded programme to comprehensively digitise and make accessible all of Taiwan's public records"
    ],
    "answer": 1,
    "explanation": "The g0v movement is a citizen-led, decentralised civic tech initiative—not a government body—committed to transparency and open cooperation, influencing Taiwan's approach to participatory digital democracy."
  },
  {
    "id": 52, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is the primary task of Taiwan's 'participation officers' (POs)?",
    "options": [
      "Monitoring all online political discourse for disinformation and propaganda originating from mainland China",
      "Helping public sector agencies listen to public opinions and plan cross-agency policies with citizens",
      "Standing as formally elected digital representatives who engage with online constituents on policy issues",
      "Maintaining, upgrading, and securing all of Taiwan's core e-government technical infrastructure"
    ],
    "answer": 1,
    "explanation": "POs are embedded across all government agencies with the primary task of helping public sector organisations listen to citizens and facilitate cross-agency policy-making in cooperation with the public."
  },
  {
    "id": 53, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "What are the four elements of Taiwan's open government framework?",
    "options": [
      "Security, efficiency, transparency, and innovation",
      "Transparency, participation, accountability, and inclusion",
      "Democracy, freedom, equality, and justice",
      "Openness, collaboration, responsiveness, and integrity"
    ],
    "answer": 1,
    "explanation": "Taiwan's open government framework: Transparency (public can understand what's going on), Participation (public can influence policy), Accountability (decisions can be traced), and Inclusion (all affected stakeholders can voice views)."
  },
  {
    "id": 54, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "Which internet shutdown method works by making a website 'invisible' at the domain level?",
    "options": ["Border Gateway Protocol (BGP) hijacking", "DNS poisoning", "Deep packet inspection", "ISP throttling"],
    "answer": 1,
    "explanation": "DNS poisoning renders a website 'invisible' by corrupting the domain name system—so requests for a site's domain return nothing or a wrong address."
  },
  {
    "id": 55, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "What did Australia's news media legislation ultimately produce?",
    "options": [
      "The government imposed heavy financial fines on Facebook and Google for hosting unlicensed news",
      "Meta and Google voluntarily negotiated payments to news organisations, funding extra journalists in underserved areas",
      "Australian news organisations were legally forced to pay tech platforms fees to have their content distributed",
      "The government blocked major social media platforms from hosting or linking to any Australian news content"
    ],
    "answer": 1,
    "explanation": "Rather than formal designation by the competition watchdog, Meta and Google voluntarily negotiated payments to Australian news organisations—income used to fund extra journalists, including in areas that previously had none."
  },
  {
    "id": 56, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "Which arguments are made for why the internet can be considered an undemocratic technology?",
    "options": [
      "It is expensive to access globally, slow in many regions, and dominated by English-language content",
      "Powerful institutions can consolidate power through it; its surveillance capacity enables totalitarianism; and unaccountable corporations dominate what people see",
      "It spreads misinformation rapidly, enables cybercrime on a global scale, and consistently reduces user attention spans",
      "It creates closed echo chambers, bypasses traditional media gatekeepers, and reduces in-person civic participation"
    ],
    "answer": 1,
    "explanation": "The anti-democratic case: powerful actors consolidating power, the surveillance architecture enabling authoritarian control, and unaccountable corporations dominating what billions of people see and read."
  },
  {
    "id": 57, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "How does the European Commission define e-government?",
    "options": [
      "Government-run social media platforms used to communicate with citizens",
      "Using ICT tools and systems to provide better public services to citizens and businesses",
      "The digitisation of all government records and elimination of paper-based processes",
      "Online voting systems allowing citizens to participate directly in legislation"
    ],
    "answer": 1,
    "explanation": "The European Commission's definition focuses on using ICT tools to improve public service delivery to both citizens and businesses—a practical, service-oriented definition."
  },
  {
    "id": 58, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "Which country is cited in the lecture as having shut down the internet during its 2024 general election?",
    "options": ["India", "Myanmar", "Pakistan", "Bangladesh"],
    "answer": 2,
    "explanation": "Pakistan is cited as having shut down its internet during the 2024 general election—alongside Myanmar (frequent outages since its military coup) and India (localised shutdowns during protests)."
  },

  // ── ALGORITHMS AND DATAFICATION (59–75) ───────────────────────────────
  {
    "id": 59, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "What is the simplest definition of an algorithm given in the lecture?",
    "options": [
      "A mathematical formula used to process large datasets",
      "A list of rules to follow to complete a task or solve a problem",
      "A set of instructions written in a programming language",
      "An automated system that makes decisions without human input"
    ],
    "answer": 1,
    "explanation": "The lecture offers a straightforward definition: an algorithm is 'a list of rules to follow to complete a task or solve a problem'—applicable to everyday tasks, not just computing."
  },
  {
    "id": 60, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "How is 'datafication' defined by Cukier and Mayer-Schonberger (2013)?",
    "options": [
      "Converting analogue signals into digital formats for storage",
      "Turning human behaviour and social activities into analysable data points",
      "Using data to train machine learning algorithms",
      "Converting physical infrastructure into smart, connected systems"
    ],
    "answer": 1,
    "explanation": "Datafication is the broader transformation of human behaviour and social life into measurable data points—not just digitising media, but rendering social life itself as analysable data."
  },
  {
    "id": 61, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "According to Kordzadeh & Ghasemaghei (2022), what is algorithmic bias?",
    "options": [
      "A programming error causing incorrect results in isolated cases",
      "A systematic deviation from equality that emerges in the outputs of an algorithm",
      "The tendency of algorithms to favour newer data over older data",
      "Deliberate bias introduced by a developer who dislikes a particular user group"
    ],
    "answer": 1,
    "explanation": "The key word is 'systematic'—algorithmic bias is a consistent pattern of deviation from equality in outputs, not a random or isolated error."
  },
  {
    "id": 62, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "What does SIMD stand for and why is it used as an example in the lecture?",
    "options": [
      "Scottish Index of Multiple Deprivation—an example of datafication of society",
      "Standard Index of Multiple Demographics—an example of government surveillance",
      "Scottish Institute of Market Data—an example of economic datafication",
      "Social Index of Multiple Disadvantage—an example of welfare analytics"
    ],
    "answer": 0,
    "explanation": "SIMD (Scottish Index of Multiple Deprivation) is used as an example of datafication—quantifying deprivation across seven domains: income, employment, education, health, access to services, crime, and housing."
  },
  {
    "id": 63, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "How does the lecture define a machine learning algorithm (citing IBM)?",
    "options": [
      "Software that learns from user feedback through reinforcement over time",
      "A set of rules or processes used by an AI system to discover patterns or predict outputs from input data",
      "Software that automatically updates itself based on new product releases",
      "An algorithm that mimics human neural networks to recognise patterns in images"
    ],
    "answer": 1,
    "explanation": "IBM's definition (cited in the lecture) describes an ML algorithm as a set of rules/processes for discovering data insights, patterns, or predicting outputs—the mechanism that enables machine learning to 'learn'."
  },
  {
    "id": 64, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "In collaborative filtering recommender systems, what is the 'cold-start problem'?",
    "options": [
      "The algorithm crashes when too many users are active simultaneously",
      "New items have no ratings yet, making them impossible to recommend to users",
      "Users with unusual tastes receive no relevant recommendations at all",
      "The system cannot process requests during peak demand periods"
    ],
    "answer": 1,
    "explanation": "Collaborative filtering recommends based on ratings—new items have none, creating a 'cold-start' disadvantage that prevents them from being surfaced regardless of their actual quality."
  },
  {
    "id": 65, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is 'popularity bias' in recommender systems?",
    "options": [
      "Recommending items that are popular with a user's specific demographic group",
      "Already-popular items being over-recommended, further entrenching their dominance",
      "The algorithm favouring recently popular items over historically popular ones",
      "Bias introduced when popularity metrics are gamed by fake accounts"
    ],
    "answer": 1,
    "explanation": "Popularity bias means that already-popular items receive disproportionately more recommendations, creating a feedback loop where popular items become even more dominant regardless of individual user preferences."
  },
  {
    "id": 66, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is 'over-specialisation' as a recommender system bias?",
    "options": [
      "Recommending only items from a single genre or narrow category regardless of the user's broader preferences",
      "Offering choices narrower than what a user would actually enjoy—accuracy prioritised over satisfaction",
      "When users deliberately and actively restrict their own recommendation settings and personalisation preferences",
      "When the recommendation algorithm becomes too computationally expensive to run efficiently in real time"
    ],
    "answer": 1,
    "explanation": "Over-specialisation occurs when algorithms optimise for prediction accuracy at the expense of user satisfaction—giving users a narrower slice of content than they'd actually enjoy."
  },
  {
    "id": 67, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is a 'filter bubble' in the context of social media algorithms?",
    "options": [
      "A parental control feature filtering age-inappropriate content",
      "A situation where disagreeable news is filtered out, narrowing a user's information diet",
      "A spam detection system preventing unwanted messages from reaching users",
      "An algorithm prioritising posts from close friends over public content"
    ],
    "answer": 1,
    "explanation": "Filter bubbles describe how algorithmic personalisation can shield users from content that challenges their views—though research also suggests algorithms may trap users inside bubbles rather than users choosing to stay."
  },
  {
    "id": 68, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is an 'echo chamber' as defined in the lecture?",
    "options": [
      "A digital space where all political content is blocked to prevent radicalisation",
      "An environment where someone only encounters opinions and beliefs similar to their own",
      "A social media feature that amplifies posts based on the number of shares they receive",
      "A group chat where only verified information is allowed to be shared"
    ],
    "answer": 1,
    "explanation": "The Oxford definition cited: an environment where one only encounters opinions similar to their own—distinct from a filter bubble (algorithm-driven) in that echo chambers can also be self-selected."
  },
  {
    "id": 69, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "Why did Twitter remove its image-cropping algorithm?",
    "options": [
      "It was computationally too expensive to run at scale",
      "It was found to exhibit racial bias, showing automated cropping is best left to people",
      "It was legally challenged by users who wanted to control their own cropping",
      "Users found it cropped images incorrectly regardless of content"
    ],
    "answer": 1,
    "explanation": "Twitter acknowledged the cropping algorithm showed racial bias and removed it, stating the move lowers its dependency on machine learning for a function best performed by people—a significant public admission of algorithmic bias."
  },
  {
    "id": 70, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "What is 'algorithmic audiencing' as described by Riemer and Peter (2021)?",
    "options": [
      "Advertisers directly paying platforms to precisely target very specific user audience segments",
      "Algorithms reshaping free speech by controlling who gets to see what content, not restricting what can be said",
      "Data analysts measuring and quantifying audience engagement patterns with different types of platform content",
      "Using generative AI technology to automatically create unique personalised content for individual users"
    ],
    "answer": 1,
    "explanation": "Algorithmic audiencing captures something subtle: the censorship is of reach, not speech. Ideas don't compete freely on their merits—algorithms amplify or suppress them, introducing unprecedented interference in public discourse."
  },
  {
    "id": 71, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "According to Stinson (2022), where can algorithmic bias be located?",
    "options": [
      "In the hardware, the software, and the network",
      "In biased data, biased people (designers), and biased algorithms",
      "In the training phase, the testing phase, and the deployment phase",
      "In the input data, the model architecture, and the output interpretation"
    ],
    "answer": 1,
    "explanation": "Stinson identifies three locations: biased datasets, biased people (limited perspectives of algorithm makers), and biased algorithms (structural choices embedding inequality)."
  },
  {
    "id": 72, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "What is 'selection bias' in the context of training data?",
    "options": [
      "When a model selects the wrong features to train on",
      "When training examples are chosen in a way not reflective of real-world distribution",
      "When users selectively engage with content, distorting engagement metrics",
      "When a developer selects a model architecture that introduces systematic errors"
    ],
    "answer": 1,
    "explanation": "Selection bias in training data occurs when the examples chosen don't represent the real world accurately—for example, training a facial recognition system predominantly on lighter-skinned faces."
  },
  {
    "id": 73, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "The face-to-BMI algorithm in the 'How Normal Am I' activity makes no distinction between which groups?",
    "options": [
      "Urban and rural users who have very different lifestyle, dietary, and activity patterns",
      "Men and women, different cultures, or different fitness levels",
      "Users of different age groups and users from different national or regional backgrounds",
      "Users from high-income and low-income socioeconomic backgrounds worldwide"
    ],
    "answer": 1,
    "explanation": "The lecture uses this as an example of how well-intentioned algorithms overlook critical nuances—treating all users the same regardless of sex, culture, or fitness level, potentially leading to flawed conclusions."
  },
  {
    "id": 74, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "Which of the following best describes datafication in education?",
    "options": [
      "Converting physical textbooks to digital formats and delivering them via smartphone apps",
      "Learning analytics, AI monitoring, chatbot assistants, online platforms, classroom response systems, and rankings like PISA and TIMSS",
      "Replacing human teachers entirely with AI systems to deliver fully personalised lessons at scale",
      "Using commercial social media platforms to distribute educational content directly to students"
    ],
    "answer": 1,
    "explanation": "Datafication of education is broad—including learning analytics, AI monitoring, chatbot assistants, LMS platforms, online quizzes, collaborative tools, and benchmarking systems like PISA and TIMSS."
  },
  {
    "id": 75, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is 'homogenization' as a bias problem in recommender systems?",
    "options": [
      "Making all users see identical content regardless of their preferences",
      "Over time, recommendations across the platform converge and content diversity shrinks",
      "Standardising data formats before feeding them into a model",
      "A technique for removing cultural biases from training datasets"
    ],
    "answer": 1,
    "explanation": "Homogenization describes how, as recommendations converge on what the algorithm considers universally popular, diversity of content experienced across a platform diminishes—everyone ends up in a similar bubble."
  },

  // ── PRIVACY AND DATA PROTECTION (76–95) ───────────────────────────────
  {
    "id": 76, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "What is the distinction between 'privacy' and 'data protection'?",
    "options": [
      "Privacy is a technical security standard applied to systems; data protection is an ethical principle",
      "Privacy is an individual's right to control personal information; data protection is the legal and technical measures used to safeguard it",
      "Privacy applies to individuals and citizens only; data protection applies solely to organisations",
      "Privacy is enforced through criminal law proceedings; data protection is handled exclusively by civil law"
    ],
    "answer": 1,
    "explanation": "Privacy is the principle (the right to control your own information), while data protection is the mechanism (the legal and technical tools that uphold that right)."
  },
  {
    "id": 77, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "What are GDPR's maximum financial penalties for non-compliance?",
    "options": [
      "Up to €5 million or 1% of global annual revenue",
      "Up to €20 million or 4% of global annual revenue, whichever is higher",
      "Up to €10 million or 2% of global annual revenue",
      "Up to €50 million or 6% of global annual revenue"
    ],
    "answer": 1,
    "explanation": "GDPR penalties: up to €20 million or 4% of global annual revenue—whichever is higher—making non-compliance genuinely costly even for large corporations."
  },
  {
    "id": 78, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "Which scandal involved Facebook users' data being harvested without consent for political advertising?",
    "options": [
      "The Google Street View affair involving unauthorised Wi-Fi payload data collection from public spaces",
      "The Facebook-Cambridge Analytica scandal involving data harvested without consent for political advertising",
      "The Twitter Leaks involving confidential internal company documents shared by a whistleblower",
      "The TikTok children's data fine issued by the ICO for improperly handling children's personal data"
    ],
    "answer": 1,
    "explanation": "The Facebook-Cambridge Analytica scandal saw millions of users' data harvested without consent and used to micro-target political advertising—one of the defining data privacy cases of the 2010s."
  },
  {
    "id": 79, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "What does GDPR stand for and when did it come into force?",
    "options": [
      "General Data Privacy Regulation, 2016",
      "Global Digital Protection Regulation, 2020",
      "General Data Protection Regulation, 2018",
      "Government Data Processing Regulation, 2018"
    ],
    "answer": 2,
    "explanation": "GDPR (General Data Protection Regulation) came into force in May 2018, replacing the 1995 EU Data Protection Directive and establishing a unified data protection law across all EU member states."
  },
  {
    "id": 80, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "What is the 'right to be forgotten' under GDPR/DPA 2018?",
    "options": [
      "The right to have your name removed from all government, commercial, and public databases",
      "The right to request deletion of personal data when it is no longer needed, consent is withdrawn, or it was unlawfully collected",
      "The right to permanently opt out of all forms of targeted advertising by any organisation",
      "The right to browse and use the internet completely anonymously without any form of user tracking"
    ],
    "answer": 1,
    "explanation": "The right to erasure allows individuals to request deletion when data is no longer needed, consent is withdrawn, or data was unlawfully collected—though exceptions apply."
  },
  {
    "id": 81, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "Why is biometric data considered more sensitive than most other personal data?",
    "options": [
      "It is far more expensive for companies to collect and process",
      "It cannot be changed if compromised—unlike a password, it is permanently tied to the individual",
      "It is subject to a completely separate legal framework from other data",
      "It can only legally be collected by government agencies under strict conditions"
    ],
    "answer": 1,
    "explanation": "Unlike a password, biometric data—fingerprints, facial structure, iris scans—is permanently tied to you. A breach is irreversible; there is no way to 'reset' your biometrics."
  },
  {
    "id": 82, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "How does the US approach to data protection fundamentally differ from the EU approach?",
    "options": [
      "The US has no data protection laws; the EU enforces strict universal rules",
      "The US uses industry-specific laws by sector; the EU uses a single comprehensive regulation across all sectors",
      "The US relies entirely on self-regulation; the EU uses criminal law exclusively",
      "The EU only protects data of EU citizens; the US protects all data globally"
    ],
    "answer": 1,
    "explanation": "The US sectoral approach means different industries have different privacy laws (HIPAA for health, COPPA for children's online privacy, CCPA in California), contrasting with GDPR's comprehensive, sector-neutral coverage."
  },
  {
    "id": 83, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What happened to the EU-US Privacy Shield in 2020 and why?",
    "options": [
      "It was superseded and replaced by GDPR as the primary framework for transatlantic data transfers",
      "The European Court of Justice invalidated it over US surveillance powers and lack of judicial redress for EU citizens",
      "The United States unilaterally withdrew from the agreement following an escalating bilateral trade dispute with the EU",
      "It was indefinitely suspended after a series of catastrophic high-profile data breaches at major US technology companies"
    ],
    "answer": 1,
    "explanation": "The ECJ invalidated Privacy Shield (Schrems II, 2020), citing: lack of judicial redress for EU citizens and broad US surveillance powers under FISA—leaving businesses scrambling for alternative transfer mechanisms."
  },
  {
    "id": 84, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What UK-US agreement was established in 2023 for data transfers?",
    "options": [
      "UK-US Digital Trade Agreement",
      "UK-US Data Bridge",
      "Transatlantic Privacy Framework",
      "UK-US Standard Contractual Clauses Extension"
    ],
    "answer": 1,
    "explanation": "The UK-US Data Bridge (2023) was established as the UK's equivalent to the EU-US Data Privacy Framework, providing a legal mechanism for UK-to-US data transfers post-Brexit."
  },
  {
    "id": 85, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What are the seven core principles of GDPR/DPA 2018?",
    "options": [
      "Consent, security, transparency, privacy, fairness, accuracy, and the right to deletion of data",
      "Lawfulness/fairness/transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity/confidentiality, and accountability",
      "Collection limitation, data quality, purpose specification, use limitation, security, openness, and public participation",
      "Necessity, proportionality, legitimacy, transparency, security, individual rights, and regulatory oversight"
    ],
    "answer": 1,
    "explanation": "The seven GDPR/DPA 2018 principles: Lawfulness/fairness/transparency; Purpose limitation; Data minimisation; Accuracy; Storage limitation; Integrity and confidentiality; Accountability."
  },
  {
    "id": 86, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What does PECR (2003) specifically regulate that GDPR does not directly cover?",
    "options": [
      "Processing of employee personal data by employers in the context of the workplace",
      "Electronic marketing messages, website cookies, tracking technologies, and telecoms provider security",
      "Cross-border data transfers and adequacy decisions between different EU member states",
      "Automated decision-making systems, algorithmic profiling, and scoring of individuals under GDPR"
    ],
    "answer": 1,
    "explanation": "PECR specifically targets electronic communications—marketing emails/texts/calls, cookie usage, and telecom provider security—working alongside GDPR rather than replacing it."
  },
  {
    "id": 87, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What are 'privacy-enhancing technologies' (PETs) mentioned in the lecture?",
    "options": [
      "Technologies that allow companies to monetise data without explicit user consent",
      "Encryption, anonymisation, and blockchain tools that protect data from unauthorised access",
      "Government surveillance tools designed to protect national security",
      "AI systems that automatically detect and delete personal data after use"
    ],
    "answer": 1,
    "explanation": "PETs include encryption, anonymisation, and blockchain—the lecture presents these as promising tools for protecting data by reducing unauthorised access risk and enabling secure, decentralised data management."
  },
  {
    "id": 88, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "What does the right to 'data portability' under GDPR allow individuals to do?",
    "options": [
      "Access their data from anywhere in the world regardless of storage location",
      "Transfer their personal data between service providers in a machine-readable format",
      "Move their data from cloud storage to local storage without restriction",
      "Share their data with any third party without the organisation's consent"
    ],
    "answer": 1,
    "explanation": "The right to data portability allows individuals to receive their personal data in a machine-readable format (e.g. CSV, JSON) and transfer it to a different service provider—promoting competition and user autonomy."
  },
  {
    "id": 89, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "What is the key risk if the UK diverges significantly from EU GDPR under the DPDI Bill reforms?",
    "options": [
      "UK companies would face significantly higher financial penalties for data breaches than currently",
      "The UK risks losing EU data adequacy status, making data transfers between the UK and EU more complicated",
      "UK citizens would automatically lose their legal right to access EU digital services and online platforms",
      "The ICO would lose its operational independence and be brought under direct government ministerial control"
    ],
    "answer": 1,
    "explanation": "EU adequacy status—granted in 2021—allows data to flow freely between the EU and UK. Significant divergence from GDPR risks losing this status, imposing additional compliance burdens on cross-border businesses."
  },
  {
    "id": 90, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "What are 'Standard Contractual Clauses' (SCCs) used for in international data transfers?",
    "options": [
      "Pre-approved contract terms providing GDPR-equivalent protections for data transferred outside the EU/UK",
      "Standardised privacy policies that all websites must display under GDPR",
      "Government contracts requiring cloud providers to store EU data within EU borders",
      "Template data-sharing agreements between EU and non-EU companies"
    ],
    "answer": 0,
    "explanation": "SCCs are pre-approved contractual clauses used as a legal mechanism to transfer personal data outside the EU/UK, contractually requiring GDPR-equivalent protections in the receiving country."
  },
  {
    "id": 91, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What is the primary privacy risk of location tracking discussed in the lecture?",
    "options": [
      "GPS navigation apps passively storing users' route history on their own local devices",
      "Continuous unnoticed tracking via GPS and Wi-Fi, with data sold to advertisers, law enforcement, or private individuals by data brokers",
      "Satellite surveillance programs used by authoritarian governments to locate and monitor political dissidents",
      "Social media location check-ins inadvertently revealing users' home or work addresses to unknown strangers"
    ],
    "answer": 1,
    "explanation": "The lecture highlights data brokers selling real-time location data to advertisers, law enforcement, and private individuals—often without users knowing their movements are being tracked continuously."
  },
  {
    "id": 92, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What was the first major global attempt to standardise privacy principles, and when?",
    "options": [
      "EU Directive 95/46/EC, establishing common data protection standards across European nations in 1995",
      "OECD Guidelines on the Protection of Privacy and Transborder Data Flows, 1980",
      "The United States Privacy Act, the first major national privacy legislation, enacted in 1974",
      "The Council of Europe Convention 108, the first legally binding international data protection treaty, in 1981"
    ],
    "answer": 1,
    "explanation": "The OECD Guidelines (1980) are cited as the first global attempt to standardise privacy principles, influencing subsequent regulatory developments including the EU Directive in 1995 and later GDPR."
  },
  {
    "id": 93, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "What is the significance of the Schrems cases in EU-US data transfer law?",
    "options": [
      "They established the fundamental right to be forgotten as legally binding across all EU member states",
      "They led to the invalidation of EU-US data transfer frameworks by exposing incompatibility between US surveillance law and EU privacy rights",
      "They resulted in the very first GDPR fine being successfully levied against a major US technology company",
      "They legally established that all personal data collected in the EU must always be physically stored within EU borders"
    ],
    "answer": 1,
    "explanation": "Schrems I invalidated Safe Harbour and Schrems II invalidated Privacy Shield—both by forcing courts to confront that US surveillance powers (FISA etc.) are incompatible with EU privacy rights."
  },
  {
    "id": 94, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "Which US law protects medical and healthcare data privacy?",
    "options": ["COPPA", "GLBA", "HIPAA", "FISMA"],
    "answer": 2,
    "explanation": "HIPAA (Health Insurance Portability and Accountability Act, 1996) regulates the privacy of healthcare data in the US—one of the key laws in the US sectoral approach to data protection."
  },
  {
    "id": 95, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What is a 'Subject Access Request' (SAR) and what is the response deadline?",
    "options": [
      "A formal request for access to classified government data; public bodies must respond within 30 working days",
      "An individual's right to request a copy of their personal data from an organisation; response required within one month",
      "A legal request to restrict all processing of someone's personal data; organisations must respond within 72 hours",
      "A formal request to permanently erase all personal data held; organisations must respond within 14 calendar days"
    ],
    "answer": 1,
    "explanation": "A SAR is an individual's right to see all personal data held about them. Organisations must respond within one month and cannot normally charge a fee."
  },

  // ── COMPUTER-RELATED CRIMES (96–110) ──────────────────────────────────
  {
    "id": 96, "topic": "Computer-Related Crimes", "difficulty": "easy",
    "question": "What three primary offences did the Computer Misuse Act 1990 originally create?",
    "options": [
      "Identity theft, unauthorised system hacking, and large-scale commercial data piracy",
      "Unauthorised access (S1), access with intent to commit further offences (S2), and unauthorised modification (S3)",
      "Cyberbullying and harassment, phishing and fraud, and deployment of ransomware attacks",
      "Network traffic interception, unauthorised data destruction, and malware creation and distribution"
    ],
    "answer": 1,
    "explanation": "The CMA 1990 created three offences: Section 1 (unauthorised access), Section 2 (access with intent to facilitate further offences), and Section 3 (unauthorised acts with intent to impair computer operation)."
  },
  {
    "id": 97, "topic": "Computer-Related Crimes", "difficulty": "easy",
    "question": "What does Section 127 of the Communications Act 2003 criminalise?",
    "options": [
      "Dishonest and fraudulent use of public electronic communications services for personal gain",
      "Offensive, indecent, obscene, or menacing messages sent via public communication networks",
      "Unauthorised technical interception of private communications between two individuals",
      "Creation and online distribution of computer hacking tools and malware to third parties"
    ],
    "answer": 1,
    "explanation": "Section 127 criminalises offensive, menacing, or grossly indecent messages via public communication networks—including social media—supporting enforcement against online harassment and cyberbullying."
  },
  {
    "id": 98, "topic": "Computer-Related Crimes", "difficulty": "easy",
    "question": "What does RIPA 2000 stand for and what does it regulate?",
    "options": [
      "Regulated Internet Powers Act; establishes the full regulatory framework for ISPs operating in the UK",
      "Regulation of Investigatory Powers Act; regulates surveillance and interception of communications by public bodies",
      "Rights of Internet Privacy Act; legally protects UK individuals from unlawful online surveillance activities",
      "Retention of Investigatory Powers Act; mandates specific periods telecoms must retain user communications data"
    ],
    "answer": 1,
    "explanation": "RIPA (Regulation of Investigatory Powers Act 2000) regulates how public bodies can carry out surveillance and intercept communications, balancing national security needs with individual privacy rights."
  },
  {
    "id": 99, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What did Section 3A (added to the CMA by the Police and Justice Act 2006) criminalise?",
    "options": [
      "Mandatory minimum custodial sentences for all serious and repeat computer hacking criminal offences",
      "Making, supplying, or obtaining cybercrime tools, even if not actively used in an attack",
      "Government emergency legal powers to immediately shut down websites hosting illegal or harmful content",
      "Identity theft defined as a stand-alone criminal offence distinct and legally separate from fraud offences"
    ],
    "answer": 1,
    "explanation": "Section 3A extended the CMA's reach to cover the supply chain of cybercrime—making it illegal to create, distribute, or possess hacking tools, malware, or denial-of-service tools regardless of whether they are deployed."
  },
  {
    "id": 100, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "Under the Fraud Act 2006, what is the distinction between identity theft and identity fraud?",
    "options": [
      "Identity theft is a civil dispute matter; identity fraud is a criminal offence requiring prosecution",
      "Identity theft is unlawfully acquiring personal information; identity fraud is using that information to commit further crimes",
      "Identity theft applies only to financial and banking data; identity fraud covers all categories of personal data",
      "Identity theft always requires technical hacking skills; identity fraud occurs only through social engineering techniques"
    ],
    "answer": 1,
    "explanation": "Identity theft is the acquisition of personal information without authorisation; identity fraud is the subsequent use of that information to commit crimes such as fraudulent credit applications."
  },
  {
    "id": 101, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "The Investigatory Powers Act 2016 is nicknamed what?",
    "options": ["The Surveillance Charter", "The Snoopers' Charter", "The Digital Powers Act", "The Big Brother Bill"],
    "answer": 1,
    "explanation": "IPA 2016 was widely nicknamed the 'Snoopers' Charter' due to its provisions enabling bulk data collection, equipment interference, and retention of communications data by service providers."
  },
  {
    "id": 102, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "The Telecommunications (Security) Act 2021 is enforced by which body?",
    "options": [
      "The ICO, using its existing data protection enforcement powers under the DPA 2018",
      "Ofcom with support from the National Cyber Security Centre (NCSC)",
      "GCHQ acting jointly with the Home Office on the basis of national security powers",
      "The Financial Conduct Authority, given telecoms' critical role in financial services infrastructure"
    ],
    "answer": 1,
    "explanation": "The Act is enforced by Ofcom with technical guidance from the NCSC, requiring telecoms providers to identify, assess, and mitigate cybersecurity risks."
  },
  {
    "id": 103, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "Who do the NIS Regulations 2018 apply to?",
    "options": [
      "All UK businesses that process personal data",
      "Operators of Essential Services and Relevant Digital Service Providers",
      "Government departments and public sector bodies only",
      "Data processors and data controllers defined under GDPR"
    ],
    "answer": 1,
    "explanation": "NIS 2018 (from EU Directive 2016/1148) applies to Operators of Essential Services (energy, healthcare, transport) and Relevant Digital Service Providers (online marketplaces, search engines, cloud services)."
  },
  {
    "id": 104, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What are the maximum penalties under the NIS Regulations for non-compliant RDSPs?",
    "options": ["Up to £5 million", "Up to £10 million", "Up to £17 million", "Up to £25 million"],
    "answer": 2,
    "explanation": "RDSPs that fail to implement appropriate security measures or report significant incidents can face penalties of up to £17 million under the NIS Regulations 2018."
  },
  {
    "id": 105, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "What do the Telecommunications (Lawful Business Practice) Regulations 2000 allow employers to do?",
    "options": [
      "Block employees from accessing non-work related websites and social media during working hours",
      "Monitor employee calls, emails, and internet use for specific permissible purposes, provided employees are informed",
      "Store all employee communications and messages for up to five years without requiring individual employee consent",
      "Install keylogging software on all employee devices to prevent and detect internal company data theft"
    ],
    "answer": 1,
    "explanation": "The Regulations (supplementing RIPA) allow limited employer monitoring for permissible purposes—preventing crime, regulatory compliance, and enforcing company policies—but employees must be informed that monitoring may occur."
  },
  {
    "id": 106, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "What did DRIPA 2014 enable and why was it controversial?",
    "options": [
      "It gave the ICO power to issue data breach fines; fines were seen as too low to deter",
      "It compelled telecoms to store metadata for up to 12 months; controversial for potential conflict with privacy rights",
      "It allowed bulk collection of social media data; controversial because it targeted journalists",
      "It mandated encryption of government communications; controversial due to implementation costs"
    ],
    "answer": 1,
    "explanation": "DRIPA introduced emergency powers compelling telecoms to store metadata for up to 12 months—controversial for potential privacy rights conflicts and later replaced by the Investigatory Powers Act 2016."
  },
  {
    "id": 107, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "Even well-intentioned unsolicited penetration testing is illegal under which section of the CMA 1990?",
    "options": ["Section 2", "Section 3", "Section 3A", "Section 1"],
    "answer": 3,
    "explanation": "Section 1 covers unauthorised access—and 'unauthorised' is key. Even if a penetration tester has good intentions, probing a system without explicit prior consent is a Section 1 offence."
  },
  {
    "id": 108, "topic": "Computer-Related Crimes", "difficulty": "easy",
    "question": "What right does the Freedom of Information Act 2000 (FOIA) establish?",
    "options": [
      "A right for accredited journalists to formally request access to classified government information",
      "The public's right to request recorded information held by public authorities, with a 20-working-day response deadline",
      "Legal protection for whistleblowers who disclose significant government wrongdoing in the public interest",
      "An obligation on government to proactively publish all non-sensitive public data as freely available open data"
    ],
    "answer": 1,
    "explanation": "FOIA 2000 grants a general right of public access to information held by public authorities, which must respond within 20 working days. The ICO ensures compliance."
  },
  {
    "id": 109, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What is the ICO and what is its primary role?",
    "options": [
      "The International Computing Organisation; sets global computing and internet technical standards",
      "The Information Commissioner's Office; the UK's independent authority for upholding information rights and enforcing data law",
      "The Internet Control Office; the regulatory body that oversees internet service providers across the UK",
      "The Investigatory Controls Office; oversees and approves all surveillance activities by UK public bodies"
    ],
    "answer": 1,
    "explanation": "The ICO is the UK's independent authority for upholding information rights—enforcing the Data Protection Act 2018, GDPR, PECR, FOIA, and other data-related legislation across both public and private sectors."
  },
  {
    "id": 110, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "Section 125 of the Communications Act 2003 addresses what offence?",
    "options": [
      "Sending menacing or offensive messages online to individuals",
      "Dishonest use of electronic communications services",
      "Unauthorised interception of telephone calls",
      "Creating or distributing malware to third parties"
    ],
    "answer": 1,
    "explanation": "Section 125 addresses dishonest use of electronic communications services—distinct from Section 127 which covers offensive/menacing messages. Together they tackle different aspects of communications abuse."
  },

  // ── PROFESSIONALISM IN COMPUTING (111–116) ────────────────────────────
  {
    "id": 111, "topic": "Professionalism in Computing", "difficulty": "easy",
    "question": "What does CPD stand for and why do professional bodies require it?",
    "options": [
      "Certified Professional Development; the qualification required to gain initial professional certification",
      "Continuing Professional Development; ensures members keep their technical and ethical skills current throughout their careers",
      "Core Professional Duties; the fundamental set of obligations placed on all registered professional members",
      "Computing Professional Diploma; an entry-level qualification awarded to early-career computing professionals"
    ],
    "answer": 1,
    "explanation": "CPD (Continuing Professional Development) is an ongoing requirement compelling members to update skills through courses, workshops, or practice-based learning—covering both technical and ethical developments."
  },
  {
    "id": 112, "topic": "Professionalism in Computing", "difficulty": "easy",
    "question": "Which two organisations provide ethical guidelines for computing professionals, as mentioned in the lecture?",
    "options": [
      "IEEE and GCHQ — representing international engineering standards and national cybersecurity respectively",
      "BCS (British Computer Society) and ACM (Association for Computing Machinery)",
      "Ofcom and ICO — the UK's communications and information rights regulatory authorities",
      "CISCO and CompTIA — industry-recognised certification bodies with globally respected credentials"
    ],
    "answer": 1,
    "explanation": "The BCS and ACM are the primary professional bodies for computing in the UK and internationally, providing ethical guidelines—though adherence is voluntary rather than legally mandated."
  },
  {
    "id": 113, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "Why is computing not considered a fully fledged 'profession' in the traditional sense?",
    "options": [
      "Computing professionals do not require any standardised training or certification in order to practise",
      "It lacks mandatory licensure, a unified legally recognised code of ethics, and a single licensing authority like the General Medical Council",
      "The BCS has not yet successfully applied for or received Royal Charter status from the Crown",
      "Computing is not yet considered essential enough to public welfare to justify full statutory professional regulation"
    ],
    "answer": 1,
    "explanation": "Unlike medicine or law, most computing roles don't require formal licensure, titles like 'software engineer' aren't legally protected, and there is no single legally mandated code of ethics."
  },
  {
    "id": 114, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "What is the 'leaky pipeline' metaphor in the context of women in computing?",
    "options": [
      "A cybersecurity vulnerability where sensitive system data is gradually exposed over an extended period",
      "The pattern where women progressively leave the field at each stage—from school through to senior roles",
      "The systematic pattern of budget overruns that occur in large-scale computing infrastructure projects",
      "The gradual erosion of technical skills and knowledge among older computing professionals as technology changes"
    ],
    "answer": 1,
    "explanation": "The leaky pipeline captures how women are lost at multiple stages—secondary school interest, university enrolment, entry-level jobs, mid-career retention, leadership—reflecting cumulative, systemic exclusion."
  },
  {
    "id": 115, "topic": "Professionalism in Computing", "difficulty": "hard",
    "question": "What tension exists between industry certifications (Cisco, AWS etc.) and the professionalisation of computing?",
    "options": [
      "Certifications are too theoretically academic and insufficiently practical for real-world industry needs",
      "Certifications are narrowly vendor-specific and omit ethical, legal, and societal considerations essential for a true profession",
      "Certifications are prohibitively expensive, creating significant financial barriers for lower-income candidates",
      "Certifications overlap too heavily with university degrees, creating unnecessary and confusing credential duplication"
    ],
    "answer": 1,
    "explanation": "Industry certifications validate specific technical skills but are fragmented, vary in rigour across vendors, and omit ethics and societal considerations—widening the gap between technical competence and professional responsibility."
  },
  {
    "id": 116, "topic": "Professionalism in Computing", "difficulty": "hard",
    "question": "What percentage of computing undergraduates in the UK identified as female in 2021?",
    "options": ["Around 30%", "Around 21%", "Around 35%", "Around 14%"],
    "answer": 1,
    "explanation": "UK data from 2021 indicates only around 21% of computing undergraduates identified as female—stubbornly low despite decades of intervention programmes."
  },

  // ── GENERATIVE AI (117–120) ────────────────────────────────────────────
  {
    "id": 117, "topic": "Generative AI", "difficulty": "easy",
    "question": "How does IBM define 'AI hallucination'?",
    "options": [
      "When an AI refuses to answer a question it considers dangerous",
      "When an LLM perceives non-existent patterns and produces nonsensical or inaccurate outputs",
      "When an AI is deliberately programmed to give incorrect answers",
      "When users mistakenly believe an AI chatbot is sentient or conscious"
    ],
    "answer": 1,
    "explanation": "AI hallucination is when an LLM confidently generates content that is factually wrong or entirely fabricated—not a random error but a structural behaviour arising from how LLMs generate statistically likely text."
  },
  {
    "id": 118, "topic": "Generative AI", "difficulty": "easy",
    "question": "What proportion of UK students reported using generative AI for assessments in the 2025 HEPI survey?",
    "options": ["53%", "65%", "88%", "72%"],
    "answer": 2,
    "explanation": "The HEPI 2025 survey found 88% of UK students used generative AI for assessments—up sharply from 53% the previous year, reflecting rapid normalisation of GenAI tools in higher education."
  },
  {
    "id": 119, "topic": "Generative AI", "difficulty": "medium",
    "question": "What environmental concern about AI and water resources is highlighted in the lecture?",
    "options": [
      "AI-powered smart irrigation systems are inadvertently reducing overall agricultural water efficiency",
      "A UK Digital Sustainability Alliance report predicts AI could increase global water usage from 1.1 to 6.6 billion cubic metres by 2027 due to data centre cooling",
      "AI-generated climate models are systematically producing incorrect predictions of water scarcity patterns in Africa",
      "Mining of rare earth minerals required for AI hardware manufacturing is contaminating major freshwater sources"
    ],
    "answer": 1,
    "explanation": "The Digital Sustainability Alliance predicts AI's cooling demands could increase global water usage sixfold by 2027—equivalent to more than half the UK's total annual water usage."
  },
  {
    "id": 120, "topic": "Generative AI", "difficulty": "hard",
    "question": "What is the core unresolved copyright question regarding training generative AI on internet content?",
    "options": [
      "Whether AI companies must legally pay royalties to users whose personal data is used in their training",
      "Whether using copyrighted material to train GenAI is unlawful or permitted under exceptions like text and data mining or fair use",
      "Whether AI-generated creative outputs automatically receive full copyright protection under existing intellectual property law",
      "Whether end users of AI tools are personally legally liable if the tool reproduces and outputs copyrighted content"
    ],
    "answer": 1,
    "explanation": "The lecture frames this as an open legal question: training on copyrighted material may be unlawful, or permitted under exceptions (UK text/data mining exception, US fair use)—with court cases actively shaping the answer."
  },

  // ── PRACTICE TEST QUESTIONS (121–133) ────────────────────────────────
  {
    "id": 121, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "The view that technology is simply a neutral tool—like a hammer—available for humans to use however they choose is called what?",
    "options": ["Technological determinism", "Social determinism", "Computational thinking", "Technological neutrality"],
    "answer": 3,
    "explanation": "The view that technology is simply a neutral tool—like a hammer—available for humans to use however they choose is called the technological neutrality thesis."
  },
  {
    "id": 122, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "An AI chatbot gives customers a fixed menu of help topics and lists of common solutions. Which TWO factors contribute to ethical distancing here?",
    "options": ["Technological determinism", "Computational thinking", "Social determinism", "Technological intermediation"],
    "answer": 1,
    "explanation": "Computational thinking (abstracting users into option categories rather than treating them as individuals) and technological intermediation (a faceless AI replacing human support) are the two distancing factors Peterson et al. identify."
  },
  {
    "id": 123, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "Which TWO factors inherent to computing contribute to ethical distancing, according to Peterson, Ferreira & Vardi (2023)?",
    "options": ["Technological intermediation", "Technological determinism", "Computational thinking", "Social determinism"],
    "answer": 2,
    "explanation": "Peterson et al. identify technological intermediation (opacity between developers and users) and computational thinking (training developers to think in abstractions rather than human impacts) as the two key distancing factors."
  },
  {
    "id": 124, "topic": "Digital Divide", "difficulty": "easy",
    "question": "What is the main factor that contributes to the digital skills gap in the UK, according to the lecture data?",
    "options": [
      "Age — older people consistently struggle significantly more with digital skills than younger generations",
      "Gender — women are significantly and consistently less likely to have strong digital skills than men",
      "Education — lower educational attainment is the strongest predictor of digital exclusion in the UK",
      "Location — rural residents consistently lack adequate access to digital skills training and learning programmes"
    ],
    "answer": 2,
    "explanation": "Education level is the strongest predictor of digital skills—those with lower educational attainment are disproportionately represented among the digitally excluded, though age and disability also play significant roles."
  },
  {
    "id": 125, "topic": "Internet Freedom and Democracy", "difficulty": "easy",
    "question": "'Politics is everyone's business, and the policy process should allow the public to have a clear understanding of what's going on.' Which aspect of Taiwan's open government is this?",
    "options": ["Participation", "Transparency", "Accountability", "Inclusion"],
    "answer": 1,
    "explanation": "This is Taiwan's definition of Transparency—the principle that policy processes should be open and understandable to the public, not hidden behind closed doors."
  },
  {
    "id": 126, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "A study finds low cholesterol is associated with increased mortality and concludes it causes mortality. What type of bias is this?",
    "options": ["Confirmation bias", "Selection bias", "Correlation fallacy", "Coverage bias"],
    "answer": 2,
    "explanation": "This is a correlation fallacy—mistaking a statistical association for causation. Association between two variables does not mean one causes the other."
  },
  {
    "id": 127, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "A data annotator labels 'It's fine' as negative because they personally interpret it as passive-aggressive. What type of bias is this?",
    "options": ["Confirmation bias", "Selection bias", "Correlation fallacy", "Coverage bias"],
    "answer": 0,
    "explanation": "This is confirmation bias—the annotator applies their own prior assumptions to label data rather than labelling it objectively. This is how 'biased people' introduce bias into training data."
  },
  {
    "id": 128, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "Food delivery apps set 30-minute limits that penalise drivers for traffic or weather delays beyond their control. Which data justice pillar is NOT upheld?",
    "options": ["Power", "Knowledge", "Access", "Equity"],
    "answer": 0,
    "explanation": "Power is not upheld—drivers have no power to challenge or influence the algorithmic decisions that govern their work, penalise them unfairly, or account for circumstances beyond their control."
  },
  {
    "id": 129, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "Drivers successfully sued Ola Cabs for maintaining a secret 'fraud probability score' without disclosing it, violating their GDPR rights. Which data justice pillar was upheld?",
    "options": ["Equity", "Participation", "Access", "Power"],
    "answer": 2,
    "explanation": "Access was upheld—drivers successfully asserted their GDPR right to access personal data and algorithmic decision-making affecting them. Workers have a right to access and understand data collected about themselves."
  },
  {
    "id": 130, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "A toy brand's raffle asks for name, date of birth, address, AND credit card details just to enter. Buyers question why all of this is necessary. Which principle is being violated?",
    "options": ["Storage limitation", "Accuracy", "Accountability", "Data minimisation"],
    "answer": 3,
    "explanation": "Data minimisation requires organisations to collect only the minimum data necessary. Collecting credit card information just to enter a raffle goes beyond what is necessary and violates this principle."
  },
  {
    "id": 131, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "True or False: The Computer Misuse Act 1990 requires actual data theft or system damage to have occurred for an offence to be committed.",
    "options": ["True — damage or theft must be proven", "False — unauthorised access alone is sufficient", "Only true for Section 2 offences", "Only true for Section 3 offences"],
    "answer": 1,
    "explanation": "False. Under Section 1 of the CMA 1990, simply accessing a computer system without authorisation is an offence—no data theft or damage needs to have occurred."
  },
  {
    "id": 132, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "Is overwhelming servers with traffic to disrupt access (a DDoS attack) an offence under Section 1 of the Computer Misuse Act?",
    "options": ["True — it is covered under Section 1", "False — DDoS attacks fall under Section 3, not Section 1", "Only if it causes financial damage over £1,000", "Only if it targets a government or critical system"],
    "answer": 1,
    "explanation": "False. DDoS attacks fall under Section 3 (unauthorised acts to impair computer operation), not Section 1 (which covers unauthorised access to computer material)."
  },
  {
    "id": 133, "topic": "Computer-Related Crimes", "difficulty": "easy",
    "question": "Is it an offence under the Computer Misuse Act to make, supply, or obtain cybercrime tools even if they are never actually used?",
    "options": ["True — possession and distribution alone is an offence", "False — intent to use must be proven", "Only if the tools are distributed online to others", "Only if the person has a prior conviction"],
    "answer": 0,
    "explanation": "True. Section 3A (added by the Police and Justice Act 2006) criminalises making, supplying, or obtaining cybercrime tools—possession and distribution alone is sufficient for an offence, regardless of whether the tools are deployed."
  },
  // ── DATA JUSTICE – FROM THE GPAI GUIDE (134–160) ──────────────────────

  {
    "id": 134, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "How does Linnet Taylor (2017) define data justice?",
    "options": [
      "The legal right to access, correct, and delete personal data held by organisations",
      "Fairness in the way people are made visible, represented, and treated as a result of their production of digital data",
      "Equal distribution of the economic benefits generated by data collection and processing",
      "The principle that data systems must not discriminate on the basis of protected characteristics"
    ],
    "answer": 1,
    "explanation": "Taylor's foundational 2017 definition frames data justice as fairness in visibility, representation, and treatment—centering how datafication affects people, not just how data is governed technically."
  },
  {
    "id": 135, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "What organisation published the 'Data Justice in Practice: A Guide for Developers' document (2022)?",
    "options": [
      "The Global Data Justice Project at Tilburg Institute",
      "The Alan Turing Institute, in collaboration with GPAI",
      "The Data Justice Lab at Cardiff University",
      "The Information Commissioner's Office (ICO)"
    ],
    "answer": 1,
    "explanation": "The guide was produced by the Alan Turing Institute (led by David Leslie and colleagues) in collaboration with the Global Partnership on AI (GPAI) and its Data Governance Working Group."
  },
  {
    "id": 136, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "What are the six pillars of data justice as proposed in the GPAI (2022) guide?",
    "options": [
      "Privacy, security, fairness, accountability, transparency, and explainability",
      "Power, equity, access, identity, participation, and knowledge",
      "Visibility, engagement with technology, and non-discrimination",
      "Safety, accountability, fairness, explainability, data quality, and data integrity"
    ],
    "answer": 1,
    "explanation": "The GPAI guide proposes six pillars: Power, Equity, Access, Identity, Participation, and Knowledge—building on and expanding Taylor's original three pillars of visibility, engagement with technology, and non-discrimination."
  },
  {
    "id": 137, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "What were Linnet Taylor's original THREE pillars of data justice (2017)?",
    "options": [
      "Power, equity, and access",
      "Fairness, privacy, and security",
      "Visibility, engagement with technology, and non-discrimination",
      "Identity, participation, and knowledge"
    ],
    "answer": 2,
    "explanation": "Taylor's original 2017 framework had three pillars: Visibility (access to representation through data and informational privacy), Engagement with technology (sharing in data's benefits and autonomy in technology choices), and Non-discrimination (ability to challenge bias and prevent discrimination)."
  },
  {
    "id": 138, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What does the 'Power' pillar of data justice primarily aim to do?",
    "options": [
      "Give developers legal authority over data collection decisions",
      "Understand, question, and challenge the levels at which power operates in data innovation ecosystems",
      "Transfer control of data from corporations to government regulators",
      "Ensure that computing professionals hold power over data governance decisions"
    ],
    "answer": 1,
    "explanation": "The Power pillar demonstrates the importance of understanding how power operates in data ecosystems—at geopolitical, infrastructural, legal, organisational, cultural, and psychological levels—and then questioning and challenging those power structures."
  },
  {
    "id": 139, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What does the GPAI guide identify as 'decision-making power' in data contexts?",
    "options": [
      "The ability of AI systems to make automated decisions without human oversight",
      "Where actor A has power over B to the extent that A can get B to do something they would not otherwise do",
      "The legal authority of regulators to impose fines for data breaches",
      "The technical capacity to collect and process large volumes of personal data"
    ],
    "answer": 1,
    "explanation": "Decision-making power is defined as actor A having power over B to the extent A can get B to do something they would not otherwise do—seen for example in government agencies using predictive risk models to allocate social services."
  },
  {
    "id": 140, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is 'agenda-setting power' in the context of data governance?",
    "options": [
      "The ability of data scientists to define research questions and methodologies",
      "Where actor A sets terms of engagement that constrain B's practical options to those A finds acceptable or desired",
      "The power of governments to set mandatory data protection standards for corporations",
      "The ability of users to customise their own data privacy settings"
    ],
    "answer": 1,
    "explanation": "Agenda-setting power means A can shoehorn B's behaviour into a range of possibilities acceptable to A—seen in regulatory capture, where large tech corporations secure light-touch regulation through lobbying."
  },
  {
    "id": 141, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "What is 'normalising power' in the GPAI data justice framework?",
    "options": [
      "The process of standardising data formats across different systems and databases",
      "How dominant knowledge structures and regulatory decisions work together to maintain and 'make normal' existing power relations",
      "The ability of AI systems to normalise outliers and anomalies in datasets",
      "The role of professional codes of conduct in establishing acceptable developer behaviour"
    ],
    "answer": 1,
    "explanation": "Normalising power manifests in how dominant knowledge structures, authoritative institutions, and regulatory decisions work together to maintain the status quo of power relations—making certain inequalities appear natural or inevitable."
  },
  {
    "id": 142, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What does the 'Equity' pillar of data justice require developers to consider FIRST, before collecting any data?",
    "options": [
      "Whether the data pipeline is technically secure and compliant with GDPR",
      "Whether the goals and purposes of the project will enable or disable oppression, and whether data collection is justified at all",
      "Whether the dataset is representative, balanced, and free from selection bias",
      "Whether the project team has sufficient diversity to represent affected communities"
    ],
    "answer": 1,
    "explanation": "The Equity pillar requires confronting equity issues at the earliest stage—asking not just 'how can we improve the system' but 'does this use of data enable or disable oppression?' and 'does it preserve or combat harmful relations of power?'"
  },
  {
    "id": 143, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What are the '5 D's' referenced in the GPAI guide in the context of data equity?",
    "options": [
      "Data, Decisions, Deployments, Developers, and Discrimination",
      "Disparity, Deprivation, Disadvantage, Dysfunction, and Difference",
      "Discovery, Design, Development, Deployment, and Decommissioning",
      "Diversity, Dignity, Democracy, Due process, and Data rights"
    ],
    "answer": 1,
    "explanation": "The '5 D's' (from Kukutai and Taylor, 2016) describe how statistical representations of marginalised groups often focus solely on Disparity, Deprivation, Disadvantage, Dysfunction, and Difference—a negative and discriminatory framing that the equity pillar seeks to combat."
  },
  {
    "id": 144, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What does the 'Access' pillar of data justice argue should be the starting point for questions about equitable access?",
    "options": [
      "A technical assessment of what data is available and in what format",
      "Real-world problems of material inequality and structural injustice—the concrete, historical preconditions of lived injustice",
      "A legal review of what data sharing is permitted under GDPR and relevant legislation",
      "An assessment of what data access is technically possible given existing infrastructure"
    ],
    "answer": 1,
    "explanation": "The Access pillar insists on starting from material reality: existing sociohistorical, economic, and political patterns of disadvantage must be the starting point, because these create material conditions of injustice and unequal access to the benefits of data processing."
  },
  {
    "id": 145, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "The GPAI guide identifies four dimensions of data justice in relation to equitable access. Which option correctly lists all four?",
    "options": [
      "Safety, accountability, fairness, and explainability",
      "Distributive justice, capabilities-centred social justice, representational and recognitional justice, and restorative and reparational justice",
      "Power, equity, identity, and participation",
      "Process transparency, outcome transparency, institutional transparency, and data transparency"
    ],
    "answer": 1,
    "explanation": "The four dimensions of data justice for equitable access are: (1) Distributive justice (equitable distribution of risks and benefits); (2) Capabilities-centred social justice (material preconditions for flourishing); (3) Representational and recognitional justice (equal dignity and autonomy); (4) Restorative and reparational justice (righting past wrongs)."
  },
  {
    "id": 146, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What does the 'Identity' pillar of data justice address?",
    "options": [
      "The technical processes for authenticating and verifying user identities in data systems",
      "The social character of data and the harmful effects of categorisations shaped by sociocultural conditions and historical contexts",
      "Legal requirements for identity verification when collecting sensitive personal data",
      "The right of individuals to maintain anonymous identities when using digital services"
    ],
    "answer": 1,
    "explanation": "The Identity pillar addresses how data categorisation is a fundamentally social activity shaped by cultural and historical contexts, which can lead to racialised, misgendered, or otherwise discriminatory classifications—including reification of identities and erasure of intersectional characteristics."
  },
  {
    "id": 147, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is 'intersectional discrimination' in the context of the Identity pillar?",
    "options": [
      "Discrimination that occurs at the intersection of the digital and physical worlds",
      "Where protected characteristics like race and gender overlap in ways that compound or magnify discriminatory harms",
      "Discrimination embedded in the intersection of different datasets from multiple sources",
      "Bias introduced at the intersection of the training and testing phases of model development"
    ],
    "answer": 1,
    "explanation": "Intersectional discrimination occurs where protected characteristics like race and gender overlap in ways that compound or magnify harms—for example, a facial recognition system trained primarily on white males that systematically underperforms for darker-skinned females."
  },
  {
    "id": 148, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What does the 'Participation' pillar of data justice promote?",
    "options": [
      "Developers participating in open-source software communities and sharing code",
      "The democratisation of data scientific research by involving impacted communities, policymakers, practitioners, and developers together",
      "Users participating in beta testing and providing feedback on data systems",
      "Organisations participating in voluntary data protection certification schemes"
    ],
    "answer": 1,
    "explanation": "The Participation pillar promotes democratisation of data innovation—bringing together impacted communities, policymakers, practitioners, and developers to collaboratively determine what acceptable uses of data are and how data innovation should be governed."
  },
  {
    "id": 149, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "The GPAI guide warns against 'power-preserving inclusion'. What does this mean?",
    "options": [
      "Including too many stakeholders in a project, which can slow decision-making and preserve inefficiencies",
      "Where mechanisms of inclusion normalise or support existing power imbalances, perpetuating data injustices rather than transforming them",
      "Including powerful corporate stakeholders in data governance discussions, which can undermine public oversight",
      "Preserving existing data structures when including new data sources into a system"
    ],
    "answer": 1,
    "explanation": "Power-preserving inclusion occurs when the way communities are included in data innovation normalises existing power hierarchies rather than challenging them. The guide calls instead for 'transformational inclusiveness'—equitable, symmetrical, and reciprocal terms of engagement."
  },
  {
    "id": 150, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What does the 'Knowledge' pillar of data justice involve?",
    "options": [
      "Ensuring that developers and data scientists maintain up-to-date technical knowledge through CPD",
      "Recognising that diverse forms of knowledge—including lived experience and community-specific knowledge—add valuable insights to data use",
      "Making technical knowledge about AI systems publicly available through open-source documentation",
      "Ensuring that AI literacy and data skills education is available to all communities equally"
    ],
    "answer": 1,
    "explanation": "The Knowledge pillar involves recognising and respecting diverse forms of knowledge—including non-technical, socially-situated, and community-specific knowledge—alongside technical and academic expertise, and actively incorporating them into data innovation practices."
  },
  {
    "id": 151, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What does 'data witnessing' refer to in the GPAI guide?",
    "options": [
      "The legal requirement for a witness to be present when sensitive data is collected",
      "Using datafication's capacity for visibility to expose lived injustices, historical abuses, and moral harms to promote liberating transformation",
      "The practice of having a third party audit and verify the accuracy of datasets",
      "Recording and documenting all stages of data collection for accountability purposes"
    ],
    "answer": 1,
    "explanation": "Data witnessing refers to harnessing datafication's ability to make things visible as a force for change—using data to expose previously hidden inequities and injustices, enabling the far-reaching sharing of harms to promote transparency and accountability."
  },
  {
    "id": 152, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "What are the three types of transparency identified in the GPAI guide for the Access pillar?",
    "options": [
      "Input transparency, process transparency, and output transparency",
      "Process transparency, professional and institutional transparency, and outcome transparency",
      "Technical transparency, legal transparency, and public transparency",
      "Design transparency, development transparency, and deployment transparency"
    ],
    "answer": 1,
    "explanation": "The three types are: Process transparency (making design and implementation processes accessible for oversight), Professional and institutional transparency (holding responsible team members to rigorous standards of conduct), and Outcome transparency (informing stakeholders of where and why systems performed as they did)."
  },
  {
    "id": 153, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What does the GPAI guide mean by 'relocating data justice'?",
    "options": [
      "Moving data justice research from academic institutions to industry and government",
      "Shifting understandings of data justice away from Eurocentric perspectives towards a more inclusive vision—spatially, temporally, and vocationally",
      "Relocating data storage infrastructure to regions with stronger data protection laws",
      "Transferring data justice enforcement powers from national to international bodies"
    ],
    "answer": 1,
    "explanation": "Relocating data justice operates across three dimensions: spatially (shifting away from Global North perspectives), temporally (recognising deep histories of data injustice, not just recent ones), and vocationally (expanding who counts as a valid knowledge contributor beyond technical experts)."
  },
  {
    "id": 154, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What are the SAFE-D principles in the GPAI data justice framework?",
    "options": [
      "Security, Accountability, Fairness, Ethics, and Data protection",
      "Safety, Accountability, Fairness, Explainability, and Data Quality/Integrity/Protection/Privacy",
      "Sustainability, Access, Fairness, Equity, and Democracy",
      "Safety, Autonomy, Freedom, Equality, and Data minimisation"
    ],
    "answer": 1,
    "explanation": "SAFE-D stands for Safety, Accountability, Fairness, Explainability, and Data Quality/Integrity/Protection/Privacy—five overarching principles of responsible, equitable, and trustworthy data research and innovation that support and underwrite the advancement of data justice."
  },
  {
    "id": 155, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "In the GPAI guide, what does 'Explainability' require beyond simply interpreting an AI system's outputs?",
    "options": [
      "Publishing the source code and training data used to build the system",
      "Providing an accessible and relevant information base about the processes behind the outcome, not just the outcome itself",
      "Translating technical documentation into plain language for non-expert users",
      "Demonstrating that the system's predictions are statistically accurate and unbiased"
    ],
    "answer": 1,
    "explanation": "Explainability goes beyond outcome interpretation—it requires making accessible and relevant information available about the processes behind the outcome, so that people can understand why the system behaved as it did and can contest objectionable results."
  },

  // ── INTERNET, DEMOCRACY AND SOCIETY – EXTENDED (156–168) ──────────────

  {
    "id": 156, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is the 'capabilities approach' that Linnet Taylor incorporates into her data justice framework, drawing on the work of Sen and Nussbaum?",
    "options": [
      "A technical approach to measuring the computational capabilities of data systems",
      "A social justice framework that centres human flourishing and the material conditions needed for people to realise their full potential and live freely",
      "A legal framework measuring whether organisations have sufficient technical capability to comply with data protection law",
      "An economic approach to assessing the productivity gains from data-driven innovation"
    ],
    "answer": 1,
    "explanation": "The capabilities approach (from Amartya Sen and Martha Nussbaum) centres human flourishing and the creation of material conditions necessary for people to realise their full potential and live freely—Taylor argues data justice must be evaluated against these standards."
  },
  {
    "id": 157, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "Which of the following is an example of 'ideological power' in data systems, as described in the GPAI guide?",
    "options": [
      "A government using data to build predictive risk models to allocate social services",
      "Large corporations using lobbying to secure light-touch regulation of their technologies",
      "Social media platforms using algorithmic personalisation to groom users to embrace 'life-logging and status-updating' while avoiding awareness of expanding inequality",
      "Tech companies controlling access to digital infrastructure in developing countries"
    ],
    "answer": 2,
    "explanation": "Ideological power operates by shaping people's perceptions and preferences so they accept their place in the social hierarchy—often against their own interests. The GPAI guide cites 'attention capture' and 'screen-time maximisation' platforms that manufacture desires and distract from inequality as examples."
  },
  {
    "id": 158, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "In the context of the data justice framework, what is meant by 'social licence'?",
    "options": [
      "A legal licence granted by a data protection authority to process sensitive personal data",
      "Broad public consent, trust, and democratic governance of data collection and use by communities",
      "A commercial licence allowing organisations to use social media data for research purposes",
      "A professional qualification demonstrating competence in ethical data practices"
    ],
    "answer": 1,
    "explanation": "Social licence refers to the broader public consent, trust, and democratic governance required for data practices to be considered legitimate. The Participation pillar specifically calls for 'meaningful stakeholder participation to ensure social licence, public consent, and justified public trust'."
  },
  {
    "id": 159, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "The GPAI guide identifies a tension in the concept of 'open data'. What is this tension?",
    "options": [
      "Open data can be freely accessed but is often of low quality and unreliable",
      "Calls for 'open data' can be oversimplified and appropriated by market forces, potentially curtailing equitable access rather than expanding it",
      "Open data improves transparency but creates security risks by exposing sensitive information",
      "Open data benefits developers and researchers but excludes non-technical members of the public"
    ],
    "answer": 1,
    "explanation": "The guide warns that 'open data' is not automatically equitable—market forces can appropriate it in ways that curtail equitable access. The concept must be bounded and qualified, always considering the moral rights of individuals and communities whose data it is."
  },
  {
    "id": 160, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What real-world example does the GPAI guide give for the 'Power' pillar in action?",
    "options": [
      "The GDPR giving individuals the right to access and delete their personal data",
      "GobLab UAI in Chile helping public agencies develop decision-support algorithms that incorporate ethical standards like transparency, equity, and accountability",
      "Terms of Service; Didn't Read (ToS;DR) providing plain-English summaries of complex privacy policies",
      "Women in Machine Learning and Data Science (WiMLDS) increasing diversity in open-source software contributions"
    ],
    "answer": 1,
    "explanation": "GobLab UAI (a public innovation lab at Adolfo Ibáñez University, Chile) is cited as the Power pillar example—it works with public agencies to develop decision-support algorithms with ethical requirements, challenging tendencies of entrenched power to pursue technology development in purely instrumental ways."
  },

  // ── COMPUTER-RELATED CRIMES AND LAW – EXTENDED (161–172) ──────────────

  {
    "id": 161, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "Under the Computer Misuse Act 1990, what must be proven for a Section 1 offence (unauthorised access) to be committed?",
    "options": [
      "That data was actually stolen or the system was damaged as a result of access",
      "That the person accessed a computer knowing they were not authorised to do so, intending to secure access to any program or data",
      "That the access caused financial loss of more than £1,000 to the victim",
      "That the person had previously been warned not to access the system in question"
    ],
    "answer": 1,
    "explanation": "Section 1 requires only that the person accessed a computer knowing they were not authorised, with intent to secure access to any program or data. No damage, data theft, or financial loss needs to have occurred—the unauthorised access itself is the offence."
  },
  {
    "id": 162, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What distinguishes a Section 2 offence from a Section 1 offence under the Computer Misuse Act 1990?",
    "options": [
      "Section 2 involves causing damage to data; Section 1 involves only accessing the system",
      "Section 2 involves unauthorised access with the additional intent to commit or facilitate a further indictable offence",
      "Section 2 applies to corporate defendants; Section 1 applies to individuals only",
      "Section 2 requires physical presence at the computer; Section 1 covers remote access"
    ],
    "answer": 1,
    "explanation": "Section 2 is Section 1 plus intent—the person not only accesses a computer without authorisation, but does so with the intent to commit or facilitate commission of a further indictable offence (e.g., accessing a system to commit fraud)."
  },
  {
    "id": 163, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "The Online Safety Act 2023 places new duties on which category of platforms?",
    "options": [
      "All websites operating from a UK-registered domain name",
      "User-to-user services and search engines, with extra duties on the largest platforms",
      "Government and public sector websites only, given they hold the most sensitive data",
      "E-commerce platforms and online marketplaces that process payment data"
    ],
    "answer": 1,
    "explanation": "The Online Safety Act 2023 places duties on user-to-user services (social media, messaging apps, forums) and search engines, with extra obligations on the largest services—requiring them to assess and mitigate risks of illegal and harmful content, particularly to children."
  },
  {
    "id": 164, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What is 'phishing' as a cybercrime and which legislation primarily covers it in the UK?",
    "options": [
      "Intercepting network traffic; covered by RIPA 2000",
      "Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity; covered by the Fraud Act 2006",
      "Overwhelming servers with traffic; covered by Section 3 of the Computer Misuse Act",
      "Unlicensed monitoring of employees; covered by the Telecommunications (Lawful Business Practice) Regulations 2000"
    ],
    "answer": 1,
    "explanation": "Phishing—using deception to obtain credentials, financial data, or personal information—is primarily prosecuted under the Fraud Act 2006, particularly the offence of fraud by false representation (Section 2), which covers dishonestly making false representations to make a gain."
  },
  {
    "id": 165, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What is 'ransomware' and which sections of the Computer Misuse Act are most relevant to it?",
    "options": [
      "Software that harvests passwords; primarily covered by Section 1 (unauthorised access)",
      "Malware that encrypts a victim's data and demands payment to restore it; primarily covered by Sections 3 and 3A (unauthorised acts and supplying cybercrime tools)",
      "A form of spyware that monitors user activity; primarily covered by RIPA 2000",
      "Fraudulent software sold to consumers; primarily covered by the Consumer Rights Act 2015"
    ],
    "answer": 1,
    "explanation": "Ransomware encrypts victims' data and demands payment—it constitutes unauthorised acts impairing computer operation (Section 3) and the tools themselves fall under Section 3A (making/supplying tools for cybercrime). Creating and deploying ransomware could also engage Section 2 (access with intent to commit fraud)."
  },
  {
    "id": 166, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "What is 'social engineering' in the context of cybercrime and why is it legally challenging?",
    "options": [
      "Designing algorithms that manipulate user behaviour on social media platforms",
      "Manipulating people psychologically to voluntarily divulge confidential information or perform actions that compromise security—legally challenging because victims are technically complicit",
      "Engineering social media platforms to promote engagement through psychological hooks",
      "Using social network analysis to identify and target vulnerable individuals for data collection"
    ],
    "answer": 1,
    "explanation": "Social engineering exploits human psychology rather than technical vulnerabilities—the victim is deceived into handing over credentials or access. This can be legally complex because the victim technically 'authorised' the action; prosecution typically relies on the Fraud Act 2006 rather than the CMA 1990."
  },
  {
    "id": 167, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What does the 'dual criminality' principle mean in international cybercrime prosecution?",
    "options": [
      "That both the sender and receiver of malware can be prosecuted",
      "That conduct must be a crime in both the country where it occurred and the country seeking to prosecute it",
      "That computer crimes carry double the sentence of equivalent non-computer crimes",
      "That both civil and criminal penalties can be applied to the same cybercrime offence"
    ],
    "answer": 1,
    "explanation": "Dual criminality requires that the conduct be criminal in both jurisdictions before extradition or mutual legal assistance can occur—a significant challenge for cybercrime prosecution because laws vary widely across countries, and perpetrators often operate from jurisdictions with weak cybercrime legislation."
  },

  // ── PRIVACY, DATA PROTECTION – EXTENDED (168–178) ─────────────────────

  {
    "id": 168, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What is 'consent fatigue' in the context of online data collection?",
    "options": [
      "The legal principle that consent given more than 12 months ago is no longer valid under GDPR",
      "The phenomenon where users habitually click 'accept' on cookie banners and privacy policies without reading them, rendering consent meaningless",
      "The regulatory burden placed on organisations that must obtain consent for every type of data processing",
      "The exhaustion experienced by data protection officers dealing with high volumes of consent withdrawal requests"
    ],
    "answer": 1,
    "explanation": "Consent fatigue describes how the proliferation of consent requests—cookie banners, privacy notices, terms of service—leads users to click 'accept' automatically without engaging, undermining the GDPR requirement for consent to be 'freely given, specific, informed, and unambiguous'."
  },
  {
    "id": 169, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "Under GDPR, what are 'special categories' of personal data that require a higher level of protection?",
    "options": [
      "Financial data, location data, and browsing history",
      "Racial or ethnic origin, political opinions, religious beliefs, trade union membership, genetic/biometric data, health data, sex life, and sexual orientation",
      "Names, addresses, email addresses, and telephone numbers",
      "Government-issued ID numbers, passport numbers, and national insurance numbers"
    ],
    "answer": 1,
    "explanation": "GDPR Article 9 identifies special categories requiring heightened protection: racial/ethnic origin, political opinions, religious/philosophical beliefs, trade union membership, genetic data, biometric data for identification, health data, and data concerning sex life or sexual orientation."
  },
  {
    "id": 170, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "What is 'data sovereignty' and why is it particularly significant for indigenous communities?",
    "options": [
      "The legal principle that data stored in a country is subject to that country's laws",
      "The right of a community or nation to govern how data about them is collected, owned, and used—for indigenous peoples this includes the right to control data generated from their lands, lives, and cultures",
      "The technical capacity of a nation-state to store and process data within its own borders",
      "The principle that individuals have absolute ownership over their personal data"
    ],
    "answer": 1,
    "explanation": "Data sovereignty for indigenous peoples extends beyond individual privacy rights to collective rights—including the right to control data from and about their communities, activities, and lands, encompassing both collective rights (benefit, access, ownership, control) and individual rights (privacy and dignity)."
  },
  {
    "id": 171, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What is a 'Data Protection Impact Assessment' (DPIA) and when is one required under GDPR?",
    "options": [
      "An annual financial audit of data protection compliance costs required of all organisations",
      "A systematic assessment of risks to individuals' rights and freedoms from high-risk data processing—required before commencing processing likely to result in high risk",
      "A voluntary industry certification demonstrating compliance with GDPR principles",
      "A legal document submitted to the ICO when an organisation first registers as a data controller"
    ],
    "answer": 1,
    "explanation": "A DPIA (Article 35 GDPR) is a systematic process for identifying and minimising privacy risks from high-risk processing activities—including profiling on a large scale, systematic monitoring of public areas, and processing special category data at scale. It must be completed before the processing begins."
  },
  {
    "id": 172, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "What is 'privacy by design' as a concept in data protection?",
    "options": [
      "Designing websites and apps with easily accessible privacy settings and cookie banners",
      "Embedding privacy and data minimisation principles into the technical design and architecture of systems from the outset, rather than as an afterthought",
      "Creating privacy policies that are written in plain English rather than legal jargon",
      "Physically designing office spaces and server rooms to prevent unauthorised access to hardware"
    ],
    "answer": 1,
    "explanation": "Privacy by design (now a legal requirement under GDPR Article 25) means building privacy protections into systems from the start—including default privacy-protective settings, data minimisation, and access controls—rather than retrofitting them after a system has been built."
  },

  // ── COMPUTING AND RESEARCH – METHODOLOGY (173–180) ────────────────────

  {
    "id": 173, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "In computing research, what is a 'case study' methodology best suited for?",
    "options": [
      "Generating statistically generalisable findings across large populations",
      "In-depth investigation of a particular instance, system, or context to gain rich understanding",
      "Testing hypotheses through controlled experimental conditions",
      "Collecting quantitative data from a large representative sample of participants"
    ],
    "answer": 1,
    "explanation": "Case studies are best suited for in-depth investigation of a specific instance, system, or phenomenon in context—they generate rich qualitative insight rather than statistically generalisable findings, making them appropriate when understanding the 'how' and 'why' of a phenomenon matters more than measuring it."
  },
  {
    "id": 174, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "What is the difference between 'quantitative' and 'qualitative' research approaches in computing?",
    "options": [
      "Quantitative research is faster and cheaper; qualitative research produces more accurate results",
      "Quantitative research uses numerical measurement and statistical analysis; qualitative research explores meanings, experiences, and context through non-numerical data",
      "Quantitative research is used in academia; qualitative research is used in industry",
      "Quantitative research requires large samples; qualitative research requires expert participants"
    ],
    "answer": 1,
    "explanation": "Quantitative research uses numerical data and statistical analysis to measure, compare, and generalise (e.g., surveys, performance benchmarks). Qualitative research explores meanings, perceptions, and context through non-numerical data (e.g., interviews, observations, case studies)—the choice depends on the research question."
  },
  {
    "id": 175, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "In the context of evaluating a new technology in an educational setting, why might a researcher use both interviews and assessment comparisons?",
    "options": [
      "To increase the cost of the research and justify a larger budget",
      "To triangulate findings—interviews capture subjective experience and perception while assessment comparisons provide objective measurable outcomes",
      "Because regulatory requirements mandate the use of at least two research methods",
      "To ensure the study takes long enough to satisfy academic publication requirements"
    ],
    "answer": 1,
    "explanation": "Using multiple methods—'mixed methods' or 'triangulation'—allows researchers to capture both the subjective experience of participants (through interviews) and objective measurable outcomes (through assessment data), producing a more complete and robust picture than either method alone."
  },
  {
    "id": 176, "topic": "Professionalism in Computing", "difficulty": "hard",
    "question": "Why is 'research ethics approval' required before conducting research involving human participants in computing?",
    "options": [
      "Because it is a legal requirement under the Computer Misuse Act for any research involving computer systems",
      "Because research involving humans requires independent review of risks to participants—including data privacy, informed consent, and protection from harm—before the research begins",
      "Because it is required to publish findings in academic journals and secure research funding",
      "Because the ICO requires all organisations processing data for research to obtain prior approval"
    ],
    "answer": 1,
    "explanation": "Research ethics approval requires an independent committee to review whether participants' rights are protected—including informed consent, data protection (relevant to GDPR's research exemptions), risk of harm, and right to withdraw—before any data collection begins."
  },
  {
    "id": 177, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "What is 'informed consent' in the context of computing research involving human participants?",
    "options": [
      "Participants signing a legal waiver releasing the researcher from liability for any harm",
      "Participants voluntarily agreeing to take part after being given clear information about the purpose, procedures, risks, and their right to withdraw",
      "Participants confirming they have read and agreed to the organisation's privacy policy",
      "The research institution giving consent for researchers to collect data on behalf of participants"
    ],
    "answer": 1,
    "explanation": "Informed consent requires that participants understand what the research involves—its purpose, what data will be collected, how it will be used, potential risks, who will have access, and that participation is voluntary and they can withdraw at any time—before agreeing to take part."
  },
  {
    "id": 178, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "What is 'reproducibility' in computing research and why does it matter for data justice?",
    "options": [
      "The ability to produce the same printed outputs from the same input data in a document system",
      "The ability of others to follow the same procedures and achieve the same results—important for accountability, trust, and detecting bias in AI systems",
      "Creating multiple backup copies of research data to prevent loss",
      "The legal obligation to share research findings publicly when funded by government grants"
    ],
    "answer": 1,
    "explanation": "Reproducibility means others can follow the same steps and verify the results—critical for holding AI systems accountable, detecting bias, and ensuring that claims about system performance are verifiable. The GPAI SAFE-D principles explicitly include reproducibility under Accountability."
  },
  {
    "id": 179, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "What is 'concept drift' in deployed AI systems and why is it a data justice concern?",
    "options": [
      "When the technical concepts used to describe a system change over time, causing confusion",
      "When the statistical relationship between input data and correct outputs changes over time due to shifting social norms, causing the model's performance to degrade",
      "When a model is gradually updated with new training data without being fully retrained",
      "When different development teams use inconsistent conceptual frameworks in the same project"
    ],
    "answer": 1,
    "explanation": "Concept drift occurs when real-world conditions change (e.g., changing consumer behaviour, evolving linguistic norms) so that training data becomes less representative over time, degrading model performance. From a data justice perspective, this can mean a system that was initially fair becomes discriminatory as social conditions change—making ongoing monitoring essential."
  },
  {
    "id": 180, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "What is 'algorithmic aversion' and how does it affect the deployment of AI systems?",
    "options": [
      "When developers avoid using algorithms due to ethical concerns about bias and discrimination",
      "When users or implementers distrust and systematically underuse algorithmic decision support, even when it would improve outcomes",
      "When regulatory bodies prohibit the use of algorithms in high-stakes decision making",
      "When organisations avoid publishing their algorithmic systems to prevent scrutiny and challenge"
    ],
    "answer": 1,
    "explanation": "Algorithmic aversion describes users' or implementers' tendency to distrust and dismiss algorithmic outputs—sometimes rejecting useful recommendations. This is the opposite of automation bias (over-reliance). Both can negate the intended benefits of a system and are addressed in user training under the SAFE-D Explainability principle."
  },
  // ── TRICKY MEDIUM / HARD BATCH (181–230) ─────────────────────────────

  // ── COMPUTER-RELATED CRIMES – TRICKY ──────────────────────────────────
  {
    "id": 181, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "A security researcher, without prior authorisation, probes a company's public-facing web server to report a vulnerability. Under the CMA 1990, which statement is most accurate?",
    "options": [
      "No offence is committed because the motivation was to help, not to cause harm",
      "A Section 1 offence is committed regardless of intent, because authorisation is the only test the Act applies",
      "A Section 3 offence is committed because any probe risks impairing server operation",
      "No offence is committed because public-facing servers carry implicit consent to be tested"
    ],
    "answer": 1,
    "explanation": "The CMA 1990 Section 1 offence turns entirely on whether access was authorised—intent to help, benefit to the company, or the fact a server is publicly accessible are all irrelevant to liability. Unauthorised access is the offence."
  },
  {
    "id": 182, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "Under the CMA 1990, which scenario would most likely be charged under Section 2 rather than Section 1?",
    "options": [
      "A teenager who guesses a friend's social media password and reads their messages out of curiosity",
      "A programmer who deploys a script that repeatedly attempts to log in to a competitor's admin panel",
      "An employee who accesses a colleague's work files without permission to gather evidence for a grievance, intending to use it in a fraud claim",
      "A researcher who scans open ports on university servers without asking permission first"
    ],
    "answer": 2,
    "explanation": "Section 2 requires unauthorised access PLUS intent to commit or facilitate a further indictable offence (here, fraud). The other scenarios show simple unauthorised access (Section 1) without the extra intent element Section 2 requires."
  },
  {
    "id": 183, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "A hacker uses a botnet to flood a hospital's network, taking its patient management system offline for six hours. Which combination of CMA 1990 sections is most likely engaged?",
    "options": [
      "Section 1 only, because the attack involved accessing the hospital's network",
      "Section 3 only, because no data was accessed—only the service was disrupted",
      "Section 3 for the denial-of-service attack and potentially Section 3A for creating/using the botnet tools",
      "Section 2, because the disruption was intended to facilitate a further financial crime"
    ],
    "answer": 2,
    "explanation": "Section 3 covers unauthorised acts intended to impair computer operation (the DDoS attack). Section 3A covers making or supplying tools designed for cybercrime—the botnet software itself. Both sections are engaged in a sophisticated attack like this."
  },
  {
    "id": 184, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "Which of the following best describes the legal boundary the Serious Crime Act 2015 added to the CMA 1990?",
    "options": [
      "It created a new offence for running a dark web marketplace selling stolen data",
      "It extended Section 3 to cover attacks on computers outside the UK, providing it has a significant link to a UK person or UK-based damage",
      "It raised the maximum sentence for Section 1 offences from two years to five years",
      "It introduced a statutory defence of proportionate ethical testing for penetration testers"
    ],
    "answer": 1,
    "explanation": "The Serious Crime Act 2015 extended the extraterritorial reach of Section 3-type offences and also increased maximum sentences for the most serious CMA offences to life imprisonment where critical infrastructure is attacked."
  },
  {
    "id": 185, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "A company discovers it has been the victim of a data breach. Under UK law, within what timeframe must it notify the ICO if the breach is likely to result in a risk to individuals' rights and freedoms?",
    "options": [
      "Within 24 hours of discovery",
      "Within 72 hours of becoming aware of the breach",
      "Within 5 working days of discovery",
      "Within 28 days, unless the data includes special category information"
    ],
    "answer": 1,
    "explanation": "GDPR Article 33 (retained in UK GDPR) requires notification to the supervisory authority (ICO) within 72 hours of becoming aware of a qualifying personal data breach. If the 72-hour deadline is missed, the notification must include reasons for the delay."
  },
  {
    "id": 186, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "Under RIPA 2000, which of the following surveillance activities would require a warrant from the Secretary of State rather than authorisation by a senior police officer?",
    "options": [
      "Directed surveillance of a suspect's movements in a public place over several days",
      "Deployment of a covert human intelligence source (CHIS) to infiltrate a criminal gang",
      "Interception of the content of communications—reading the body of emails or listening to phone calls",
      "Use of an Automatic Number Plate Recognition (ANPR) camera to track a vehicle's movements"
    ],
    "answer": 2,
    "explanation": "Under RIPA 2000, interception of the content of communications (as opposed to communications data/metadata) requires a warrant signed by the Secretary of State. Directed surveillance and CHIS deployment can be authorised by senior officers within the investigating body."
  },
  {
    "id": 187, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "The Fraud Act 2006 identifies three ways of committing fraud. Which option correctly lists all three?",
    "options": [
      "Identity fraud, financial fraud, and cyber fraud",
      "Fraud by false representation, fraud by failing to disclose information, and fraud by abuse of position",
      "Fraud by deception, fraud by concealment, and fraud by impersonation",
      "Fraud by hacking, fraud by phishing, and fraud by social engineering"
    ],
    "answer": 1,
    "explanation": "The Fraud Act 2006 Section 1 defines fraud as being committed in three ways: (1) by false representation (Section 2); (2) by failing to disclose information when there is a legal duty to do so (Section 3); (3) by abuse of position (Section 4)."
  },
  {
    "id": 188, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "The NIS Regulations 2018 divide regulated entities into two groups. What is the key practical difference in how they are regulated?",
    "options": [
      "Operators of Essential Services must notify incidents within 72 hours; Relevant Digital Service Providers have 7 days",
      "Operators of Essential Services are regulated by sector-specific competent authorities; Relevant Digital Service Providers are regulated by the ICO",
      "Operators of Essential Services face criminal prosecution for breaches; Relevant Digital Service Providers only face civil penalties",
      "Operators of Essential Services must undergo annual security audits; Relevant Digital Service Providers are self-certifying"
    ],
    "answer": 1,
    "explanation": "OES (energy, transport, health, water, digital infrastructure) are regulated by sector-specific competent authorities (e.g., Ofcom for telecoms OES, the FCA for finance). RDSPs (online marketplaces, search engines, cloud services) are all regulated by the ICO."
  },

  // ── INTERNET FREEDOM & DEMOCRACY – TRICKY ─────────────────────────────
  {
    "id": 189, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "Taiwan's internet freedom score declined in the Freedom House 2023 report despite being praised for its response to disinformation. What was the specific reason cited for the decline?",
    "options": [
      "Taiwan introduced a social credit system modelled on China's approach",
      "Concerns about overly broad and opaque website blocking, and criminal prosecutions of online activities",
      "The government gave control of social media moderation to the military",
      "Taiwan's ISPs began installing deep packet inspection (DPI) equipment at state request"
    ],
    "answer": 1,
    "explanation": "The Freedom House 2023 report noted that while Taiwan was commended for countering Chinese disinformation, internet freedom had declined due to concerns about overly broad website blocking and criminal prosecutions of online activities—illustrating that even democracies can erode internet freedoms."
  },
  {
    "id": 190, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "The core logic of the democratic case FOR the internet rests on which chain of reasoning?",
    "options": [
      "More connectivity → more economic growth → less inequality → more democracy",
      "More internet access → more diverse content → less filter bubbles → healthier debate",
      "Access to information → knowledge → ability to make informed decisions → self-determination → democracy",
      "Open platforms → more political speech → greater accountability → stronger democracy"
    ],
    "answer": 2,
    "explanation": "The lecture explicitly sets out this chain: information = knowledge, knowledge = ability to make decisions, and decision-making that allows self-determination is the fundamental basis of democracy. Internet access therefore supports democracy by enabling informed self-determination."
  },
  {
    "id": 191, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "Taiwan's g0v movement uses a distinctive naming convention. What does 'gov-zero' signal about its relationship to government?",
    "options": [
      "It is a zero-budget initiative that receives no public funding",
      "It aims to replace government entirely with citizen-run digital systems",
      "It substitutes the 'o' in 'gov' with '0' to signify that it operates parallel to but independently of official government, centred on civic values rather than state authority",
      "It operates with zero data collection, in contrast to government surveillance"
    ],
    "answer": 2,
    "explanation": "The g0v (pronounced 'gov-zero') movement deliberately mirrors government domain naming (gov.tw) but substitutes zero to signal independence—it's a decentralised civic tech community with its own values of transparency and open cooperation, operating alongside but not as part of the state."
  },
  {
    "id": 192, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "A country shuts down mobile internet for 48 hours during a disputed election result. According to the lecture, this would cost the economy roughly how much per day based on 2022 figures?",
    "options": [
      "Approximately $65 million per day",
      "The cost is incalculable as it depends entirely on the country's GDP",
      "Approximately $209 million per day, extrapolated from the $24 billion total 2022 cost across 114 outages",
      "Between $1 billion and $5 billion per day for a mid-sized economy"
    ],
    "answer": 2,
    "explanation": "Top10VPN (2023) reported $24 billion in costs from 114 major outages in 2022—approximately $210 million per outage on average. The precise figure per day depends on scale, but the $24 billion/114 outage figure is the number your lectures use."
  },
  {
    "id": 193, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "Russia's approach to internet censorship differs from China's Great Firewall in one key structural way. What is it?",
    "options": [
      "Russia bans foreign websites; China only filters domestic content",
      "Russia requires ISPs to install government DPI equipment on their own infrastructure; China operates censorship at the backbone level through state-controlled infrastructure",
      "Russia uses a whitelist of approved sites; China uses a blacklist of banned sites",
      "Russia's censorship is enforced by criminal law; China's is purely regulatory"
    ],
    "answer": 1,
    "explanation": "Russia's model (via Roskomnadzor) pushes DPI equipment out to commercial ISPs who must install it at their own cost—creating distributed censorship across private infrastructure. China's Great Firewall operates centrally at the network backbone level controlled by state-owned telecoms."
  },
  {
    "id": 194, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "Which argument is the strongest case AGAINST the internet being a pro-democratic technology, according to your lectures?",
    "options": [
      "Most people use the internet for entertainment rather than civic participation",
      "The internet's surveillance capacity lends itself to totalitarian control, and its architecture allows already-powerful institutions to consolidate power further",
      "Internet access is unequally distributed, so its democratic benefits only reach the already-privileged",
      "Social media algorithms create echo chambers that prevent genuine democratic deliberation"
    ],
    "answer": 1,
    "explanation": "The lecture's anti-democratic case centres on two structural features: (1) the internet's surveillance architecture is inherently suited to authoritarian control; (2) it allows already-powerful actors—states and large corporations—to concentrate power rather than redistribute it."
  },
  {
    "id": 195, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "Section 230 of the US Communications Decency Act 1996 created a legal incentive that discouraged content moderation. What was the precise mechanism?",
    "options": [
      "It imposed liability on platforms that removed content, treating them as publishers exercising editorial control",
      "It gave platforms immunity from liability only if they did not moderate content at all—any moderation voided the protection",
      "It required platforms to moderate content within 24 hours or face publisher-level liability, making comprehensive moderation impossible at scale",
      "It exempted platforms from liability for third-party content but imposed liability if they were shown to have actual knowledge of illegal content"
    ],
    "answer": 0,
    "explanation": "The key mechanism: platforms that acted as publishers (editing/removing content) became legally liable for what they published. Platforms that took no editorial action were protected as neutral conduits. This created a rational incentive to avoid moderation to preserve the legal shield."
  },
  {
    "id": 196, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is the key difference between 'e-government' and 'open government' as concepts?",
    "options": [
      "E-government uses digital technology to deliver services; open government is a broader commitment to transparency, participation, accountability, and inclusion in governance",
      "E-government applies to national government only; open government applies to local councils and devolved bodies",
      "E-government requires an internet connection; open government can be achieved through traditional paper-based processes",
      "E-government is a private-sector concept for online retail; open government is exclusively a public-sector concept"
    ],
    "answer": 0,
    "explanation": "E-government (as defined by the European Commission) is about using ICT tools to provide better public services. Open government is a broader democratic commitment—Taiwan's framework shows it encompasses four elements: Transparency, Participation, Accountability, and Inclusion—going beyond mere digital service delivery."
  },

  // ── PRIVACY & DATA PROTECTION – TRICKY ───────────────────────────────
  {
    "id": 197, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "An organisation uses a legitimate interest basis to process personal data for direct marketing. A customer objects. Under UK GDPR, what must the organisation do?",
    "options": [
      "Continue processing if it can demonstrate its interests override the customer's objection",
      "Stop processing for direct marketing immediately—the right to object to direct marketing processing is absolute and admits no balancing test",
      "Inform the customer they must wait 28 days while the organisation reviews its legitimate interest assessment",
      "Offer the customer an opt-out mechanism but continue processing until they use it"
    ],
    "answer": 1,
    "explanation": "Under GDPR Article 21(3), where personal data is processed for direct marketing purposes, the data subject has an absolute right to object—the organisation must stop immediately, without any balancing test. This is different from objections to other types of processing where a balancing test applies."
  },
  {
    "id": 198, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "A company's privacy policy says it uses customer data 'to improve our services and for related purposes.' A data subject submits a SAR. What problem does this policy create?",
    "options": [
      "The policy is too short—GDPR requires a minimum word count for privacy notices",
      "The vague phrase 'related purposes' violates the purpose limitation principle, meaning any data collected beyond the specific stated purpose lacks a lawful basis",
      "The company cannot respond to the SAR because it cannot identify which data relates to service improvement versus other purposes",
      "No problem arises as 'improving services' is an automatically recognised legitimate interest under GDPR"
    ],
    "answer": 1,
    "explanation": "Purpose limitation requires that purposes be 'specified, explicit, and legitimate'—vague catch-all phrases like 'related purposes' fail this test. Data processed for unstated purposes lacks a valid lawful basis, violating both purpose limitation and the transparency principle."
  },
  {
    "id": 199, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "Which of the following scenarios does NOT require a Data Protection Impact Assessment (DPIA) under UK GDPR?",
    "options": [
      "A local council deploying facial recognition cameras across a city centre to identify wanted criminals",
      "A mental health charity building a database of its service users' diagnoses and treatment notes",
      "A small bakery keeping a spreadsheet of customer names and email addresses for a newsletter",
      "An employer introducing AI-based monitoring software that tracks employees' keystrokes and screen activity"
    ],
    "answer": 2,
    "explanation": "DPIAs are required for processing 'likely to result in a high risk'—systematic monitoring, special category data at scale, or large-scale profiling. A small bakery's simple newsletter list does not meet this threshold. The other scenarios all involve high-risk processing requiring a DPIA."
  },
  {
    "id": 200, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "After the Schrems II ruling, companies transferring data from the UK/EU to the US can no longer rely on Privacy Shield. Which mechanism is now the most commonly used alternative for routine commercial transfers?",
    "options": [
      "Binding Corporate Rules (BCRs), which provide a self-regulatory framework for multinational groups",
      "Standard Contractual Clauses (SCCs), which are pre-approved contract terms providing GDPR-equivalent protections",
      "Adequacy decisions, which the EU has granted to the US in full following the 2023 Data Privacy Framework",
      "Explicit consent from each individual data subject for every transfer to the US"
    ],
    "answer": 1,
    "explanation": "SCCs became the default mechanism after Privacy Shield's invalidation. BCRs exist but are only available to multinational corporate groups and require lengthy ICO/supervisory authority approval. The 2023 EU-US Data Privacy Framework is an adequacy mechanism but applies only to certified US companies under specific conditions."
  },
  {
    "id": 201, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "A healthcare app collects users' blood glucose readings to provide personalised dietary advice. Under GDPR, collecting this data requires not only a lawful basis but also what additional condition?",
    "options": [
      "Registration with the Medicines and Healthcare products Regulatory Agency (MHRA)",
      "An explicit condition under Article 9 for processing special category (health) data, such as explicit consent or substantial public interest",
      "A Data Protection Impact Assessment filed with the ICO before the app launches",
      "Appointment of a Data Protection Officer regardless of the company's size"
    ],
    "answer": 1,
    "explanation": "Health data is special category data under GDPR Article 9. Processing it requires BOTH a lawful basis (Article 6) AND a separate special category condition (Article 9)—such as explicit consent, employment law obligations, vital interests, or substantial public interest. The lawful basis alone is insufficient."
  },
  {
    "id": 202, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What did the Cambridge Analytica scandal specifically demonstrate about consent as a lawful basis for data processing?",
    "options": [
      "That users had validly consented to their data being used for political advertising through Facebook's terms of service",
      "That consent obtained through an academic research app for a quiz was then used for an entirely different commercial and political purpose—a clear violation of purpose limitation",
      "That political advertising is exempt from GDPR consent requirements under the public interest lawful basis",
      "That social media platforms are legally treated as data processors rather than data controllers and bear no responsibility for consent violations"
    ],
    "answer": 1,
    "explanation": "The scandal exemplified purpose limitation failure: users consented to data collection for an academic personality quiz, but that data was then repurposed entirely—used commercially by Cambridge Analytica for political micro-targeting. This violated purpose limitation and the basis of the original consent."
  },
  {
    "id": 203, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "Under UK GDPR, the 'right to erasure' is sometimes called absolute, but it is not. In which of the following scenarios would an organisation be entitled to REFUSE a deletion request?",
    "options": [
      "Where the data subject is no longer a customer and the data is held for marketing purposes",
      "Where the data was originally collected with explicit consent but the individual has since withdrawn it",
      "Where the organisation needs to retain the data to comply with a legal obligation, such as HMRC tax records",
      "Where deleting the data would be technically difficult and costly for the organisation to carry out"
    ],
    "answer": 2,
    "explanation": "The right to erasure has specific exemptions—one of the most common is legal obligation: if law requires the organisation to retain data (e.g., financial records for HMRC), they can refuse the deletion request. Technical difficulty and cost are not valid grounds for refusal."
  },

  // ── ALGORITHMS & DATAFICATION – TRICKY ───────────────────────────────
  {
    "id": 204, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "A hiring algorithm trained on a company's historical successful employees systematically down-ranks CVs from women, even though gender is not an input feature. What type of bias explains this?",
    "options": [
      "Coverage bias—the dataset underrepresents women so the model cannot assess them",
      "Proxy discrimination—other features correlated with gender (e.g., career gaps, certain university societies) carry the discriminatory signal even without gender as a direct input",
      "Confirmation bias—the human reviewers who labelled the training data preferred men",
      "Popularity bias—historically successful employees were disproportionately male, so the model amplifies their characteristics"
    ],
    "answer": 1,
    "explanation": "This is proxy discrimination—the model learns that features correlated with gender (career breaks associated with maternity, certain words in CVs, types of extracurricular activities) predict historical 'success' in this company. Gender doesn't need to be a direct input for gender-based discrimination to occur in outputs."
  },
  {
    "id": 205, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "Riemer and Peter (2021) argue that 'algorithmic audiencing' represents a qualitatively new form of interference in public discourse compared to traditional media gatekeeping. What is the key distinction?",
    "options": [
      "Traditional gatekeepers decided what was published; algorithms decide what is amplified to whom—the same content can reach millions or nobody based on algorithmic decisions invisible to the speaker",
      "Traditional gatekeepers were legally regulated; algorithmic amplification operates in a legal vacuum",
      "Traditional gatekeepers were transparent about their editorial decisions; algorithms are opaque black boxes",
      "Traditional gatekeepers served a public interest function; algorithms serve only commercial interests"
    ],
    "answer": 0,
    "explanation": "The key distinction is that traditional editorial gatekeeping decided what gets published at all. Algorithmic audiencing allows content to exist but controls who sees it—the same post can reach 10 people or 10 million based on invisible algorithmic decisions the speaker has no control over or visibility into."
  },
  {
    "id": 206, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "A music streaming service recommends only genres you have listened to before, never introducing you to new styles. Which TWO biases from your lecture are simultaneously at work?",
    "options": [
      "Selection bias and coverage bias",
      "Over-specialisation and popularity bias",
      "Over-specialisation and the cold-start problem",
      "Filter bubble effects and confirmation bias"
    ],
    "answer": 2,
    "explanation": "Over-specialisation occurs when the system narrows recommendations to only what you've done before, prioritising prediction accuracy over satisfaction. The cold-start problem means new genres you've never heard have no interaction data, so they cannot be surfaced—both operate simultaneously to keep users in their existing tastes."
  },
  {
    "id": 207, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "The SIMD (Scottish Index of Multiple Deprivation) is used as an example of datafication in your lectures. What makes it a useful example of the '5 D's' problem?",
    "options": [
      "SIMD was created without consulting Scottish communities, making its categories unrepresentative",
      "SIMD measures deprivation using indicators of Disparity, Deprivation, Disadvantage, Dysfunction, and Difference—defining areas solely through negative characteristics, which can entrench stigma and shape policy responses that punish rather than support communities",
      "SIMD data is used by private companies to deny insurance or credit to people in high-deprivation areas",
      "SIMD creates a filter bubble effect, ensuring local government only invests in areas already identified as deprived"
    ],
    "answer": 1,
    "explanation": "SIMD exemplifies the 5 D's critique: it constructs an index of places entirely through deficit measures. The data justice concern is that statistical representations centred only on what's wrong with a place can produce feedforward effects—policies that manage symptoms of deprivation rather than building on community strengths."
  },
  {
    "id": 208, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What does it mean for algorithmic bias to be 'systematic' rather than random, and why does this distinction matter legally and ethically?",
    "options": [
      "Systematic bias affects every single output; random bias affects only a proportion—systematic bias is therefore worse because it never produces fair outcomes",
      "Systematic bias consistently disadvantages the same groups in the same direction; random errors self-correct over time but systematic bias compounds, making it more likely to constitute unlawful discrimination",
      "Systematic bias is introduced by the algorithm itself; random bias is introduced by the training data—only the former is the developer's responsibility",
      "Systematic bias can be detected statistically; random bias cannot—systematic bias is therefore easier to remedy"
    ],
    "answer": 1,
    "explanation": "A systematic deviation consistently disadvantages the same protected group in the same direction—it doesn't average out. This makes it far more likely to constitute indirect discrimination under the Equality Act 2010 (a provision, criterion, or practice that puts a protected group at a particular disadvantage)."
  },
  {
    "id": 209, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "An organisation claims its hiring algorithm is fair because it achieves equal accuracy across demographic groups. A data justice critic argues this is insufficient. What is their strongest argument?",
    "options": [
      "Equal accuracy across groups does not mean equal error types—the algorithm might have high false rejection rates for women specifically, meaning equally accurate but unequally harmful",
      "Accuracy alone cannot be measured objectively and is therefore not a valid fairness criterion",
      "Any algorithm trained on historical data will replicate historical inequalities regardless of accuracy metrics",
      "The algorithm should not be used in hiring at all because GDPR prohibits automated decision-making"
    ],
    "answer": 0,
    "explanation": "This is the fairness-accuracy paradox. An algorithm can achieve the same overall accuracy for all groups while systematically producing different types of errors—e.g., falsely rejecting qualified women at a higher rate than qualified men. Equal accuracy ≠ equitable error distribution."
  },

  // ── COMPUTER ETHICS – TRICKY ──────────────────────────────────────────
  {
    "id": 210, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "A developer argues their surveillance app is neutral because it can be used by parents to monitor children's safety OR by authoritarian governments to track dissidents. Which ethical framework from your lectures most directly challenges this claim?",
    "options": [
      "The social shaping of technology approach, because it sees technology as shaped by humans not as neutral",
      "Danks (2022), because technologies that enable consequential decisions are not neutral—the app's affordances make certain uses structurally easier than others",
      "Moor's policy vacuum argument, because society has not yet developed rules for surveillance apps",
      "Baym's dystopian response, because only critics of technology see surveillance apps as harmful"
    ],
    "answer": 1,
    "explanation": "Danks' challenge to technological neutrality is most direct here. The app is not a hammer that works equally for all purposes—its design choices (what data it collects, who controls access, what alerts it generates) create affordances that structurally favour certain uses. The claim of neutrality obscures these embedded value choices."
  },
  {
    "id": 211, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "Peterson et al. (2023) argue that 'computational thinking' contributes to ethical distancing. What is the mechanism, and why is it specific to computing rather than other disciplines?",
    "options": [
      "Computing professionals are selected for personality traits that favour rule-following over empathy",
      "Training in abstraction—thinking in variables, functions, and data structures rather than people—creates a cognitive habit of not considering the messy human reality behind the data",
      "The fast pace of technology development leaves no time for ethical reflection compared to slower-moving fields",
      "Computing education omits ethics from its curriculum, unlike medicine or law"
    ],
    "answer": 1,
    "explanation": "The argument is specifically about the cognitive habits formed by computational training: programmers learn to model reality as abstract data structures. Applied habitually, this makes it easier to treat users as data points rather than people—a form of trained abstraction that other professionals (doctors, lawyers) are explicitly taught to counteract."
  },
  {
    "id": 212, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "Baym's 'social shaping of technology' framework is described as occupying a middle ground. But in practice, which criticism would a technological determinist most likely level at Baym's approach?",
    "options": [
      "It ignores the genuine agency that technology has to reshape society independent of human intentions",
      "It is too focused on individual users and ignores structural economic forces that shape technology",
      "It treats all four mechanisms (affordances, constraints, preconditions, unintended consequences) as equally important when in practice affordances dominate",
      "It over-emphasises national cultural differences and underestimates the global homogenising effects of technology"
    ],
    "answer": 0,
    "explanation": "A technological determinist would argue that Baym underestimates how powerfully technology shapes outcomes independently of what humans intend—that once a technology exists with certain properties, the social outcomes are largely determined by those properties, not by the complex network of human choices Baym describes."
  },
  {
    "id": 213, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "Moor (1985) claimed that computers are 'logically malleable'—they can be programmed to perform any logical operation. Why does this specific property create more profound ethical challenges than, say, a car or a nuclear power plant?",
    "options": [
      "Because computers are cheaper and more widely available, multiplying the number of ethical decisions made about them",
      "Because logical malleability means computers can be repurposed infinitely, creating a continuous stream of genuinely new ethical situations that existing rules have never addressed—the policy vacuum problem",
      "Because computers process personal data, unlike most physical technologies which do not",
      "Because computers operate in abstract digital spaces that are harder for regulators to inspect than physical spaces"
    ],
    "answer": 1,
    "explanation": "Moor's point is that because computers can do anything that is logically possible, they create genuinely unprecedented situations constantly. A car can only drive; a nuclear plant can only generate power or melt down. Computers reshape every domain they touch, creating a perpetual stream of novel ethical situations—hence the persistent policy vacuum."
  },

  // ── DIGITAL DIVIDE – TRICKY ───────────────────────────────────────────
  {
    "id": 214, "topic": "Digital Divide", "difficulty": "hard",
    "question": "Hu and Qian's (2021) finding—that virtual-only contact harmed older people's mental health more than no contact—seems to contradict the obvious benefit of digital communication. What does this reveal about the digital divide that pure access metrics miss?",
    "options": [
      "That older people prefer analogue communication and should not be forced to use digital tools",
      "That access without usability, confidence, and genuine support creates a new form of inequality—'digital stress'—where technology becomes a source of harm rather than benefit",
      "That video calls are inherently less emotionally satisfying than phone calls for all age groups",
      "That COVID-19 lockdown conditions were uniquely harmful and the finding would not replicate in normal circumstances"
    ],
    "answer": 1,
    "explanation": "The finding shows that having access (a device and connection) is not the same as meaningful participation. For those who lack digital confidence, being forced into digital interaction creates cognitive load, anxiety, and shame—a qualitatively different experience than either confident digital use or simply having no contact. Pure access metrics miss this dimension entirely."
  },
  {
    "id": 215, "topic": "Digital Divide", "difficulty": "medium",
    "question": "Universal Credit is described as 'digital by default.' From a data justice perspective, which pillar does this primarily threaten, and how?",
    "options": [
      "The Identity pillar—because the system forces claimants to create digital identities they may not want",
      "The Knowledge pillar—because claimants cannot understand their entitlements without internet access",
      "The Access pillar—because designing an essential welfare service as online-only denies tangible paths to justice for those without digital access or skills",
      "The Participation pillar—because claimants cannot influence how the system is designed"
    ],
    "answer": 2,
    "explanation": "This is the Access pillar in action: the system creates a material barrier to a fundamental social good (welfare support) based on digital capability. The GPAI guide specifically argues that access must start from real-world material inequality—and Universal Credit's design actively excludes the most vulnerable from accessing their entitlements."
  },
  {
    "id": 216, "topic": "Digital Divide", "difficulty": "hard",
    "question": "Scotland's Digital Inclusion Charter and Accenture's Regenerative AI initiative both address digital exclusion. What structural limitation do both approaches share, despite their good intentions?",
    "options": [
      "Both are funded by corporations that benefit commercially from digital adoption, creating a conflict of interest",
      "Both are voluntary initiatives that rely on organisations choosing to participate—they cannot address the structural causes of digital exclusion such as poverty, disability, or inadequate infrastructure",
      "Both focus on skills training but ignore the affordability of devices and internet connections",
      "Both target the same demographic groups and therefore duplicate effort without filling coverage gaps"
    ],
    "answer": 1,
    "explanation": "This is a structural critique: voluntary initiatives and corporate social responsibility programmes can reduce the scale of digital exclusion but cannot address its root causes. People lack digital access because of poverty, disability, geography, and inadequate infrastructure—problems that require sustained government investment and structural policy change, not voluntary commitments."
  },

  // ── PROFESSIONALISM – TRICKY ──────────────────────────────────────────
  {
    "id": 217, "topic": "Professionalism in Computing", "difficulty": "hard",
    "question": "The lecture argues that the gender disparity in computing 'is not a matter of individual choice alone.' What is the strongest evidence for this claim, based on your lecture content?",
    "options": [
      "Women score equally to men in computing aptitude tests, proving the disparity is not ability-based",
      "The disparity persists despite decades of awareness campaigns and intervention programmes, suggesting structural forces rather than individual preferences are the primary driver",
      "Women leave computing at higher rates than men despite starting at equal levels, showing the pipeline is leaking through discrimination rather than initial disinterest",
      "Countries with greater gender equality show larger computing gender gaps, suggesting global cultural factors override individual choice"
    ],
    "answer": 1,
    "explanation": "The lecture specifically notes that computing has shown 'particularly slow progress despite decades of intervention'—if the gap were simply about individual choices, targeted campaigns and role model programmes would have closed it. The persistence of the gap despite sustained intervention is the strongest evidence for structural causes."
  },
  {
    "id": 218, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "Jones et al. (2018) found that communication is the most indispensable soft skill. A colleague argues that problem-solving is more important because it is the core technical activity of computing. What is the strongest counter-argument from your lectures?",
    "options": [
      "Problem-solving is actually a hard skill, not a soft skill, so the comparison is invalid",
      "Communication is what makes technical problem-solving usable—solutions that cannot be explained to clients, managers, or non-technical colleagues have no practical value regardless of their technical quality",
      "Problem-solving ability is innate and cannot be developed through training, unlike communication skills",
      "Problem-solving is adequately covered by technical qualifications, while communication is neglected in computing education"
    ],
    "answer": 1,
    "explanation": "The lecture frames communication as the bridge between technical capability and real-world impact: a perfectly correct technical solution has zero value if it cannot be communicated to the people who need to approve, fund, implement, or use it. Communication enables every other skill to have impact."
  },
  {
    "id": 219, "topic": "Professionalism in Computing", "difficulty": "hard",
    "question": "A computing student argues: 'BCS membership and codes of ethics don't matter because adherence is voluntary—they have no teeth.' What is the most sophisticated counter-argument that takes the voluntary nature seriously but still makes the case for professional ethics?",
    "options": [
      "Voluntary codes will eventually be made legally binding, so preparing now is prudent",
      "Voluntary adherence reflects genuine internalised values rather than mere rule-compliance—a professional who acts ethically only under legal compulsion is less trustworthy than one who does so from genuine professional commitment",
      "BCS codes provide practical guidance on complex situations that even voluntary compliance with makes developers better equipped to handle ethical dilemmas",
      "Employers increasingly require BCS membership, so voluntary in law does not mean voluntary in practice"
    ],
    "answer": 1,
    "explanation": "The deepest counter-argument challenges the premise: real professionalism requires internalised values, not external enforcement. Medicine and law have regulatory teeth, but we trust professionals most when we believe they act ethically because they genuinely believe it matters—not because they fear the regulator. Voluntary ethics codes at their best cultivate exactly this."
  },
  {
    "id": 220, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "Computing job titles like 'software engineer' and 'IT consultant' are unprotected in law. What is the primary professional risk this creates that does not exist in medicine or law?",
    "options": [
      "Computing professionals can be underpaid relative to regulated professionals",
      "Anyone can claim to be a software engineer or IT consultant regardless of competence, making it impossible for clients to use job titles as a quality or ethics signal",
      "Computing professionals cannot be struck off from practising their profession even after causing serious harm",
      "Computing professional bodies lack the authority to discipline members in the way that the GMC or SRA can"
    ],
    "answer": 1,
    "explanation": "In medicine and law, the title itself signals a minimum standard—only qualified, registered practitioners can call themselves doctors or solicitors. In computing, anyone can adopt the title. This makes the job title useless as a consumer protection mechanism and undermines any claim computing makes to professional status."
  },

  // ── GENERATIVE AI – TRICKY ────────────────────────────────────────────
  {
    "id": 221, "topic": "Generative AI", "difficulty": "hard",
    "question": "An LLM produces a confident, grammatically perfect, well-sourced-sounding answer to a factual question that is entirely fabricated. This is described as 'hallucination.' What property of LLMs structurally causes this problem?",
    "options": [
      "LLMs are trained on the internet which contains large amounts of false information",
      "LLMs predict statistically likely next tokens based on patterns in training data—they generate plausible text, not true text, because they have no mechanism to verify claims against reality",
      "LLMs are not given enough computational resources to retrieve factual information during inference",
      "LLMs are fine-tuned to sound confident by RLHF processes that reward fluent, assertive responses"
    ],
    "answer": 1,
    "explanation": "The structural cause is that LLMs are next-token predictors—they produce text that fits the statistical patterns of their training data. Plausibility and truth are different things. A statistically likely continuation of 'The capital of Australia is...' in a model trained on internet text may be 'Sydney' (plausible but wrong) rather than 'Canberra.'"
  },
  {
    "id": 222, "topic": "Generative AI", "difficulty": "medium",
    "question": "Vazquez and Garrido-Merchan (2024) found AI tools applied beauty bias when generating images of female journalists. What does this demonstrate about the source of algorithmic bias according to Stinson (2022)?",
    "options": [
      "It demonstrates bias in the algorithm itself—the code was deliberately written to produce conventionally attractive images",
      "It demonstrates bias in the training data—the images used to train the model over-represented conventionally attractive women in professional contexts, which the model then reproduced",
      "It demonstrates bias from the people who commissioned the research—the researchers were primed to find beauty bias",
      "It demonstrates coverage bias—images of unattractive female journalists were absent from the training data"
    ],
    "answer": 1,
    "explanation": "This exemplifies Stinson's 'biased data' location of bias. The model was not deliberately programmed to favour attractive women—it learned statistical patterns from training images that disproportionately depicted conventionally attractive women in professional roles, then reproduced those patterns as normative."
  },
  {
    "id": 223, "topic": "Generative AI", "difficulty": "hard",
    "question": "The HEPI 2025 survey found 88% of UK students use generative AI for assessments. A university responds by banning all AI use. From a data justice perspective, what is the key problem with a blanket ban?",
    "options": [
      "A ban is unenforceable because AI detection tools have high false positive rates",
      "A blanket ban disproportionately disadvantages students with disabilities who may rely on AI tools as accessibility aids, reproducing inequality rather than addressing academic integrity",
      "AI tools are now industry-standard, so banning them leaves students unprepared for the workplace",
      "A ban is counterproductive because students who learn to use AI tools responsibly will produce better work"
    ],
    "answer": 1,
    "explanation": "From a data justice perspective, the Access and Equity pillars are both relevant: AI tools are used disproportionately as assistive technology by students with dyslexia, autism, or other conditions. A blanket ban that ignores these differential use cases entrenches rather than addresses inequality."
  },
  {
    "id": 224, "topic": "Generative AI", "difficulty": "medium",
    "question": "Why is the copyright question around training GenAI models more legally complex than simply asking 'did the company use copyrighted material?'",
    "options": [
      "Because copyright law has a specific AI exemption that was added in 2020 across all major jurisdictions",
      "Because training involves processing data computationally rather than reproducing it—whether this constitutes a restricted act depends on jurisdiction-specific exceptions like text and data mining or fair use, which vary and are still being interpreted by courts",
      "Because the companies argue that the resulting model contains no copy of the original work—only statistical patterns derived from it",
      "Because most training data comes from the public internet, which users implicitly consented to be crawled when they accepted website terms of service"
    ],
    "answer": 1,
    "explanation": "The complexity is jurisdictional and doctrinal: the UK has a text and data mining exception that may permit training on lawfully accessed data; the US has fair use which requires a four-factor balancing test; the EU has a more restricted TDM exception. Courts in multiple jurisdictions are currently resolving how these doctrines apply to AI training specifically."
  },

  // ── CROSS-TOPIC SCENARIO QUESTIONS ────────────────────────────────────
  {
    "id": 225, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "A predictive policing algorithm is trained on historical arrest data, then used to allocate patrol resources. It consistently directs extra patrols to majority-minority neighbourhoods. Which combination of biases from your lecture most fully explains this outcome?",
    "options": [
      "Coverage bias and cold-start problem",
      "Selection bias in training data (over-policed areas have more arrests) combined with a feedback loop where increased patrols generate more arrests, reinforcing the bias in future training data",
      "Confirmation bias in the data annotators and popularity bias in the model's outputs",
      "Over-specialisation in the model and homogenisation in the outputs across different neighbourhoods"
    ],
    "answer": 1,
    "explanation": "This is a compounded bias: the training data reflects historical over-policing of minority areas (selection bias—arrests don't equal crime), and deploying the model creates a feedback loop where increased patrols in flagged areas generate more arrests, which are fed back into training data, entrenching and amplifying the original bias."
  },
  {
    "id": 226, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "A fitness tracking app shares users' heart rate and sleep data with a health insurer, which the insurer uses to adjust premiums. The app's terms of service mentioned 'sharing data with partners to improve health outcomes.' Which legal and ethical violations are most clearly present?",
    "options": [
      "A Section 1 Computer Misuse Act offence, because the insurer accessed health data without direct authorisation from users",
      "Purpose limitation violation (sharing for commercial insurance pricing ≠ 'improving health outcomes'), special category data processed without explicit consent for this purpose, and potential discrimination on the basis of health status",
      "A Section 127 Communications Act offence, because sharing health data without consent is a menacing use of electronic communications",
      "A Data Protection Impact Assessment failure, because the app should have conducted one before sharing with the insurer"
    ],
    "answer": 1,
    "explanation": "Three violations stack: (1) Purpose limitation—'improving health outcomes' ≠ adjusting insurance premiums; (2) Special category data (health data) requires explicit consent for each specific purpose under Article 9—vague terms of service cannot substitute; (3) Using health data to discriminate in insurance access/pricing raises Equality Act concerns."
  },
  {
    "id": 227, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "A social media company argues its recommendation algorithm is simply reflecting what users want—it just shows people more of what they engage with. Using three different concepts from your lectures, explain why this 'mirror' claim is misleading.",
    "options": [
      "It ignores filter bubbles, popularity bias, and the fact algorithms are built by humans with commercial interests—three independent reasons the 'mirror' metaphor fails",
      "It ignores echo chambers, the digital divide, and the right to be forgotten under GDPR",
      "It ignores technological determinism, datafication, and the cold-start problem",
      "It ignores abstracted power, the policy vacuum, and confirmation bias in the training data"
    ],
    "answer": 0,
    "explanation": "Three lecture concepts undermine the mirror claim: (1) Filter bubbles—the algorithm doesn't reflect all possible content equally, it removes what you might dislike; (2) Popularity bias—the algorithm doesn't just reflect your preferences but systematically over-amplifies already-popular content; (3) Abstracted power/technological intermediation—the algorithm was designed with commercial objectives (engagement maximisation) that shape what counts as 'what you want.'"
  },
  {
    "id": 228, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "Australia's News Media and Digital Platforms Mandatory Bargaining Code achieved a result but not through the mechanism originally intended. What actually happened?",
    "options": [
      "The government used competition law to force Meta and Google to pay fixed statutory rates for hosting news content",
      "Rather than being formally designated under the Code, Meta and Google voluntarily negotiated commercial deals with news organisations to avoid designation—the threat of regulation achieved the outcome without direct enforcement",
      "The Code was struck down by the Australian Federal Court as incompatible with free speech principles",
      "Meta blocked all Australian news rather than pay, forcing the government to abandon the Code"
    ],
    "answer": 1,
    "explanation": "The Code worked through regulatory threat rather than direct enforcement: Meta and Google negotiated voluntary commercial deals with Australian news outlets to avoid being formally designated under the mandatory bargaining framework. The payment of designation-avoiding deals funded new journalism including in previously underserved regional areas."
  },
  {
    "id": 229, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "A data scientist says: 'Our model is 94% accurate, which is better than a human expert at 87%. Therefore it should make decisions autonomously.' From a data justice perspective, what critical question does accuracy alone fail to answer?",
    "options": [
      "Whether 94% accuracy is sufficient given the technical constraints of the system",
      "Whether the 6% of errors fall disproportionately on already-marginalised groups—the model could be systematically wrong about the same protected group every time",
      "Whether human experts should be retrained to match the model's performance over time",
      "Whether the model was validated on an external dataset from a different institution"
    ],
    "answer": 1,
    "explanation": "Accuracy is an aggregate metric. A model that is 100% accurate for white men and 75% accurate for Black women can still achieve 94% overall accuracy if white men dominate the dataset. The critical data justice question is not the average accuracy but the distribution of errors across demographic groups."
  },
  {
    "id": 230, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "A government deploys a perfectly accurate facial recognition system to identify benefit fraudsters. Using the Equity pillar of data justice, construct the strongest objection to this system.",
    "options": [
      "The system was not subjected to a DPIA before deployment, violating GDPR Article 35",
      "Even a perfectly engineered system deployed for oppressive purposes by a regime targeting the poor can facilitate and amplify data injustice—the equity question is not 'does it work?' but 'does it enable or disable oppression?'",
      "Facial recognition technology has known accuracy disparities across skin tones, so no system can truly be 'perfectly accurate'",
      "The system violates the data minimisation principle because biometric data is not necessary when other verification methods exist"
    ],
    "answer": 1,
    "explanation": "This is the GPAI guide's most powerful equity insight: 'A perfectly engineered system employed by an oppressive regime can facilitate and potentially amplify data injustice.' Technical perfection is irrelevant to the equity question—what matters is whether the purpose and deployment enables or combats oppressive relations of power."
  }

];