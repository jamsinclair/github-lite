# GitHub Lite (Work In Progress, far from complete)

![Wind](https://media.giphy.com/media/OVcXGo8uj6DSg/giphy.gif)

An attempt at being a light GitHub API wrapper for browsers. 
- Returns native Response Objects
- Import only the API Modules you need
- Super tiny JS if compiled for ES6 ready browsers

Depending on how you build this project the resulting bundled js may be just as large as other libraries. Over time as
the native browser support for ES2015 and Fetch increases, the filesize will shrink when we don't need to transplile or
shim features used.

## Examples
### Basic Example

```javascript
import GitHubLite from 'github-lite'

const client = GitHubLite()
client.PullRequests.list('github', 'hubot')
  .then(res => res.json())
  .then(res => console.log('First page of pull requests', res))
```

### Auth Example

```javascript
import GitHubLite from 'github-lite'

// User/Pass Auth 
const client = GitHubLite({ username: 'jamsinclair', password: 'foobar' })
client.PullRequests.list('owner', 'privateRepo').then(/* Do Something */)

// Or use token
const client = GitHubLite({ token: 'my-github-token' })
client.PullRequests.list('owner', 'privateRepo').then(/* Do Something */)
```

### Import only the API modules you need

```javascript
import PullRequests from 'github-lite/dist/pulls'

// Use the module by itself
const pullsClient = new PullRequests({ token: 'my-github-token' })
pullsClient.list('owner', 'privateRepo').then(/* Do Something */)

// Or construct a client wrapper with the modules you need
import Client from 'github-lite/dist/client'
import PullRequests from 'github-lite/dist/pulls'
import Repositories from 'github-lite/dist/repos'

const client = new Client({ token: 'my-github-token' }, { PullRequests, Repositories })
client.PullRequests.list('owner', 'privateRepo').then(/* Do Something */)
client.Repositories.list('owner').then(/* Do Something */)
```
