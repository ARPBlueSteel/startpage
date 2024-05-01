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
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "var(--ctp-maroon)",
          },
          {
            name: "instagram",
            url: "https://www.instagram.com/",
            icon: "brand-instagram",
            icon_color: "var(--ctp-pink)",
          },
          {
            name: "x",
            url: "https://twitter.com/home",
            icon: "brand-twitter",
            icon_color: "var(--ctp-sapphire)",
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
        name: "email",
        links: [
          {
          name: "leoni",
          url: "https://mail.google.com/mail/u/0/#inbox",
          icon: "mail",
          icon_color: "var(--ctp-peach)",
          },
          {
            name: "ethan.217",
            url: "https://mail.google.com/mail/u/5/#inbox",
            icon: "mail-plus",
            icon_color: "var(--ctp-green)",
          },
          {
            name: "muhanyu",
            url: "https://mail.google.com/mail/u/1/#inbox",
            icon: "mail-star",
            icon_color: "var(--ctp-yellow)",
          },
          {
            name: "glitchy",
            url: "https://mail.google.com/mail/u/2/#inbox",
            icon: "trash",
            icon_color: "var(--ctp-lavender)",
          },
          {
            name: "fujimori",
            url: "https://mail.google.com/mail/u/3/#inbox",
            icon: "trash",
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
            name: "slides",
            url: "https://docs.google.com/presentation/u/0/",
            icon: "presentation-analytics",
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
          {
            name: "forms",
            url: "https://docs.google.com/forms/u/0/",
            icon: "list-details",
            icon_color: "var(--ctp-mauve)",
          },
        ], 
      }, ],
    },
    {
      name: "Hobby",
      background_url: "src/img/banners/cbg-4.gif",
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
            {
              name: "sacabambaspis",
              url: "https://github.com/ARPBlueSteel/sacabambaspis",
              icon: "brand-github",
              icon_color: "var(--ctp-mauve)",
            },
          ],
        },
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
          ],
        },
        {
          name: "Personal Organization",
          links: [
            {
              name: "obsidian_docs",
              url: "https://help.obsidian.md/Home",
              icon: "markdown",
              icon_color: "var(--ctp-mauve)",
            },
            {
              name: "obsidian_repo",
              url: "https://github.com/ARPBlueSteel/station-n-1",
              icon: "database-import",
              icon_color: "var(--ctp-red)",
            },
            {
              name: "obsidian_forum",
              url: "https://forum.obsidian.md/",
              icon: "messages",
              icon_color: "var(--ctp-mauve)",
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
      name: "school",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "anki",
          links: [
            {
              name: "deck search",
              url: "https://ankiweb.net/shared/decks/",
              icon: "star-filled",
              icon_color: "var(--ctp-sapphire)",
            },
            {
              name: "my decks",
              url: "https://ankiweb.net/decks",
              icon: "star-filled",
              icon_color: "var(--ctp-blue)",
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
              name: "managebac",
              url: "https://rss.managebac.com/login",
              icon: "school",
              icon_color: "var(--ctp-blue)",
            },
            {
              name: "wolfram alpha",
              url: "https://wolfreealpha.gitlab.io/input/",
              icon: "alpha",
              icon_color: "var(--ctp-peach)",
            },
            {
              name: "msteams",
              url: "https://teams.microsoft.com/v2/",
              icon: "brand-teams",
              icon_color: "var(--ctp-lavender)",
            },
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "message-search",
              icon_color: "var(--ctp-rosewater)",
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
