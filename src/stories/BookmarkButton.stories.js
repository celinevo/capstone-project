import BookmarkButton from '../components/BookmarkButton.js';
import BookmarkIconActive from '../Images/redskull.svg';
import BookmarkIconInactive from '../Images/grayskull.svg';

export default {
  title: 'components/BookmarkButton',
  components: BookmarkButton,
};

const Template = args => <BookmarkButton {...args} />;

export const BookmarkInactive = Template.bind({});
BookmarkInactive.args = {
  children: <img src={BookmarkIconInactive} alt="Story is not spookmarked" />,
};

export const BookmarkActive = Template.bind({});
BookmarkActive.args = {
  children: <img src={BookmarkIconActive} alt="Story is spookmarked" />,
};
