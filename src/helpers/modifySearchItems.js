export const ModifySearchItems = (item) => ({
  title: item.name,
  author: item.owner.login,
  language: item.language,
  description: item.description,
  avatar: item.owner.avatar_url,
  stars: item.stargazers_count,
  watchers: item.watchers
});
