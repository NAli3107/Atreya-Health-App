import { useQuery, gql } from "@apollo/client";
import React from "react";
import Post from './Dashboard';
import './Wall.css';


//  const QUERY_POSTS = gql`
//   {
//     posts {
//       _id
//       title: String
//   }
// }
// `;


// export default function App() {

// const {data} = useQuery(QUERY_POSTS); 

//     return <div id="wall">
//         <h1>Public Wall</h1>
//         <h2>You can view the recent posts made by members of our community.</h2>

//         <div id="post-list">TEST

//         {/* {data.posts.map((launch)=>(
//             <li key = {launch._id}>{launch.title}</li>
        
//         )) } */}
//         {"title"}
//             {/* {posts(0, 5).map(p => <Post key={p.postId} props={p} />)} */}
//         </div>
//     </div>
// }



const Wall = ({ posts }) => {
    return <div id="wall">
        <h1>Public Wall</h1>
        <h2>You can view the recent posts made by members of our community.</h2>

        <div id="post-list">TEST
        {posts }{"title"}
            {/* {posts(0, 5).map(p => <Post key={p.postId} props={p} />)} */}
        </div>
    </div>
}

export default Wall;