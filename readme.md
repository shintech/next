## shintech/next

### Installation

    .yarn install
    
### Usage
#### Development
    
    npm run dev
    
    # or
    
    yarn dev
    
#### Production
    docker-compose build && docker-compose up -d
    
### NOTES
    
    # Environment Variables
    
    HOSTNAME=example.org #fdqn
    SERVER_URL=localhost:65330
    
### TODO

- [ ] authentication
- [ ] error handling in pages/index getInitialProps
- [ ] work on loading component
- [ ] try to make loading animation for d3 graphs
- [x] write some tests
- [ ] upload and process files
- [ ] download files
- [ ] more graph
- [ ] error and success handling for file upload
- [ ] find a different solution for fonts
- [x] convert Section component into Layout
- [x] add success and failure actions for fetch
- [ ] handle error in fetch action
- [x] modal to display detailed info
- [ ] animated transition for modal
- [ ] button to switch between top and side navigation
- [ ] override options on components
- [ ] add styling to contents of Section
- [ ] add styling to contents of Modal
- [ ] add some more layouts
- [ ] make better compnent for adding tasks
- [x] add grid layout to sandbox
- [ ] make modal movable
- [x] some fake numerical data
- [x] style footer
- [x] make navbar collapse
- [ ] refactor search page fetching
- [x] tests for fast-redux actions
- [ ] add tests for redux action - addPost
- [ ] mock functions and children in components
- [x] add total hits to search page
- [ ] create better mock response for inventory search test
- [ ] make inventory search input field update state
- [ ] build some forms
- [ ] search page errors in production build