export default 
{
    search: function (searchTerm, searchLimit, sortBy) 
    {
        // Make it return a promise
        return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
            // We want our response in json
            .then(response => response.json()) 
            // We want to return the content of the array of children as an Array
            .then(json => json.data.children.map(child => child.data))
            // In case of errors
            .catch(err => console.error(err))
    }
};