/*
  ==========
  FETCH API
  ==========
  
  The Fetch API is a modern, promise based approach to making HTTP requests.
  It provides a simpler and more powerful alternative to XMLHttpRequest (XHR).
  
  Key Benefits:
  - Returns a Promise instead of using callbacks
  - Cleaner syntax with .then() or async/await
  - Built-in support for modern JavaScript patterns
  - Better error handling with .catch()
  - Easier to chain multiple operations
*/

// ============================================
// 1. BASIC FETCH REQUEST - GET METHOD
// ============================================

/*
  The simplest form of fetch():
  - Takes a URL as the first argument
  - Automatically uses GET method for retrieving data
  - Returns a Promise that resolves with a Response object
*/

const requestUrl = "https://api.github.com/users/hussain-anjum";

// Make the API request
fetch(requestUrl)
  .then((response) => {
    // response is a Response object containing status, headers, and body
    console.log("Response Status:", response.status); // e.g., 200
    console.log("Response OK:", response.ok); // true if status is 200-299

    // Convert response body to JSON format
    return response.json();
  })
  .then((data) => {
    // data is now a parsed JavaScript object
    console.log("Twitter Username:", data.twitter_username);
    console.log("Full Data:", data);
  })
  .catch((error) => {
    // Handle any errors that occur during fetch or parsing
    console.error("Error fetching data:", error);
  });

// ============================================
// 2. FETCH WITH ERROR HANDLING
// ============================================

/*
  Important: Fetch does NOT reject the promise on HTTP error status codes.
  You must manually check response.ok or response.status to handle errors.
*/

fetch(requestUrl)
  .then((response) => {
    // Check if the HTTP response status is successful
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("User Data:", data);
  })
  .catch((error) => {
    // Catches both network errors and manually thrown errors
    console.error("Request failed:", error.message);
  });

// ============================================
// 3. FETCH WITH POST REQUEST
// ============================================

/*
  POST requests are used to send data to the server.
  You must provide:
  - method: "POST"
  - headers: tells server what type of data you're sending
  - body: the actual data to send (must be stringified)
*/

const postData = {
  name: "Hussain Anjum",
  email: "hussain@example.com",
  message: "Hello from Fetch API!",
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // tells server we're sending JSON
  },
  body: JSON.stringify(postData), // convert JavaScript object to JSON string
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Posted Data:", data);
  })
  .catch((error) => {
    console.error("Post request failed:", error);
  });

// ============================================
// 4. FETCH WITH OTHER HTTP METHODS
// ============================================

// PUT Request - Update entire resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Updated Title",
    body: "Updated content",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Updated:", data))
  .catch((error) => console.error("Error:", error));

// PATCH Request - Partial update of resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Partially Updated Title",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log("Patched:", data))
  .catch((error) => console.error("Error:", error));

// DELETE Request - Remove a resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log("Deleted:", data))
  .catch((error) => console.error("Error:", error));

// ============================================
// 5. ASYNC/AWAIT SYNTAX (Modern Approach)
// ============================================

/*
  Async/Await is syntactic sugar over Promises.
  It makes asynchronous code look and behave more like synchronous code.
  This is the preferred modern way to work with Fetch.
*/

async function getGitHubUser(username) {
  try {
    // Await pauses execution until fetch completes
    const response = await fetch(`https://api.github.com/users/${username}`);

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    // Parse response body as JSON
    const data = await response.json();

    return data;
  } catch (error) {
    // Handles both network errors and thrown errors
    console.error("Failed to fetch GitHub user:", error);
    return null;
  }
}

// Call the async function
getGitHubUser("hussain-anjum").then((user) => {
  if (user) {
    console.log("User Info:", user);
    console.log("Twitter:", user.twitter_username);
  }
});

// ============================================
// 6. FETCH WITH QUERY PARAMETERS
// ============================================

/*
  Query parameters are added to the URL to filter or modify the request.
  Use URLSearchParams for clean parameter handling.
*/

const params = new URLSearchParams({
  page: 1,
  per_page: 10,
  sort: "updated",
});

fetch(`https://api.github.com/users/hussain-anjum/repos?${params}`)
  .then((response) => response.json())
  .then((data) => console.log("User Repositories:", data))
  .catch((error) => console.error("Error:", error));

// ============================================
// 7. FETCH WITH CUSTOM HEADERS
// ============================================

/*
  Headers provide metadata about the request.
  Common headers include Authorization, Content-Type, User-Agent, etc.
*/

fetch(requestUrl, {
  method: "GET",
  headers: {
    Authorization: "Bearer YOUR_TOKEN_HERE", // for authentication
    "Content-Type": "application/json",
    "User-Agent": "My-App/1.0", // identifies your application
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log("Data with Headers:", data))
  .catch((error) => console.error("Error:", error));

// ============================================
// 8. FETCH WITH TIMEOUT
// ============================================

/*
  By default, Fetch has no timeout. Use AbortController to implement timeout.
*/

function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  return fetch(url, { signal: controller.signal })
    .then((response) => {
      clearTimeout(timeoutId);
      return response.json();
    })
    .catch((error) => {
      clearTimeout(timeoutId);
      if (error.name === "AbortError") {
        console.error("Request timed out!");
      } else {
        console.error("Error:", error);
      }
    });
}

// Use the timeout function
fetchWithTimeout(requestUrl, 5000);

// ============================================
// 9. COMPARISON: XMLHttpRequest vs Fetch
// ============================================

/*
  XMLHttpRequest (Old Way)          |  Fetch API (Modern Way)
  ================================  |  =======================
  Callback-based                    |  Promise-based
  Verbose syntax                    |  Clean, concise syntax
  onreadystatechange event          |  .then() chains or async/await
  Manual state checking (0-4)       |  Automatic state handling
  Harder error handling             |  Built-in .catch()
  Limited to same-origin            |  CORS support included
  Not designed for modern JS        |  Built for modern JavaScript
  Still used in legacy code         |  Preferred for new projects
*/

// ============================================
// 10. PRACTICAL EXAMPLE - COMPLETE WORKFLOW
// ============================================

async function fetchUserWithRepos(username) {
  try {
    // Fetch user data
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`
    );

    if (!userResponse.ok) {
      throw new Error("Failed to fetch user");
    }

    const user = await userResponse.json();

    // Fetch user's repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!reposResponse.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const repos = await reposResponse.json();

    // Return combined data
    return {
      user,
      repos,
      repoCount: repos.length,
    };
  } catch (error) {
    console.error("Error in workflow:", error.message);
    return null;
  }
}

// Execute the workflow
fetchUserWithRepos("hussain-anjum").then((result) => {
  if (result) {
    console.log("Complete User Info:", result);
    console.log(`${result.user.name} has ${result.repoCount} repositories`);
  }
});
