export default {
  name: 'bookmark',
  title: 'Bookmark',
  type: 'document',
  fields: [
    {
      name: 'note',
      title: 'Note',
      type: 'reference',
      to: {
        type: 'note',
      },
    },
  ],
}
