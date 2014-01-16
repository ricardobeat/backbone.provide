backbone.provide
================

Bi-directional communication through Backbone's global event bus.

    var aModel = Backbone.Model.extend({
        initialize: function () {
            this.provide('bacon', function(){
                return { bacon: 'of course' }
            })
        }
    })

    var someViewInAGalaxyFarFarAway = Backbone.View.extend({
        getSomething: function () {
            this.request('bacon', this.eat)
        }
    })
