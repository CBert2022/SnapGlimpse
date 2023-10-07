

export default (posts = [], action) => {

    // state is always posts, so renamed it to posts
   
    switch (action.type) {
        
        case 'DELETE' : 
            return posts.filter((post) => post._id !== action.payload)
        // syntax: 2 cases have the same output    
        case 'UPDATE':
        //test
  return posts.map((post) =>
    post._id === action.payload._id ? action.payload : post
  );
        case 'LIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post )

        case 'FETCH_ALL':
            return action.payload; // action.payload are the actual posts

        case 'CREATE':
            return [...posts, action.payload];
    
     
        default:
            return posts;
    }
}