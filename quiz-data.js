const quizData = [
  // ── COMPUTER ETHICS (1–20) ──────────────────────────────────────────────
  {
    "id": 1, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "How does the Oxford English Dictionary define 'ethics'?",
    "options": ["The rules of conduct recognised in certain associations or departments of human life","The scientific study of human behaviour in digital environments","A set of laws passed by governments to regulate professional conduct","The philosophical study of artificial intelligence and its implications"],
    "answer": 0,
    "explanation": "The OED defines ethics as (among other things) 'the rules of conduct recognised in certain associations or departments of human life'—a practical, applied definition relevant to professional computing contexts."
  },
  {
    "id": 2, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "How does Kizza (2017) define ethics?",
    "options": ["A legal framework governing professional behaviour","A theoretical examination of morality","The rules applied by professional bodies to their members","The study of how individuals interact with technology"],
    "answer": 1,
    "explanation": "Kizza defines ethics simply as 'a theoretical examination of morality'—grounding it in philosophical inquiry rather than in law or professional codes alone."
  },
  {
    "id": 3, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "According to Moor (1985), what defines a problem in computer ethics?",
    "options": ["Any situation where a computer system causes financial harm","When computer technology is essentially involved and there is uncertainty about what to do or how to understand the situation","When a software developer deliberately causes harm with their code","Any dispute between technology companies and their users"],
    "answer": 1,
    "explanation": "Moor's definition is precise: computer ethics problems arise when technology is central AND genuine uncertainty exists—not just about the right action, but about how to even frame the situation."
  },
  {
    "id": 4, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "What did Moor (1985) argue that computers create, which require new thinking and policies?",
    "options": ["Digital divides","Policy vacuums","Moral hazards","Ethical frameworks"],
    "answer": 1,
    "explanation": "Moor argued that computers reveal 'policy vacuums'—situations where existing rules simply don't apply—requiring society to establish entirely new policies."
  },
  {
    "id": 5, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "According to Reynolds (2018), what has increased the risk of IT being used unethically?",
    "options": ["The rise of cryptocurrency and dark web markets","The growth of the internet, social networks, vast personal data collection, and greater reliance on information systems","The decline of traditional media and rise of online journalism","Insufficient investment in cybersecurity by corporations"],
    "answer": 1,
    "explanation": "Reynolds points to the internet's growth, social networks, the ability to capture vast personal data, and greater reliance on information systems as compounding factors raising ethical risks."
  },
  {
    "id": 6, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What does Baym (2015) mean by 'cultural anxiety' associated with new technology?",
    "options": ["The fear that AI will replace human workers","The discomfort felt when technology becomes the default solution to technical and social problems before society has properly evaluated it","Public concern about government surveillance via digital devices","Anxiety among tech companies about regulatory oversight"],
    "answer": 1,
    "explanation": "Baym's 'cultural anxiety' refers to the unease accompanying technology becoming seen as the default solution to everything—from health to security to governance—before its implications have been properly evaluated."
  },
  {
    "id": 7, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "Baym (2015) describes two opposing public reactions to technological innovation. What are they?",
    "options": ["Adoption and rejection","Utopian and dystopian perspectives","Legal and illegal usage","Technological and social determinism"],
    "answer": 1,
    "explanation": "Baym labels the two poles Utopian (technology is completely wonderful) and Dystopian (technology is totally evil)—both too simplistic to capture reality."
  },
  {
    "id": 8, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What is the 'technological neutrality' thesis as described in the lecture?",
    "options": ["The view that technology should be regulated equally across all nations","The view that technology is simply a tool with no inherent ethical properties—available to achieve human objectives, like a hammer","The idea that developers should not take political positions in their work","The principle that AI systems must not discriminate between users"],
    "answer": 1,
    "explanation": "Technological neutrality holds that technology is just a tool. Danks (2022) challenges this because digital technologies can make ethical decisions themselves, unlike inert physical artefacts."
  },
  {
    "id": 9, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "Why does Danks (2022) reject the idea that digital technology is neutral?",
    "options": ["Because all technology is designed by humans with political biases","Because autonomous and semi-autonomous technologies can plan, decide, and act—making ethical choices themselves, sometimes involving life and death","Because corporations always design technology to maximise profit","Because digital technologies are patented and therefore not freely available"],
    "answer": 1,
    "explanation": "Danks argues that unlike a hammer, technologies like self-driving cars and autonomous weapons make ethical decisions themselves—sometimes literally life-and-death ones—undermining any claim to neutrality."
  },
  {
    "id": 10, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "Peterson, Ferreira & Vardi (2023) identify two factors in computer science that contribute to ethical distancing. What are they?",
    "options": ["Profit motive and global competition","Technological intermediation and computational thinking","Anonymity and encryption","Automation and outsourcing"],
    "answer": 1,
    "explanation": "They identify technological intermediation (opacity between tech corporations and users) and computational thinking (training developers to think in abstractions rather than human impacts) as key distancing mechanisms."
  },
  {
    "id": 11, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What is 'abstracted power' as defined by Peterson, Ferreira & Vardi (2023)?",
    "options": ["The authority that governments have to regulate technology companies","A human actor's influence over a system that, through the technology enabling it, obscures or distances that actor from the consequences of their influence","The power that algorithms have to make decisions without human input","The ability of large corporations to operate above national legal frameworks"],
    "answer": 1,
    "explanation": "Abstracted power describes how technology creates moral and emotional distance between a person exercising power and the consequences of that power—making harms easier to dismiss."
  },
  {
    "id": 12, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What is 'technological determinism' also sometimes called in the lecture notes?",
    "options": ["Social constructivism","Technological constructivism","Actor-network theory","Digital realism"],
    "answer": 1,
    "explanation": "The lecture notes that technological determinism is 'also known as technological constructivism'—the view that technology causes certain ways of doing things in a one-directional, inevitable relationship with society."
  },
  {
    "id": 13, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What is the key criticism of Actor-Network Theory (social determinism) presented in the lecture?",
    "options": ["It overestimates the influence of technology on human behaviour","It treats all elements in the network as equal, describes rather than explains, and fails to identify significant factors or agents","It ignores the role of economics in shaping technological development","It only applies to physical networks, not digital ones"],
    "answer": 1,
    "explanation": "ANT's difficulty: by treating all actors as equal and refusing a single explanatory trajectory, it ends up describing phenomena without explaining them and can't identify what matters most."
  },
  {
    "id": 14, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "Which of Baym's four mechanisms describes technology making certain tasks harder or impossible for some users?",
    "options": ["Affordances","Preconditions","Constraints","Unintended consequences"],
    "answer": 2,
    "explanation": "Constraints in Baym's framework are the opposite of affordances—they describe the ways technology makes some tasks harder, or actively impedes certain activities or users."
  },
  {
    "id": 15, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "How does social shaping of technology position itself relative to technological determinism and Actor-Network Theory?",
    "options": ["It fully sides with ANT, rejecting any causal role for technology","It fully sides with technological determinism, accepting technology as the primary driver of social change","It offers a balanced approach, seeing technology as shaping society through affordances, constraints, preconditions, and unintended consequences","It rejects both approaches and proposes ethics alone should guide technology design"],
    "answer": 2,
    "explanation": "Social shaping occupies a middle ground—neither reducing everything to technology causing change (determinism) nor to human networks alone (ANT), seeing the relationship as multidirectional and complex."
  },
  {
    "id": 16, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "The lecture asks four critical questions about any technology. Which option correctly lists all four?",
    "options": ["Is it legal? Is it profitable? Is it safe? Is it innovative?","Who benefits? Who suffers? Whom does it empower? Whom does it oppress?","Who designed it? Who owns it? Who regulates it? Who uses it?","What does it do? How does it work? Where is it deployed? When was it created?"],
    "answer": 1,
    "explanation": "The four critical questions are: Who stands to benefit? Who stands to suffer? Whom might it empower? Whom might it oppress?—forming a justice-centred framework for evaluating technology."
  },
  {
    "id": 17, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "What did Big Tech corporations specifically criticise for in the lecture's opening discussion?",
    "options": ["Charging excessive prices for their services","Lacking empathy and lacking a sense of responsibility regarding social problems their technologies created or exacerbated","Sharing user data with foreign governments","Failing to invest in cybersecurity infrastructure"],
    "answer": 1,
    "explanation": "The lecture highlights Big Tech as widely criticised for lacking empathy and failing to take responsibility for social problems—including threats to civil dialogue, privacy, and fairness—that their technologies created or worsened."
  },
  {
    "id": 18, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "What does 'technological intermediation' mean in the context of ethical distancing?",
    "options": ["The use of middleware software to connect different systems","Technologies allowing greater opacity between tech developers and users through huge, faceless, global corporations","The process by which AI mediates disputes between users online","The use of neutral third-party platforms to share information"],
    "answer": 1,
    "explanation": "Technological intermediation refers to how the scale and opacity of modern tech corporations creates distance between developers and users—the corporation is faceless and global, making it easy to ignore human consequences."
  },
  {
    "id": 19, "topic": "Computer Ethics", "difficulty": "hard",
    "question": "Moor (1985) predicted every new technology creates a 'moral vacuum'. What unites the Utopian and Dystopian responses to this vacuum, according to the lecture?",
    "options": ["Both are evidence-based responses grounded in empirical research","Both are overly simplistic—Utopian sees technology as completely wonderful, Dystopian as totally evil—neither supports critical thinking","Both lead to effective regulation of new technology","Both originate from the same political ideological tradition"],
    "answer": 1,
    "explanation": "The lecture presents both responses as extreme and insufficiently nuanced. Neither evangelising nor condemning a technology supports the critical, measured thinking needed during the period of flux before it becomes normalised."
  },
  {
    "id": 20, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "What does 'practical ethics' deal with, as described in the lecture?",
    "options": ["Applying theoretical ethics to engineering and coding standards","Individuals or groups making decisions that have future impacts, deciding what is right or wrong in a given situation","The legal framework that governs professional conduct in computing","Ethical training provided by professional bodies like BCS"],
    "answer": 1,
    "explanation": "Practical ethics is about real-world decision-making with future consequences—asking whether something is right or wrong so the appropriate action can be taken, not merely theorising about morality."
  },

  // ── DIGITAL DIVIDE (21–38) ─────────────────────────────────────────────
  {
    "id": 21, "topic": "Digital Divide", "difficulty": "easy",
    "question": "How does Tavani (2016) define the digital divide?",
    "options": ["The difference in internet speeds between developed and developing countries","The perceived gap between those who have and do not have access to information tools, and between those who can and cannot use them","The divide between analogue and digital communication systems","The disparity in social media usage between different age groups"],
    "answer": 1,
    "explanation": "Tavani's definition has two dimensions: access to the tools, and the ability to use them effectively—recognising that having a device doesn't automatically mean being able to participate digitally."
  },
  {
    "id": 22, "topic": "Digital Divide", "difficulty": "easy",
    "question": "Rooks and Weckert (2007) described the digital divide as a 'notoriously muddy term'. What does this imply?",
    "options": ["The term is unscientific and should be replaced","The gap is troubling and the term encompasses many different types of divide—between nations, rich and poor, educated and less educated, etc.","The concept is outdated and no longer relevant","There is no consensus on whether a digital divide even exists"],
    "answer": 1,
    "explanation": "'Muddy' implies the term covers multiple overlapping divides—between nations, between rich and poor, between educated and less educated, between people with and without disabilities—not a single clean gap."
  },
  {
    "id": 23, "topic": "Digital Divide", "difficulty": "easy",
    "question": "As of 2024, what percentage of the 2.6 billion people still offline live in the developing world?",
    "options": ["72%","84%","96%","61%"],
    "answer": 2,
    "explanation": "According to ITU 2025 data, 96% of the 2.6 billion people still offline are in the developing world—a stark illustration of global inequality in internet access."
  },
  {
    "id": 24, "topic": "Digital Divide", "difficulty": "easy",
    "question": "What is the global urban vs rural internet access split as of 2024?",
    "options": ["Urban 70% vs Rural 35%","Urban 83% vs Rural 48%","Urban 91% vs Rural 60%","Urban 77% vs Rural 52%"],
    "answer": 1,
    "explanation": "ITU 2025 data shows 83% of urban dwellers have internet access compared to only 48% of rural inhabitants—a gap driven largely by the high cost of infrastructure for scattered rural populations."
  },
  {
    "id": 25, "topic": "Digital Divide", "difficulty": "easy",
    "question": "What percentage of women globally use the internet compared to men, as of 2024?",
    "options": ["Women 55%, Men 68%","Women 63%, Men 69%","Women 71%, Men 75%","Women 48%, Men 61%"],
    "answer": 1,
    "explanation": "Globally, 63% of women use the internet compared to 69% of men. The gap widens significantly in Least Developed Countries, where it is 21% women vs 32% men."
  },
  {
    "id": 26, "topic": "Digital Divide", "difficulty": "medium",
    "question": "Why is it particularly expensive to provide internet access in rural areas?",
    "options": ["Rural areas have fewer technically skilled workers to maintain infrastructure","The high cost of infrastructure like fibre optic cabling for long distances to reach scattered populations","Rural users tend to use more data, driving up costs for providers","Government regulations prevent subsidised broadband in rural zones"],
    "answer": 1,
    "explanation": "Infrastructure costs are the primary driver—fibre optic cabling is expensive to deploy over long distances to small, scattered rural populations, making the economics unfavourable without subsidy."
  },
  {
    "id": 27, "topic": "Digital Divide", "difficulty": "medium",
    "question": "What was the average global broadband download speed in 2024?",
    "options": ["35.98 Mbps","46.79 Mbps","55.38 Mbps","29.79 Mbps"],
    "answer": 2,
    "explanation": "The average global broadband speed in 2024 was 55.38 Mbps—up from 46.79 Mbps in 2023, though speeds vary wildly between nations."
  },
  {
    "id": 28, "topic": "Digital Divide", "difficulty": "medium",
    "question": "In 40 out of 84 surveyed countries, what proportion of the population lacks even basic computer skills like copying a file?",
    "options": ["Less than one quarter","Less than one third","Less than half","Less than two thirds"],
    "answer": 2,
    "explanation": "In 40 out of 84 countries with available data, less than half the population possesses basic computer skills such as copying a file or sending an email with an attachment."
  },
  {
    "id": 29, "topic": "Digital Divide", "difficulty": "medium",
    "question": "In the UK, what percentage of adults aged 18+ lack Foundation Level digital skills?",
    "options": ["8%","12%","15%","22%"],
    "answer": 2,
    "explanation": "15% of UK adults (approximately 6.8 million people) lack Foundation Level digital skills, meaning they struggle with fundamental online tasks and risk being left behind."
  },
  {
    "id": 30, "topic": "Digital Divide", "difficulty": "medium",
    "question": "Why is Universal Credit cited as a problematic example of digital exclusion?",
    "options": ["It provides online banking to low-income families, excluding those without bank accounts","It is a 'digital by default' benefit that can only be claimed online, excluding those without digital skills or access","It is a government initiative that restricts free broadband to welfare claimants","It is a digital literacy programme that excludes older learners"],
    "answer": 1,
    "explanation": "Universal Credit replaced six benefits and is 'digital by default'—claimable only online. This directly excludes people who lack digital access or skills, often the very people who most need welfare support."
  },
  {
    "id": 31, "topic": "Digital Divide", "difficulty": "medium",
    "question": "What did Hu and Qian (2021) find about older people who had only virtual contact during the COVID-19 lockdown?",
    "options": ["They adapted quickly to digital communication and reported reduced loneliness","Virtual-only contact was more damaging to their mental health than having no contact at all","They preferred phone calls over video calls for social connection","They reported higher wellbeing than younger people during lockdown"],
    "answer": 1,
    "explanation": "The study found older people unfamiliar with technology found it so stressful to learn that virtual-only contact harmed their mental health more than complete isolation—a stark finding about technology and the elderly."
  },
  {
    "id": 32, "topic": "Digital Divide", "difficulty": "medium",
    "question": "What is Scotland's Digital Inclusion Charter aimed at?",
    "options": ["Providing free broadband to all Scottish households","Encouraging organisations of all kinds—public, private, and voluntary—to promote digital inclusion in Scotland","Training Scottish computing professionals to teach digital skills","Regulating the cost of mobile data contracts in Scotland"],
    "answer": 1,
    "explanation": "The Charter aims to get organisations across all sectors to sign up and promote digital inclusion, with an estimated 700,000 people in Scotland currently unable to access the internet."
  },
  {
    "id": 33, "topic": "Digital Divide", "difficulty": "hard",
    "question": "According to Lloyds Bank (2024), people with an impairment are how much more likely to struggle interacting with housing associations?",
    "options": ["1.5 times","2.2 times","2.5 times","3.1 times"],
    "answer": 2,
    "explanation": "People with an impairment are 2.5 times more likely to have difficulty interacting with housing associations—illustrating how digital exclusion compounds existing social disadvantages."
  },
  {
    "id": 34, "topic": "Digital Divide", "difficulty": "hard",
    "question": "Accenture's 'Regenerative AI' initiative (2024–2027) aims to help how many people build their AI skills?",
    "options": ["500,000","750,000","Over 1 million","2 million"],
    "answer": 2,
    "explanation": "Accenture's Regenerative AI initiative aims to help over a million people in socioeconomically disadvantaged communities build AI skills by bringing together community partners and Accenture volunteers."
  },
  {
    "id": 35, "topic": "Digital Divide", "difficulty": "hard",
    "question": "In which group of countries is the digital gender gap growing fastest?",
    "options": ["Sub-Saharan Africa only","Developing countries, most severely in Least Developed Countries","Eastern Europe and Central Asia","Latin America and the Caribbean"],
    "answer": 1,
    "explanation": "While the gender gap is small in developed countries (92% vs 93%), it is much larger in developing countries and is growing fastest in Least Developed Countries, where only 21% of women vs 32% of men use the internet."
  },
  {
    "id": 36, "topic": "Digital Divide", "difficulty": "easy",
    "question": "Which organisation publishes the UK Consumer Digital Index, cited in the lecture as the UK's largest study of digital lives?",
    "options": ["Ofcom","Lloyds Bank","Good Things Foundation","DCMS"],
    "answer": 1,
    "explanation": "Lloyds Bank publishes the UK Consumer Digital Index, providing the data on foundation skills and digital exclusion used throughout the digital divide lecture."
  },
  {
    "id": 37, "topic": "Digital Divide", "difficulty": "medium",
    "question": "Beyond infrastructure, what is a key barrier to internet use in many developing countries?",
    "options": ["Government censorship of international websites","Illiteracy and lack of ICT skills","Cultural resistance to adopting digital technology","Absence of local content in native languages"],
    "answer": 1,
    "explanation": "The lecture identifies illiteracy as a major barrier to accessing web information, and lack of ICT skills as another—meaning infrastructure alone is insufficient to bridge the digital divide."
  },
  {
    "id": 38, "topic": "Digital Divide", "difficulty": "medium",
    "question": "Despite a 'pandemic boost' in 2020–2021, what happened to the underlying global internet usage trend?",
    "options": ["Growth accelerated and has continued to accelerate","The boost was short-lived; the urban-rural gap and inequality between developed and developing worlds remain severe","Growth reversed as people reduced screen time post-pandemic","Growth remained exactly as steady as in pre-pandemic years"],
    "answer": 1,
    "explanation": "While the pandemic caused a temporary spike in internet usage, the boost was short-lived and the underlying inequality—particularly the urban-rural and global development gaps—remains severe."
  },

  // ── INTERNET FREEDOM AND DEMOCRACY (39–58) ────────────────────────────
  {
    "id": 39, "topic": "Internet Freedom and Democracy", "difficulty": "easy",
    "question": "What is an 'internet shutdown' according to Access Now?",
    "options": ["A planned maintenance outage by an internet service provider","An intentional disruption of internet or digital communications to exert control over the flow of information","A technical failure caused by a cyberattack on national infrastructure","A legal injunction preventing specific websites from operating in a country"],
    "answer": 1,
    "explanation": "Access Now defines internet shutdowns as intentional disruptions—not accidents—used specifically to exert control over the flow of information."
  },
  {
    "id": 40, "topic": "Internet Freedom and Democracy", "difficulty": "easy",
    "question": "Which country ranks lowest globally for internet freedom according to Freedom House?",
    "options": ["Russia","Iran","China","Myanmar"],
    "answer": 2,
    "explanation": "China consistently ranks at the very bottom of Freedom House's Freedom on the Net index, followed by Myanmar and Iran."
  },
  {
    "id": 41, "topic": "Internet Freedom and Democracy", "difficulty": "easy",
    "question": "Which country ranks top globally for internet freedom according to Freedom House (2023)?",
    "options": ["USA","Taiwan","Iceland","UK"],
    "answer": 2,
    "explanation": "Iceland ranks first for internet freedom. The US is 9th, and the UK and Taiwan are tied in joint 5th place."
  },
  {
    "id": 42, "topic": "Internet Freedom and Democracy", "difficulty": "easy",
    "question": "How much did deliberate internet shutdowns cost the global economy in 2022?",
    "options": ["$8 billion","$16 billion","$24 billion","$32 billion"],
    "answer": 2,
    "explanation": "Top10VPN (2023) reported that deliberate internet shutdowns cost the global economy $24 billion in 2022, following 114 major outages across 23 countries."
  },
  {
    "id": 43, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What unique technology does Roskomnadzor (RKN) require all Russian ISPs to install?",
    "options": ["Mandatory antivirus and malware scanning software","A government-produced deep packet inspection (DPI) system enabling blocking of websites across Russia","A national firewall system that blocks foreign IP addresses","State-approved encryption software for all user communications"],
    "answer": 1,
    "explanation": "Roskomnadzor requires ISPs to install its own DPI system—giving the Kremlin the ability to monitor, filter, and block any internet traffic across Russia."
  },
  {
    "id": 44, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is Russia's most visited website and dominant search engine?",
    "options": ["VK (Vkontakte)","Mail.ru","Yandex","Telegram"],
    "answer": 2,
    "explanation": "Yandex is Russia's most visited website and dominant search engine, offering services comparable to Google. Google is available in Russia but less popular."
  },
  {
    "id": 45, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is VK (Vkontakte) and what is its market position in Russia?",
    "options": ["Russia's government news portal with 50% market share","Russia's biggest social media site with over 75% market share","A Russian messaging app rivalling WhatsApp with 60% market share","A state-controlled browser with 80% market share"],
    "answer": 1,
    "explanation": "VK (Vkontakte) is Russia's biggest social media platform with over 75% market share, offering features similar to Facebook including private messaging, photo sharing, and video streaming."
  },
  {
    "id": 46, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "How many internet sites were blocked in Russia by September 2022, six months after the invasion of Ukraine?",
    "options": ["Around 200,000","Around 500,000","Around 1.2 million","Around 3 million"],
    "answer": 2,
    "explanation": "By September 2022—six months after the invasion—approximately 1.2 million internet sites had been blocked in Russia, demonstrating the scale of the Kremlin's censorship operation."
  },
  {
    "id": 47, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is Iran's internet freedom rating according to Freedom House (2024)?",
    "options": ["21/100","11/100","31/100","8/100"],
    "answer": 1,
    "explanation": "Iran scores 11/100 for internet freedom (Freedom House, 2024), one of the most restrictive in the world. For comparison, Russia scores 21/100 and Taiwan scores 78/100."
  },
  {
    "id": 48, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What happened to Iran's internet following the death of Mahsa Amini in custody in September 2022?",
    "options": ["The government opened access to foreign social media temporarily","Authorities implemented multiple internet shutdowns and mobile disruptions, repeated on the 2023 anniversary of her death","Iran completely disconnected from the global internet for 30 days","The government launched a national network to replace foreign platforms"],
    "answer": 1,
    "explanation": "Iran shut down the internet and mobile networks following Mahsa Amini protests—and repeated this on the 2023 anniversary to preemptively prevent protests from being organised online."
  },
  {
    "id": 49, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What did US Section 230 of the Communications Decency Act 1996 effectively do to social media platforms?",
    "options": ["Required platforms to remove all illegal content within 48 hours","Effectively discouraged platforms from removing offensive content by protecting neutral platforms from publisher-level legal liability","Gave the US government power to shut down websites hosting harmful content","Created financial penalties for platforms that amplify misinformation"],
    "answer": 1,
    "explanation": "Section 230 created a perverse incentive: platforms that moderated content became publishers (legally liable), while those that left content untouched were protected—discouraging proactive content moderation."
  },
  {
    "id": 50, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is the EU Digital Services Act (DSA) and when was it fully implemented?",
    "options": ["An EU law banning targeted advertising, implemented January 2023","An EU regulation placing obligations on internet intermediaries, fully implemented February 2024, with fines up to 1% of annual income","An EU competition law targeting tech monopolies, implemented in 2022","An EU data protection law supplementing GDPR, implemented in 2024"],
    "answer": 1,
    "explanation": "The DSA was fully implemented February 2024, applying to all internet intermediaries in the EU, with extra burdens on Very Large Online Platforms (45m+ monthly EU users) and potential fines of 1% of annual income."
  },
  {
    "id": 51, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is Taiwan's 'g0v' (gov-zero) movement?",
    "options": ["Taiwan's official government digital services portal","A decentralised civic tech community focused on information transparency, open results, and open cooperation","A political party using technology to campaign for Taiwanese independence","A state-funded programme to digitise Taiwan's public services"],
    "answer": 1,
    "explanation": "The g0v movement is a citizen-led, decentralised civic tech initiative—not a government body—committed to transparency and open cooperation, influencing Taiwan's approach to participatory digital democracy."
  },
  {
    "id": 52, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "What is the primary task of Taiwan's 'participation officers' (POs)?",
    "options": ["Monitoring online political discourse for disinformation","Helping public sector organisations listen to public opinions and plan cross-agency policies in cooperation with citizens","Electing digital representatives for online constituents","Maintaining Taiwan's e-government infrastructure"],
    "answer": 1,
    "explanation": "POs are embedded across all government agencies with the primary task of helping public sector organisations listen to citizens and facilitate cross-agency policy-making in cooperation with the public."
  },
  {
    "id": 53, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "What are the four elements of Taiwan's open government framework?",
    "options": ["Security, efficiency, transparency, and innovation","Transparency, participation, accountability, and inclusion","Democracy, freedom, equality, and justice","Openness, collaboration, responsiveness, and integrity"],
    "answer": 1,
    "explanation": "Taiwan's open government framework: Transparency (public can understand what's going on), Participation (public can influence policy), Accountability (decisions can be traced), and Inclusion (all affected stakeholders can voice views)."
  },
  {
    "id": 54, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "Which internet shutdown method works by making a website or app 'invisible' at the domain level?",
    "options": ["Border Gateway Protocol (BGP) hijacking","DNS poisoning","Deep packet inspection","ISP throttling"],
    "answer": 1,
    "explanation": "DNS poisoning renders a website 'invisible' by corrupting the domain name system—the internet's address book—so that requests for a site's domain return nothing or a wrong address."
  },
  {
    "id": 55, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "What outcome did Australia's legislation requiring tech platforms to negotiate with news organisations produce?",
    "options": ["The government fined Facebook and Google for hosting news without licences","Meta and Google voluntarily negotiated payments to news organisations, funding extra journalists in previously underserved areas","Australian news organisations were forced to pay tech platforms to host their content","The government blocked social media platforms from hosting Australian news content"],
    "answer": 1,
    "explanation": "Rather than formal designation, Meta and Google voluntarily negotiated payments to Australian news organisations—income used to fund extra journalists, including in areas that previously had none."
  },
  {
    "id": 56, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "Which three arguments are made in the lecture for why the internet can be considered an undemocratic technology?",
    "options": ["It's expensive, slow, and dominated by English-language content","Powerful institutions can consolidate power through it; its surveillance capacity enables totalitarianism; it is dominated by unaccountable tech companies","It spreads misinformation, enables cybercrime, and reduces attention spans","It bypasses traditional media, creates echo chambers, and reduces face-to-face communication"],
    "answer": 1,
    "explanation": "The anti-democratic case: powerful actors consolidating power, the surveillance architecture enabling authoritarian control, and a handful of unaccountable corporations dominating what billions of people see."
  },
  {
    "id": 57, "topic": "Internet Freedom and Democracy", "difficulty": "medium",
    "question": "The European Commission defines e-government as what?",
    "options": ["Government-run social media platforms used to communicate with citizens","Using the tools and systems made possible by ICTs to provide better public services to citizens and businesses","The digitisation of all government records and elimination of paper-based processes","Online voting systems that allow citizens to participate directly in legislation"],
    "answer": 1,
    "explanation": "The European Commission's definition focuses on using ICT tools to improve public service delivery to both citizens and businesses—a practical, service-oriented definition."
  },
  {
    "id": 58, "topic": "Internet Freedom and Democracy", "difficulty": "hard",
    "question": "Which country is cited in the lecture as having shut down the internet during its 2024 general election?",
    "options": ["India","Myanmar","Pakistan","Bangladesh"],
    "answer": 2,
    "explanation": "Pakistan is cited as having shut down its internet during the 2024 general election—alongside Myanmar (frequent outages since its military coup) and India (localised shutdowns during protests)."
  },

  // ── ALGORITHMS AND DATAFICATION (59–75) ───────────────────────────────
  {
    "id": 59, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "What is the simplest definition of an algorithm given in the lecture?",
    "options": ["A mathematical formula used to process large datasets","A list of rules to follow to complete a task or solve a problem","A set of instructions written in a programming language","An automated system that makes decisions without human input"],
    "answer": 1,
    "explanation": "The lecture offers a straightforward definition: an algorithm is 'a list of rules to follow to complete a task or solve a problem'—applicable to everyday tasks, not just computing."
  },
  {
    "id": 60, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "How is 'datafication' defined by Cukier and Mayer-Schonberger (2013)?",
    "options": ["Converting analogue signals into digital formats for storage","Turning human behaviour and social activities into data points that can be collected and analysed","Using data to train machine learning algorithms","Converting physical infrastructure into smart, connected systems"],
    "answer": 1,
    "explanation": "Datafication is the broader transformation of human behaviour and social life into measurable data points—not just digitisation of media, but the rendering of social life itself as analysable data."
  },
  {
    "id": 61, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "According to Kordzadeh & Ghasemaghei (2022), what is algorithmic bias?",
    "options": ["A programming error causing incorrect results","A systematic deviation from equality that emerges in the outputs of an algorithm","The tendency of algorithms to favour newer data over older data","Deliberate bias introduced by a developer who dislikes a particular group"],
    "answer": 1,
    "explanation": "The key word is 'systematic'—algorithmic bias is a consistent pattern of deviation from equality in outputs, not a random or isolated error."
  },
  {
    "id": 62, "topic": "Algorithms and Datafication", "difficulty": "easy",
    "question": "What does SIMD stand for and what is it an example of in the lecture?",
    "options": ["Scottish Index of Multiple Deprivation—an example of datafication of society","Standard Index of Multiple Demographics—an example of government surveillance","Scottish Institute of Market Data—an example of economic analysis","Social Index of Multiple Disadvantage—an example of welfare data collection"],
    "answer": 0,
    "explanation": "SIMD (Scottish Index of Multiple Deprivation) is used as an example of datafication—quantifying deprivation across seven domains: income, employment, education, health, access to services, crime, and housing."
  },
  {
    "id": 63, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "How does IBM define a 'machine learning algorithm' as cited in the lecture?",
    "options": ["An algorithm that learns from user feedback through reinforcement over time","A set of rules or processes used by an AI system to discover data insights, patterns, or predict output values from input variables","Software that automatically updates itself based on new releases","An algorithm that mimics human neural networks to recognise patterns in images"],
    "answer": 1,
    "explanation": "IBM's definition (cited in the lecture) describes an ML algorithm as a set of rules/processes for discovering data insights, patterns, or predicting outputs—the mechanism that enables machine learning to 'learn'."
  },
  {
    "id": 64, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "In collaborative filtering recommender systems, what is the 'cold-start problem'?",
    "options": ["The algorithm crashes when processing too many simultaneous users","New items have no ratings yet, making them impossible to recommend to users","Users with unusual tastes receive no relevant recommendations","The system cannot process requests during peak demand periods"],
    "answer": 1,
    "explanation": "Collaborative filtering recommends based on ratings—new items have none, creating a 'cold-start' disadvantage that prevents them from being surfaced regardless of their actual quality."
  },
  {
    "id": 65, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is 'popularity bias' in recommender systems?",
    "options": ["The tendency to recommend items popular with the user's demographic","Already very popular items being over-recommended, further entrenching their dominance in a feedback loop","The algorithm favouring recently popular items over historically popular ones","Bias introduced when popularity metrics are gamed by fake accounts"],
    "answer": 1,
    "explanation": "Popularity bias means that already-popular items receive disproportionately more recommendations, creating a feedback loop where popular items become even more dominant regardless of individual user preferences."
  },
  {
    "id": 66, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is 'over-specialisation' as a recommender system bias?",
    "options": ["When the algorithm recommends only items from a single genre","When a recommender algorithm offers choices narrower than what a user would actually enjoy, prioritising prediction accuracy over user satisfaction","When users deliberately restrict their own recommendations","When the algorithm is too computationally expensive to run in real time"],
    "answer": 1,
    "explanation": "Over-specialisation occurs when algorithms optimise for prediction accuracy at the expense of user satisfaction—giving users a narrower slice of content than they'd actually enjoy."
  },
  {
    "id": 67, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is a 'filter bubble' in the context of social media algorithms?",
    "options": ["A parental control feature filtering age-inappropriate content","A situation where news a user dislikes is automatically filtered out, narrowing their information diet","A spam detection system preventing unwanted messages","An algorithm prioritising posts from close friends over public content"],
    "answer": 1,
    "explanation": "Filter bubbles describe how algorithmic personalisation can shield users from content that challenges their views—though research suggests algorithms may trap users inside bubbles rather than users simply choosing to stay."
  },
  {
    "id": 68, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is an 'echo chamber' as defined in the lecture (Oxford Learner's Dictionary)?",
    "options": ["A digital space where political content is blocked to prevent radicalisation","An environment where somebody encounters only opinions and beliefs similar to their own and does not have to consider alternatives","A social media feature that amplifies posts based on share count","A group chat where only verified information is shared"],
    "answer": 1,
    "explanation": "The Oxford definition cited is an environment where one only encounters opinions similar to their own—distinct from a filter bubble (algorithm-driven) in that echo chambers can also be self-selected."
  },
  {
    "id": 69, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "Why did Twitter remove its image-cropping algorithm?",
    "options": ["Because it was computationally too expensive","Because it exhibited racial bias—showing automated cropping is best performed by people","Because it was outsourced to third-party moderators following legal challenges","Because users complained it cropped images incorrectly regardless of content"],
    "answer": 1,
    "explanation": "Twitter acknowledged the cropping algorithm showed racial bias and removed it, stating the move lowers its dependency on machine learning for a function best performed by people—a significant public admission of algorithmic bias."
  },
  {
    "id": 70, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "What is 'algorithmic audiencing' as described by Riemer and Peter (2021)?",
    "options": ["A technique where advertisers pay platforms to target specific audience segments","The way algorithms reshape free speech—not by restricting what is said, but by determining who gets to see what content","A process for measuring audience engagement with specific content types","The use of AI to generate personalised content for individual users"],
    "answer": 1,
    "explanation": "Algorithmic audiencing captures something subtle: the censorship is of reach, not speech. Ideas don't compete freely on their merits—algorithms amplify or suppress them, introducing unprecedented interference in public discourse."
  },
  {
    "id": 71, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "According to Stinson (2022), where can algorithmic bias be located? Select the most complete answer.",
    "options": ["In the hardware, the software, and the network","In biased data, biased people (designers), and biased algorithms","In the training phase, the testing phase, and the deployment phase","In the input data, the model architecture, and the output interpretation"],
    "answer": 1,
    "explanation": "Stinson identifies three locations: biased datasets (training data not reflective of real-world distribution), biased people (limited perspectives of algorithm makers), and biased algorithms (structural choices embedding inequality)."
  },
  {
    "id": 72, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "What is 'selection bias' in the context of training data for algorithms?",
    "options": ["When a model selects the wrong features to train on","When a dataset's examples are chosen in a way not reflective of their real-world distribution","When users selectively engage with content, distorting engagement metrics","When a developer selects a model architecture that introduces systematic errors"],
    "answer": 1,
    "explanation": "Selection bias in training data occurs when the examples chosen don't represent the real world accurately—for example, training a facial recognition system predominantly on lighter-skinned faces leads to worse performance on darker-skinned faces."
  },
  {
    "id": 73, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "The face-to-BMI algorithm in the 'How Normal Am I' activity makes no distinction between which groups?",
    "options": ["Urban and rural users","Men and women, different cultures, or different fitness levels","Different age groups and nationalities","Users from high-income and low-income backgrounds"],
    "answer": 1,
    "explanation": "The lecture uses this as an example of how even well-intentioned algorithms overlook critical nuances—treating all users the same regardless of sex, culture, or fitness level, potentially leading to flawed conclusions."
  },
  {
    "id": 74, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "Which of the following is the most comprehensive description of datafication in education?",
    "options": ["Converting textbooks to digital formats and delivering them via apps","Learning analytics, AI monitoring, chatbot assistants, online learning platforms (Moodle, Blackboard), classroom response systems, and international rankings like PISA and TIMSS","Replacing teachers with AI systems to deliver personalised lessons","Using social media to distribute educational content to students"],
    "answer": 1,
    "explanation": "Datafication of education is broad—including learning analytics, AI monitoring, chatbot assistants, LMS platforms, online quizzes, collaborative tools, and benchmarking systems like PISA and TIMSS."
  },
  {
    "id": 75, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "What is 'homogenization' as a bias problem in recommender systems?",
    "options": ["The tendency to make all users see identical content regardless of preferences","Over time, recommendations for everyone converge to look very similar, reducing diversity of content experienced across the platform","The process of standardising data formats before feeding them into a model","A technique for removing cultural biases from training datasets"],
    "answer": 1,
    "explanation": "Homogenization describes how, as recommendations converge on what the algorithm considers universally popular, diversity of content experienced across a platform diminishes—everyone ends up in a similar bubble."
  },

  // ── PRIVACY AND DATA PROTECTION (76–95) ───────────────────────────────
  {
    "id": 76, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "What is the distinction between 'privacy' and 'data protection' as defined in the lecture?",
    "options": ["Privacy is a technical standard; data protection is an ethical principle","Privacy is an individual's right to control access to their personal information; data protection is the legal, technical, and organisational measures used to safeguard that information","Privacy applies to individuals; data protection applies to organisations","Privacy is governed by criminal law; data protection by civil law"],
    "answer": 1,
    "explanation": "Privacy is the principle (the right to control your own information), while data protection is the mechanism (the legal and technical tools that uphold that right)—privacy justifies data protection laws."
  },
  {
    "id": 77, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "What are GDPR's maximum financial penalties for non-compliance?",
    "options": ["Up to €5 million or 1% of global annual revenue","Up to €20 million or 4% of global annual revenue, whichever is higher","Up to €10 million or 2% of global annual revenue","Up to €50 million or 6% of global annual revenue"],
    "answer": 1,
    "explanation": "GDPR penalties are among the most severe in any regulatory framework: up to €20 million or 4% of global annual revenue—whichever is higher—making non-compliance genuinely costly even for large corporations."
  },
  {
    "id": 78, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "Which data scandal involved the harvesting of millions of Facebook users' data for political advertising without consent?",
    "options": ["The Google Street View affair","The Facebook-Cambridge Analytica scandal","The Twitter leaks","The TikTok children's data fine"],
    "answer": 1,
    "explanation": "The Facebook-Cambridge Analytica scandal saw millions of users' data harvested without consent and used to micro-target political advertising—one of the defining data privacy cases of the 2010s."
  },
  {
    "id": 79, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "What does GDPR stand for and when did it come into force?",
    "options": ["General Data Privacy Regulation, 2016","Global Digital Protection Regulation, 2020","General Data Protection Regulation, 2018","Government Data Processing Regulation, 2018"],
    "answer": 2,
    "explanation": "GDPR (General Data Protection Regulation) came into force in May 2018, replacing the 1995 EU Data Protection Directive and establishing a unified data protection law across all EU member states."
  },
  {
    "id": 80, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "What is the 'right to be forgotten' under GDPR/DPA 2018?",
    "options": ["The right to have your name removed from all government databases","The right to request deletion of personal data when it is no longer needed, consent is withdrawn, or it was unlawfully collected","The right to opt out of targeted advertising permanently","The right to remain anonymous when browsing the internet"],
    "answer": 1,
    "explanation": "The right to erasure allows individuals to request deletion when data is no longer needed, consent is withdrawn, or data was unlawfully collected—though it is not absolute and exceptions apply."
  },
  {
    "id": 81, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "Why is biometric data considered particularly sensitive compared to other personal data?",
    "options": ["It is more expensive for companies to collect and store","It cannot be reset or changed if compromised—unlike a password, biometric data is permanently tied to you","It is subject to a completely separate legal framework","It can only be collected by government agencies under strict conditions"],
    "answer": 1,
    "explanation": "Unlike a password, biometric data—fingerprints, facial structure, iris scans—is permanently tied to you. A breach is irreversible; there is no way to 'reset' your biometrics."
  },
  {
    "id": 82, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "How does the US approach to data protection fundamentally differ from the EU approach?",
    "options": ["The US has no data protection laws; the EU enforces strict universal rules","The US uses a sectoral approach with industry-specific laws; the EU uses a unified comprehensive regulation across all sectors","The US relies entirely on self-regulation; the EU uses criminal law","The EU only protects data of EU citizens; the US protects all data globally"],
    "answer": 1,
    "explanation": "The US sectoral approach means different industries have different privacy laws (HIPAA for health, COPPA for children's online privacy, CCPA in California), contrasting with GDPR's comprehensive, sector-neutral coverage."
  },
  {
    "id": 83, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What happened to the EU-US Privacy Shield in 2020 and why?",
    "options": ["It was replaced by GDPR as the primary framework for data transfers","The European Court of Justice invalidated it due to concerns about US government surveillance powers under FISA and lack of judicial redress for EU citizens","The US withdrew from the agreement following a trade dispute","It was suspended after a series of high-profile data breaches at US companies"],
    "answer": 1,
    "explanation": "The ECJ invalidated Privacy Shield (Schrems II case, 2020), citing: lack of judicial redress for EU citizens and broad US surveillance powers under FISA—leaving businesses scrambling for alternative transfer mechanisms."
  },
  {
    "id": 84, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What UK-US agreement was established in 2023 for UK data transfers to the US?",
    "options": ["UK-US Digital Trade Agreement","UK-US Data Bridge","Transatlantic Privacy Framework","UK-US Standard Contractual Clauses Extension"],
    "answer": 1,
    "explanation": "The UK-US Data Bridge (2023) was established as the UK's equivalent to the EU-US Data Privacy Framework, providing a legal mechanism for UK-to-US data transfers post-Brexit and following Privacy Shield's invalidation."
  },
  {
    "id": 85, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What are the seven core principles of GDPR/DPA 2018? Select the most complete answer.",
    "options": ["Consent, security, transparency, privacy, fairness, accuracy, and deletion","Lawfulness/fairness/transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity/confidentiality, and accountability","Collection limitation, data quality, purpose specification, use limitation, security, openness, and participation","Necessity, proportionality, legitimacy, transparency, security, rights, and oversight"],
    "answer": 1,
    "explanation": "The seven GDPR/DPA 2018 principles: (1) Lawfulness, fairness, transparency; (2) Purpose limitation; (3) Data minimisation; (4) Accuracy; (5) Storage limitation; (6) Integrity and confidentiality; (7) Accountability."
  },
  {
    "id": 86, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What does PECR (2003) specifically regulate beyond GDPR's general data protection?",
    "options": ["Processing of employee data by employers","Electronic marketing messages, website cookies and tracking technologies, and communications service provider security","Cross-border data transfers between EU member states","Automated decision-making systems and algorithmic profiling"],
    "answer": 1,
    "explanation": "PECR specifically targets electronic communications—marketing emails/texts/calls, cookie usage, and telecom provider security—working alongside GDPR rather than replacing it."
  },
  {
    "id": 87, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What are 'privacy-enhancing technologies' (PETs) as discussed in the lecture?",
    "options": ["Technologies that allow companies to monetise data without user consent","Encryption and anonymisation techniques, plus blockchain for secure decentralised transactions and identity verification","Government surveillance tools designed to protect public safety","AI systems that automatically detect and delete personal data after use"],
    "answer": 1,
    "explanation": "PETs include encryption, anonymisation, and blockchain—the lecture presents these as promising tools for protecting data by reducing unauthorised access risk and enabling secure, decentralised data management."
  },
  {
    "id": 88, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "What does the right to 'data portability' under GDPR allow individuals to do?",
    "options": ["Access their data from anywhere in the world regardless of storage location","Transfer their personal data between different service providers in a machine-readable format (e.g. CSV, JSON)","Move their data from cloud to local storage without restriction","Share their data with third parties without organisational consent"],
    "answer": 1,
    "explanation": "The right to data portability allows individuals to receive their personal data in a machine-readable format and transfer it to a different service provider—promoting competition and user autonomy."
  },
  {
    "id": 89, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "What is the key risk if the UK diverges significantly from EU GDPR under proposed DPDI Bill reforms?",
    "options": ["UK companies would face higher fines for data breaches","The UK risks losing EU data adequacy status, which would complicate or block free data transfers between the UK and EU","UK citizens would lose access to EU digital services","The ICO would lose its independence"],
    "answer": 1,
    "explanation": "EU adequacy status—granted in 2021—allows data to flow freely between the EU and UK. Significant divergence from GDPR risks losing this status, imposing additional compliance burdens on cross-border businesses."
  },
  {
    "id": 90, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "What are 'Standard Contractual Clauses' (SCCs) used for in international data transfers?",
    "options": ["Pre-approved contractual terms providing GDPR-equivalent protections for data transferred outside the EU/UK","Standardised privacy policies that websites must display under GDPR","Government contracts requiring cloud providers to store EU data within the EU","Template data sharing agreements between EU and non-EU companies"],
    "answer": 0,
    "explanation": "SCCs are pre-approved contractual clauses used as a legal mechanism to transfer personal data outside the EU/UK, contractually requiring GDPR-equivalent protections in the receiving country."
  },
  {
    "id": 91, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What is the primary privacy risk of location tracking as discussed in the lecture?",
    "options": ["GPS navigation storing routes on the device","Continuous and often unnoticed tracking via GPS, Wi-Fi, and mobile signals, with data sold to advertisers, law enforcement, or private individuals by data brokers","Satellite surveillance used by governments to target dissidents","Social media check-ins revealing home addresses to strangers"],
    "answer": 1,
    "explanation": "The lecture highlights data brokers selling real-time location data to advertisers, law enforcement, and private individuals as a key privacy risk—often without users knowing their movements are being tracked continuously."
  },
  {
    "id": 92, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What was the first major global attempt to standardise privacy principles, and when was it introduced?",
    "options": ["EU Directive 95/46/EC, 1995","OECD Guidelines on the Protection of Privacy and Transborder Flows of Personal Data, 1980","The US Privacy Act, 1974","The Council of Europe Convention 108, 1981"],
    "answer": 1,
    "explanation": "The OECD Guidelines (1980) are cited as the first global attempt to standardise privacy principles, influencing subsequent regulatory developments including the EU Directive in 1995 and later GDPR."
  },
  {
    "id": 93, "topic": "Privacy and Data Protection", "difficulty": "hard",
    "question": "What is the significance of the Schrems cases in EU-US data transfer law?",
    "options": ["They established the right to be forgotten in EU law","They led to the invalidation of major EU-US data transfer frameworks by highlighting incompatibility between US surveillance law and EU privacy rights","They resulted in the first GDPR fine issued against a US tech company","They established the principle that data collected in the EU must be stored in the EU"],
    "answer": 1,
    "explanation": "Schrems I invalidated Safe Harbour and Schrems II invalidated Privacy Shield—both by forcing courts to confront that US surveillance powers (FISA etc.) are incompatible with EU privacy rights."
  },
  {
    "id": 94, "topic": "Privacy and Data Protection", "difficulty": "easy",
    "question": "Which US law protects medical and healthcare data privacy?",
    "options": ["COPPA","GLBA","HIPAA","FISMA"],
    "answer": 2,
    "explanation": "HIPAA (Health Insurance Portability and Accountability Act, 1996) regulates the privacy of healthcare data in the US—one of the key laws in the US sectoral approach to data protection."
  },
  {
    "id": 95, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "What is a 'Subject Access Request' (SAR) and what is the response deadline?",
    "options": ["A request for access to classified government data; 30 days","An individual's right to request a copy of all personal data held by an organisation; organisations must respond within one month","A request to restrict processing of personal data; 72 hours","A request to have personal data deleted; 14 days"],
    "answer": 1,
    "explanation": "A SAR is an individual's right to see all personal data held about them. Organisations must respond within one month and cannot normally charge a fee."
  },

  // ── COMPUTER-RELATED CRIMES (96–110) ──────────────────────────────────
  {
    "id": 96, "topic": "Computer-Related Crimes", "difficulty": "easy",
    "question": "What three primary offences did the Computer Misuse Act 1990 originally create?",
    "options": ["Identity theft, hacking, and data piracy","Section 1: unauthorised access; Section 2: access with intent to commit further offences; Section 3: unauthorised modification","Cyberbullying, phishing, and ransomware deployment","Network interception, data destruction, and malware creation"],
    "answer": 1,
    "explanation": "The CMA 1990 created three offences: Section 1 (unauthorised access), Section 2 (access with intent to facilitate further offences), and Section 3 (unauthorised acts with intent to impair computer operation)."
  },
  {
    "id": 97, "topic": "Computer-Related Crimes", "difficulty": "easy",
    "question": "What does Section 127 of the Communications Act 2003 criminalise?",
    "options": ["Dishonest use of electronic communications services","Offensive, indecent, obscene, or menacing messages sent via public communication networks","Unauthorised interception of private communications","Distribution of hacking tools online"],
    "answer": 1,
    "explanation": "Section 127 criminalises offensive, menacing, or grossly indecent messages via public communication networks—including social media—supporting enforcement against online harassment and cyberbullying."
  },
  {
    "id": 98, "topic": "Computer-Related Crimes", "difficulty": "easy",
    "question": "What does RIPA 2000 stand for and what does it regulate?",
    "options": ["Regulated Internet Powers Act; regulates ISPs","Regulation of Investigatory Powers Act; regulates surveillance and interception of communications by public bodies","Rights of Internet Privacy Act; protects individuals from online surveillance","Retention of Investigatory Powers Act; mandates data retention by telecoms"],
    "answer": 1,
    "explanation": "RIPA (Regulation of Investigatory Powers Act 2000) regulates how public bodies can carry out surveillance and intercept communications, balancing national security needs with individual privacy rights."
  },
  {
    "id": 99, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What did Section 3A (added to the CMA by the Police and Justice Act 2006) criminalise?",
    "options": ["Mandatory jail sentences for all hacking offences","Making, supplying, or obtaining tools designed for cybercrime, even if not actively used in an attack","Government powers to shut down websites hosting illegal content","Identity theft as a separate offence from fraud"],
    "answer": 1,
    "explanation": "Section 3A extended the CMA's reach to cover the supply chain of cybercrime—making it illegal to create, distribute, or possess hacking tools, malware, or denial-of-service tools regardless of whether they are deployed."
  },
  {
    "id": 100, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What distinction does the Fraud Act 2006 make between identity theft and identity fraud?",
    "options": ["Identity theft is civil; identity fraud is criminal","Identity theft is unlawfully acquiring personal information; identity fraud is using that stolen information to commit further crimes","Identity theft applies only to financial data; identity fraud includes all personal data","Identity theft requires hacking; identity fraud occurs through social engineering"],
    "answer": 1,
    "explanation": "Identity theft is the acquisition of personal information without authorisation; identity fraud is the subsequent use of that information to commit crimes such as fraudulent credit applications."
  },
  {
    "id": 101, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "The Investigatory Powers Act 2016 is nicknamed what?",
    "options": ["The Surveillance Charter","The Snoopers' Charter","The Digital Powers Act","The Big Brother Bill"],
    "answer": 1,
    "explanation": "IPA 2016 was widely nicknamed the 'Snoopers' Charter' due to its provisions enabling bulk data collection, equipment interference, and retention of communications data by service providers."
  },
  {
    "id": 102, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "The Telecommunications (Security) Act 2021 is enforced by which body?",
    "options": ["The ICO","Ofcom with support from the National Cyber Security Centre (NCSC)","GCHQ and the Home Office","The Financial Conduct Authority"],
    "answer": 1,
    "explanation": "The Act is enforced by Ofcom with technical guidance from the NCSC, requiring telecoms providers to identify, assess, and mitigate cybersecurity risks."
  },
  {
    "id": 103, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "Who do the NIS Regulations 2018 apply to?",
    "options": ["All UK businesses that process personal data","Operators of Essential Services (energy, healthcare, transport) and Relevant Digital Service Providers (online marketplaces, search engines, cloud services)","Government departments and public sector bodies only","Data processors and data controllers under GDPR"],
    "answer": 1,
    "explanation": "NIS 2018 (from EU Directive 2016/1148) applies to Operators of Essential Services and Relevant Digital Service Providers, with the ICO as the competent authority for enforcing NIS obligations on RDSPs."
  },
  {
    "id": 104, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What are the maximum penalties under the NIS Regulations for non-compliant RDSPs?",
    "options": ["Up to £5 million","Up to £10 million","Up to £17 million","Up to £25 million"],
    "answer": 2,
    "explanation": "RDSPs that fail to implement appropriate security measures or report significant incidents can face penalties of up to £17 million under the NIS Regulations 2018."
  },
  {
    "id": 105, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "What do the Telecommunications (Lawful Business Practice) Regulations 2000 allow employers to do?",
    "options": ["Block employees from accessing non-work websites during working hours","Intercept and monitor employee calls, emails, and internet use for specific permissible purposes, provided employees are informed monitoring may occur","Store all employee communications for up to five years without consent","Install keylogging software on employee devices to prevent data theft"],
    "answer": 1,
    "explanation": "The Regulations (supplementing RIPA) allow limited employer monitoring for permissible purposes—preventing crime, regulatory compliance, and enforcing company policies—but employees must be informed that monitoring may occur."
  },
  {
    "id": 106, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "What did the Data Retention and Investigatory Powers Act (DRIPA) 2014 enable and why was it controversial?",
    "options": ["It gave the ICO power to issue data breach fines; fines were seen as too low","It compelled telecoms to store metadata for up to 12 months; controversial for its potential conflict with privacy rights and later replaced by the Investigatory Powers Act 2016","It allowed bulk collection of social media data; controversial because it targeted journalists","It mandated encryption of all government communications; controversial due to cost"],
    "answer": 1,
    "explanation": "DRIPA introduced emergency powers compelling telecoms to store metadata for up to 12 months—controversial for potential privacy rights conflicts and later replaced by the Investigatory Powers Act 2016."
  },
  {
    "id": 107, "topic": "Computer-Related Crimes", "difficulty": "hard",
    "question": "Even well-intentioned unsolicited penetration testing is illegal under which section of the CMA 1990?",
    "options": ["Section 2","Section 3","Section 3A","Section 1"],
    "answer": 3,
    "explanation": "Section 1 covers unauthorised access—and 'unauthorised' is key. Even if a penetration tester has good intentions, probing a system without explicit prior consent is a Section 1 offence."
  },
  {
    "id": 108, "topic": "Computer-Related Crimes", "difficulty": "easy",
    "question": "What right does the Freedom of Information Act 2000 (FOIA) establish?",
    "options": ["Journalists' right to access classified government information","The public's right to request recorded information held by public authorities, with a 20 working day response deadline","Whistleblowers' right to disclose government wrongdoing without prosecution","The government's obligation to publish all non-sensitive data as open data"],
    "answer": 1,
    "explanation": "FOIA 2000 grants a general right of public access to information held by public authorities. They must respond within 20 working days, with the ICO ensuring compliance."
  },
  {
    "id": 109, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "What is the ICO and what is its primary role?",
    "options": ["The International Computing Organisation; sets global computing standards","The Information Commissioner's Office; the UK's independent authority for upholding information rights and enforcing data protection laws","The Internet Control Office; regulates internet service providers in the UK","The Investigatory Controls Office; oversees surveillance activities by public bodies"],
    "answer": 1,
    "explanation": "The ICO is the UK's independent authority for upholding information rights—enforcing the Data Protection Act 2018, GDPR, PECR, FOIA, and other data-related legislation across both public and private sectors."
  },
  {
    "id": 110, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "Section 125 of the Communications Act 2003 addresses what offence?",
    "options": ["Sending menacing or offensive messages online","Dishonest use of electronic communications services","Unauthorised interception of phone calls","Creating or distributing malware"],
    "answer": 1,
    "explanation": "Section 125 addresses dishonest use of electronic communications services—distinct from Section 127 which covers offensive/menacing messages. Together they tackle different aspects of communications abuse."
  },

  // ── PROFESSIONALISM IN COMPUTING (111–116) ────────────────────────────
  {
    "id": 111, "topic": "Professionalism in Computing", "difficulty": "easy",
    "question": "What does CPD stand for and why do professional bodies require it?",
    "options": ["Certified Professional Development; required for initial certification","Continuing Professional Development; ensures members update skills and remain technically competent and ethically aware throughout their careers","Core Professional Duties; the fundamental obligations of all registered professionals","Computing Professional Diploma; an entry-level computing qualification"],
    "answer": 1,
    "explanation": "CPD (Continuing Professional Development) is an ongoing requirement compelling members to update skills through courses, workshops, or practice-based learning—covering both technical developments and ethical awareness."
  },
  {
    "id": 112, "topic": "Professionalism in Computing", "difficulty": "easy",
    "question": "Which two organisations provide ethical guidelines for computing professionals, as mentioned in the lecture?",
    "options": ["IEEE and GCHQ","BCS (British Computer Society) and ACM (Association for Computing Machinery)","Ofcom and ICO","CISCO and CompTIA"],
    "answer": 1,
    "explanation": "The BCS and ACM are the primary professional bodies for computing in the UK and internationally, providing ethical guidelines—though adherence is voluntary rather than legally mandated."
  },
  {
    "id": 113, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "Why is computing not considered a fully fledged 'profession' in the traditional sense?",
    "options": ["Computing professionals don't require any training or certification","Computing lacks mandatory licensure, a unified legally recognised code of ethics, and a single licensing authority comparable to the General Medical Council","The BCS has not yet applied for Royal Charter status","Computing is not considered essential to public welfare"],
    "answer": 1,
    "explanation": "Unlike medicine or law, most computing roles don't require formal licensure, titles like 'software engineer' aren't legally protected, and there is no single legally mandated code of ethics."
  },
  {
    "id": 114, "topic": "Professionalism in Computing", "difficulty": "medium",
    "question": "What is the 'leaky pipeline' metaphor in the context of women in computing?",
    "options": ["A security vulnerability where data is gradually exposed over time","The pattern where women who initially express interest in computing progressively leave the field at each stage—from school through to senior roles","Budget overruns in large computing projects","Gradual skill loss among older computing professionals"],
    "answer": 1,
    "explanation": "The leaky pipeline captures how women are lost at multiple stages—secondary school interest, university enrolment, entry-level jobs, mid-career retention, leadership—reflecting cumulative, systemic exclusion."
  },
  {
    "id": 115, "topic": "Professionalism in Computing", "difficulty": "hard",
    "question": "What tension exists between industry certifications (like Cisco, AWS) and the professionalisation of computing?",
    "options": ["Certifications are too academic and insufficiently practical","Certifications are narrowly vendor-specific, lack coordination, and typically omit ethical, legal, and societal considerations essential for a true profession","Certifications are too expensive, creating barriers for lower-income candidates","Certifications overlap too much with university degrees"],
    "answer": 1,
    "explanation": "Industry certifications validate specific technical skills but are fragmented, vary in rigour across vendors, and omit ethics and societal considerations—widening the gap between technical competence and professional responsibility."
  },
  {
    "id": 116, "topic": "Professionalism in Computing", "difficulty": "hard",
    "question": "What percentage of computing undergraduates in the UK identified as female in 2021?",
    "options": ["Around 30%","Around 21%","Around 35%","Around 14%"],
    "answer": 1,
    "explanation": "UK data from 2021 indicates only around 21% of computing undergraduates identified as female—stubbornly low despite decades of intervention programmes."
  },

  // ── GENERATIVE AI (117–120) ────────────────────────────────────────────
  {
    "id": 117, "topic": "Generative AI", "difficulty": "easy",
    "question": "How does IBM define 'AI hallucination'?",
    "options": ["When an AI refuses to answer a question it considers dangerous","When an LLM perceives patterns or objects that are non-existent or imperceptible to humans, producing nonsensical or inaccurate outputs","When an AI is deliberately programmed to give incorrect answers","When users mistakenly believe an AI chatbot is sentient or conscious"],
    "answer": 1,
    "explanation": "AI hallucination is when an LLM confidently generates content that is factually wrong or entirely fabricated—not a random error but a structural behaviour arising from how LLMs generate statistically likely text."
  },
  {
    "id": 118, "topic": "Generative AI", "difficulty": "easy",
    "question": "What proportion of UK students reported using generative AI for assessments in the 2025 HEPI survey?",
    "options": ["53%","65%","88%","72%"],
    "answer": 2,
    "explanation": "The HEPI 2025 survey found 88% of UK students used generative AI for assessments—up sharply from 53% the previous year, reflecting rapid normalisation of GenAI tools in higher education."
  },
  {
    "id": 119, "topic": "Generative AI", "difficulty": "medium",
    "question": "What environmental concern about AI and water resources is highlighted in the lecture?",
    "options": ["AI-powered irrigation systems are reducing agricultural water efficiency","A UK government Digital Sustainability Alliance report predicts AI could increase global water usage from 1.1 billion to 6.6 billion cubic metres by 2027 due to data centre cooling demands","AI climate models are incorrectly predicting water scarcity","Mining minerals for AI hardware is contaminating freshwater sources"],
    "answer": 1,
    "explanation": "The Digital Sustainability Alliance predicts AI's cooling demands could increase global water usage sixfold by 2027—equivalent to more than half the UK's total annual water usage."
  },
  {
    "id": 120, "topic": "Generative AI", "difficulty": "hard",
    "question": "What is the core unresolved copyright question regarding training generative AI models on internet content?",
    "options": ["Whether AI companies must pay royalties to users whose data is used in training","Whether reproducing copyrighted material to train GenAI without permission is unlawful or permitted under exceptions like text and data mining or fair use—still being determined in courts","Whether AI-generated content automatically receives copyright protection","Whether users of AI tools are liable for copyright infringement if the tool reproduces copyrighted content"],
    "answer": 1,
    "explanation": "The lecture frames this as an open legal question: training on copyrighted material may be unlawful, or permitted under exceptions (UK text/data mining exception, US fair use)—with court cases actively shaping the answer."
  },
    // ── PRACTICE TEST QUESTIONS (121–133) ────────────────────────────────
  {
    "id": 121, "topic": "Computer Ethics", "difficulty": "easy",
    "question": "The most common view of computer technology is that it is an artefact or tool simply available to use or not use, in order for humans to achieve their objectives. What is this view called?",
    "options": ["Technological determinism","Social determinism","Computational thinking","Technological neutrality"],
    "answer": 3,
    "explanation": "The view that technology is simply a neutral tool—like a hammer—available for humans to use however they choose is called the technological neutrality thesis."
  },
  {
    "id": 122, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "An AI chatbot used for customer support gives users a list of help topics and then lists common issues and solutions. Which TWO factors inherent to computing contribute to ethical distancing in this scenario?",
    "options": ["Technological determinism","Computational thinking","Social determinism","Technological intermediation"],
    "answer": 1,
    "explanation": "Computational thinking (abstracting users into categories/options rather than treating them as individuals) and technological intermediation (a faceless AI replacing human customer support) are the two distancing factors Peterson et al. identify."
  },
  {
    "id": 123, "topic": "Computer Ethics", "difficulty": "medium",
    "question": "Which TWO factors inherent to computing contribute to distancing, according to Peterson, Ferreira & Vardi (2023)?",
    "options": ["Technological intermediation","Technological determinism","Computational thinking","Social determinism"],
    "answer": 2,
    "explanation": "Peterson et al. identify technological intermediation (opacity between developers and users) and computational thinking (training developers to think in abstractions rather than human impacts) as the two key distancing factors."
  },
  {
    "id": 124, "topic": "Digital Divide", "difficulty": "easy",
    "question": "What is the main factor that contributes to the digital skills gap in the UK, according to the lecture data?",
    "options": ["Age","Gender","Education","Location"],
    "answer": 2,
    "explanation": "Education level is the strongest predictor of digital skills—those with lower educational attainment are disproportionately represented among the digitally excluded, though age and disability also play significant roles."
  },
  {
    "id": 125, "topic": "Internet Freedom and Democracy", "difficulty": "easy",
    "question": "Which aspect of Taiwan's open government does this refer to? 'Politics is everyone's business, and the policy process should allow the public to have a clear understanding of what's going on.'",
    "options": ["Participation","Transparency","Accountability","Inclusion"],
    "answer": 1,
    "explanation": "This is Taiwan's definition of Transparency—the principle that policy processes should be open and understandable to the public, not hidden behind closed doors."
  },
  {
    "id": 126, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "A study finds that low cholesterol is associated with increased mortality and concludes that low cholesterol causes increased mortality. What type of bias does this represent?",
    "options": ["Confirmation bias","Selection bias","Correlation fallacy","Coverage bias"],
    "answer": 2,
    "explanation": "This is a correlation fallacy—mistaking a statistical association (correlation) for a causal relationship. Association between two variables does not mean one causes the other."
  },
  {
    "id": 127, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "A data annotator is classifying messages as positive, negative, or neutral. They label 'It's fine' as negative because, based on their own experience, they interpret it as passive-aggressive. What type of bias does this represent?",
    "options": ["Confirmation bias","Selection bias","Correlation fallacy","Coverage bias"],
    "answer": 0,
    "explanation": "This is confirmation bias—the annotator is applying their own prior assumptions and experiences to label data, rather than labelling it objectively. This is a form of 'biased people' introducing bias into training data."
  },
  {
    "id": 128, "topic": "Algorithms and Datafication", "difficulty": "medium",
    "question": "Food delivery apps in China (Ele.me and Meituan) set hard 30-minute delivery limits that penalise drivers for delays caused by weather or traffic, sometimes fining them even when a glitch causes an error. Which data justice pillar is NOT upheld in this example?",
    "options": ["Power","Knowledge","Access","Equity"],
    "answer": 0,
    "explanation": "Power is not upheld—drivers have no power to challenge or influence the algorithmic decisions that govern their work, penalise them unfairly, or account for circumstances beyond their control."
  },
  {
    "id": 129, "topic": "Algorithms and Datafication", "difficulty": "hard",
    "question": "Ola Cabs maintained a secret 'fraud probability score' for each driver without disclosing or explaining it, and used fully automated systems for dispute resolution, work allocation, and dismissal. Drivers won a legal case proving this violated GDPR. Which data justice pillar was upheld by this legal outcome?",
    "options": ["Equity","Participation","Access","Power"],
    "answer": 2,
    "explanation": "Access was upheld—drivers successfully asserted their GDPR right to access their personal data and the algorithmic decision-making affecting them. The case established that workers have a right to access and understand data about themselves."
  },
  {
    "id": 130, "topic": "Privacy and Data Protection", "difficulty": "medium",
    "question": "A toy brand's raffle system asks buyers for their name, date of birth, address, AND credit card information just to enter the raffle. Buyers question why all this information is necessary. Which data protection principle is being violated?",
    "options": ["Storage limitation","Accuracy","Accountability","Data minimisation"],
    "answer": 3,
    "explanation": "Data minimisation requires organisations to collect only the minimum data necessary for their stated purpose. Collecting credit card information simply to enter a raffle goes beyond what is necessary and violates this principle."
  },
  {
    "id": 131, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "True or False: The Computer Misuse Act 1990 requires data theft or system damage to have actually occurred for an offence to be committed.",
    "options": ["True","False","Only for Section 1 offences","Only for Section 3 offences"],
    "answer": 1,
    "explanation": "False. The CMA 1990 criminalises unauthorised access itself—under Section 1, simply accessing a system without authorisation is an offence, regardless of whether any data is stolen or damage caused."
  },
  {
    "id": 132, "topic": "Computer-Related Crimes", "difficulty": "medium",
    "question": "Is overwhelming servers or networks to disrupt access (a DDoS attack) an offence under Section 1 of the Computer Misuse Act?",
    "options": ["True","False","Only if it causes financial damage","Only if it targets government systems"],
    "answer": 1,
    "explanation": "False. DDoS attacks—designed to impair or disrupt computer operation—fall under Section 3 (unauthorised acts with intent to impair operation of computers), not Section 1 (which covers unauthorised access to computer material)."
  },
  {
    "id": 133, "topic": "Computer-Related Crimes", "difficulty": "easy",
    "question": "Is it an offence under the Computer Misuse Act to make, supply, or obtain tools for cybercrime even if those tools are not actively used to commit a crime?",
    "options": ["True","False","Only if tools are distributed online","Only if the person has a prior conviction"],
    "answer": 0,
    "explanation": "True. Section 3A (added by the Police and Justice Act 2006) criminalises making, supplying, or obtaining tools designed for cybercrime—possession and distribution alone is an offence, regardless of whether the tools are actually deployed."
  }
];