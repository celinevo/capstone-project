import Creepypasta from './Creepypasta.js';

export default {
  title: 'components/Creepypasta',
  component: Creepypasta,
};

const Template = args => <Creepypasta {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Slenderman',
  text: 'This is the story of Slenderman',
  wordcount: '1973',
};
