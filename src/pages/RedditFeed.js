// import {top as reddit} from "../redditAPI";
//
// import React, { useEffect } from 'react';
//
// let pageData
//
// function setPageData(data) {
//   pageData = data
// }
//
// const RedditFeed = () => {
//   // let dataIsLoaded = false
//   useEffect(() => {
//     return reddit('CustomKeyboards').t('month').limit(50).fetch(function (res) {
//       let posts = []
//       for (let i = 0; i < res.data.children.length; i++) {
//         let data = res.data.children[i].data;
//
//         if (!data.url.includes('i.redd.it')) continue;
//         console.log('helo')
//         posts.push(
//           <a key={i} href={"https://reddit.com" + data.permalink}>
//             <div className="feed-item card">
//               <img className="card-img-top" src={data.url} alt={data.title}/>
//               <div className="card-body">
//                 <h5 className="card-title">{data.title}</h5>
//                 <p className="card-text text-muted">{"by " + data.author}</p>
//               </div>
//             </div>
//           </a>
//         );
//       }
//       // dataIsLoaded = true
//       // if (!dataIsLoaded) return <h5>content aint loaded yet</h5>
//       setPageData(
//         <>
//           <div className="container">
//             <div className="row">
//               <div className="page-header header">
//                 <div id="feedHeader">
//                   <h1>Reddit Keyboard Feed<br/><small>A list of the top custom keyboards on r/CustomKeyboards from the past
//                     month</small></h1>
//                   <p>Check them out for some inspiration!</p>
//                 </div>
//                 <p>Hello</p>
//
//                 <div className="feed-grid" id="redditFeed">
//                   {posts}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )
//     });
//
//   });
//   return pageData
// };
//
// export default RedditFeed;
