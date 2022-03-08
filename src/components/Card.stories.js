import Card from './Card.js';

export default {
  title: 'components/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Slenderman',
  image:
    'https://www.creepypasta.com/wp-content/uploads/2010/01/slenderman-1.jpg.webp',
  wordcount: '1973',
};
