import CustomCard from './CustomCard.js';

export default {
  title: 'components/CustomCard',
  component: CustomCard,
};

const Template = args => <CustomCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Slenderman',
  image:
    'https://www.creepypasta.com/wp-content/uploads/2010/01/slenderman-1.jpg.webp',
  wordcount: '1973',
};
