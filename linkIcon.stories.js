import './linkIcon.js';

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                  DEFINE THE STORY CONTROLS / PROPS / ETC                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

export default {
  title: 'LondonParkour/Links/LinkIcon',
  component: '<ldnpk-link></ldnpk-link>',
  tags: ['autodocs'],

  // Docs Page Description
  parameters: {
    docs: {
      description: {
        component:
          'The LondonParkour Link Component.',
      },
    },
  },

  // ╭─────────────────────────────────────────────────────╮
  // │                 ARGUMENTS (CONTROLS)                │
  // ╰─────────────────────────────────────────────────────╯
  argTypes: {

    title: {
      control: 'text',
      description: 'Title attribute for the button.',
      table: { defaultValue: { summary: "link" } },
    },

    target: {
      control: 'select',
      options: ["_self", "_blank", "_parent", "_top"],
      description: 'DO NOT send to `_blank` for good SEO.',
      table: { defaultValue: { summary: "_self" } },
    },

    rel: {
      control: 'multi-select',
      options: [
        "nofollow",
        "noopener",
        "noreferrer",
        "directory",
        "tag",
        "help",
        "ugc",
        "sponsored"
      ],
      description: 'Link relationship to target.',
      table: { defaultValue: { summary: "" } },
    },

  },


  // ╭─────────────────────────────────────────────────────╮
  // │                   ARGUMENT DEFAULTS                 │
  // ╰─────────────────────────────────────────────────────╯
  args: {
    title: 'this is a link with default chevron icon',
    target: '_self',
  },


};



// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                                  STORIES                                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝



// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                     Default Style                     │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Default = ({ title, target, rel }) => {

  let htmlString = /* html */`

    <ldnpk-linkIcon 
      href="https://londonparkour.com" 
      target="${target}" 
      rel="${rel}">

        ${title}

    </ldnpk-linkIcon>
  `

  return htmlString;

};


// Change the argument defaults for this example
Default.args = {

};


// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                Different Icon Style                   │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const IconChanged = ({ title, target, rel }) => {

  let htmlString = /* html */`

    <ldnpk-linkIcon 
      href="https://londonparkour.com" 
      target="${target}" 
      rel="${rel}">

        ${title}
        <svg slot="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M8.6,16.6L13.2,12L8.6,7.4L10,6L16,12L10,18L8.6,16.6Z"/></svg>

    </ldnpk-linkIcon>

      <br/>

    <ldnpk-linkIcon 
      href="https://londonparkour.com" 
      target="${target}" 
      rel="${rel}">

        ${title}
        <svg slot="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/></svg>

    </ldnpk-linkIcon>
  `

  return htmlString;

};


// Change the argument IconChangeds for this example
IconChanged.args = {
  title: 'with different icons',
};


