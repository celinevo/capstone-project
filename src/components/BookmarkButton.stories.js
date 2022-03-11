import BookmarkButton from './BookmarkButton.js';

export default {
  title: 'components/BookmarkButton',
  components: BookmarkButton,
};

const Template = args => <BookmarkButton {...args} />;

export const Default = Template.bind({});
