import * as Lucide from 'lucide-react';
import * as Fa from 'react-icons/fa';

const lucideIcons = ['Home', 'User', 'Code', 'Mail', 'ExternalLink', 'Github', 'Youtube', 'Instagram', 'Linkedin', 'Phone', 'Download'];
const faIcons = ['FaWhatsapp'];

console.log('Checking Lucide icons...');
lucideIcons.forEach(icon => {
  if (!Lucide[icon]) {
    console.error(`Missing Lucide icon: ${icon}`);
    process.exit(1);
  }
});

console.log('Checking FontAwesome icons...');
faIcons.forEach(icon => {
  if (!Fa[icon]) {
    console.error(`Missing Fa icon: ${icon}`);
    process.exit(1);
  }
});

console.log('All icons found.');
