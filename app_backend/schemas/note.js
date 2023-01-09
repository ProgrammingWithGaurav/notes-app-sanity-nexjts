export default {
  name: 'note',
  title: 'Note',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'userId',
      title: 'UserID', 
      type: 'string'
  },
  {
      name: 'postedBy',
      title: 'PostedBy', 
      type: 'postedBy'
  },
  {
    name: 'bookmark',
    title: 'Bookmark',
    type: 'boolean',
    default: false
  }
  ],
}
