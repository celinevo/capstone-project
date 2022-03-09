import ReadMoreButton from './ReadMoreButton.js';

export default {
  title: 'components/ReadMoreButton',
  component: ReadMoreButton,
};

const Template = args => <ReadMoreButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  button: '...click here to read more',
};
