// Listener for form Submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark
function saveBookmark(e) {
  // Get form values
  var siteName  = document.getElementById('siteName').value;
  var siteUrl   = document.getElementById('siteUrl').value;

  if ( ! validateForm(siteName, siteUrl) ) {
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  }

  //### Local Storage Test ###
  // localStorage.setItem('test', 'Hello World'); // console.log( localStorage.getItem('test') );
  // localStorage.removeItem('test'); // console.log( localStorage.getItem('test') );

  // console.log(bookmark);

  // Test if bookmarks array is null
  if (localStorage.getItem('bookmarks') === null) {
    // Init Array
    var bookmarks = [];

    // Add to array
    bookmarks.push(bookmark);

    // Set to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks form localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Add bookmark to Array
    bookmarks.push(bookmark);

    // Reset to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch bookmarks
  fetchBookmarks();

  // previne o submit do formulario
  e.preventDefault();
}

// Fetch bookmarks
function fetchBookmarks() {
  // Get bookmarks form localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  if (bookmarks === null) return;

  // get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  //  Build Output;
  bookmarksResults.innerHTML = '';
  for (var i = 0; i < bookmarks.length; i++) {
    var name  = bookmarks[i].name;
    var url   = bookmarks[i].url;

    // Create Elements
    var div = document.createElement('div');
    var h3 = document.createElement('h4');
    var link = document.createElement('a');
    var deleteBtn = document.createElement('a');

    // Set Classes
    div.classList.add('well');

    link.classList.add('btn');
    link.classList.add('btn-default');
    link.classList.add('btn-visit');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://' + url);
    link.textContent = 'Visit'; // url;

    deleteBtn.classList.add('btn');
    deleteBtn.classList.add('btn-danger'); // deleteBtn.setAttribute('target', '_blank');
    deleteBtn.classList.add('btn-delete');
    // deleteBtn.setAttribute('href', '#');
    deleteBtn.setAttribute('onclick', 'deleteBookmark(\''+url+'\')')
    deleteBtn.textContent = 'Delete';

    h3.textContent = name + ' ';

    // Append childs
    div.appendChild(h3);
    h3.appendChild(link);
    h3.appendChild(deleteBtn);
    bookmarksResults.appendChild(div); // console.log(div);
  } // for
}

function deleteBookmark(url) {
  // Get bookmarks form localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // Loop throught bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      //removeFormArray
      bookmarks.splice(i, 1);
    }
  }

  // Reset to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // Re-fetch bookmarks
  fetchBookmarks();
}

function validateForm(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert('plz fill in the form');
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert('Please use a valid URL');
    return false;
  }

  return true;
}
