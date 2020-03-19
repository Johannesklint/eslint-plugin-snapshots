# eslint-plugin-snapshots

Avoid testing functionality using `toMatchSnapshot()`.

If you are using `@testing/library` there is a handy package called [jest-dom](https://github.com/testing-library/jest-dom) where there are nifty jest matchers, for example `toHaveStyle()`

## Usage
Add `no-snapshots` to your section of `.eslintrc`
```
{
  "plugins": ["no-snapshots"]
}
```

Then add the rule `.eslinrc`
```
{
  "rules": ["no-snapshots/snapshots": "error"]
}
```
