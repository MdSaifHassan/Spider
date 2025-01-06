import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialGooglePlus } from "react-icons/ti";

const footerData = {
  contact: [
    'Bouvet Island Jeannetteside',
    '53 Brannon Falls Suite 406',
    '860-278-8915',
    'info@wireframer.com',
  ],
  socials: [
    {
      name: 'Google',
      link: 'https://www.google.com',
      icon: <TiSocialGooglePlus />,
    },
    {
      name: 'Twitter',
      link: 'https://www.twitter.com',
      icon: <TiSocialTwitter />,
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com',
      icon: <TiSocialFacebook />,
    },
  ],
  links: [
    {
      title: 'First',
      items: ['First page', 'Second page', 'Third page', 'Fourth page'],
    },
    {
      title: 'Second',
      items: ['First page', 'Second page', 'Third page', 'Fourth page'],
    },
    {
      title: 'Third',
      items: ['First page', 'Second page', 'Third page', 'Fourth page'],
    },
  ],
  copyright: '© Wireframer 2019 | Privacy policy | Terms of service',
};

export default footerData;
