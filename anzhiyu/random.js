var posts=["2025/03/01/we/","2025/03/30/聊天记录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };