
define([ "jquery", "VisitType" ], function ($, VisitType) {

    function Visit() {
        var defaults = $.extend({
            id: 0,                
            summary: null
        }, arguments[0]);
        
        this.id = defaults.id;
        this.summary = defaults.summary;          
        this.displayType = null;
    };
    
     $.extend(Visit.prototype, {
        toDto: function () {
            return {
                id: this.id,
                summary: this.summary
            }
        }
    });

    Visit.create = function () {
        if (arguments.length === 1 && arguments[0] != null) {
            var json = arguments[0];

            var OneTimeVisit = require("OneTimeVisit"),
                HourlyVisit = require("HourlyVisit"),
                RecurrentVisit = require("RecurrentVisit");

            switch (json.type) {
                case VisitType["One-Time"]: return new OneTimeVisit(json);
                case VisitType["Hourly"]: return new HourlyVisit(json);
                case VisitType["Recurrent"]: return new RecurrentVisit(json);
                default:
                    throw "Cannot create Visit instance. Type = '" + json.type + "' is not supported.";
            }
        }

        return null;
    };

    return Visit;
});