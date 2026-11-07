export const courseHighlights = [
  {
    icon: "FaClock",
    title: "2 Months Duration",
    desc: "4 sessions a week, 1.5 hours per session. Intensive & consistent.",
  },
  {
    icon: "FaTools",
    title: "60-70% Hands-On Lab",
    desc: "Build real circuits and robots in every session, not just theoretical slides.",
  },
  {
    icon: "FaUsers",
    title: "Small Batch (10-15)",
    desc: "Direct instructor mentorship. Shared hardware kits in groups of 3 to 4.",
  },
  {
    icon: "FaMicrochip",
    title: "Hardware Kits Provided",
    desc: "All microcontrollers, sensors, actuators, and tools are provided in class.",
  },
  {
    icon: "FaGraduationCap",
    title: "Who It's For",
    desc: "Bachelor's students (IT, CS, Engineering), +2 alumni, & coders seeking hardware skills.",
  },
  {
    icon: "FaCheckCircle",
    title: "Cohort Pre-Registration",
    desc: "Register your interest early to secure a spot in the upcoming 10–15 student batch.",
  },
];

export const corePillars = [
  {
    id: "sense",
    tag: "STEP 1",
    title: "Sense",
    subtitle: "Reading the Real World",
    desc: "Every smart device needs to perceive its environment. You will interface digital and analog sensors measuring distance, temperature, humidity, ambient light, soil moisture, motion, and line tracking.",
    examples: ["Ultrasonic Sensor (HC-SR04)", "DHT11 / DHT22 (Temp & Humidity)", "LDR Light Sensor", "Soil Moisture Probe", "IR Line Tracking Array"],
    color: "#00B4D8",
  },
  {
    id: "think",
    tag: "STEP 2",
    title: "Think",
    subtitle: "Microcontroller Logic & Decision Making",
    desc: "Microcontrollers execute code directly on bare metal without an OS overhead. You will master writing C/C++ setup() and loop() routines, processing sensor thresholds, managing state machines, and multitasking.",
    examples: ["Arduino Uno / Nano", "ESP32 Dual-Core 240MHz", "C/C++ Arduino Environment", "MicroPython", "Interrupts & State Logic"],
    color: "#48CAE4",
  },
  {
    id: "act",
    tag: "STEP 3",
    title: "Act",
    subtitle: "Bringing Motion & Physical Output to Life",
    desc: "Software isn't just on screens. You'll drive DC motors for mobile robots, position servos with degree-level precision, switch high-voltage loads using relays, and provide audio-visual feedback with buzzers and LEDs.",
    examples: ["Servo Motors (Angle Control)", "DC Motors & Motor Drivers (L298N/L293D)", "5V / 12V Solid State Relays", "Piezo Buzzers & Addressable LEDs", "3D-Printed Mechanisms"],
    color: "#90E0EF",
  },
  {
    id: "connect",
    tag: "STEP 4",
    title: "Connect",
    subtitle: "Wi-Fi, Telemetry & Web IoT Control",
    desc: "Transform standalone gadgets into connected IoT nodes. Using the onboard Wi-Fi of ESP32, host responsive mobile dashboards directly on the chip, stream live telemetry, and control devices remotely over Wi-Fi without needing native app stores.",
    examples: ["ESP32 Web Server (Mobile Control)", "MQTT & WebSockets Protocols", "Telemetry Data Logging", "Local Wi-Fi Access Point Mode", "Cloud Data Pipelines"],
    color: "#0077B6",
  },
];

export const courseProjects = [
  {
    id: "smart-home",
    title: "Smart Home Automation System",
    category: "IoT & Remote Control",
    badge: "Wi-Fi & Relays",
    summary: "Control home lights and high-power appliances directly from your phone and automate triggers based on environmental sensors.",
    skillsLearned: [
      "Relay switching & high-voltage safety",
      "ESP32 Wi-Fi web server configuration",
      "Sensor-triggered automation logic",
      "Phone-friendly responsive web dashboard",
    ],
    components: ["ESP32 Board", "Multi-channel Relay Module", "DHT11 Sensor", "LDR Light Sensor", "Appliance Simulation LEDs"],
    accent: "#00B4D8",
  },
  {
    id: "maze-robot",
    title: "Autonomous Maze-Solving Robot",
    category: "Robotics & Autonomy",
    badge: "Autonomous Navigation",
    summary: "An intelligent mobile robot that navigates complex mazes, avoids obstacles autonomously, and allows Wi-Fi manual driving.",
    skillsLearned: [
      "Ultrasonic distance calculation & obstacle avoidance",
      "IR line tracking sensors for path following",
      "Motor driver bridge control (PWM speed control)",
      "Autonomous decision algorithms & Wi-Fi override",
    ],
    components: ["Arduino Microcontroller", "Chassis with Dual DC Motors", "L298N Motor Driver", "Ultrasonic Sensor", "IR Line Sensors", "Battery Pack"],
    accent: "#48CAE4",
  },
  {
    id: "greenhouse-pod",
    title: "Smart Automated Greenhouse Pod",
    category: "Automation & Monitoring",
    badge: "Sensors & Logging",
    summary: "A compact climate-controlled biome that monitors soil hydration, air humidity, and temperature to automatically trigger watering pumps and cooling fans.",
    skillsLearned: [
      "Analog soil moisture measurement & calibration",
      "Automated pump control and feedback loops",
      "Climate control algorithms for ventilation",
      "Data logging to track plant growth conditions",
    ],
    components: ["ESP32 / Arduino", "Capacitive Soil Sensor", "Submersible 5V Water Pump", "5V DC Cooling Fan", "DHT22 Climate Sensor", "Relay"],
    accent: "#0077B6",
  },
  {
    id: "weather-station",
    title: "Personal IoT Weather Station",
    category: "IoT & Telemetry",
    badge: "Live Dashboards",
    summary: "A real-time telemetry station measuring atmospheric variables, tracking historical trends over time, and rendering responsive graphs.",
    skillsLearned: [
      "Time-series sensor data logging",
      "Trend analysis for temperature & humidity",
      "Local web dashboard visualization with charts",
      "Low-power operating modes & data persistence",
    ],
    components: ["ESP32 Wi-Fi MCU", "DHT22 Precision Sensor", "OLED Display Module", "Flash Data Storage", "Web UI Frontend"],
    accent: "#90E0EF",
  },
  {
    id: "bionic-eyes",
    title: "3D Printed Animatronic Bionic Eyes",
    category: "Robotics & 3D Printing",
    badge: "Instructor Working Model",
    summary: "A realistic set of animatronic bionic eyes that look around dynamically using coordinated micro servo motors housed in precision 3D-printed mechanical enclosures.",
    skillsLearned: [
      "Multi-servo kinematic synchronization",
      "PWM angle mapping & organic eye movement",
      "3D printing concepts & custom mechanical enclosures",
      "Integrating mechanical linkages with electronics",
    ],
    components: ["Micro Servos (SG90)", "Arduino Nano", "In-house 3D Printed Eye Mechanism", "Joystick / Automated Randomizer", "Custom Wiring Harness"],
    accent: "#00B4D8",
  },
  {
    id: "rc-vehicle",
    title: "Wi-Fi Controlled Vehicle (Car / Bus)",
    category: "Wireless Robotics",
    badge: "Low-Latency Remote",
    summary: "A high-torque motorized vehicle controlled in real time over local Wi-Fi from any smartphone browser without installing third-party apps.",
    skillsLearned: [
      "Differential drive steering mechanics",
      "High-current motor driver power management",
      "Low-latency Wi-Fi packet transmission (WebSockets)",
      "Mobile web virtual joystick & button interface",
    ],
    components: ["ESP32 Wireless MCU", "4WD / 2WD Robot Chassis", "High-power Motor Driver", "High-capacity Li-ion Power Pack", "Indicator LEDs"],
    accent: "#48CAE4",
  },
];

export const arduinoVsEsp32 = [
  {
    feature: "Primary Use in Course",
    arduino: "Step 1: Foundational electronics & reliable robot control",
    esp32: "Step 2: IoT connectivity, telemetry & Wi-Fi control",
  },
  {
    feature: "Built-in Wi-Fi & Bluetooth",
    arduino: "No (Requires expensive add-on shield)",
    esp32: "Yes (Built-in 2.4GHz Wi-Fi & Bluetooth LE)",
  },
  {
    feature: "Processor Speed & Cores",
    arduino: "16 MHz Single Core (8-bit)",
    esp32: "240 MHz Dual Core (32-bit Xtensa) - Blazing fast",
  },
  {
    feature: "Operating Logic Voltage",
    arduino: "5V (Direct match for standard beginner sensors)",
    esp32: "3.3V (Modern standard, requires careful voltage matching)",
  },
  {
    feature: "Web Page / Server Hosting",
    arduino: "Very limited memory, not suitable for web hosting",
    esp32: "Can host full HTML/CSS/JS control panels directly in flash",
  },
  {
    feature: "Programming Environments",
    arduino: "C/C++ via Arduino IDE",
    esp32: "C/C++ in Arduino IDE + MicroPython support",
  },
  {
    feature: "Real-world Synergies",
    arduino: "Handles time-critical driving & hardware loops",
    esp32: "Handles Wi-Fi communication and communicates with Arduino",
  },
];

export const technicalPrimer = {
  electricity: [
    {
      term: "Voltage (V)",
      analogy: "The Push / Water Pressure & Pipe Width",
      explanation: "Voltage is the electrical pressure pushing electrons through a conductor. Think of it as water pressure or pipe width: higher voltage means stronger push. Crucial rule: connecting a 12V power supply to a 3.3V chip will fry it, so we teach careful voltage verification before ever plugging in power.",
    },
    {
      term: "Current (I / Amps)",
      analogy: "The Water Flow Volume",
      explanation: "Current is the actual volume of electrons moving per second. Think of it as the liters of water flowing per minute. Microcontroller pins can only deliver about 20-40 milliamps — which is why motors require a dedicated motor driver bridge instead of being wired directly to chips.",
    },
    {
      term: "Resistance (R / Ohms)",
      analogy: "Pipe Friction & Bends",
      explanation: "Resistance opposes the flow of electric current, like narrow pipe restrictions, bends, or debris. In circuits, resistors protect sensitive components like LEDs from receiving too much current and burning out.",
    },
    {
      term: "Ground (GND)",
      analogy: "The Common Return Pool",
      explanation: "Every single electric circuit must be closed to work. Ground is the universal 0V reference and return path. When connecting multiple boards (like an Arduino to an ESP32 or a motor driver), their grounds MUST be linked together for signals to make sense.",
    },
  ],
  hardwareConcepts: [
    {
      title: "Solderless Breadboards",
      detail: "Prototyping boards with hundreds of interconnected spring clips inside. They allow you to plug in jumper wires, sensors, and chips without any soldering. If a connection is wrong, simply unplug and rewire in seconds.",
    },
    {
      title: "Digital vs. Analog Signals",
      detail: "Digital is binary — strictly HIGH (ON / 5V or 3.3V) or LOW (OFF / 0V), like push buttons or blinking LEDs. Analog covers a continuous spectrum of values, like a room temperature changing from 20°C to 35°C or a light sensor detecting sunset.",
    },
    {
      title: "Motor Drivers & Power Isolation",
      detail: "A microcontroller is the brain, not the brawn. A motor can pull hundreds of milliamps or even several amperes, which would instantly destroy a microcontroller pin. A motor driver acts as a high-power switch between your battery and the motor, obeying small logic signals safely.",
    },
    {
      title: "In-House 3D Printing Lab",
      detail: "Hardware isn't just loose breadboard wires. TechSphereX has an in-house 3D printer in our office. Students see first-hand how CAD designs translate into physical robotic chassis, custom sensor brackets, and mechanical bionic eye sockets.",
    },
    {
      title: "Real Hardware Troubleshooting",
      detail: "60-70% of real engineering is troubleshooting: loose jumper wires, wrong voltage dividers, software logic flaws, or electrical noise from low-voltage inductive loads. You learn a systematic checklist to debug any hardware failure.",
    },
    {
      title: "Where AI Fits into IoT",
      detail: "Modern IoT works hand-in-hand with AI. While the course provides the physical sensor and device layer, students learn how to leverage AI tools to write boilerplate C++ code, brainstorm circuit topologies, and debug tricky sensor equations.",
    },
  ],
};

export const faqList = [
  {
    category: "Prerequisites & Learning",
    question: "Do I need an advanced maths or physics background?",
    answer: "No heavy maths or advanced physics required! Basic concepts like voltage, current, Ohm's law, and logic gates are taught intuitively from scratch using real-world analogies (like water pipes) and visual multimeter checks.",
  },
  {
    category: "Safety & Equipment",
    question: "Can I get an electric shock or damage equipment?",
    answer: "You are completely safe. All practical lab work is done strictly at safe low DC voltages (3.3V to 12V from USB or rechargeable battery packs), never dangerous mains AC power. If a minor component gets damaged due to a wiring mistake, that is an expected part of learning and is replaced with no stress.",
  },
  {
    category: "Safety & Equipment",
    question: "Do I need to solder in class?",
    answer: "No soldering is required to start! We build all circuits on solderless breadboards using high-quality Dupont jumper wires so you can experiment freely and rewire quickly without burns. Soldering may be demonstrated as an optional bonus as progress permits.",
  },
  {
    category: "Hardware",
    question: "Why learn both Arduino and ESP32 instead of just one?",
    answer: "Arduino is the cleanest, most forgiving platform to master the fundamentals of microcontrollers, electronics, and sensor interfacing. Once you understand the basics, the ESP32 introduces high speed, dual cores, and built-in Wi-Fi & Bluetooth for IoT. Because both use the same Arduino IDE and C/C++ syntax, your learning curve carries over seamlessly.",
  },
  {
    category: "Hardware",
    question: "Is this course the same as working with Raspberry Pi?",
    answer: "No, they serve completely different purposes. A Raspberry Pi is a complete single-board computer running a full Linux OS with HDMI and keyboards. Arduino and ESP32 are microcontrollers that boot instantly in microseconds, control hardware pins on bare metal, and consume micro-amps of power. Microcontrollers are the backbone of smart sensors and real-time robotics.",
  },
  {
    category: "Career & Value",
    question: "What makes this course different from YouTube tutorials?",
    answer: "YouTube shows you projects where everything works on video, but never teaches how to debug when your real circuit behaves erratically due to loose breadboard clips, voltage drops, or electrical noise. With our small batch (10-15 students), shared lab kits, in-person mentorship, and real hardware, you build real problem-solving confidence.",
  },
  {
    category: "Career & Value",
    question: "I come from a pure software background. Is this course worth it?",
    answer: "Software engineers actually experience the biggest eureka moments in this course! You already know logic, algorithms, and syntax ('the think part'). This course gives you the missing pieces: 'Sense', 'Act', and 'Connect'. Seeing your software move a physical robotic arm or toggle real appliances is unmatched.",
  },
  {
    category: "Career & Value",
    question: "What career paths and opportunities does this open?",
    answer: "It establishes a concrete foundation for Embedded Software Engineering, IoT Solutions Development, Robotics Prototyping, Industrial Automation, and Smart Building integration. You will leave with 6 tangible portfolio projects that you can talk about in job interviews with genuine technical depth.",
  },
  {
    category: "Logistics",
    question: "Are the hardware kits taken home?",
    answer: "All hardware kits, microcontrollers, sensors, actuators, and lab test tools are provided during the course and shared in collaborative groups of 3 to 4 students. At the end of the course, we guide you on where and what affordable kits to buy if you wish to build a personal home lab.",
  },
];

