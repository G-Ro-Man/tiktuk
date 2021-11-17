export const getTrendingFeed = async () => {
  try {
    let response = await fetch(
      'https://tiktok33.p.rapidapi.com/trending/feed',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key':
            '9ad776a4f3msh42a701b507c198fp1cf1d1jsnb6101720100e',
        },
      }
    );
    let result = await response.json();
    return result;
  } catch (err) {
    console.error('err: ', err);
    return [];
  }
};

export const getUserInfo = async (name: string | undefined) => {
  try {
    let response = await fetch(
      'https://tiktok33.p.rapidapi.com/user/info/' + name,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key':
            '9ad776a4f3msh42a701b507c198fp1cf1d1jsnb6101720100e',
        },
      }
    );
    let result = await response.json();
    return result;
  } catch (err) {
    console.error('err: ', err);
    return {};
  }
};

export const getUserFeed = async (name: string) => {
  try {
    let response = await fetch(
      'https://tiktok33.p.rapidapi.com/user/feed/' + name,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key':
            '9ad776a4f3msh42a701b507c198fp1cf1d1jsnb6101720100e',
        },
      }
    );
    let result = await response.json();
    return result;
  } catch (err) {
    console.error('err: ', err);
    return [];
  }
};
