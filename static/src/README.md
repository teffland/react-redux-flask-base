The app is organized as follows:

`components` stores all UI/View elements (including containers and selectors).

`state` stores all state management (store, actions, reducers, constants).

Different features for the app should be contained in their own files or folders,
with matching names for in  `components` and `state` and should always be capitalized.

Each state feature file should either be a duck (see [Counter]()) or, if more organization is needed,
a directory that imitates a duck (see [Auth]()).

On last thing, the app state is managed by `localStorage` to allow statefulness between sessions.
