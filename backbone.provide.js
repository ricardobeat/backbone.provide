// Backbone.provide
// -----------------------------------------
// Bi-directional communication through event emitters.
//
//     this.provide('eventname', function(){
//        return {}
//     })
//
//     this.request('eventname', function(data){
//         // use data
//     })
//

Backbone.Events.prototype.request = function (id, callback, context) {
    this.once(id, callback)
    Backbone.trigger('request-' + id, context || this)
}

Backbone.Events.prototype.provide = function (id, getData) {
    this.listenTo(Backbone, 'request-' + id, function (context) {
        (context || Backbone).trigger(id, getData.call(this))
    })
}
