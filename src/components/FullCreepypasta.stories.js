import FullCreepypasta from './FullCreepypasta.js';

export default {
  title: 'components/FullCreepypasta',
  component: FullCreepypasta,
};

const Template = args => <FullCreepypasta {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Slenderman',
  image:
    'https://www.creepypasta.com/wp-content/uploads/2010/01/slenderman-1.jpg.webp',
  text: 'This is the story of Slenderman',
  wordcount: '1973',
};
