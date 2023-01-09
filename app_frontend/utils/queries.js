export const feedQuery = (userId) => {
  const query = `*[_type == "note" && userId == "${userId}"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _createdAt,
        _id,
        title, 
        description,
        category,
        bookmark,
        postedBy->{
          _id,
          userName,
          image
        }
      } `;
  return query;
};
export const noteDetailQuery = (pinId) => {
  const query = `*[_type == "note" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      _createdAt,
      title, 
      bookmark,
      description,
      category,
      postedBy->{
        _id,
        userName,
        image
      },
    }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "note"  && title match '${searchTerm}*' || description match '${searchTerm}*' || category match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              _createdAt,
              title,
              bookmark,
              category,
              description,
              category,
              postedBy->{
                _id,
                userName,
                image
              },
            }`;
  return query;
};


export const bookmarkQuery = (userId) => {
  const query = `*[_type == "note" && userId == '${userId}' && bookmark == true]{
          image{
            asset->{
              url
            }
          },
              _id,
              title,
              category,
              _createdAt,
              description,
              category,
              bookmark,
              postedBy->{
                _id,
                userName,
                image
              },
            }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};
