let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Vancouver, Canada',
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
  localIcons: false,
  fastlink: "https://google.com",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "home",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "instagram",
            url: "https://www.instagram.com/",
            icon: "brand-instagram",
            icon_color: "var(--ctp-pink)",
          },
          {
            name: "discord",
            url: "https://www.reddit.com/",
            icon: "brand-discord",
            icon_color: "var(--ctp-lavender)",
          },
        ],
      },
      {
        name: "google",
        links: [
          {
            name: "docs",
            url: "https://docs.google.com/document/u/0/",
            icon: "file-text",
            icon_color: "var(--ctp-teal)",
          },
          {
            name: "gmail",
            url: "https://mail.google.com/mail/u/0/#inbox",
            icon: "mail",
            icon_color: "var(--ctp-yellow)",
          },
          {
            name: "sheets",
            url: "https://docs.google.com/spreadsheets/u/0/",
            icon: "table",
            icon_color: "var(--ctp-green)",
          },
          {
            name: "drive",
            url: "https://drive.google.com/drive/u/0/home",
            icon: "brand-google-drive",
            icon_color: "var(--ctp-peach)",
          },
        ], 
      },
      {
        name: "school",
        links: [
          {
            name: "desmos",
            url: "https://www.desmos.com/calculator",
            icon: "math-integral-x",
            icon_color: "var(--ctp-green)",
          },
          {
            name: "canvas",
            url: "https://canvas.ubc.ca/",
            icon: "school",
            icon_color: "var(--ctp-blue)",
          },
          {
            name: "piazza",
            url: "https://piazza.com/",
            icon: "messages",
            icon_color: "var(--ctp-blue)",
          },
          {
            name: "wolfram alpha",
            url: "https://www.wolframalpha.com/",
            icon: "alpha",
            icon_color: "var(--ctp-peach)",
          },
        ],
      },
     ],
    },
    {
      name: "Hobby",
      background_url: "src/img/banners/cbg-4.gif",
      categories: [
        {
          name: "UTAUs/Voice Synth",
          links: [
            {
              name: "Hatsune Mikeru",
              url: "https://github.com/ARPBlueSteel/hastune-mikeru",
              icon: "microphone-2",
              icon_color: "var(--ctp-sapphire)",
            },
            {
              name: "ki-uta",
              url: "https://github.com/ARPBlueSteel/ki-uta-vb",
              icon: "microphone-2",
              icon_color: "var(--ctp-rosewater)",
            },
            {
              name: "UTAUForum",
              url: "https://utaforum.net/",
              icon: "music",
              icon_color: "var(--ctp-mauve)",
            },
            {
              name: "MakeDiffsinger",
              url: "https://github.com/openvpi/MakeDiffSinger/wiki",
              icon: "robot",
              icon_color: "var(--ctp-sky)",
            },
            {
              name: "utaformatix",
              url: "https://sdercolin.github.io/utaformatix3/",
              icon: "transform",
              icon_color: "var(--ctp-peach)",              
            }            
          ],
        },
        {
          name: "Personal Organization",
          links: [
            {
              name: "obsidian_repo",
              url: "https://github.com/ARPBlueSteel/station-n-1",
              icon: "database-import",
              icon_color: "var(--ctp-red)",
            },
            {
              name: "notion calendar",
              url: "https://calendar.notion.so",
              icon: "brand-notion",
              icon_color: "var(--ctp-rosewater)",
            },
          ],
        },
      ],
    },
    {
      name: "Tools",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "Research & Writing",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/search?home=true",
              icon: "adjustments-search",
              icon_color: "var(--ctp-sapphire)",
            },
            {
              name: "jstor",
              url: "https://www.jstor.org/",
              icon: "file-search",
              icon_color: "var(--ctp-maroon)",
            },
            {
              name: "anna's archive",
              url: "https://www.jstor.org/",
              icon: "archive",
              icon_color: "var(--ctp-pink)",
            },
            {
              name: "ubc library",
              url: "https://www.library.ubc.ca/",
              icon: "books",
              icon_color: "var(--ctp-yellow)",
            },
          ],
        },
        {
          name: "ubc stuff",
          links: [
            {
              name: "nutrislice",
              url: "https://ubc.nutrislice.com/",
              icon: "carrot",
              icon_color: "var(--ctp-flamingo)",
            },
            {
              name: "workday student",
              url: "wd10.myworkday.com/ubc/d/home.htmld",
              icon: "briefcase-2",
              icon_color: "var(--ctp-blue)",
            },
          ],
        },
      ],
    },
    {
      name: "Media",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "music",
          links: [
            {
              name: "soundcloud",
              url: "https://soundcloud.com/discover",
              icon: "brand-soundcloud",
              icon_color: "var(--ctp-peach)",
            },
            {
              name: "yt music",
              url: "https://music.youtube.com/",
              icon: "vinyl",
              icon_color: "var(--ctp-red)",
            },
          ],
        },
        {
          name: "games",
          links: [
            {
              name: "tetr.io",
              url: "https://tetr.io",
              icon: "square-number-4",
              icon_color: "var(--ctp-red)",
            },
            {
              name: "steam",
              url: "https://monkeytype.com/",
              icon: "brand-steam",
              icon_color: "var(--ctp-lavender)",
            },
            {
              name: "itch.io",
              url: "https://itch.io/",
              icon: "brand-itch",
              icon_color: "var(--ctp-peach)",
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: "var(--ctp-peach)",
            },
          ],
        },
        {
          name: "watch",
          links: [
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
              name: "aniwave",
              url: "https://aniwave.to/home",
              icon: "letter-a",
              icon_color: "var(--ctp-red)",
            },
            {
              name: "mal",
              url: "https://myanimelist.net/profile/StolenAzure",
              icon: "letter-a",
              icon_color: "var(--ctp-blue)",
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
