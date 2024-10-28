/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'com-chat',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'com-chat',
  },
  Meta: {
    Description: 'Leading open-source AI web interface to help you learn, think, and do. AI personas, superior privacy, advanced features, and fun UX.',
    SiteName: 'com-chat | Harnessing AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://com-chat.com',
    CardImage: 'https://com-chat.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/smart-window/com-chat',
    OpenProject: 'https://github.com/smart-window',
    SupportInvite: 'https://discord.gg/wczEJaPRxq',
    PrivacyPolicy: 'https://com-chat.com/privacy',
  },
};