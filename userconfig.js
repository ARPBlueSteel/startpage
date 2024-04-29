let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Matão, São Paulo',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "var(--accent)",
  },
  quotes: [
    "Don't forget your <span style=\"color: var(--ctp-blue);\">anki</span> reps!",
    "Stay hydrated!",
    "You should be studying right now :/"
  ],
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: ['weather-forecast'],
  localIcons: false,
  fastlink: "https://google.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "home",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "var(--ctp-peach)",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "var(--ctp-red)",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "var(--ctp-mauve)",
          },
          {
            name: "instagram",
            url: "https://www.instagram.com/",
            icon: "brand-instagram",
            icon_color: "var(--ctp-pink)",
          },
        ],
      },
      {
        name: "Biology",
        links: [
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "var(--ctp-peach)",
          },
        ],
      },
      {
        name: "Tools",
        links: [
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "var(--ctp-peach)",
          },
          {
            name: "tetris",
            url: "https://tetr.io",
            icon: "brand-apple-arcade",
            icon_color: "var(--ctp-red)",
          },
        ],
      }, ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "var(--ctp-mauve)",
            },
          ],
        },
      ],
    },
    {
      name: "school",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "anki",
          links: [
            {
              name: "r/anki",
              url: "https://reddit.com/r/anki",
              icon: "brand-reddit",
              icon_color: "var(--ctp-peach)",
            },
            {
              name: "anki decks",
              url: "https://ankiweb.net/shared/decks/",
              icon: "star-filled",
              icon_color: "var(--ctp-blue)",
            },
            {
              name: "anking",
              url: "https://www.youtube.com/@AnKingMed",
              icon: "crown",
              icon_color: "var(--ctp-yellow)",
            },
          ],
        },
      ],
    },
    {
      name: "Media",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "anime",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "letter-a",
              icon_color: "var(--ctp-blue)",
            },
            {
              name: "anichart",
              url: "https://anilist.net",
              icon: "letter-a",
              icon_color: "var(--ctp-teal)",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
