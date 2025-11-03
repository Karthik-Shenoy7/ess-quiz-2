// Environmental Science & Sustainability Quiz Application - Complete 196 Question Bank
class ESSQuiz {
    constructor() {
        // Complete question bank with all  ESS questions from the PDF
      this.questionBank = [
  {
    id: 1,
    question: "Sustainability focuses on:",
    options: ["Meeting present needs without compromising future needs", "Present generation only", "Profit maximization", "Future generations only"],
    correct: 0
  },
  {
    id: 2,
    question: "The three main aspects of sustainability are:",
    options: ["Environmental, social, economic", "Scientific, ecological, spiritual", "Political, cultural, ecological", "Financial, agricultural, cultural"],
    correct: 0
  },
  {
    id: 3,
    question: "How many Sustainable Development Goals (SDGs) are there?",
    options: ["17", "18", "16", "15"],
    correct: 0
  },
  {
    id: 4,
    question: "SDG 13 deals with:",
    options: ["Climate action", "Life on Land", "Gender equality", "Clean water"],
    correct: 0
  },
  {
    id: 5,
    question: "The Montreal Protocol is related to:",
    options: ["Ozone layer protection", "Carbon credits", "Climate change", "Solid waste management"],
    correct: 0
  },
  {
    id: 6,
    question: "Carbon credit is earned by:",
    options: ["Reducing greenhouse gas emissions", "Increasing industrial waste", "Using more fossil fuels", "Importing resources"],
    correct: 0
  },
  {
    id: 7,
    question: "The Brundtland Commission Report (1987) is famous for:",
    options: ["Definition of sustainable development", "SDG targets", "Carbon footprint analysis", "Environmental accounting"],
    correct: 0
  },
  {
    id: 8,
    question: "The Paris Agreement was signed in:",
    options: ["2015", "2016", "1992", "1987"],
    correct: 0
  },
  {
    id: 9,
    question: "The water footprint measures:",
    options: ["Total freshwater consumed directly and indirectly", "Only industrial water use", "Ocean water level", "Rainwater alone"],
    correct: 0
  },
  {
    id: 10,
    question: "Assertion (A): Renewable energy sources reduce greenhouse gas emissions. Reason (R): They do not emit CO₂ during operation.",
    options: ["A and R true, R is correct explanation", "A and R true, but unrelated", "A true, R false", "A false, R true"],
    correct: 0
  },
  {
    id: 11,
    question: "Which is a social aspect of sustainability?",
    options: ["Public health", "Biodiversity", "Energy efficiency", "Recycling"],
    correct: 0
  },
  {
    id: 12,
    question: "Kyoto Protocol is related to:",
    options: ["Greenhouse gas reduction", "Ozone protection", "Biodiversity", "Forest laws"],
    correct: 0
  },
  {
    id: 13,
    question: "A carbon credit equals:",
    options: ["1 tonne CO₂", "10 tonnes CO₂", "1 kg CO₂", "100 tonnes CO₂"],
    correct: 0
  },
  {
    id: 14,
    question: "Which SDG ensures “Affordable and Clean Energy”?",
    options: ["SDG 7", "SDG 5", "SDG 6", "SDG 8"],
    correct: 0
  },
  {
    id: 15,
    question: "Which is an example of climate change mitigation?",
    options: ["Afforestation", "Urban sprawl", "Overfishing", "Burning coal"],
    correct: 0
  },
  {
    id: 16,
    question: "Assertion (A): SDG 14 relates to Life below Water. Reason (R): It addresses marine pollution.",
    options: ["A and R true, R is correct explanation", "A true, R false", "Both false", "A false, R true"],
    correct: 0
  },
  {
    id: 17,
    question: "Which stage has highest carbon footprint in manufacturing?",
    options: ["Raw material extraction", "Packaging", "Transport", "Disposal"],
    correct: 0
  },
  {
    id: 18,
    question: "The main GHG from agriculture is:",
    options: ["Methane", "CO₂", "Nitrous oxide", "Ozone"],
    correct: 0
  },
  {
    id: 19,
    question: "Carbon neutrality means:",
    options: ["Balancing emitted & absorbed CO₂", "Zero energy use", "Only solar energy", "Avoiding trees"],
    correct: 0
  },
  {
    id: 20,
    question: "Which SDG relates to Responsible Consumption & Production?",
    options: ["SDG 12", "SDG 10", "SDG 11", "SDG 13"],
    correct: 0
  },

  {
    id: 21,
    question: "ESG stands for:",
    options: ["Environmental, Social, Governance", "Energy, Sustainability, Green", "Environmental, Security, Global", "Economic, Social, Green"],
    correct: 0
  },
  {
    id: 22,
    question: "Which of the following is a non–renewable resource?",
    options: ["Coal", "Solar energy", "Biomass", "Wind energy"],
    correct: 0
  },
  {
    id: 23,
    question: "Which SDG focuses on Zero Hunger?",
    options: ["SDG 2", "SDG 3", "SDG 1", "SDG 4"],
    correct: 0
  },
  {
    id: 24,
    question: "Which gas has the highest global warming potential (GWP)?",
    options: ["SF₆", "CO₂", "Methane", "Nitrous oxide"],
    correct: 0
  },
  {
    id: 25,
    question: "A circular economy mainly promotes:",
    options: ["Reuse, Reduce, Recycle", "Linear consumption", "Increased mining", "Higher disposal"],
    correct: 0
  },
  {
    id: 26,
    question: "The major cause of coral bleaching is:",
    options: ["Ocean warming", "Noise pollution", "Sewage discharge", "Fishing nets"],
    correct: 0
  },
  {
    id: 27,
    question: "The process of converting waste materials into new materials is called:",
    options: ["Recycling", "Landfilling", "Incineration", "Composting"],
    correct: 0
  },
  {
    id: 28,
    question: "The IPCC deals with:",
    options: ["Climate change assessment", "Oil price regulation", "Nuclear safety", "Forest certification"],
    correct: 0
  },
  {
    id: 29,
    question: "Which energy source has the lowest carbon emissions?",
    options: ["Wind", "Natural gas", "Diesel", "Coal"],
    correct: 0
  },
  {
    id: 30,
    question: "Assertion (A): Biodiversity improves ecosystem stability. Reason (R): It increases genetic variety within species.",
    options: ["A and R true, R is correct explanation", "A and R true, but unrelated", "A true, R false", "A false, R true"],
    correct: 0
  },
  {
    id: 31,
    question: "Sustainability reporting is also called:",
    options: ["Triple bottom line reporting", "Revenue management", "Fiscal balancing", "Product lifecycle costing"],
    correct: 0
  },
  {
    id: 32,
    question: "Which SDG focuses on Gender Equality?",
    options: ["SDG 5", "SDG 4", "SDG 3", "SDG 10"],
    correct: 0
  },
  {
    id: 33,
    question: "The ozone layer is mainly found in:",
    options: ["Stratosphere", "Troposphere", "Mesosphere", "Ionosphere"],
    correct: 0
  },
  {
    id: 34,
    question: "The main reason for rise in sea level is:",
    options: ["Melting of ice caps", "Soil erosion", "Deforestation", "Reduced rainfall"],
    correct: 0
  },
  {
    id: 35,
    question: "‘One Health’ approach links:",
    options: ["Human, animal & environmental health", "Human health only", "Agricultural development only", "Animal welfare only"],
    correct: 0
  },
  {
    id: 36,
    question: "Carbon sequestration refers to:",
    options: ["Capturing and storing CO₂", "Burning fossil fuels", "Deforestation", "Emission of methane"],
    correct: 0
  },
  {
    id: 37,
    question: "Which of the following is an example of e–waste?",
    options: ["Old computers", "Plastic bags", "Food scraps", "Glass bottles"],
    correct: 0
  },
  {
    id: 38,
    question: "What does SDG 6 ensure?",
    options: ["Clean water & sanitation", "Zero hunger", "Affordable energy", "Equality"],
    correct: 0
  },
  {
    id: 39,
    question: "Which is an example of a renewable resource?",
    options: ["Hydropower", "Petroleum", "Coal", "Minerals"],
    correct: 0
  },
  {
    id: 40,
    question: "The term “biodiversity hotspot” refers to:",
    options: ["Region with high species richness & threat", "Area with high rainfall only", "Region with high population density", "Place with only aquatic species"],
    correct: 0
  },
  {
    id: 41,
    question: "Greenwashing refers to:",
    options: ["Misleading claims about environmental benefits", "Genuine eco–friendly branding", "Government subsidy on green products", "Cleaning polluted rivers"],
    correct: 0
  },
  {
    id: 42,
    question: "The largest contributor to global CO₂ emissions is:",
    options: ["Energy sector", "Agriculture", "Waste management", "Transport sector"],
    correct: 0
  },
  {
    id: 43,
    question: "SDG 15 focuses on:",
    options: ["Life on Land", "Life below Water", "Climate Action", "Responsible Consumption"],
    correct: 0
  },
  {
    id: 44,
    question: "The most common refrigerant gas banned by Montreal Protocol was:",
    options: ["CFCs", "Nitrous oxide", "Sulphur dioxide", "Methane"],
    correct: 0
  },
  {
    id: 45,
    question: "A Life Cycle Assessment (LCA) evaluates:",
    options: ["Environmental impact of a product from cradle to grave", "Price variation over time", "Chemical energy stored in biomass", "Social effects of advertising"],
    correct: 0
  },
  {
    id: 46,
    question: "The major cause of acid rain is:",
    options: ["SO₂ and NOₓ emissions", "Ozone depletion", "Dust storms", "UV radiation"],
    correct: 0
  },
  {
    id: 47,
    question: "Which is a non–biodegradable waste?",
    options: ["Plastic bottles", "Human waste", "Food leftovers", "Paper"],
    correct: 0
  },
  {
    id: 48,
    question: "Photosynthesis removes which gas from the atmosphere?",
    options: ["CO₂", "O₂", "Methane", "Nitrogen"],
    correct: 0
  },
  {
    id: 49,
    question: "Which of the following is NOT a greenhouse gas?",
    options: ["Oxygen (O₂)", "Methane (CH₄)", "Carbon dioxide (CO₂)", "Nitrous oxide (N₂O)"],
    correct: 0
  },
  {
    id: 50,
    question: "The UN conference where SDGs were adopted was:",
    options: ["Rio+20 (2012)", "Paris COP21 (2015)", "Stockholm (1972)", "Kyoto (1997)"],
    correct: 0
  },
  {
    id: 51,
    question: "Sustainable agriculture aims at:",
    options: ["Long–term soil fertility", "Maximum pesticide use", "Growing only export crops", "Eliminating biodiversity"],
    correct: 0
  },
  {
    id: 52,
    question: "Eutrophication in lakes is caused by:",
    options: ["Excess nutrients (N & P)", "High dissolved oxygen", "Low temperature", "Acid water"],
    correct: 0
  },
  {
    id: 53,
    question: "The term “zero waste” promotes:",
    options: ["Recycling and reusing everything possible", "Burning all waste", "Exporting waste to other countries", "Storing waste in landfills"],
    correct: 0
  },
  {
    id: 54,
    question: "“Carbon footprint” is measured in:",
    options: ["Tonnes of CO₂ equivalent", "Parts per million", "Joules per second", "Kg of solid waste"],
    correct: 0
  },
  {
    id: 55,
    question: "A country becomes carbon negative when:",
    options: ["It absorbs more CO₂ than it emits", "It stops recycling", "It stops using renewable energy", "It has zero forests"],
    correct: 0
  },
  {
    id: 56,
    question: "Which SDG focuses on Good Health & Wellbeing?",
    options: ["SDG 3", "SDG 2", "SDG 8", "SDG 6"],
    correct: 0
  },
  {
    id: 57,
    question: "Which human activity increases methane emissions most?",
    options: ["Livestock farming", "Solar farms", "Wind turbines", "Hydropower"],
    correct: 0
  },
  {
    id: 58,
    question: "The main cause of freshwater scarcity is:",
    options: ["Over–extraction & pollution", "Lack of oceans", "Low atmospheric CO₂", "Ozone layer formation"],
    correct: 0
  },
  {
    id: 59,
    question: "Which country is currently the largest emitter of CO₂?",
    options: ["China", "India", "USA", "Russia"],
    correct: 0
  },
  {
    id: 60,
    question: "Reducing the use of single–use plastics supports which SDG?",
    options: ["SDG 14", "SDG 1", "SDG 4", "SDG 9"],
    correct: 0
  },
  {
    id: 61,
    question: "The major contributor to marine plastic waste is:",
    options: ["Single–use plastics", "Agricultural soil runoff", "Oil spills", "Thermal pollution"],
    correct: 0
  },
  {
    id: 62,
    question: "Which layer of the atmosphere contains most weather changes?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    correct: 0
  },
  {
    id: 63,
    question: "Which organization releases the Human Development Index (HDI)?",
    options: ["UNDP", "UNEP", "WHO", "IPCC"],
    correct: 0
  },
  {
    id: 64,
    question: "The term “fair trade” mainly refers to:",
    options: ["Ethical pricing for producers & farmers", "Trade without taxation", "Global stock exchange", "Luxury export goods"],
    correct: 0
  },
  {
    id: 65,
    question: "Which SDG relates to Quality Education?",
    options: ["SDG 4", "SDG 5", "SDG 8", "SDG 11"],
    correct: 0
  },
  {
    id: 66,
    question: "The primary source of groundwater contamination is:",
    options: ["Industrial waste discharge", "Cloud formation", "River flow", "Wind erosion"],
    correct: 0
  },
  {
    id: 67,
    question: "Ozone depletion mainly causes:",
    options: ["Increase in UV radiation", "Rise in CO₂ concentration", "Ocean acidification", "Greenhouse effect"],
    correct: 0
  },
  {
    id: 68,
    question: "A “carbon sink” refers to:",
    options: ["Natural system that absorbs CO₂", "A factory releasing methane", "A fossil fuel deposit", "A thermal power station"],
    correct: 0
  },
  {
    id: 69,
    question: "The first Earth Summit was held in:",
    options: ["1992, Rio de Janeiro", "1987, New York", "1972, Paris", "2002, Johannesburg"],
    correct: 0
  },
  {
    id: 70,
    question: "Which is a pollutant causing smog?",
    options: ["NO₂", "O₂", "Helium", "Neon"],
    correct: 0
  },
  {
    id: 71,
    question: "“Extended Producer Responsibility” (EPR) applies to:",
    options: ["Waste management by product manufacturers", "Taxation on raw materials", "Free market trade", "Government subsidy on fuel"],
    correct: 0
  },
  {
    id: 72,
    question: "Which SDG is related to Decent Work & Economic Growth?",
    options: ["SDG 8", "SDG 6", "SDG 11", "SDG 3"],
    correct: 0
  },
  {
    id: 73,
    question: "Which renewable energy is generated from Earth's heat?",
    options: ["Geothermal", "Tidal", "Biomass", "Solar photovoltaic"],
    correct: 0
  },
  {
    id: 74,
    question: "The main cause of urban heat island effect is:",
    options: ["Concrete and asphalt absorbing heat", "Presence of lakes", "Green belt areas", "Low population density"],
    correct: 0
  },
  {
    id: 75,
    question: "Environmental Impact Assessment (EIA) is done:",
    options: ["Before starting a project", "After project failure", "Only for foreign projects", "For agricultural land only"],
    correct: 0
  },
  {
    id: 76,
    question: "Which gas is responsible for photochemical smog?",
    options: ["Ozone at ground level", "Oxygen gas", "Helium", "Argon"],
    correct: 0
  },
  {
    id: 77,
    question: "The main purpose of carbon tax is:",
    options: ["Discourage fossil fuel use", "Promote coal mining", "Reduce renewable energy", "Increase industrial waste"],
    correct: 0
  },
  {
    id: 78,
    question: "What is the biggest threat to mangroves?",
    options: ["Coastal development", "Volcanoes", "Earthquakes", "Snowfall"],
    correct: 0
  },
  {
    id: 79,
    question: "The SDG 11 deals with:",
    options: ["Sustainable Cities & Communities", "Zero Hunger", "Quality Education", "Partnerships for Goals"],
    correct: 0
  },
  {
    id: 80,
    question: "Which instrument measures air pollution?",
    options: ["Air Quality Index Monitor", "Barometer", "Seismograph", "Hygrometer"],
    correct: 0
  },
  {
    id: 81,
    question: "The term “biocapacity” refers to:",
    options: ["Ability of ecosystem to regenerate resources", "Total land area of a country", "Amount of fossil fuel available", "Capacity of machines to recycle waste"],
    correct: 0
  },
  {
    id: 82,
    question: "Main source of NOₓ pollution is:",
    options: ["Vehicle emissions", "Forests", "Oceans", "Wind turbines"],
    correct: 0
  },
  {
    id: 83,
    question: "The SDG 9 focuses on:",
    options: ["Industry, Innovation & Infrastructure", "Affordable Clean Energy", "No Poverty", "Climate Action"],
    correct: 0
  },
  {
    id: 84,
    question: "Which of the following is NOT a fossil fuel?",
    options: ["Hydrogen gas", "Coal", "Oil", "Natural gas"],
    correct: 0
  },
  {
    id: 85,
    question: "The main cause of desertification is:",
    options: ["Overgrazing", "Cloud seeding", "Volcanic eruptions", "Lunar tides"],
    correct: 0
  },
  {
    id: 86,
    question: "Which of the following is a biodiversity conservation method?",
    options: ["Protected areas", "Industrial expansion", "Deforestation", "Land mining"],
    correct: 0
  },
  {
    id: 87,
    question: "The global temperature rise limit set in Paris Agreement is:",
    options: ["1.5°C", "5°C", "3°C", "0.5°C"],
    correct: 0
  },
  {
    id: 88,
    question: "SDG 1 talks about:",
    options: ["No Poverty", "No Hunger", "Good Health", "Clean Water"],
    correct: 0
  },
  {
    id: 89,
    question: "“Ecological footprint” measures:",
    options: ["Human demand on Earth’s ecosystems", "Weight of total recycling waste", "Distance traveled by transport", "CO₂ present in atmosphere"],
    correct: 0
  },
  {
    id: 90,
    question: "Which is a primary microplastic source?",
    options: ["Synthetic clothing fibers", "Sand grains", "Iron filings", "Coconut husk"],
    correct: 0
  },
  {
    id: 91,
    question: "The main reason for ocean acidification is:",
    options: ["Absorption of CO₂", "Oil spills", "Dumping of plastics", "Marine deforestation"],
    correct: 0
  },
  {
    id: 92,
    question: "Which country became the first carbon–negative nation?",
    options: ["Bhutan", "Japan", "Germany", "Brazil"],
    correct: 0
  },
  {
    id: 93,
    question: "The “Reduce–Reuse–Recycle” principle belongs to:",
    options: ["Waste management", "Space exploration", "Food processing", "Atomic energy"],
    correct: 0
  },
  {
    id: 94,
    question: "Who publishes the annual Global Environment Outlook (GEO)?",
    options: ["UNEP", "WHO", "UNICEF", "FAO"],
    correct: 0
  },
  {
    id: 95,
    question: "Which SDG is related to Peace, Justice & Strong Institutions?",
    options: ["SDG 16", "SDG 17", "SDG 14", "SDG 12"],
    correct: 0
  },
  {
    id: 96,
    question: "The term “Anthropocene” refers to:",
    options: ["Human–dominated geologic age", "Ancient volcanic age", "Prehistoric ice age", "Fossil fuel era only"],
    correct: 0
  }
];



        // Admin credentials
        this.adminCredentials = {
            username: "ESSADMIN",
            password: "GREENPLANET"
        };

        // Quiz state
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.studentName = '';
        this.startTime = null;
        this.endTime = null;
        this.timer = null;
        this.timeRemaining = 20 * 60; // 20 minutes in seconds
        this.results = null;
    }

    init() {
        console.log('Initializing Environmental Science & Sustainability Quiz with Complete 196 Question Bank...');
        this.initializeStorage();
        this.attachEventListeners();
        this.showScreen('welcomeScreen');
        
        // Focus name input
        setTimeout(() => {
            const nameInput = document.getElementById('studentName');
            if (nameInput) {
                nameInput.focus();
            }
        }, 200);
    }

    initializeStorage() {
        try {
            const saved = localStorage.getItem('essQuizData');
            if (!saved) {
                localStorage.setItem('essQuizData', JSON.stringify([]));
            }
        } catch (e) {
            console.warn('localStorage not available');
        }
    }

    attachEventListeners() {
        // Use event delegation and direct assignment
        document.addEventListener('click', this.handleGlobalClick.bind(this));
        document.addEventListener('keypress', this.handleGlobalKeypress.bind(this));
    }

    handleGlobalClick(event) {
        const target = event.target;
        const id = target.id;
        
        // Handle all button clicks
        switch (id) {
            case 'startQuiz':
                event.preventDefault();
                this.startQuiz();
                break;
            case 'adminGear':
                event.preventDefault();
                this.showAdminModal();
                break;
            case 'prevQuestion':
                event.preventDefault();
                this.navigateQuestion(-1);
                break;
            case 'nextQuestion':
                event.preventDefault();
                this.navigateQuestion(1);
                break;
            case 'submitQuiz':
                event.preventDefault();
                this.submitQuiz();
                break;
            case 'reviewAnswers':
                event.preventDefault();
                this.showReviewScreen();
                break;
            case 'retakeQuiz':
                event.preventDefault();
                this.retakeQuiz();
                break;
            case 'backToResults':
                event.preventDefault();
                this.showResults();
                break;
            case 'closeAdminModal':
            case 'cancelAdminLogin':
                event.preventDefault();
                this.hideAdminModal();
                break;
            case 'adminLogin':
                event.preventDefault();
                this.handleAdminLogin();
                break;
            case 'adminLogout':
                event.preventDefault();
                this.adminLogout();
                break;
            case 'exportData':
                event.preventDefault();
                this.exportData();
                break;
        }

        // Handle option selection
        if (target.closest('.option')) {
            const option = target.closest('.option');
            const value = parseInt(option.dataset.value);
            const question = this.currentQuestions[this.currentQuestionIndex];
            this.selectAnswer(question.id, value);
        }

        // Handle modal backdrop
        if (target.id === 'adminModal') {
            this.hideAdminModal();
        }
    }

    handleGlobalKeypress(event) {
        if (event.key === 'Enter') {
            const target = event.target;
            if (target.id === 'studentName') {
                event.preventDefault();
                this.startQuiz();
            } else if (target.id === 'adminPassword') {
                event.preventDefault();
                this.handleAdminLogin();
            }
        }
    }

    // Enhanced shuffling function for options within questions
    shuffleQuestionOptions(question) {
        const shuffledQuestion = { ...question };
        const originalOptions = [...question.options];
        const originalCorrect = question.correct;
        
        // Create array of indices and shuffle
        const indices = [0, 1, 2, 3];
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        // Reorder options and update correct answer
        shuffledQuestion.options = indices.map(index => originalOptions[index]);
        shuffledQuestion.correct = indices.indexOf(originalCorrect);
        
        return shuffledQuestion;
    }

    // Function to randomly select 40 questions from 196
    selectRandomQuestions(count = 40) {
        console.log(`Selecting ${count} random questions from ${this.questionBank.length} available questions...`);
        
        // Create a copy of question bank to avoid modifying original
        const availableQuestions = [...this.questionBank];
        const selectedQuestions = [];
        
        // Randomly select questions
        for (let i = 0; i < count && availableQuestions.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * availableQuestions.length);
            const selectedQuestion = availableQuestions.splice(randomIndex, 1)[0];
            selectedQuestions.push(selectedQuestion);
        }
        
        console.log(`Selected ${selectedQuestions.length} questions with IDs:`, selectedQuestions.map(q => q.id));
        return selectedQuestions;
    }

    startQuiz() {
        console.log('Starting quiz...');
        
        const nameInput = document.getElementById('studentName');
        const name = nameInput ? nameInput.value.trim() : '';
        
        if (!name) {
            alert('Please enter your name to start the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = name;
        this.setupQuizWithShuffling();
        this.showScreen('quizScreen');
        this.startTimer();
    }

    setupQuizWithShuffling() {
        console.log('Setting up quiz with enhanced shuffling...');
        
        // Step 1: Randomly select 40 questions from 196
        this.currentQuestions = this.selectRandomQuestions(40);
        
        // Step 2: Shuffle the order of selected questions
        this.currentQuestions = this.currentQuestions.sort(() => Math.random() - 0.5);
        
        // Step 3: Shuffle options within each question
        this.currentQuestions = this.currentQuestions.map(question => 
            this.shuffleQuestionOptions(question)
        );
        
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = new Date();
        
        const totalEl = document.getElementById('totalQuestions');
        if (totalEl) totalEl.textContent = this.currentQuestions.length;
        
        console.log('Quiz setup complete with:', {
            selectedQuestions: this.currentQuestions.length,
            questionIds: this.currentQuestions.map(q => q.id).slice(0, 10) + '...' // Show first 10 IDs
        });
        
        this.displayQuestion();
    }

    startTimer() {
        this.timeRemaining = 20 * 60;
        this.updateTimerDisplay();
        
        if (this.timer) clearInterval(this.timer);
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            const timerEl = document.querySelector('.timer');
            if (this.timeRemaining <= 300 && timerEl) {
                timerEl.classList.add('warning');
            }
            
            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const timeEl = document.getElementById('timeDisplay');
        if (timeEl) {
            timeEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNum = this.currentQuestionIndex + 1;
        
        const currentEl = document.getElementById('currentQuestion');
        const textEl = document.getElementById('questionText');
        
        if (currentEl) currentEl.textContent = questionNum;
        if (textEl) textEl.textContent = question.question;
        
        // Update progress
        const progress = (questionNum / this.currentQuestions.length) * 100;
        const progressEl = document.getElementById('progressFill');
        if (progressEl) progressEl.style.width = `${progress}%`;
        
        this.displayOptions(question);
        this.updateNavigationButtons();
    }

    displayOptions(question) {
        const container = document.getElementById('optionsContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            optionEl.dataset.value = index;
            
            if (this.userAnswers[question.id] === index) {
                optionEl.classList.add('selected');
            }
            
            optionEl.innerHTML = `
                <span class="option-label">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            
            container.appendChild(optionEl);
        });
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevQuestion');
        const nextBtn = document.getElementById('nextQuestion');
        const submitBtn = document.getElementById('submitQuiz');
        
        if (prevBtn) {
            prevBtn.style.display = this.currentQuestionIndex > 0 ? 'inline-flex' : 'none';
        }
        
        const isLast = this.currentQuestionIndex === this.currentQuestions.length - 1;
        
        if (nextBtn) nextBtn.style.display = isLast ? 'none' : 'inline-flex';
        if (submitBtn) submitBtn.style.display = isLast ? 'inline-flex' : 'none';
    }

    selectAnswer(questionId, answerIndex) {
        this.userAnswers[questionId] = answerIndex;
        
        // Update visual selection
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        const selectedOpt = document.querySelector(`[data-value="${answerIndex}"]`);
        if (selectedOpt) selectedOpt.classList.add('selected');
    }

    navigateQuestion(direction) {
        const newIndex = this.currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < this.currentQuestions.length) {
            this.currentQuestionIndex = newIndex;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) clearInterval(this.timer);
        this.endTime = new Date();
        this.calculateResults();
        this.saveQuizData();
        this.showResults();
    }

    calculateResults() {
        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach(q => {
            const answer = this.userAnswers[q.id];
            if (answer === undefined) unanswered++;
            else if (answer === q.correct) correct++;
            else wrong++;
        });
        
        this.results = {
            correct, wrong, unanswered,
            total: this.currentQuestions.length,
            percentage: Math.round((correct / this.currentQuestions.length) * 100),
            timeTaken: this.endTime - this.startTime
        };
    }

    showResults() {
        const { correct, wrong, unanswered, percentage, timeTaken } = this.results;
        
        const scoreEl = document.getElementById('scorePercent');
        const nameEl = document.getElementById('resultStudentName');
        const correctEl = document.getElementById('correctAnswers');
        const wrongEl = document.getElementById('wrongAnswers');
        const unansweredEl = document.getElementById('unansweredQuestions');
        const timeEl = document.getElementById('timeTaken');
        
        if (scoreEl) scoreEl.textContent = `${percentage}%`;
        if (nameEl) nameEl.textContent = this.studentName;
        if (correctEl) correctEl.textContent = correct;
        if (wrongEl) wrongEl.textContent = wrong;
        if (unansweredEl) unansweredEl.textContent = unanswered;
        
        const minutes = Math.floor(timeTaken / 60000);
        const seconds = Math.floor((timeTaken % 60000) / 1000);
        if (timeEl) timeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Update score circle
        const circle = document.querySelector('.score-circle');
        if (circle) {
            const deg = (percentage / 100) * 360;
            circle.style.background = `conic-gradient(var(--color-primary) ${deg}deg, rgba(34, 197, 94, 0.1) ${deg}deg)`;
        }
        
        this.showScreen('resultsScreen');
    }

    showReviewScreen() {
        const { correct, wrong, unanswered } = this.results;
        
        const correctEl = document.getElementById('reviewCorrect');
        const wrongEl = document.getElementById('reviewWrong');
        const unansweredEl = document.getElementById('reviewUnanswered');
        
        if (correctEl) correctEl.textContent = correct;
        if (wrongEl) wrongEl.textContent = wrong;
        if (unansweredEl) unansweredEl.textContent = unanswered;
        
        this.generateReviewContent();
        this.showScreen('reviewScreen');
    }

    generateReviewContent() {
        const container = document.getElementById('reviewContainer');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.currentQuestions.forEach((question, index) => {
            const userAnswer = this.userAnswers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isUnanswered = userAnswer === undefined;
            
            let status = 'unanswered';
            let icon = '❓';
            if (!isUnanswered) {
                status = isCorrect ? 'correct' : 'wrong';
                icon = isCorrect ? '✅' : '❌';
            }
            
            const reviewEl = document.createElement('div');
            reviewEl.className = `review-question ${status}`;
            
            let optionsHTML = '';
            question.options.forEach((option, optIndex) => {
                const isCorrectOpt = optIndex === question.correct;
                const isUserOpt = optIndex === userAnswer;
                
                let optClass = '';
                let optIcon = '';
                
                if (isCorrectOpt) {
                    optClass = 'correct';
                    optIcon = '✅';
                } else if (isUserOpt && !isCorrectOpt) {
                    optClass = 'user-wrong';
                    optIcon = '❌';
                }
                
                optionsHTML += `
                    <div class="review-option ${optClass}">
                        <span class="review-option-label">${String.fromCharCode(65 + optIndex)}</span>
                        <span class="review-option-text">${option}</span>
                        ${optIcon ? `<span class="review-option-icon">${optIcon}</span>` : ''}
                    </div>
                `;
            });
            
            reviewEl.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Q${index + 1}</span>
                    <span class="review-status-icon">${icon}</span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">${optionsHTML}</div>
            `;
            
            container.appendChild(reviewEl);
        });
    }

    saveQuizData() {
        try {
            const data = JSON.parse(localStorage.getItem('essQuizData') || '[]');
            data.push({
                name: this.studentName,
                score: this.results.percentage,
                correct: this.results.correct,
                wrong: this.results.wrong,
                unanswered: this.results.unanswered,
                timeTaken: this.results.timeTaken,
                date: new Date().toISOString(),
                answers: { ...this.userAnswers },
                questionIds: this.currentQuestions.map(q => q.id) // Track which questions were used
            });
            localStorage.setItem('essQuizData', JSON.stringify(data));
        } catch (e) {
            console.warn('Could not save quiz data');
        }
    }

    retakeQuiz() {
        this.userAnswers = {};
        this.currentQuestionIndex = 0;
        this.results = null;
        
        const timer = document.querySelector('.timer');
        if (timer) timer.classList.remove('warning');
        
        this.showScreen('welcomeScreen');
        
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
            setTimeout(() => nameInput.focus(), 100);
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const target = document.getElementById(screenId);
        if (target) target.classList.add('active');
    }

    // Admin functions
    showAdminModal() {
        const modal = document.getElementById('adminModal');
        if (modal) {
            modal.classList.remove('hidden');
            const username = document.getElementById('adminUsername');
            if (username) setTimeout(() => username.focus(), 100);
        }
    }

    hideAdminModal() {
        const modal = document.getElementById('adminModal');
        const error = document.getElementById('adminError');
        const username = document.getElementById('adminUsername');
        const password = document.getElementById('adminPassword');
        
        if (modal) modal.classList.add('hidden');
        if (error) error.classList.add('hidden');
        if (username) username.value = '';
        if (password) password.value = '';
    }

    handleAdminLogin() {
        const username = document.getElementById('adminUsername');
        const password = document.getElementById('adminPassword');
        const error = document.getElementById('adminError');
        
        const user = username ? username.value : '';
        const pass = password ? password.value : '';
        
        if (user === this.adminCredentials.username && pass === this.adminCredentials.password) {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            if (error) {
                error.textContent = 'Invalid username or password';
                error.classList.remove('hidden');
            }
        }
    }

    showAdminDashboard() {
        this.loadAdminData();
        this.showScreen('adminScreen');
    }

    loadAdminData() {
        try {
            const data = JSON.parse(localStorage.getItem('essQuizData') || '[]');
            
            const total = data.length;
            const average = total > 0 ? Math.round(data.reduce((sum, entry) => sum + entry.score, 0) / total) : 0;
            
            const totalEl = document.getElementById('totalParticipants');
            const avgEl = document.getElementById('averageScore');
            const rateEl = document.getElementById('completionRate');
            
            if (totalEl) totalEl.textContent = total;
            if (avgEl) avgEl.textContent = `${average}%`;
            if (rateEl) rateEl.textContent = '100%';
            
            const tbody = document.getElementById('participantTableBody');
            if (tbody) {
                tbody.innerHTML = '';
                data.forEach(entry => {
                    const row = document.createElement('tr');
                    const date = new Date(entry.date).toLocaleDateString();
                    const minutes = Math.floor(entry.timeTaken / 60000);
                    const seconds = Math.floor((entry.timeTaken % 60000) / 1000);
                    const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    
                    row.innerHTML = `
                        <td>${entry.name}</td>
                        <td>${entry.score}%</td>
                        <td>${entry.correct}</td>
                        <td>${entry.wrong}</td>
                        <td>${entry.unanswered}</td>
                        <td>${time}</td>
                        <td>${date}</td>
                    `;
                    tbody.appendChild(row);
                });
            }
        } catch (e) {
            console.warn('Error loading admin data');
        }
    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    exportData() {
        try {
            const data = JSON.parse(localStorage.getItem('essQuizData') || '[]');
            if (data.length === 0) {
                alert('No data to export');
                return;
            }
            
            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csv = [
                headers.join(','),
                ...data.map(entry => {
                    const date = new Date(entry.date).toLocaleDateString();
                    const minutes = Math.floor(entry.timeTaken / 60000);
                    const seconds = Math.floor((entry.timeTaken % 60000) / 1000);
                    const time = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    
                    return [
                        `"${entry.name}"`,
                        entry.score,
                        entry.correct,
                        entry.wrong,
                        entry.unanswered,
                        time,
                        date
                    ].join(',');
                })
            ].join('\n');
            
            const blob = new Blob([csv], { type: 'text/csv' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = `ess_quiz_${new Date().toISOString().split('T')[0]}.csv`;
            link.click();
        } catch (e) {
            alert('Error exporting data');
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing complete ESS quiz with 196 questions...');
    window.essQuiz = new ESSQuiz();
    window.essQuiz.init();
});