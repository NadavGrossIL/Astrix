### Known issues, Missing Features & Additional Improvments

Known Issues:

- Scrolling really fast may cause fetching the first page data again. This is an issue that might be related to the infinite-scroll package.
- The Design is basic.

Future Features & Improvments:

- Search for a character - The RTK Query infrastructure exists, but the implementation in a component is missing. Had some issues with calling both useGetCharactersByPageQuery and useGetCharactersByNameQuery on the same component.

- Trying different alternatives for the infinite-scroll package that I've used. I would also investigate the option to use react-virtualized or a similar package for better DOM management.

- Add an option for search by character name by using useGetCharactersByNameQuery.

- Improve the UI & UX of the App.

- Improve folder & files structure.
