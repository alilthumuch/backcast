var AppView = Backbone.View.extend({

  el: '#app',
  

  initialize: function() {
    this.videos = new Videos();
    this.videoPlayer = new VideoPlayerView(); 
    this.videoList = new VideoListView();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.videoPlayer.render();
    this.videoList.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
