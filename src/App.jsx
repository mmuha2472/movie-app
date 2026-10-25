// import React, { Component } from "react";

// // https://www.googleapis.com/youtube/v3/search?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=1

// class Youtube extends Component {
//   constructor() {
//     super();
//     this.state = {
//       youTubeVideos: [],
//     };
//   }

//   componentDidMount() {
//     fetch(
//       "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBv_MveWxmNKF-fAAEDIy3qAIWtt0-YM1M&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         const youTubeVideos = data.items;
//         this.setState({ youTubeVideos });
//       });
//   }

//   render() {
//     return (
//       <div className="allVideosWrapper">
//         <div className="container">
//           <div className="row h-100 align-items-center justify-content-center text-center">
//             <div className="col-12">
//               <div className="title-wraper bold video-title-wrapper">
//                 Latest Videos
//               </div>
//             </div>
//             {this.state.youTubeVideos.map((singleVideo, i) => {
//               let vidId = singleVideo.id.videoId;
//               let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
//               let videoWrapper = (
//                 <div key={i} className="col-sm-12 col-md-4">
//                   <div className="singleVideoWrapper">
//                     <div className="videoThumbnail">
//                       <a href={vidLink} target="_blank">
//                         <img src={singleVideo.snippet.thumbnails.high.url} />
//                       </a>
//                     </div>
//                     <div className="videoInfoWrapper">
//                       <div className="videoTitle">
//                         <a href={vidLink} target="_blank">
//                           {singleVideo.snippet.title}
//                         </a>
//                       </div>
//                       <div className="videoDesc">
//                         {singleVideo.snippet.description}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//               return videoWrapper;
//             })}

//             {this.videoWrapper}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Youtube;


// //API KEY
// //  AIzaSyB8MFtl6kTQBchYsx8n_nDzXUPYVAB9uaQ

// //CHANNEL ID
// UCE_M8A5yxnLfW0KghEeajjw

// https://youtube.googleapis.com/youtube/v3/channels?part=id&forUsername=apple&key=AIzaSyB8MFtl6kTQBchYsx8n_nDzXUPYVAB9uaQ


// link = https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&key=AIzaSyB8MFtl6kTQBchYsx8n_nDzXUPYVAB9uaQ&order=date


import "./App.css"
import Home from './pages/Home';
import Favorites from "./pages/favorites";
import NavBar from "./NavBar";
import { MovieProvider } from "./service/Moviecontext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main>
        <section id="home"><Home /></section>
        <section id="favorites"><Favorites /></section>
      </main>
    </MovieProvider>
  )
}

export default App
