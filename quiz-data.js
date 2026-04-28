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
  }
];