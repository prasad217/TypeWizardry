// Check for query parameters and initialize variables
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Initialize time and length from URL parameters, or set defaults
var initialTimeInSeconds = parseFloat(getQueryParam("time")) || 60; // Default to 60 seconds if not specified
var sentenceLength = parseInt(getQueryParam("length")) || 5; // Default to 5 if not specified

// Timer variables
var timeleft = initialTimeInSeconds;
var downloadTimer;
var currentCharacterIndex = 0;

// Start or restart the timer
function startTimer() {
  timeleft = initialTimeInSeconds;
  clearInterval(downloadTimer);

  downloadTimer = setInterval(function() {
      timeleft -= 1;
      document.getElementById("countdown").innerHTML = formatTime(timeleft);
      if (timeleft <= 0) clearInterval(downloadTimer);
  }, 1000);
}

// Format time for display
function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  return `${minutes} minutes ${remainingSeconds} seconds`;
}
                  
                  const sentences = [
                    "Mistakes are part of the learning process; don't be discouraged by errors but see them as     stepping stones toward typing proficiency.",
                    "Life is a series of keystrokes, each one shaping the narratives we create, the emails we send, and the stories we tell—make every keystroke count.",
                    "Embrace the rhythm of typing, and you'll find that your fingers dance effortlessly across the keyboard, composing symphonies of text.",
                    "Remember that typing is an art form; just as painters wield brushes, writers command keyboards to craft beautiful prose and code.",
                    "Typing is not just a practical skill; it's an empowering tool that allows you to express yourself and communicate effectively in our digital world.",
                    "The more you type, the more you'll discover the elegance and efficiency of words flowing from your fingertips—typing is a skill that keeps on giving.",
                    "In a world filled with distractions, typing is a discipline that demands focus and concentration, rewarding those who persevere.",
                    "Speed and accuracy in typing are like the twin engines of productivity, propelling you forward toward your goals.",
                    "A keyboard is your canvas, and words are your paint; with every keystroke, you create a masterpiece of ideas and information.",
                    "The journey to typing mastery is a personal one, marked by your commitment to improvement—take each challenge as an opportunity to grow.",
                    "Keyboard shortcuts are your secret weapon in the digital realm, unlocking efficiency and streamlining your interaction with technology.",
                    "The beauty of typing lies in its universality; whether you're a student, professional, or enthusiast, honing your typing skills benefits you in countless ways.",
                    "Like a pianist practicing scales, a typist must refine their skills daily to achieve virtuosity on the keyboard.",
                    "Typing with speed and precision is not just about saving time; it's about unleashing your creative potential and making a meaningful impact.",
                    "The keyboard is your gateway to a world of information, creativity, and connection—typing is the key to unlocking it all.",
                    "In a world of constant change, the ability to type with ease and confidence is a valuable asset that adapts to any situation.",
                    "As you type, you sculpt words into sentences, sentences into stories, and stories into experiences—typing is a journey of creation.",
                    "The keyboard is a stage, and your words are the actors; with each keystroke, you craft narratives that resonate with your audience.",
                    "Typing isn't just about speed; it's about precision, clarity, and the power to convey your thoughts with elegance and impact.",
                    "In the digital age, typing is a superpower that empowers you to communicate, create, and connect with the world at your fingertips.",
                    "Typing is the bridge between your thoughts and the digital realm; the stronger the bridge, the more effectively you can share your ideas.",
                    "The art of typing is a symphony of fingers dancing on the keyboard, composing melodies of text that resonate with readers.",
                    "Type with purpose, and your words will transcend the screen, leaving a lasting impression on those who read them.",
                    "The keyboard is your instrument, and every keystroke is a note in the song of your productivity—play it well.",
                    "Unlock the potential of your keyboard, and you'll unlock the potential of your ideas—typing is the key to creativity.",
                    "In the world of information, typing is the brush with which you paint your thoughts on the canvas of the internet.",
                    "The keyboard is your companion on the journey of expression, helping you turn thoughts into words and words into meaning.",
                    "Precision in typing is like a fine-tuned instrument; the more you practice, the more harmoniously your words will flow.",
                    "The art of typing is a blend of technique and artistry; like a painter with a brush, you craft your message with every keystroke.",
                    "With each keystroke, you sculpt your ideas into digital form, creating a tapestry of words that convey your unique perspective.",
                    "Typing is the gateway to knowledge; with every keypress, you unlock doors to information, ideas, and innovation.",
                    "The journey of typing mastery is a path to self-improvement, enhancing your communication skills and boosting your confidence.",
                    "As you type, you become the conductor of your thoughts, orchestrating them into a symphony of words and sentences.",
                    "Like a craftsman refining their skills, a typist hones their abilities to create meaningful and impactful content.",
                    "The keyboard is your tool, and words are your raw materials; with skillful typing, you shape them into works of art.",
                    "In a world of fast-paced communication, typing with speed and accuracy is a valuable asset that sets you apart.",
                    "Mastering the keyboard is like mastering a musical instrument; practice and dedication are your keys to success.",
                    "The keyboard is your canvas, and words are your colors; with every keystroke, you create vibrant and expressive compositions.",
                    "Typing is not just a skill; it's an opportunity to leave your mark on the digital landscape, making your voice heard.","The gentle rustle of leaves in a forest is a soothing lullaby to the soul.",
                        "A symphony of birdsong greets the dawn, celebrating the beauty of a new day.",
                        "The dance of fireflies on a summer evening illuminates the night with nature's magic.",
                        "The scent of blooming flowers in a garden is a fragrant invitation to the world of colors.",
                        "The tranquil ripple of a stream mirrors the calmness that nature brings to the heart.",
                        "Majestic mountains stand as silent sentinels, reminding us of the Earth's grandeur.",
                        "The graceful flight of a butterfly is a testament to the delicacy and strength of nature's creations.",
                        "A field of wildflowers is a vibrant tapestry woven by nature's artistic hand.",
                        "The roar of a waterfall is a symphony of power and grace, echoing the Earth's vitality.",
                        "Sunset paints the sky with hues of gold and crimson, bidding the day a fond farewell.",
                        "The hush of a snow-covered landscape invites contemplation and serenity.",
                        "A starry night sky reveals the vastness of the universe, igniting wonder in our hearts.",
                        "The fragrance of pine trees in a forest is a reminder of nature's invigorating embrace.",
                        "The gentle sway of tall grass in a meadow mirrors the rhythm of life's ebb and flow.",
                        "A rainbow after the rain is a radiant promise of hope and renewal.",
                        "The rustling of leaves in an autumn breeze is nature's farewell whisper to summer.",
                        "The crisp bite of a fresh apple from an orchard is a gift from nature's bounty.",
                        "A desert sunset paints the sand dunes with hues of warmth and contemplation.",
                        "The call of a distant wolf is a reminder of the wild beauty that still thrives in remote places.",
                        "A forest floor carpeted with fallen leaves is a mosaic of nature's ever-changing artistry.",
                        "The serenity of a calm lake reflects the tranquility that nature offers to the weary soul.",
                        "The scent of rain on dry earth is a perfume of rebirth and renewal.",
                        "The symphony of crickets in the evening serenades the night with their enchanting chorus.",
                        "A blossoming cherry tree in spring is a testament to the renewal of life and beauty.",
                        "A soaring eagle in the sky is a symbol of freedom and the untamed spirit of nature.",
                        "The sight of a shooting star is a fleeting glimpse of the wonders that grace our universe.",
                        "A grove of towering redwoods is a cathedral of nature, where silence speaks volumes.",
                        "The quiet drift of a canoe on a serene lake is a moment of harmony with nature's rhythm.",
                        "A pristine beach at sunrise is a canvas painted with the promise of a new day.",
                        "The song of a flowing river is a melody that nature sings to the Earth.",
                        "The buzz of bees in a field of blooming flowers is the sound of nature's industriousness.",
                        "A full moon in a clear night sky is a beacon of light in the darkness.",
                        "The sight of a graceful swan on a tranquil pond is a vision of pure elegance.",
                        "A waterfall hidden in a lush forest is a secret sanctuary of nature's beauty.",
                        "The fragrance of a pine forest is a breath of freshness and vitality.",
                        "The symphony of waves crashing on a rocky shore is a testament to the power of the sea.",
                        "A snow-capped mountain peak is a reminder of the Earth's enduring strength.",
                        "The sight of a vibrant rainbow after a storm is a promise that beauty follows adversity.",
                        "A field of sunflowers turning their faces toward the sun is a display of nature's optimism.",
                        "The shimmering reflection of stars on a calm lake is a glimpse into the cosmos.",
                        "A meandering river through a valley is a testament to the persistence of nature's shaping hand.",
                        "The scent of blooming lilacs is a fragrant embrace from nature's garden.",
                        "The gentle touch of a breeze on your skin is nature's caress of comfort.",
                        "A pristine beach at sunset is a canvas painted with the colors of dreams.",
                        "The rustling of leaves in a forest is a whispered conversation among the trees.",
                        "A meadow filled with wildflowers is a vibrant tapestry woven by nature's hand.",
                        "The call of a distant owl in the night is a reminder of the mysteries that nature holds.",
                        "A tranquil pond reflects the beauty of the surrounding landscape, doubling the wonder.",
                        "The rustling of palm leaves in a tropical breeze is a gentle applause for nature's grace.",
                        "A clear night sky filled with stars is a glimpse into the vastness of the universe.",
                        "The scent of freshly cut grass is a reminder of the simple pleasures that nature provides.",
                        "A rainbow spanning the sky is a bridge between the Earth and the heavens.",
                        "The symphony of birdsong at dawn is a chorus that welcomes the day with joy.",
                        "A river carving its course through a canyon is a testament to the persistence of nature's force.",
                        "The fragrance of blooming roses is a bouquet of nature's love and beauty.",
                        "The rustling of leaves in an autumn breeze is a farewell whisper from the trees.",
                        "A waterfall cascading down a rocky cliff is a display of nature's power and majesty.",
                        "The scent of a pine forest after a rain is a perfume of rejuvenation and life.",
                        "The chorus of frogs on a warm summer night is a lullaby that serenades the world to sleep.",
                        "A field of sunflowers basking in the sun is a salute to the warmth and light of nature.",
                        "The dance of fireflies in the evening is a magical display of nature's enchantment.",
                        "A snow-covered landscape is a blank canvas for nature's artistry in white.",
                        "The scent of eucalyptus leaves is a reminder of the healing properties of nature's gifts.",
                        "A desert oasis teems with life, a testament to nature's ability to thrive in unexpected places.",
                        "The whisper of wind through tall grass is a secret shared between nature and the Earth.",
                        "A tranquil lake reflects the beauty of the surrounding landscape, doubling the wonder.",
                        "The scent of blooming lavender is a soothing balm for the soul, a gift from nature's garden.",
                        "A mountain range stretching to the horizon is a reminder of the Earth's grandeur and majesty.",
                        "The song of a babbling brook is a melody that nature sings to the world.",
                        "A field of tulips in full bloom is a burst of color that heralds the arrival of spring.",
                        "The rustling of leaves in a forest is a whispered conversation among the trees.",
                        "A meadow filled with wildflowers is a vibrant tapestry woven by nature's hand.",
                        "The call of a distant owl in the night is a reminder of the mysteries that nature holds.",
                        "A tranquil pond reflects the beauty of the surrounding landscape, doubling the wonder."];
                        // Randomly select a sentence
// Randomly select a sentence
function getRandomSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}

// Display the selected sentence and prepare for typing
function updateSentence() {
  const randomSentenceElement = document.getElementById("sentence");
  const sentence = getRandomSentence().toLowerCase(); // Convert to lowercase for uniformity
  randomSentenceElement.textContent = '';

  // Create span for each character in the sentence
  sentence.split('').forEach(char => {
      const charElement = document.createElement("span");
      charElement.textContent = char;
      randomSentenceElement.appendChild(charElement);
  });

  currentCharacterIndex = 0;
  underlineCurrentCharacter();
}

// Underline the current character to type
function underlineCurrentCharacter() {
  const sentenceCharacters = document.getElementById("sentence").querySelectorAll("span");
  if (currentCharacterIndex < sentenceCharacters.length) {
      sentenceCharacters[currentCharacterIndex].classList.add("underline");
  }
}

// Handle keypresses for typing
function handleKeypress(event) {
  const sentenceCharacters = document.getElementById("sentence").querySelectorAll("span");
  if (currentCharacterIndex < sentenceCharacters.length) {
      const currentCharacter = sentenceCharacters[currentCharacterIndex];

      removeUnderlineFromCurrentCharacter();  // Remove underline from the current character

      if (event.key === currentCharacter.textContent) {
          currentCharacter.classList.add("correct");
          playSound("sounds/correct.mp3");
      } else {
          currentCharacter.classList.add("incorrect");
          playSound("sounds/wrong.mp3");
      }

      currentCharacterIndex++;  // Move to the next character regardless of correctness

      if (currentCharacterIndex < sentenceCharacters.length) {
          underlineCurrentCharacter();  // Underline the next character
      } else {
          // All characters have been typed
          const timeTakenInSeconds = initialTimeInSeconds - timeleft;
          const wordsTyped = document.getElementById("sentence").textContent.trim().split(/\s+/).length;
          const wpm = (wordsTyped / (timeTakenInSeconds / 60)).toFixed(2);
          console.log(`Redirecting to results.html with WPM: ${wpm} and Time: ${formatTime(timeTakenInSeconds)}`);
          window.location.href = `results.html?wpm=${wpm}&time=${formatTime(timeTakenInSeconds)}`;
      }
  }
}

function removeUnderlineFromCurrentCharacter() {
  const sentenceCharacters = document.getElementById("sentence").querySelectorAll("span");
  sentenceCharacters.forEach(char => {
      char.classList.remove("underline");
  });
}


// Function to play sound
function playSound(soundPath) {
  var audio = new Audio(soundPath);
  audio.play();
}

// Add event listener for keydown
document.addEventListener("keydown", handleKeypress);

// Initial setup
updateSentence();
startTimer();
