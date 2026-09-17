const questionBank = [
    // 50 ORIGINAL QUESTIONS
    {
        id: "q1", category: "Psychology",
        text: "When facing a life-changing dilemma, what guides your final decision?",
        options: ["Cold, unyielding logical optimization", "A gut intuition that I can't logically defend", "Ethical principles and how it impacts people", "I delay it until reality forces my hand"]
    },
    {
        id: "q2", category: "Psychology",
        text: "What drives you most when working on a high-stakes project?",
        options: ["The thrill of solving an impossible problem", "The urge to outperform everyone else", "The fear of failure and public disappointment", "The pure joy of creative freedom"]
    },
    {
        id: "q3", category: "Psychology",
        text: "How do you handle being proven completely wrong in an argument?",
        options: ["Instantly admit it and adapt my perspective", "Defend my point until I find a logical loophole", "Quietly accept it but feel internally irritated", "Turn it into a joke and change the subject"]
    },
    {
        id: "q4", category: "Psychology",
        text: "Which emotional state do you find most uncomfortable?",
        options: ["Stagnation and total boredom", "Loss of control over my environment", "Conflict with people I care about", "Vulnerability and revealing deep thoughts"]
    },
    {
        id: "q5", category: "Psychology",
        text: "If you could eliminate one aspect of your mind, what would it be?",
        options: ["Chronic overthinking and replay of past mistakes", "Imposter syndrome and self-doubt", "Procrastination under low pressure", "Emotional impulsivity"]
    },
    {
        id: "q6", category: "Psychology",
        text: "In social situations, what is your secondary superpower?",
        options: ["Reading room dynamics and hidden tension instantly", "Commanding focus and steering conversations", "Making anyone feel comfortable and heard", "Observing silently without being noticed"]
    },
    {
        id: "q7", category: "Psychology",
        text: "When a sudden crisis unfolds, what is your initial reflex?",
        options: ["Immediate adrenaline spike followed by strategic action", "Hyper-calm detachment—my brain goes clinical", "Look for a trusted figure to coordinate with", "Internal panic for 30 seconds, then adapt"]
    },
    {
        id: "q8", category: "Psychology",
        text: "How do you view rules and authority?",
        options: ["Essential frameworks that maintain order", "Guidelines meant to be optimized or bypassed", "Obstacles to innovation that should be challenged", "Neutral, as long as they don't restrict my freedom"]
    },
    {
        id: "q9", category: "Psychology",
        text: "What defines your ideal sense of personal achievement?",
        options: ["Mastery of a rare, complex discipline", "Building wealth, power, and autonomy", "Creating something timeless that touches people", "Achieving absolute inner peace and freedom"]
    },
    {
        id: "q10", category: "Psychology",
        text: "Which inner mindset best describes your daily life?",
        options: ["The Architect: Planning three moves ahead", "The Explorer: Embracing chaos and novelty", "The Anchor: Keeping things steady and grounded", "The Analyst: Constantly dissecting everything around me"]
    },

    {
        id: "q11", category: "Ethics & Chaos",
        text: "An AI system offers you guaranteed success in exchange for 10% of your memories. Do you accept?",
        options: ["Yes—sacrificing past memory for future certainty is worth it", "No—my memories define who I am", "Only if I get to choose which memories are deleted", "Only if success means absolute freedom"]
    },
    {
        id: "q12", category: "Ethics & Chaos",
        text: "You discover a glitch in a system that accidentally benefits you financially. What do you do?",
        options: ["Exploit it quietly until it gets patched", "Report it immediately—it's unethical to keep it", "Use it once or twice, then back off", "Share it with close friends before it gets fixed"]
    },
    {
        id: "q13", category: "Ethics & Chaos",
        text: "If you could press a button that grants you instant mastery of any skill, but resets your phone forever...",
        options: ["Press it without hesitation", "Back up data first, then press it", "Not worth the hassle of starting fresh", "Depends on whether I get to choose the skill"]
    },
    {
        id: "q14", category: "Ethics & Chaos",
        text: "You have 12 hours before a major deadline and 5% work complete. What is your chaos response?",
        options: ["Hyperfocus flow-state fueled by caffeine and spite", "Negotiate an extension using tactical diplomacy", "Submit whatever half-baked concept I can finish", "Accept fate and sleep—health comes first"]
    },
    {
        id: "q15", category: "Ethics & Chaos",
        text: "Would you rather know the exact date of your death or the exact cause?",
        options: ["The Date—so I can schedule my life perfectly", "The Cause—so I can actively try to avoid it", "Neither—it would ruin the mystery of living", "Both—give me full information"]
    },
    {
        id: "q16", category: "Ethics & Chaos",
        text: "You receive an anonymous message: 'I know what you did.' Your immediate reaction?",
        options: ["Figure out who sent it and reverse-engineer their intent", "Assume it's a prank and ignore it", "Cycle through every gray-area decision I've made recently", "Reply with 'Good, then you know what comes next.'"]
    },
    {
        id: "q17", category: "Ethics & Chaos",
        text: "If human civilization were resetting and you could preserve ONE trait for the new world, what is it?",
        options: ["Scientific curiosity", "Empathy and compassion", "Artistic expression", "Resilience and survival drive"]
    },
    {
        id: "q18", category: "Ethics & Chaos",
        text: "How do you handle secrets trusted to you?",
        options: ["Vault status—I take them to the grave", "I keep them unless safety/ethics demands revealing", "I might share with my ONE ultimate confidant", "I forget them entirely within a week"]
    },
    {
        id: "q19", category: "Ethics & Chaos",
        text: "Is it better to be feared, respected, or loved?",
        options: ["Respected—it commands authority without tyranny", "Loved—it builds true loyalty and connection", "Feared—it guarantees compliance and efficiency", "Indifferent—I don't care how others view me"]
    },
    {
        id: "q20", category: "Ethics & Chaos",
        text: "A stranger drops an envelope labeled 'DO NOT OPEN'. What do you do?",
        options: ["Open it immediately out of relentless curiosity", "Catch up to the stranger and return it unopened", "Leave it alone—not my business", "Examine the outside for clues before deciding"]
    },

    {
        id: "q21", category: "Intellect",
        text: "Which creative medium resonates most with your inner world?",
        options: ["Complex architectural or algorithmic design", "Cinematic storytelling and visual arts", "Music that invokes abstract imagery", "Written philosophy and analytical essays"]
    },
    {
        id: "q22", category: "Intellect",
        text: "How do you learn best when tackling a dense, brand-new subject?",
        options: ["Diving into hands-on building/experimentation", "Deconstructing fundamental theory and math first", "Teaching or explaining it to someone else", "Consuming high-level visual/video breakdowns"]
    },
    {
        id: "q23", category: "Intellect",
        text: "When working on a project, what stage do you enjoy most?",
        options: ["Brainstorming and conceptualizing the big vision", "Architecting the structure and strategy", "Executing the intense granular details", "Refining, polishing, and launching"]
    },
    {
        id: "q24", category: "Intellect",
        text: "What type of intellectual conversation energizes you?",
        options: ["Futurism, technological singularities, and AI", "Deep human psychology and emotional motives", "Cosmology, physics, and the structure of reality", "Pop-culture debates, lore theories, and comedy"]
    },
    {
        id: "q25", category: "Intellect",
        text: "How do you organize your thoughts?",
        options: ["Meticulous systems, notes, and structured workflows", "A chaotic mental web that somehow works", "Visualizing concepts as spatial shapes or metaphors", "Talking out loud to externalize ideas"]
    },
    {
        id: "q26", category: "Intellect",
        text: "Pick the aesthetic that feels like home to your mind:",
        options: ["Cyberpunk: Neon grids, rain, high technology", "Deep Space: Dark emptiness punctuated by distant stars", "Minimalist Studio: Clean lines, functional design", "Overgrown Ruins: Ancient stone reclaimed by nature"]
    },
    {
        id: "q27", category: "Intellect",
        text: "What makes an idea truly captivating to you?",
        options: ["It challenges a fundamental assumption everyone takes for granted", "It elegantly solves a long-standing complex problem", "It evokes powerful emotion or awe", "It opens up practical avenues for massive leverage"]
    },
    {
        id: "q28", category: "Intellect",
        text: "In a world driven by AI, what human trait becomes most valuable?",
        options: ["Taste and artistic intuition", "Original philosophical synthesis", "Deep emotional empathy and presence", "Strategic vision and execution drive"]
    },
    {
        id: "q29", category: "Intellect",
        text: "How do you react to art or music that you don't immediately understand?",
        options: ["Analyze it until I uncover the creator's underlying logic", "Appreciate the abstract emotion even without clarity", "Lose interest quickly if it lacks structure", "Form my own personalized interpretation regardless of intent"]
    },
    {
        id: "q30", category: "Intellect",
        text: "Which problem-solving style represents you?",
        options: ["First Principles: Stripping everything down to basic truths", "Pattern Matching: Comparing against past experiences", "Lateral Thinking: Connecting two completely unrelated concepts", "Trial & Error: Rapid iteration and practical testing"]
    },

    {
        id: "q31", category: "Social",
        text: "What kind of presence do you bring to a team dynamic?",
        options: ["The Visionary: Setting direction and inspiring action", "The Engine: Getting things done relentlessly behind the scenes", "The Critic: Spotting flaws and keeping standards high", "The Glue: Keeping morale high and smoothing friction"]
    },
    {
        id: "q32", category: "Social",
        text: "How do you feel after spending a full night in a crowded, high-energy event?",
        options: ["Electrified and buzzing with social energy", "Completely drained—I need 24 hours of solitude", "Fine, if I was with my core group of people", "Mentally stimulated, but physically exhausted"]
    },
    {
        id: "q33", category: "Social",
        text: "What is your primary indicator that someone is genuinely trustworthy?",
        options: ["Consistency between their words and actions over time", "How they treat people who can offer them nothing", "Their ability to give direct, unvarnished honesty", "An inexplicable, immediate gut instinct"]
    },
    {
        id: "q34", category: "Social",
        text: "How do you handle social confrontation?",
        options: ["Address it directly and calmly to resolve it fast", "De-escalate using humor or diplomatic deflection", "Withdraw and process before engaging", "Match energy with aggressive logic until resolved"]
    },
    {
        id: "q35", category: "Social",
        text: "When meeting someone new, what catches your interest first?",
        options: ["Their intellectual depth and passion for ideas", "Their humor, quick wit, and playful banter", "Their authenticity and lack of pretense", "Their ambition and drive to build great things"]
    },
    {
        id: "q36", category: "Social",
        text: "In a group setting, what is your biggest pet peeve?",
        options: ["People talking loudly about things they don't understand", "Inauthentic posturing and arrogance", "Indecisiveness and endless debate without action", "Exclusionary or dismissive behavior toward others"]
    },
    {
        id: "q37", category: "Social",
        text: "What is your ideal group size for deep, meaningful interaction?",
        options: ["1-on-1: Maximum focus and depth", "3 to 4 people: The perfect conversational balance", "5 to 8 people: Vibrant energy and diverse takes", "Large groups: I thrive in the crowd dynamics"]
    },
    {
        id: "q38", category: "Social",
        text: "How do you show care or support to a friend in distress?",
        options: ["Offer actionable solutions and strategic advice", "Listen silently and validate their emotions", "Distract them with fun or chaotic activities", "Help them take care of practical, daily tasks"]
    },
    {
        id: "q39", category: "Social",
        text: "Which dynamic best describes your closest friendship?",
        options: ["Partners in Crime: Endless humor and shared chaos", "Mindmeld: Bouncing abstract ideas off each other for hours", "Rock Solid: We can go months without talking and pick up seamlessly", "Growth Duo: Pushing each other to become better constantly"]
    },
    {
        id: "q40", category: "Social",
        text: "If you could host a private dinner with 3 people, who would you invite?",
        options: ["The greatest scientists and engineers in history", "Visionary filmmakers, artists, and storytellers", "Philosophers and historical leaders who shaped empires", "My favorite comedians and creative rebels"]
    },

    {
        id: "q41", category: "Cosmos",
        text: "When you look up at a clear night sky filled with stars, what dominates your thoughts?",
        options: ["The breathtaking scale and my own existential insignificance", "The intense curiosity to know what civilizations exist out there", "The physical laws and physics governing stellar evolution", "A sense of quiet peace and connection to nature"]
    },
    {
        id: "q42", category: "Cosmos",
        text: "You are offered a one-way trip to establish the first human colony on Mars. Do you go?",
        options: ["Yes—making history is worth leaving Earth behind", "No—Earth's biosphere and human connections are irreplaceable", "Only if I am leading the scientific mission", "Only if technology ensures a comfortable lifestyle there"]
    },
    {
        id: "q43", category: "Cosmos",
        text: "What is your resolution to Fermi's Paradox (Where are all the aliens)?",
        options: ["The Great Filter: Civilizations inevitably destroy themselves", "The Zoo Hypothesis: They are watching us, waiting for us to mature", "Distances in space and time are simply too vast for contact", "We are truly the very first intelligent species in the galaxy"]
    },
    {
        id: "q44", category: "Cosmos",
        text: "Which cosmic phenomenon do you find most fascinating?",
        options: ["Black Holes: Where space-time breaks down completely", "Neutron Stars: Extreme density and magnetic forces", "Nebulae: The vibrant nurseries where stars are born", "The Cosmic Microwave Background: The echo of the Big Bang"]
    },
    {
        id: "q45", category: "Cosmos",
        text: "If you could travel through time once, where do you set the coordinates?",
        options: ["10,000 years into the future to see humanity's ultimate fate", "The dawn of civilization to witness ancient mysteries solved", "100 years into the future to see technology's peak", "My own childhood to give myself crucial advice"]
    },
    {
        id: "q46", category: "Cosmos",
        text: "Do you believe time travel into the past is physically possible?",
        options: ["Yes—physics will eventually unlock closed timelike curves", "No—the grandfather paradox proves nature forbids it", "Only through parallel universe branching", "Irrelevant—the future is all that matters"]
    },
    {
        id: "q47", category: "Cosmos",
        text: "If you could experience one event in space safety, what would it be?",
        options: ["Falling past the event horizon of a supermassive black hole", "Witnessing a supernova explosion up close", "Standing on a planet orbiting a binary star system", "Floating freely in interstellar space between galaxies"]
    },
    {
        id: "q48", category: "Cosmos",
        text: "What concept in physics or astronomy bends your mind the most?",
        options: ["Quantum Entanglement (Action at a distance)", "Time dilation near massive gravity wells", "The expanding universe accelerating into empty dark energy", "The possibility of a Multiverse with different laws of physics"]
    },
    {
        id: "q49", category: "Cosmos",
        text: "How do you view humanity's place in the universe?",
        options: ["We are the universe experiencing itself through consciousness", "We are a fragile accident that must work hard to survive", "We are pioneers meant to spread intelligence across the stars", "A temporary phase in the evolution toward synthetic intelligence"]
    },
    {
        id: "q50", category: "Cosmos",
        text: "What ultimately brought you to this stargazing event tonight?",
        options: ["A genuine passion for astronomy and space science 🌌", "The thrill of night-long intellectual discussions and social vibes", "Curiosity about what the club has built and hosted", "A spontaneous decision to seek a memorable night experience"]
    },

    // 50 NEW ADDITIONAL QUESTIONS
    {
        id: "q51", category: "Philosophy",
        text: "If you could know the absolute truth to one fundamental question, what would you ask?",
        options: ["Is there a purpose to human existence?", "How did the universe truly begin?", "What happens to consciousness after death?", "Are we alone in the universe?"]
    },
    {
        id: "q52", category: "Philosophy",
        text: "Which of these best describes your approach to risk?",
        options: ["I carefully calculate every variable before acting", "I trust my instincts and leap when it feels right", "I actively seek out high-risk, high-reward scenarios", "I prioritize stability and avoid unnecessary gambles"]
    },
    {
        id: "q53", category: "Philosophy",
        text: "If you could redesign the human body, what flaw would you fix first?",
        options: ["Our need for sleep", "Our emotional fragility", "Our susceptibility to disease and aging", "Our limited sensory perception"]
    },
    {
        id: "q54", category: "Philosophy",
        text: "What is the most powerful force shaping human history?",
        options: ["Technological innovation", "The pursuit of power and resources", "Ideological and religious movements", "Random chance and chaos"]
    },
    {
        id: "q55", category: "Philosophy",
        text: "If you were to write a book, what genre would it be?",
        options: ["A complex, world-building sci-fi epic", "A deep, psychological character study", "A practical guide to mastering a specific skill", "A philosophical memoir"]
    },
    {
        id: "q56", category: "Philosophy",
        text: "How do you define personal freedom?",
        options: ["The ability to act without societal constraints", "Financial independence and lack of obligation", "Mental clarity and emotional detachment", "The freedom to choose one's own responsibilities"]
    },
    {
        id: "q57", category: "Philosophy",
        text: "Which concept terrifies you more?",
        options: ["Being completely forgotten after you die", "Being remembered for something you despise", "Living forever with no way to end it", "Knowing exactly how and when the world ends"]
    },
    {
        id: "q58", category: "Philosophy",
        text: "If you could communicate with one species of animal, which would you choose?",
        options: ["Deep-sea creatures, to learn about the ocean's depths", "Birds, to see the world from above", "Dogs, to understand their loyalty and simplicity", "Primates, to explore our evolutionary connection"]
    },
    {
        id: "q59", category: "Philosophy",
        text: "What is your relationship with nostalgia?",
        options: ["I cherish memories but focus on the future", "I often long for simpler times", "I find it a useless distraction from the present", "It fuels my creativity and art"]
    },
    {
        id: "q60", category: "Philosophy",
        text: "Which historical era would you most want to experience firsthand?",
        options: ["The intellectual awakening of the Renaissance", "The societal upheaval of the 1960s", "The dawn of early civilization", "The height of the Roman Empire"]
    },

    {
        id: "q61", category: "Abstract",
        text: "If your personality was a landscape, what would it look like?",
        options: ["A dense, mysterious forest", "A stark, beautiful desert", "A bustling, neon-lit metropolis", "A calm, isolated mountain peak"]
    },
    {
        id: "q62", category: "Abstract",
        text: "Which sense do you rely on most heavily?",
        options: ["Vision—I need to see things to understand them", "Hearing—I am highly sensitive to tone and sound", "Touch—I am grounded by physical sensations", "Intuition—my 'sixth sense' rarely fails me"]
    },
    {
        id: "q63", category: "Abstract",
        text: "If you were to become an expert in a seemingly useless skill, what would it be?",
        options: ["Perfectly imitating any accent", "Memorizing the layout of ancient cities", "Juggling complex objects", "Identifying obscure constellations"]
    },
    {
        id: "q64", category: "Abstract",
        text: "What is your default state when you have nothing to do?",
        options: ["Restless pacing and seeking stimulation", "Deep immersion in a hobby or interest", "Mindless scrolling or consumption", "Quiet contemplation and daydreaming"]
    },
    {
        id: "q65", category: "Abstract",
        text: "If you could instantly master one musical instrument, what would it be?",
        options: ["The piano—for its emotional range and complexity", "The electric guitar—for its raw power and expression", "The violin—for its precision and classical beauty", "A synthesizer—to create entirely new sounds"]
    },
    {
        id: "q66", category: "Abstract",
        text: "Which color palette resonates with you most?",
        options: ["Cool blues and deep purples", "Warm earth tones and muted greens", "Stark black, white, and gray", "Vibrant, high-contrast neon colors"]
    },
    {
        id: "q67", category: "Abstract",
        text: "If you had to live in a fictional universe, which would you choose?",
        options: ["A high-fantasy realm with magic and dragons", "A gritty cyberpunk dystopia", "A utopian, post-scarcity sci-fi world", "A slightly altered version of our own reality"]
    },
    {
        id: "q68", category: "Abstract",
        text: "What is your preferred method of travel?",
        options: ["A long, scenic train ride", "A fast, efficient flight", "Driving alone on an open highway", "Walking or hiking through nature"]
    },
    {
        id: "q69", category: "Abstract",
        text: "If you could only eat one type of cuisine for the rest of your life, what would it be?",
        options: ["Complex, spicy Asian dishes", "Comforting, hearty Italian meals", "Fresh, light Mediterranean fare", "Experimental, modern fusion cuisine"]
    },
    {
        id: "q70", category: "Abstract",
        text: "What is your favorite kind of weather?",
        options: ["A heavy, dramatic thunderstorm", "A crisp, clear autumn day", "A bright, intensely sunny afternoon", "A quiet, snowy winter night"]
    },

    {
        id: "q71", category: "Dilemmas",
        text: "You can save either a brilliant scientist working on a cure for cancer or a group of five average people. Who do you save?",
        options: ["The scientist—the potential benefit to humanity is greater", "The five people—every life has equal value", "I refuse to choose, seeking an impossible third option", "I paralyze and let fate decide"]
    },
    {
        id: "q72", category: "Dilemmas",
        text: "Would you rather have the ability to read minds or the ability to see one day into the future?",
        options: ["Read minds—understanding people is ultimate power", "See the future—predictability guarantees success", "Neither—both would ruin the experience of living", "Read minds, but only when I choose to"]
    },
    {
        id: "q73", category: "Dilemmas",
        text: "If you could erase one traumatic memory from your past, would you?",
        options: ["Yes, to free myself from the emotional burden", "No, it shaped who I am today", "Only if it didn't change my current relationships", "Yes, but I would want someone else to hold the memory for me"]
    },
    {
        id: "q74", category: "Dilemmas",
        text: "You find a wallet containing $10,000 and ID. You know the owner is a billionaire who acquired their wealth unethically. What do you do?",
        options: ["Keep the money—they won't miss it and don't deserve it", "Return it—my integrity is more important than their ethics", "Donate the money to charity anonymously", "Take a small 'finder's fee' and return the rest"]
    },
    {
        id: "q75", category: "Dilemmas",
        text: "Would you accept a million dollars if it meant a random person in the world would lose everything they own?",
        options: ["No, I couldn't live with the guilt", "Yes, the world is unfair anyway", "I would try to find the person and share the money", "I would use the money to do more good than the harm caused"]
    },
    {
        id: "q76", category: "Dilemmas",
        text: "If you were forced to give up one of your five senses, which would it be?",
        options: ["Smell", "Taste", "Hearing", "Sight"]
    },
    {
        id: "q77", category: "Dilemmas",
        text: "Would you rather be the smartest person in a room of average people, or average in a room of geniuses?",
        options: ["Smartest—I prefer to lead and instruct", "Average—I prefer to learn and be challenged", "It depends entirely on the context", "I'd rather be alone"]
    },
    {
        id: "q78", category: "Dilemmas",
        text: "If you could push a button to end all human suffering, but it also ended all human joy, would you push it?",
        options: ["No, joy gives suffering meaning", "Yes, the absence of suffering is the highest good", "I would seek a way to separate the two", "I would refuse the responsibility of the choice"]
    },
    {
        id: "q79", category: "Dilemmas",
        text: "You can either know all the secrets of the universe, but never communicate them, or know nothing special, but be a master communicator. Which do you choose?",
        options: ["Secrets—internal understanding is enough for me", "Communicator—connection with others is more valuable", "Neither is appealing to me", "I would try to write the secrets down in code"]
    },
    {
        id: "q80", category: "Dilemmas",
        text: "Would you rather have a life that is short and intensely meaningful, or long, comfortable, but largely unremarkable?",
        options: ["Short and meaningful—quality over quantity", "Long and comfortable—I value peace and stability", "I want both, even if it's unlikely", "I'd prefer not to know how long I have"]
    },

    {
        id: "q81", category: "Deep Dive",
        text: "What is your biggest fear regarding the future?",
        options: ["Loss of personal freedom and autonomy", "Ecological collapse or global disaster", "The stagnation of human progress", "Dying without having made a significant impact"]
    },
    {
        id: "q82", category: "Deep Dive",
        text: "How do you handle intense stress?",
        options: ["I compartmentalize and focus purely on tasks", "I seek emotional support from close friends", "I engage in escapism (games, movies, reading)", "I exercise or use physical exertion to clear my mind"]
    },
    {
        id: "q83", category: "Deep Dive",
        text: "What is your definition of success?",
        options: ["Financial independence and security", "Mastery of a craft and peer recognition", "Leaving a lasting positive legacy on the world", "Living a peaceful, contented life surrounded by loved ones"]
    },
    {
        id: "q84", category: "Deep Dive",
        text: "Which aspect of human nature disappoints you the most?",
        options: ["Our capacity for cruelty and violence", "Our tendency towards greed and selfishness", "Our willful ignorance and refusal to learn", "Our tribalism and inability to cooperate globally"]
    },
    {
        id: "q85", category: "Deep Dive",
        text: "If you could change one fundamental law of physics, what would it be?",
        options: ["Eliminate entropy so things don't decay", "Allow faster-than-light travel", "Make anti-gravity easily accessible", "Remove the limit on the speed of information"]
    },
    {
        id: "q86", category: "Deep Dive",
        text: "What is the most valuable lesson you've learned from a failure?",
        options: ["That resilience is more important than initial talent", "That trusting the wrong people is costly", "That proper planning prevents poor performance", "That some things are simply out of my control"]
    },
    {
        id: "q87", category: "Deep Dive",
        text: "How do you view the concept of 'destiny'?",
        options: ["It's a comforting illusion; we create our own paths", "I believe certain events are meant to happen", "It's a mix of our choices and predetermined circumstances", "I haven't thought about it enough to decide"]
    },
    {
        id: "q88", category: "Deep Dive",
        text: "What role does art play in your life?",
        options: ["It's a crucial tool for understanding the human condition", "It's a pleasant distraction, but not essential", "I actively create it as a form of expression", "I appreciate it primarily for its aesthetic value"]
    },
    {
        id: "q89", category: "Deep Dive",
        text: "If you were remembered for only one sentence, what would you want it to be?",
        options: ["They relentlessly pursued truth and knowledge.", "They loved deeply and without reservation.", "They changed the world for the better.", "They lived life entirely on their own terms."]
    },
    {
        id: "q90", category: "Deep Dive",
        text: "What is your biggest unfulfilled ambition?",
        options: ["To create something universally recognized and celebrated", "To completely master a complex skill or discipline", "To travel the world and experience every major culture", "To achieve absolute financial freedom"]
    },

    {
        id: "q91", category: "Quirks",
        text: "Do you prefer mornings or nights?",
        options: ["Early mornings—when the world is quiet and fresh", "Late nights—when distractions fade and focus peaks", "Mid-day—when energy and activity are highest", "I don't have a preference; I adapt to my schedule"]
    },
    {
        id: "q92", category: "Quirks",
        text: "How do you organize your physical workspace?",
        options: ["Meticulously tidy, everything has its place", "Organized chaos—it looks messy, but I know where everything is", "Minimalist—only the absolute essentials", "I rarely work in the same place twice"]
    },
    {
        id: "q93", category: "Quirks",
        text: "What is your favorite way to consume information?",
        options: ["Reading dense, detailed articles or books", "Listening to long-form podcasts or audiobooks", "Watching educational videos or documentaries", "Engaging in active discussion and debate"]
    },
    {
        id: "q94", category: "Quirks",
        text: "Which of these minor inconveniences bothers you the most?",
        options: ["Slow internet or lagging technology", "People walking slowly in front of me", "Unexpected changes to my schedule", "Being slightly too hot or too cold"]
    },
    {
        id: "q95", category: "Quirks",
        text: "How do you handle receiving a compliment?",
        options: ["I accept it graciously and move on", "I feel awkward and immediately downplay it", "I analyze it for sincerity", "I try to return a compliment immediately"]
    },
    {
        id: "q96", category: "Quirks",
        text: "What is your relationship with lists?",
        options: ["I live and die by my to-do lists", "I make them, but rarely follow them", "I prefer to keep everything in my head", "I only use them for complex, multi-step projects"]
    },
    {
        id: "q97", category: "Quirks",
        text: "Which phase of a project do you procrastinate on the most?",
        options: ["Getting started—the blank page is intimidating", "The messy middle—when initial enthusiasm wanes", "The final polish—perfectionism delays completion", "I rarely procrastinate; I just power through"]
    },
    {
        id: "q98", category: "Quirks",
        text: "What is your preferred social battery recharge method?",
        options: ["Complete isolation in a dark, quiet room", "A long walk or hike in nature", "Engaging in a low-stakes hobby alone", "Spending quiet time with one very close friend"]
    },
    {
        id: "q99", category: "Quirks",
        text: "How do you react to silence in a conversation?",
        options: ["I find it comfortable and necessary", "I feel an urgent need to fill it with words", "It depends entirely on who I'm with", "I use it as an opportunity to observe the other person"]
    },
    {
        id: "q100", category: "Quirks",
        text: "What is your favorite type of puzzle or game?",
        options: ["Logic puzzles (Sudoku, chess, coding challenges)", "Creative or word games (crosswords, creative writing)", "Social deduction games (Mafia, Among Us)", "Action-oriented or reflex-based games"]
    }
];
