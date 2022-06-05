// FONT
export const rowTitleFont = "../../../fonts/OpenSans-ExtraBold.ttf";
export const headingFont = "../../../fonts/OpenSans-ExtraBold.ttf";
export const phaseFont = "../../../fonts/OpenSans-ExtraBold.ttf";
export const stepFont = "../../../fonts/OpenSans-ExtraBold.ttf";
export const bodyFont = "../../../fonts/OpenSans-Medium.ttf";
export const emojiFont = "../../../fonts/NotoEmoji-VariableFont_wght.ttf";

export const rowTitleFontSize = 0.3;
export const headingFontSize = 0.8;
export const phaseFontSize = 0.5;
export const stepFontSize = 0.4;
export const bodyFontSize = 0.2;
export const emojiFontSize = 1;

// COLORS
export const rowTitleCardColor = "#ffffff";
export const normalCardColor = "#ffffff";
export const phaseCardColor = "#000000";
export const stepCardColor = "#000000";

export const rowTitleTextColor = "#000000";
export const normalTextColor = "#000000";
export const phaseTextColor = "#ffffff";
export const stepTextColor = "#ffffff";

export const highlightColors = ["#ffffff", "#CD92EA", "#EAD792"];

// OPACITY
export const rowTitleCardOpacity = 1;
export const normalCardOpacity = 1;
export const imageCardOpacity = 1;
export const scenarioCardOpacity = 1;
export const phaseCardOpacity = 1;
export const stepCardOpacity = 0.5;

// BUILD VALUES
export const horizontalMargin = 0.2;
export const verticalMargin = 0.2;

export const cardWidth = 6;
export const cardHeight = 2.1;
export const cardDepth = 0.1;

export const journeyRows = 6;
export const journeyColumns = 7;

export const rowTitlesCount = 9;

// DATA ARRAYS
export const rowTitles = [
  "Scenario",
  "Phases",
  "Steps",
  "Actions",
  "Storyboard",
  "Needs and pains",
  "Touchpoints",
  "Feeling",
  "Opportunities"
];

export const scenarios = [
  "Current situation",
  "Avatars & 360-degree camera",
  "Personalised video & memorable boarding pass"
];

export const phases = ["Before", "During", "After"];

export const steps = [
  "Discovery",
  "Reservation",
  "Await",
  "Arrival",
  "Dinner",
  "Rate",
  "Brag"
];

//https://www.convertcsv.com/csv-to-json.htm
export const content = [
  [
    [
      "- Talk to a friend\n- Look for nice restaurants in Eindhoven\n- Look at photos and videos of DIM online",
      "- Open website\n- Look at menu and dates\n- Fill in the form\n- Receive confirmation email",
      "- Receive a reminder email",
      "- Receive boarding pass\n- Take a seat",
      "- Watch projection mapping show while enjoying the food\n- Take photos and share to social media",
      "- Rate DIM on TripAdvisor\n- Leave a review",
      "- Brag about the unique experience to friends\n- Share on social media\n- Recommend the restaurant"
    ],
    ["", "", "", "", "", "", ""],
    [
      "- I want to have a special night out\n- I want something different\n- I don't want to go to an ordinary boring restaurant",
      "- I want a user friendly reservation experience\n- I want to provide only needed information, avoiding private data\n- I don't want to fill in too much data",
      "- I want to be sure that my dinner will happen\n- I don't usually check my emails",
      "- There is a focus on me, they know I am here\n- It would make me feel more confident that my data is correct\n- I don't understand why I get the ticket, I will ask immediately why I need it",
      "- I expect a spectacular show\n- I expect exclusive food\n- I don't want photos of me without my permission",
      "- I want to rate it because it was a great and unusual experience\n- I don't want to be made to leave a review",
      "- I want to brag that I've been to that restaurant\n- I usually like to take photos and post them a lot, so this will be a nice opportunity for me\n- I would throw away the boarding pass because it's very common, it's not interesting"
    ],
    [
      "- Website\n- Social media\n- Ex-visitors",
      "- Website\n- Resengo",
      "- Email",
      "- Staff\n- Boarding pass",
      "- Staff\n- Environment",
      "- TripAdvisor page\n- Staff",
      "- Social media\n- Word of mouth\n- Photos of the dinner"
    ],
    ["🤔", "🙂", "🙂", "😮", "😄", "😊", "😎"],
    [
      "- Empower word of mouth\n- Post social media sneak peeks",
      "- Use form data to personalise the experience\n- Use form data to enhance the hospitality",
      "- Surprise each guest with a personalised element\n- Keep each guest engaged with Dinner in Motion",
      "- Make the guest feel more welcome and special\n- Personalise the entrance for each guest",
      "- Provide good quality photography\n- Personalise the dinner for each guest",
      "- Make the guest happy by being hospital during the dinner\n- Make the guest feel special by personalising their experience during the dinner",
      "- Make the experience memorable\n-  Let the guest get something as a memory of the night"
    ]
  ],
  [
    [
      "- Talk to a friend\n- Look for nice restaurants in Eindhoven\n- Look at photos and videos of DIM online",
      "- Open website\n- Look at menu and dates\n- Fill in the form\n- Receive confirmation email",
      "- Receive a reminder email\n- Make an avatar",
      "- Receive boarding pass\n- Find seat by locating avatar on the table",
      "- Watch projection mapping show while enjoying the food\n- Take photos and share to social media\n- Interact with the avatar\n- Take part in 360-degree photo/video",
      "- Rate DIM on TripAdvisor\n- Leave a review",
      "- Brag about the unique experience to friends\n- Share on social media\n- Recommend the restaurant"
    ],
    ["", "", "", "", "", "", ""],
    [
      "- I want to have a special night out\n- I want something different\n- I don't want to go to an ordinary boring restaurant",
      "- I want a user friendly reservation experience\n- I want to provide only needed information, avoiding private data\n- I don't want to fill in too much data",
      "- I want to be sure that my dinner will happen\n- I don't usually check my emails\n- I'm surprised that I need to make an avatar\n- I don't know why I need an avatar",
      "- There is a focus on me, they know I am here\n- It would make me feel more confident that my data is correct\n- I don't understand why I get the ticket, I will ask immediately why I need it\n- I recognize my avatar from my boarding pass",
      "- I expect a spectacular show\n- I expect exclusive food\n- I don't want photos of me without my permission\n- I want to see the 360-degree photo/video",
      "- I want to rate it because it was a great and unusual experience\n- I don't want to be made to leave a review",
      "- I want to brag that I've been to that restaurant\n- I usually like to take photos and post them a lot, so this will be a nice opportunity for me\n- I would throw away the boarding pass because it's very common, it's not interesting"
    ],
    [
      "- Website\n- Social media\n- Ex-visitors",
      "- Website\n- Resengo",
      "- Email\n- Avatar",
      "- Staff\n- Boarding pass\n- Avatar",
      "- Staff\n- Environment\n- Avatar\n- 360-degree photo/video",
      "- TripAdvisor page\n- Staff",
      "- Social media\n- Word of mouth\n- Avatar\n- 360-degree photo/video"
    ],
    ["🤔", "🙂", "😲", "😄", "🤩", "😊", "😎"],
    [
      "- Empower word of mouth\n- Post social media sneak peeks",
      "- Use form data to personalise the experience\n- Use form data to enhance the hospitality",
      "- Surprise each guest with a personalised element\n- Keep each guest engaged with Dinner in Motion",
      "- Make the guest feel more welcome and special\n- Personalise the entrance for each guest",
      "- Provide good quality photography\n- Personalise the dinner for each guest",
      "- Make the guest happy by being hospital during the dinner\n- Make the guest feel special by personalising their experience during the dinner",
      "- Make the experience memorable\n-  Let the guest get something as a memory of the night"
    ]
  ],
  [
    [
      "- Talk to a friend\n- Look for nice restaurants in Eindhoven\n- Look at photos and videos of DIM online",
      "- Open website\n- Look at menu and dates\n- Fill in the form\n- Receive confirmation email",
      "- Receive a reminder email\n- Watch a personalised video",
      "- Receive boarding pass\n- Take a seat\n- Eat boarding pass",
      "- Watch projection mapping show while enjoying the food\n- Take photos and share to social media",
      "- Rate DIM on TripAdvisor\n- Leave a review",
      "- Brag about the unique experience to friends\n- Share on social media\n- Recommend the restaurant"
    ],
    ["", "", "", "", "", "", ""],
    [
      "- I want to have a special night out\n- I want something different\n- I don't want to go to an ordinary boring restaurant",
      "- I want a user friendly reservation experience\n- I want to provide only needed information, avoiding private data\n- I don't want to fill in too much data",
      "- I want to be sure that my dinner will happen\n- I don't usually check my emails\n- Wow! I didn't expect a personalised greeting\n- I see that my reservation data is correct",
      "- There is a focus on me, they know I am here\n- It would make me feel more confident that my data is correct\n- What? It's edible? I'm curious to try it\n- I want the taste and smell of the pass to be nice, otherwise why would I eat paper",
      "- I expect a spectacular show\n- I expect exclusive food\n- I don't want photos of me without my permission",
      "- I want to rate it because it was a great and unusual experience\n- I don't want to be made to leave a review",
      "- I want to brag that I've been to that restaurant\n- I usually like to take photos and post them a lot, so this will be a nice opportunity for me\n- I would throw away the boarding pass because it's very common, it's not interesting"
    ],
    [
      "- Website\n- Social media\n- Ex-visitors",
      "- Website\n- Resengo",
      "- Email\n- Personalised video",
      "- Staff\n- Boarding pass",
      "- Staff\n- Environment",
      "- TripAdvisor page\n- Staff",
      "- Social media\n- Word of mouth\n- Personalised video\n- Boarding pass"
    ],
    ["🤔", "🙂", "😲", "😝", "😄", "😊", "😎"],
    [
      "- Empower word of mouth\n- Post social media sneak peeks",
      "- Use form data to personalise the experience\n- Use form data to enhance the hospitality",
      "- Surprise each guest with a personalised element\n- Keep each guest engaged with Dinner in Motion",
      "- Make the guest feel more welcome and special\n- Personalise the entrance for each guest",
      "- Provide good quality photography\n- Personalise the dinner for each guest",
      "- Make the guest happy by being hospital during the dinner\n- Make the guest feel special by personalising their experience during the dinner",
      "- Make the experience memorable\n-  Let the guest get something as a memory of the night"
    ]
  ]
];

export const images = [
  [
    "https://i.imgur.com/ybt9V28.png",
    "https://i.imgur.com/syIvusH.png",
    "https://i.imgur.com/XQsg4VK.png",
    "https://i.imgur.com/rsb7Kmt.png",
    "https://i.imgur.com/HXl1xge.png",
    "https://i.imgur.com/POBaqyi.png",
    "https://i.imgur.com/409kZP6.png"
  ],
  [
    "https://i.imgur.com/ybt9V28.png",
    "https://i.imgur.com/syIvusH.png",
    "https://i.imgur.com/5b76uKu.png",
    "https://i.imgur.com/5AQZzY9.png",
    "https://i.imgur.com/NJT7GTx.png",
    "https://i.imgur.com/POBaqyi.png",
    "https://i.imgur.com/409kZP6.png"
  ],
  [
    "https://i.imgur.com/ybt9V28.png",
    "https://i.imgur.com/syIvusH.png",
    "https://i.imgur.com/czrvSyo.png",
    "https://i.imgur.com/j6237Ze.png",
    "https://i.imgur.com/HXl1xge.png",
    "https://i.imgur.com/POBaqyi.png",
    "https://i.imgur.com/409kZP6.png"
  ]
];
