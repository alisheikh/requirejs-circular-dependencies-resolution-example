define(["jquery",
    "VisitType",
    "Visit"
], function($, VisitType, Visit) {

    function HourlyVisit() {
        Visit.apply(this, arguments);
        
        var defaults = $.extend({
            startDate: null,
            endDate: null
        }, arguments[0]);

        this.displayType = "Hourly";
        this.startDate = defaults.startDate;
        this.endDate = defaults.endDate;
    };

    $.extend(HourlyVisit.prototype, Visit.prototype);

    $.extend(HourlyVisit.prototype, {
        toDto: function () {
            var dto = Visit.prototype.toDto.call(this);
            dto.type = VisitType["Hourly"];
            dto.startDate = this.startDate;
            dto.endDate = this.endDate;
            return dto;
        }
    });

    return HourlyVisit;
});